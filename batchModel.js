const mongoose = require("mongoose")



const batchSchema = new mongoose.Schema({

    batch : {type: String , required:true },
},
{
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt    
});



module.exports = mongoose.model("batch", batchSchema);