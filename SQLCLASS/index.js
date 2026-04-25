const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'Sara@my26'
});
try{
connection.query("show Tables",(err,result)=>{
   if(err)throw err;
   console.log(result);
});
}catch(err){
  console.log(err);
}
 const [results] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',//? to indicate values to insert
    ['Page', 45]
  );
  let data=[];
  for(let i=1;i<=100;i++){
    data.push(getRandomUser());//for bulk insertion 
  }
  app.get("/",(req,res)=>{
    let q=`select count(*) from user`;
    try{
      connection.query(q,(err,result)=>{
   if(err)throw err;
   console.log(result);//for routing in db
   res.send(result)
});
    }
  })
let getRandomUser=()=> { //faker is used to generate fake detailed datas for easy understanding
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
};
// console.log(getRandomUser())