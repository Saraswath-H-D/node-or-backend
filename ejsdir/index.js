const express=require("express");///ejs is already installed during express
const app=express();
const port=3000;//set() ex view-engine is a setting used to specify template use for rendering views
app.set("view engine","ejs");//ejs is template engine which help to generate own html in js
app.get("/",(req,res)=>{
    res.render("home.ejs")//render() used to send entire file//by default due to express it will search in view folder
})
app.get("/heelo",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log(`app is ${port}`)
})//nodemon ejsdir/index.js to run outside but get error because it not detect view folder