// Note to restart server install Nodeman

const express=require("express");
const { name } = require("nodeman/lib/mustache");

const app=express();
const port=3000;

app.listen(port,()=>{
    console.log("server started with nodeman ......");
})

app.get('/',(req,res)=>{
    console.log("GET route");
    res.send({
        name:"Aditya", role:"Backend",
        age:23,
        expectedSal:"9 LPA"
    });
})
// With change in code response also be changed