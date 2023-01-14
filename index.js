require("dotenv").config()
const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const jsonparser = bodyparser.json()
const app = express()


const port = process.env.PORT
const mongoURL = process.env.DB

const database = mongoose.connect(mongoURL)

app.get("/",(req,res)=>{
    res.send("I am SERVER")
})

app.listen(port,()=>{
    console.log("App listening on port 5000")
})