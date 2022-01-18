const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/test");
}

app.listen(5354, async() => {
    try{
        await connect();
        console.log("Listening to port 5454")
    }catch(err){
        console.log(err.message)
    }
})