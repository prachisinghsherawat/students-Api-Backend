const mongoose = require("mongoose");

//  step1 : connect to MongoDb 

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://Prachi:prachi_123@cluster0.o9cs6.mongodb.net/students?retryWrites=true&w=majority"
    )
}

module.exports = connect;