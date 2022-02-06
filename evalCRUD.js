
const express = require("express");

const router = express.Router()

const Evaluation = require("../model/evaluationModel");

// ----------------------------------------- Evaluation CRUD -------------------------------------------------------


router.post("", async(req,res) =>{

    try{
        const evaluation = await Evaluation.create(req.body);
        return res.send(evaluation);
    }
    catch(e){
        return res.send(e.message);
    }
});

 
router.get("", async(req,res) =>{

    try{
        const evaluation = await Evaluation.find().populate("instructor_id").populate("batch_id").lean().exec();
        return res.send(evaluation);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.patch("/:id", async(req,res) =>{

    try{
        const evaluation = await Evaluation.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
        return res.send(evaluation);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.delete("/:id", async(req,res) =>{

    try{
        const evaluation = await Evaluation.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(evaluation);
    }
    catch(e){
        return res.send(e.message);
    }
});

module.exports = router;