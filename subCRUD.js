
const express = require("express");

const router = express.Router();

const Submission = require("../model/submissionModel");

// ----------------------------------------- Submission CRUD -------------------------------------------------------


router.post("", async(req,res) =>{

    try{
        const submission = await Submission.create(req.body);
        return res.send(submission);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.get("", async(req,res) =>{

    try{
        const submission = await Submission.find().populate("evaluation_id").populate("student_id").lean().exec();
        return res.send(submission);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.patch("/:id", async(req,res) =>{

    try{
        const submission = await Submission.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
        return res.send(submission);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.delete("/:id", async(req,res) =>{

    try{
        const submission = await Submission.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(submission);
    }
    catch(e){
        return res.send(e.message);
    }
});



module.exports = router;

