const { UserModel } = require("../models/user.model");

const checkExistingUser = async (req,res,next)=>{
    try{
        const {
            email,
        } = req.body;
        const match = await UserModel.find({email});
        if(match.length>0){
            res.status(400).send({message : 'User already exists with this email'});
        }
        else{
            next();
        }
    }
    catch(err){
        res.send({message : err.message});
    }
}

module.exports = {
    checkExistingUser
}