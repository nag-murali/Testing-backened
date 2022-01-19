const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs")
const connect = () => {
    return mongoose.connect("mongodb+srv://murali:murali@web-test.6swdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

app.set("viewengine", "ejs");
app.get("/", (req, res) => {

    res.render("home_page/home.ejs");
})

app.use(express.static("public"));

app.listen(5354, async() => {
    try{
        await connect();
        console.log("Listening to port 5354")
    }catch(err){
        console.log(err.message)
    }
})