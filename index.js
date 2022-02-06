
const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = require("./config/db");




const userCrud = require("./crud/userCRUD");
app.use("/users",userCrud)

const studentCrud = require("./crud/studentCRUD");
app.use("/student",studentCrud)

const batchCrud = require("./crud/batchCRUD");
app.use("/batch",batchCrud)

const evalCrud = require("./crud/evalCRUD");
app.use("/evaluation",evalCrud)

const subCrud = require("./crud/subCRUD");
app.use("/submission",subCrud)




// //  step1 : connect to MongoDb 

// const connect = () => {
//     return mongoose.connect(
//         "mongodb+srv://Prachi:prachi_123@cluster0.o9cs6.mongodb.net/students?retryWrites=true&w=majority"
//     )
// }



// step2 : create a schema 


    // const userSchema = new mongoose.Schema({

    //     id : {type:Number , required:true , unique: true},
    //     first_name : {type: String , required:true},
    //     last_name : {type: String , required:true},
    //     dob : {type: String , required:true},
    //     gender : {type: String , required:true},
    //     job : {type: String , required:true},   
    // },
    // {
    //     versionKey: false, // removed __v
    //     timestamps: true, // createdAt, updatedAt
    // });


    // const studentSchema = new mongoose.Schema({

    //     roll_id : {type: Number , required:true , unique: true},
    //     current_batch : {type: String , required:true },
    //     user_id : {type :mongoose.Schema.Types.ObjectId , ref:"user" ,required: true } 
    // },
    // {
    //     versionKey: false, // removed __v
    //     timestamps: true, // createdAt, updatedAt    
    // });


    // const batchSchema = new mongoose.Schema({

    //     batch : {type: String , required:true },
    // },
    // {
    //     versionKey: false, // removed __v
    //     timestamps: true, // createdAt, updatedAt    
    // });

    
    // const evaluationSchema = new mongoose.Schema({

    //    date : {type: String , required:true }, 
    //    instructor_id : {type :mongoose.Schema.Types.ObjectId , ref:"user" ,required: true } , 
    //    batch_id : {type :mongoose.Schema.Types.ObjectId , ref:"batch" ,required: true }  
    // });


    // const submissionSchema = new mongoose.Schema({

    //     marks : {type: Number , required:true },
    //     evaluation_id : {type:mongoose.Schema.Types.ObjectId , ref:"evaluation" ,required: true},
    //     student_id : {type : mongoose.Schema.Types.ObjectId , ref:"student" ,required: true }
    // },
    // {
    //     versionKey: false, // removed __v
    //     timestamps: true, // createdAt, updatedAt    
    // });






// step3 : create a model



//const User = mongoose.model("user", userSchema);

// const Student = mongoose.model("student", studentSchema);

// const Batch = mongoose.model("batch", batchSchema);

// const Evaluation = mongoose.model("evaluation", evaluationSchema);

// const Submission = mongoose.model("submission", submissionSchema);




 // ----------------------------------------- User CRUD -------------------------------------------------------


// app.post("/users", async(req,res) =>{

//     try{
//         const user = await User.create(req.body);
//         return res.send(user);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.get("/users", async(req,res) =>{

//     try{
//         const user = await User.find().lean().exec();
//         return res.send(user);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.patch("/users/:id", async(req,res) =>{

//     try{
//         const user = await User.findByIdAndUpdate(req.params.id ,req.body ,{new:true});
//         return res.send(user);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.delete("/users/:id", async(req,res) =>{

//     try{
//         const user = await User.findByIdAndDelete(req.params.id);
//         return res.send(user);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });





// ----------------------------------------- Student CRUD -------------------------------------------------------


// app.post("/student", async(req,res) =>{

//     try{
//         const student = await Student.create(req.body);
//         return res.send(student);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.get("/student", async(req,res) =>{

//     try{
//         const student = await Student.find().populate("user_id").lean().exec();
//         return res.send(student);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.patch("/student/:id", async(req,res) =>{

//     try{
//         const student = await Student.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
//         return res.send(student);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.delete("/student/:id", async(req,res) =>{

//     try{
//         const student = await Student.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send(student);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });




// ----------------------------------------- Batch CRUD -------------------------------------------------------


// app.post("/batch", async(req,res) =>{

//     try{
//         const batch = await Batch.create(req.body);
//         return res.send(batch);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.get("/batch", async(req,res) =>{

//     try{
//         const batch = await Batch.find().lean().exec();
//         return res.send(batch);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.patch("/batch/:id", async(req,res) =>{

//     try{
//         const batch = await Batch.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
//         return res.send(batch);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.delete("/batch/:id", async(req,res) =>{

//     try{
//         const batch = await Batch.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send(batch);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });




 // ----------------------------------------- Evaluation CRUD -------------------------------------------------------


// app.post("/evaluation", async(req,res) =>{

//     try{
//         const evaluation = await Evaluation.create(req.body);
//         return res.send(evaluation);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });

 
// app.get("/evaluation", async(req,res) =>{

//     try{
//         const evaluation = await Evaluation.find().populate("instructor_id").populate("batch_id").lean().exec();
//         return res.send(evaluation);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.patch("/evaluation/:id", async(req,res) =>{

//     try{
//         const evaluation = await Evaluation.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
//         return res.send(evaluation);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.delete("/evaluation/:id", async(req,res) =>{

//     try{
//         const evaluation = await Evaluation.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send(evaluation);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });




// ----------------------------------------- Submission CRUD -------------------------------------------------------




// app.post("/submission", async(req,res) =>{

//     try{
//         const submission = await Submission.create(req.body);
//         return res.send(submission);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.get("/submission", async(req,res) =>{

//     try{
//         const submission = await Submission.find().populate("evaluation_id").populate("student_id").lean().exec();
//         return res.send(submission);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.patch("/submission/:id", async(req,res) =>{

//     try{
//         const submission = await Submission.findByIdAndUpdate(req.params.id ,req.body ,{new:true}).lean().exec();
//         return res.send(submission);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });


// app.delete("/submission/:id", async(req,res) =>{

//     try{
//         const submission = await Submission.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send(submission);
//     }
//     catch(e){
//         return res.send(e.message);
//     }
// });






app.listen(2980,async(req,res) => {

    try{
        await connect();
        console.log("listening port 2980")
    }
    catch(e){
        console.log(e.message) 
    }
})