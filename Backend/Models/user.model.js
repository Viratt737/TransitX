const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
      fullname:{
         firstname:{
            type : String,
            required : true,
            minlength :3,
            trim : true,
         },
         lastname:{
            type: String,
            required : true,
            minlength :3
         }
      },
      email:{
        type:String,
        required: true,
        unique : true,
        minlength : 6,
      },
      password:{
        type : String,
        required: true,
        select : false,
      },
      socketId:{
        type: String,
      },
});

// JWT token
userSchema.methods.generateAuthToken = function () {
   const token = jwt.sign(
       { _id: this._id },
       process.env.JWT_SECRET_KEY,
       { expiresIn: '24h' }
   );
   return token;
};

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;