const riderModel = require('../Models/rider.model');
const riderService = require('../service/rider.service');
const blackListTokenModel = require('../Models/blacklisttoken.model');
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

module.exports.loginRider = async (req, res, next) =>{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const{email, password} = req.body;
    
    const rider = await riderModel.findOne({email}).select('+password');

    if(!rider){
        return res.status(401).json({
            msg :" invalid email or password"
        });
    }
     const isMatch = await rider.comparePassword(password);
     if(!isMatch){
        return res.status(401).json({
            msg:"invalid email or passwrod"
        });
     }

     const token = rider.generateAuthToken();
     res.cookie('token', token);
     res.status(200).json({token , rider});
}

module.exports.getRiderProfile = async(req, res, next) =>{
     res.status(200).json(req.rider);
}

module.exports.logoutRider = async (req, res, next) =>{
   const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    await blackListTokenModel.create({ token });
   
    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successfully' });
}