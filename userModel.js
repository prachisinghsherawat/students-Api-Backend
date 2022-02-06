
const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({

    id : {type:Number , required:true , unique: true},
    first_name : {type: String , required:true},
    last_name : {type: String , required:true},
    dob : {type: String , required:true},
    gender : {type: String , required:true},
    job : {type: String , required:true},   
},
{
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
});


module.exports = mongoose.model("user", userSchema);