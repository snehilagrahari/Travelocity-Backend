const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    age : {type : Number, required : true},
    gender : {type : String, required : true},
    mobile : {type : String, required : true},
    address : {type : String, required : true},
    cards : {type : Array, default : []}
},{
    versionKey : false
})


const UserModel = mongoose.model('user',userSchema);

module.exports = {
    UserModel
};