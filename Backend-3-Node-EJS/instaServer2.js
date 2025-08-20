const express=require('express');
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log("Instagram Server Started:");
})

app.set('view engine','ejs');
const path=require('path');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.get('/ig/:username',(req,res)=>{

    let{username}=req.params;
    let data=require('./data.json');
     
    data=data[username];
   
    if(data){
         res.render('insta2.ejs',{data});
    }
    else{
        res.send(`No Page with the username`);
    }
   
})