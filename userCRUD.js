
const express = require("express");

const router = express.Router()

// ----------------------------------------- User CRUD -------------------------------------------------------

const User = require("../model/userModel");

router.post("", async(req,res) =>{

    try{
        const user = await User.create(req.body);
        return res.send(user);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.get("", async(req,res) =>{

    try{
        const user = await User.find().lean().exec();
        return res.send(user);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.patch("/:id", async(req,res) =>{

    try{
        const user = await User.findByIdAndUpdate(req.params.id ,req.body ,{new:true});
        return res.send(user);
    }
    catch(e){
        return res.send(e.message);
    }
});


router.delete("/:id", async(req,res) =>{

    try{
        const user = await User.findByIdAndDelete(req.params.id);
        return res.send(user);
    }
    catch(e){
        return res.send(e.message);
    }

});



module.exports = router;