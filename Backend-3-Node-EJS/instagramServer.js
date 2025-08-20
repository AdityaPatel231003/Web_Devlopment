const express=require('express');
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log('Server started........');
})



app.set('view engine','ejs');
const path =require('path');
app.set('views',path.join(__dirname,'views'));


app.get('/instagram/:username',(req,res)=>{

    let {username}=req.params;
    let followers=["adam","Modi ji","Virat Kholi","Indian Army"];
    res.render("instagram.ejs",{username,followers});
})