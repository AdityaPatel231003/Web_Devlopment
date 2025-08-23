const express=require('express');
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log("Server Started.....");
})

// Get request
app.get('/register',(req,res)=>{
   data=req.query;
   let {username,pwd}=req.query;
    console.log(data);
    console.log(`username =${username},`);
    res.send(` username = ${username} `);
})

// Post Request
app.post('/register',(req,res)=>{
   let {username,pwd}=req.body
    console.log(username);
    res.send(`post request ${username}${pwd}`);
})