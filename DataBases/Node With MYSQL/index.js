const mysql= require('mysql2');
const {faker} =require('@faker-js/faker');

const connection=mysql.createConnection({
    host:"localhost",
    database:"your_app",
    user:"root",
    password:"root"
})

createRandomUser=() =>{
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
    faker.internet.password(),
  ];
}

//  Inserting one data

// let q1=`INSERT INTO USER (id,username,email,password) VALUES (?,?,?,?)`;
// let userone=["123","akka","akka@gmail.com","321"];


// try {
//     connection.query(q1,userone,(err,result)=>{
//     if (err) throw err; 
//     console.log(result);
// })
// } catch (err) {
//     console.log(err);
    
// }
// connection.end();


// Inserting Multile data
// let q1=`INSERT INTO USER (id,username,email,password) VALUES ?`;
// let usertwo=[
//     ["1234","gohan","gohan@gmail.com","321123"],
//     ["1235","mizu","mizu@gmail.com","321123"],
// ];


// try {
//     connection.query(q1,[usertwo],(err,result)=>{
//     if (err) throw err; 
//     console.log(result);
// })
// } catch (err) {
//     console.log(err);
    
// }
// connection.end();


// Inserting BUlky data
let q1=`INSERT INTO USER (id,username,email,password) VALUES ?`;
let data=[];

for (let index = 0; index <100; index++) {
    data.push(createRandomUser());
    
}


try {
    connection.query(q1,[data],(err,result)=>{
    if (err) throw err; 
    console.log(result);
})
} catch (err) {
    console.log(err);
    
}
connection.end();