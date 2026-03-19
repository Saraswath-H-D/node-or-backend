let n=5;
for(let i=1;i<=n;i++){
    console.log("be" + i);//we run in git bash by typing node script.js
}
let arg=process.argv;
for(let i=0;i<arg.length;i++){
    console.log("hello,rbr" + arg[i]);
}
console.log(process.argv)//returns when we run in git bash by typing node script.js hello world
const impor=require("./math");//import from math.js
console.log(impor.muls(2,3))
console.log(impor)


