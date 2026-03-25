const expres=require("express");
const app=expres();//express() is function returns instance of express
console.dir(app);//dir -print property of object
let port=3000;//logical endpoints of network-exchange data b/t clnt and server
app.listen(port,()=>{//arrow function which is called when server is ready to accept request
    console.log(`app is listening on port ${port}`)//listen(request listener) creats webserver and bind it to port and callback is called when server is ready to exceute request
})//to stop server click ctrl +c in bash
//to send request use browser type localhost:3000