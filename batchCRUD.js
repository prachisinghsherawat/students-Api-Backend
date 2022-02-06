

const express = require("express");

const router = express.Router()

const Batch = require("../model/batchModel");

// ----------------------------------------- Batch CRUD -------------------------------------------------------


router.post("", async(req,res) =>{

    try{
        const batch = await Batch.create(req.body);
        return res.send(batch);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.get("", async(req,res) =>{

    try{
        const batch = await Batch.find().lean().exec();
        return res.send(batch);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.patch("/:id", async(req,res) =>{

    try{
        const batch = await Batch.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
        return res.send(batch);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.delete("/:id", async(req,res) =>{

    try{
        const batch = await Batch.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(batch);
    }
    catch(e){
        return res.send(e.message);
    }
});



module.exports = router;
