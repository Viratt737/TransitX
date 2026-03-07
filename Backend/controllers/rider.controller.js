const riderModel = require('../Models/rider.model');
const riderService = require('../service/rider.service');
const{validationResult} = require('express-validator');


module.exports.registerRider = async (req, res, next) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {fullname, email, password, vehicle} = req.body;
    
    const isRiderAlreadyExist = await riderModel.findOne({email});
    if(isRiderAlreadyExist){
        return res.status(400).json({
            msg: "rider user allready exist with email"
        })
    }
    const hashedPassword = await riderModel.hashPassword(password);

    const rider = await riderService.createRider({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password: hashedPassword,
        color : vehicle.color,
        plate : vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType : vehicle.vehicleType
    });

    const token = rider.generateAuthToken();
    res.status(201).json({token , rider});
}