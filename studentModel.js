
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    roll_id : {type: Number , required:true , unique: true},
    current_batch : {type: String , required:true },
    user_id : {type :mongoose.Schema.Types.ObjectId , ref:"user" ,required: true } 
},
{
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt    
});

module.exports = mongoose.model("student", studentSchema);