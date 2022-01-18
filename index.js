const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://murali:murali@web-test.6swdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

app.listen(5354, async() => {
    try{
        await connect();
        console.log("Listening to port 5454")
    }catch(err){
        console.log(err.message)
    }
})