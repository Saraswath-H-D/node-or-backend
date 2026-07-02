const express=require("express");
const app =express();
let port =3000;
const path=require("path");
const{v4:uuidv4}=require("uuid");//v4 is version
// we type uuidv4() in posts id;random unique id in same func//npm i uuid is a package that generates unique id as=>'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
app.use(express.urlencoded({extended:true}));//used to parse so express can understand data coming
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))
let posts=[
         {
            iden:uuidv4(),
            username:"hi",
            content:"im hero",
         },
         {
            iden:uuidv4(),
            username:"hlo",
            content:"im heroine",
         },

]


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/:id",(req,res)=>{//http://localhost:3000/posts/1a
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id===p.iden);//.find(): This is a built-in method that goes through the array and returns the first element that matches your condition.
//(p) => id === p.id: This is a callback function (arrow function). It checks every post (p) in the array to see if its id matches the id you are looking fo
    
    res.send(`request working ${posts.iden}`);
})
app.get("/posts/new",(req,res)=>{//see last 3 videos of rest in future  to see edit,destroy and update
      res.render("new.ejs")
   
})
app.patch("/posts/:id",(req,res)=>{
     let {id}=req.params;
    let newcontent=req.body.content;
    res.send("patch request working")
})
app.post("/posts",(req,res)=>{
   console.log(req.body)//req.body recieves information by post
   res.redirect("/posts")//Express.js ನಲ್ಲಿ res.redirect("/posts") ಎಂದರೆ ಸರ್ವರ್ ಬಳಕೆದಾರನನ್ನು (browser) ಬೇರೊಂದು ಪುಟಕ್ಕೆ (URL) ಕಳುಹಿಸುತ್ತದೆ ಎಂದರ್ಥ.by default get request will be sent to /posts and then we render index.js
})
app.delete("/posts/:id",(req,res)=>{
     let {id}=req.params;
    
     posts=posts.filter((p)=>id!==p.iden);
     res.send("delete")
})
app.listen(port,()=>{
console.log(`server is running on port ${port}`);

});//ಬ್ಯಾಕೆಂಡ್‌ನಲ್ಲಿ (Backend) REST ಎಂದರೆ "Representational State Transfer" (ಪ್ರಾತಿನಿಧಿಕ ರಾಜ್ಯ ವರ್ಗಾವಣೆ). ಇದು ವೆಬ್ ಸೇವೆಗಳನ್ನು ರಚಿಸಲು ಬಳಸುವ ಒಂದು ವಿನ್ಯಾಸ ಶೈಲಿ (Architectural Style) ಮತ್ತು ನಿಯಮಗಳ ಗುಂಪಾಗಿದೆ. ಇದು ಕ್ಲೈಂಟ್ ಮತ್ತು ಸರ್ವರ್ ನಡುವೆ HTTP ವಿಧಾನಗಳನ್ನು (GET, POST, PUT, DELETE) ಬಳಸಿ ಡೇಟಾವನ್ನು ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. 
// restfulapi.net
// restfulapi.net
//  +1
// REST ನ ಪ್ರಮುಖ ಅಂಶಗಳು:
// REST API/RESTful API: ಇದು REST ತತ್ವಗಳನ್ನು ಅನುಸರಿಸಿ ನಿರ್ಮಿಸಲಾದ API ಆಗಿದೆ.
// ನಿಯಮಗಳು: ಇದು ಸಂಪನ್ಮೂಲ ಆಧಾರಿತವಾಗಿದೆ (Resource-based), ಅಂದರೆ URL ಮೂಲಕ ಡೇಟಾವನ್ನು ಪ್ರವೇಶಿಸಲಾಗುತ್ತದೆ.
// HTTP ವಿಧಾನಗಳು:
// GET: ಡೇಟಾವನ್ನು ಪಡೆಯಲು.
// POST: ಹೊಸ ಡೇಟಾವನ್ನು ರಚಿಸಲು.
// PUT: ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಡೇಟಾವನ್ನು ನವೀಕರಿಸಲು.
// DELETE: ಡೇಟಾವನ್ನು ಅಳಿಸಲು.
// ಬಳಕೆ: ಇದು ಸರ್ವರ್-ಕ್ಲೈಂಟ್ ಸಂವಹನವನ್ನು ಸುಲಭ ಮತ್ತು ವೇಗವಾಗಿಸುತ್ತದೆ. 
// restfulapi.net
// restfulapi.net
//  +1
// ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ, ಬ್ಯಾಕೆಂಡ್‌ನಲ್ಲಿ REST ಎಂಬುದು ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳ ನಡುವೆ ಸಂವಹನ ನಡೆಸಲು ಬಳಸುವ ಒಂದು ಪ್ರಮಾಣಿತ ಮಾರ್ಗವಾಗಿದೆ.
// PS C:\Users\LENOVO\webclassroom\backend> cd Rest_class
// PS C:\Users\LENOVO\webclassroom\backend\Rest_class> node --version
// v22.18.0
// PS C:\Users\LENOVO\webclassroom\backend\Rest_class> npm init
// This utility will walk you through creating a package.json file.   
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (rest_class) npm warn init canceled

// PS C:\Users\LENOVO\webclassroom\backend\Rest_class> npm init -y
// Wrote to C:\Users\LENOVO\webclassroom\backend\Rest_class\package.json:

// {
//   "name": "rest_class",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }

// PS C:\Users\LENOVO\webclassroom\backend\Rest_class> npm i express

// added 65 packages, and audited 66 packages in 6s

// 22 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\LENOVO\webclassroom\backend\Rest_class> npm i ejs

// added 1 package, and audited 67 packages in 1s

// 22 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\LENOVO\webclassroom\backend\Rest_class> touch index.js
// PS C:\Users\LENOVO\webclassroom\backend\Rest_class> 
//near href type edit