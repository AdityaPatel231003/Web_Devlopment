const express=require('express');
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`Server runned with port number.${port}`);
})

//  1] set template engine to ejs (जो चीज़ हमारे लिए टेम्पलेट (template) बनाती है,)
app.set("views engine","ejs");

// 2] search views from server run  BUT set views to cwd/views
const path=require('path');
app.set("views",path.join(__dirname,"/views"));


app.get("/home",(req,res)=>{
    res.render("home.ejs");
})

app.get("/",(req,res)=>{
    res.send("Root dir........");
})