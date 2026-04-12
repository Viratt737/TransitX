// const axios = require('axios');
// const riderModel = require('../Models/rider.model');

// module.exports.getAddressCoordinate = async (address) => {
//     const apiKey = process.env.MAPTILER_KEY;
//     const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${apiKey}`;

//     try {
//         const response = await axios.get(url);

//         if (response.data.features && response.data.features.length > 0) {
//             const coordinates = response.data.features[0].geometry.coordinates;
//             return {
//                 ltd: coordinates[1],  // latitude
//                 lng: coordinates[0]   // longitude
//             };
//         } else {
//             throw new Error('Unable to fetch coordinates');
//         }
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }
// module.exports.getDistanceTime = async (origin, destination) => {
//     if (!origin || !destination) {
//         throw new Error('Origin and destination are required');
//     }

//     try {
//         // Pehle dono addresses ko lat/lng mein convert karo
//         const originCoords      = await module.exports.getAddressCoordinate(origin);
//         const destinationCoords = await module.exports.getAddressCoordinate(destination);

//         const url = `https://router.project-osrm.org/route/v1/driving/${originCoords.lng},${originCoords.ltd};${destinationCoords.lng},${destinationCoords.ltd}?overview=false`;

//         const response = await axios.get(url);

//         if (response.data.code === 'Ok') {
//             const route = response.data.routes[0];
//             return {
//                 distance: {
//                     text: (route.distance / 1000).toFixed(1) + ' km',
//                     value: route.distance   // meters
//                 },
//                 duration: {
//                     text: Math.round(route.duration / 60) + ' mins',
//                     value: route.duration   // seconds
//                 },
//                 status: 'OK'
//             };
//         } else {
//             throw new Error('No routes found');
//         }
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// }
// module.exports.getAutoCompleteSuggestions = async (input) => {
//     if (!input) {
//         throw new Error('query is required');
//     }

//     const apiKey = process.env.MAPTILER_KEY;
//     const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(input)}.json?key=${apiKey}&autocomplete=true&limit=5`;

//     try {
//         const response = await axios.get(url);

//         if (response.data.features && response.data.features.length > 0) {
//             return response.data.features
//                 .map(place => place.place_name)
//                 .filter(value => value);
//         } else {
//             throw new Error('Unable to fetch suggestions');
//         }
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// }
// module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
//     const captains = await riderModel.find({
//         location: {
//             $geoWithin: {
//                 $centerSphere: [ [ ltd, lng ], radius / 6371 ]
//             }
//         }
//     });
//     return captains;
// }

const axios = require('axios');
const riderModel = require('../Models/rider.model');

module.exports.getAddressCoordinate = async (address) => {
    if (!address) {
        throw new Error('Address is required');
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1&countrycodes=in&addressdetails=1`;

    try {
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'UberCloneApp/1.0' }
        });

        if (response.data.length > 0) {
            const location = response.data[0];
            return {
                ltd: parseFloat(location.lat),
                lng: parseFloat(location.lon)
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    try {
        const originCoords      = await module.exports.getAddressCoordinate(origin);
        const destinationCoords = await module.exports.getAddressCoordinate(destination);

        const url = `https://router.project-osrm.org/route/v1/driving/${originCoords.lng},${originCoords.ltd};${destinationCoords.lng},${destinationCoords.ltd}?overview=false`;

        const response = await axios.get(url);

        if (response.data.code === 'Ok') {
            const route = response.data.routes[0];
            return {
                distance: {
                    text: (route.distance / 1000).toFixed(1) + ' km',
                    value: route.distance
                },
                duration: {
                    text: Math.round(route.duration / 60) + ' mins',
                    value: route.duration
                },
                status: 'OK'
            };
        } else {
            throw new Error('No routes found');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(input)}&format=json&limit=5&countrycodes=in&addressdetails=1`;

    try {
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'UberCloneApp/1.0' }
        });

        if (response.data.length > 0) {
            return response.data
                .map(place => place.display_name)
                .filter(value => value);
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    const captains = await riderModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });
    return captains;
}