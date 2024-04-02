const express = require('express');
require("dotenv").config()
const mongoDB = require('./DB/connectDB');
const cors = require("cors")
const mainRouter= require("./Routes/mainRoutes")

const app = express()

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: process.env.URL,
    methods: ["GET", "PUT", "DELETE", "POST", "PATCH"]
}))

mongoDB(process.env.MONGOURL)
.then(()=>console.log("connected succesfully"))
.catch((error)=>console.log(error))

app.use(mainRouter)

app.listen(process.env.PORT,
    ()=>{console.log("server listening")});