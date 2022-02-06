
const mongoose = require("mongoose")


const submissionSchema = new mongoose.Schema({

    marks : {type: Number , required:true },
    evaluation_id : {type:mongoose.Schema.Types.ObjectId , ref:"evaluation" ,required: true},
    student_id : {type : mongoose.Schema.Types.ObjectId , ref:"student" ,required: true }
},
{
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt    
});

module.exports = mongoose.model("submission", submissionSchema);