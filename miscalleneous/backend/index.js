const express=require("express");
const app=express();
let port=3000;
app.listen(port,()=>{
    console.log(`listening ${port}`)
})
app.get("/register",(req,res)=>{
 res.send("welcome to get")
})
app.post("/register",(req,res)=>{
 res.send("welcome to post")
})//we can type any form in raw request body and not seen query
