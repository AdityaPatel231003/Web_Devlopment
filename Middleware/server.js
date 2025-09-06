const express=require("express");
const app=express();

// Authentication with custom error
// API Token as Query String
// app.use('/api',(req,res,next)=>{
//     let{token}=req.query;

//     if(token=="password")   next();
//     throw new Error ("Access Denied");
// })
// app.get('/api',(req,res,next)=>{
//     res.send("data")
// })
// app.use((req,res)=>{
//     res.status(404).send("Page Not Found");
// })


// Multiple Middleware WITH DEFAULT ERROR HANDLER OF EXPRESS
const checktoken=('/api',(req,res,next)=>{
    let{token}=req.query;
    if(token=="password")   next();
    // Custom Error
    throw new Error ("Access Denied");  
});
app.get('/api',checktoken,(req,res,next)=>{
    // Reference error  by DEFAULT ERROR HANDLER OF EXPRESS
    abcd=abcd;
    res.send("data")
})
app.use((req,res)=>{
    res.status(404).send("Page Not Found");
})


app.listen(8080,()=>{
    console.log("Server started...");
})