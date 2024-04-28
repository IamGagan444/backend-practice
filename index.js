const express= require("express")
const app=express()
require('dotenv').config()
const port=process.env.PORT
 
app.get("/",(req,res)=>{
    return res.send("how are you ")
})
app.get("/login",(req,res)=>{
    return res.send("<h1>this is the login page <h1/>")
})
app.get("/practical",(req,res)=>{
    res.send("<h2>this is the practical page ok! <h2/>")
})

app.listen(port,()=>{
    console.log(`your app is listening at port: ${port}`)
})