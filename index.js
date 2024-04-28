const express= require("express")
const app=express()
require('dotenv').config()
const port=process.env.PORT
 const gagan={
    name:"gagan pallai",
    village:"kalajamuna"
    ,pasion:"developer"
    ,hoby:"confused"
 }
app.get("/",(req,res)=>{
    return res.send("how are you ")
})
app.get("/gagan",(req,res)=>{

  res.json(gagan)

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