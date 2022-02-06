
const express = require("express");

const router =  express.Router()

const Student = require("../model/studentModel");

// ----------------------------------------- Student CRUD -------------------------------------------------------


router.post("", async(req,res) =>{

    try{
        const student = await Student.create(req.body);
        return res.send(student);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.get("", async(req,res) =>{

    try{
        const student = await Student.find().populate("user_id").lean().exec();
        return res.send(student);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.patch("/:id", async(req,res) =>{

    try{
        const student = await Student.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
        return res.send(student);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.delete("/:id", async(req,res) =>{

    try{
        const student = await Student.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(student);
    }
    catch(e){
        return res.send(e.message);
    }
});


module.exports = router;