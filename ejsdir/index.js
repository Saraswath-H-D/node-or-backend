const express=require("express");///ejs is already installed during express
const app=express();
const port=3000;//set() ex view-engine is a setting used to specify template use for rendering views
const Path=require("path")
app.use(express.static(Path.join(__dirname,"public")))//static used to serve static files like css js

app.set("view engine","ejs");//ejs is template engine which help to generate own html in js
app.set("views",Path.join(__dirname,"views"))//_dirname is a global variable which give current directory path and join() is used to join two path together
app.get("/",(req,res)=>{
    res.render("pass.ejs")//render() used to send entire file//by default due to express it will search in view folder
})
app.get("/hello",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;//assume it come from database and we want to pass it to home.ejs
    res.render("home.ejs",{num:diceval})
})
// app.get("/ig/:username",(req,res)=>{
//     const followers=["bhim","ram","sara"];
//     let{username}=req.params;
//     res.render("insta.ejs",{username,followers})
// })
app.get("/ig/:username",(req,res)=>{
    let{username}=req.params;
    const data=require("./views/data.json")
    const ans=data[username];
    if(ans){
        res.render("insta.ejs",{ans})
    }else{
        res.send("err.ejs")
    }
})

app.get("/heelo",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log(`app is ${port}`)
})//nodemon ejsdir/index.js to run outside but get error because it not detect view folder now not error because we set path for view folder and now it will detect view folder and render home.ejs file