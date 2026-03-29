const expres=require("express");
const app=expres();//express() is function returns instance of express
console.dir(app);//dir -print property of object
let port=3000;//logical endpoints of network-exchange data b/t clnt and server
app.listen(port,()=>{//arrow function which is called when server is ready to accept request
    console.log(`app is listening on port ${port}`)//listen(request listener) creats webserver and bind it to port and callback is called when server is ready to exceute request
})//to stop server click ctrl +c in bash
//to send request use browser type localhost:3000
// app.use((req, res) => {//listen and track
//     console.log(req);//if request is in http is textbased but req convert into object base for javascript called passing
//     console.log("request received");//express will by default request and response why?
//     //res.send("this is basic response")//res.send([body])Sends the HTTP response.The body parameter can be a Buffer object, a String, an object, Boolean, or an Array if we see in localhost:3000 we can see response
//     res.send({
//         name:"sara",
//     })//and we can send in html format also ex:<h1>hello<h1>
// })//use()server received request is used to register which is executed when request is received 
app.get("/",(req,res)=>{
    res.send("root pat");
});
app.get("/orange",(req,res)=>{
    res.send("orange path");
});
app.get("/apple",(req,res)=>{
    res.send("apple")
});//get() take path and response when /orange
// app.get("*",(req,res)=>{
//     res.send("not exist")
// });
//if we type path which not exist it iwill execute
app.get("/:username/:id",(req,res)=>{//:username act as va4riable also :id
    
    let{username,id}=req.params;//extract username and id from req.params req.params is used to get values from the URL path (route parameters).
    //console.log(req.params);//params is object which contain all parameter in path
    res.send(`hello and ${username}` )//also show in bash as json
}
);
app.get("/search",(req,res)=>{
   let {q}=req.query;
    // console.log(req.query)//req.query is used to get data from the URL query parameters
    res.send(`hellpo ${q}`)//localhost:3000/search?q=bye in browser 
})//localhost:3000/search?q=bye&color=green also in browser 
