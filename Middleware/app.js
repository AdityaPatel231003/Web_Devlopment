const express=require("express");
const app=express();


// Middleware chaining  
// app.use((req,res,next)=>{
//     console.log('1st Middleware');
//     next();
//     console.log('After 1st Middleware');
// })
// app.use((req,res,next)=>{
//     console.log('2nd Middleware');
    
// })

// app.get('/',(req,res)=>{
//     console.log('HI I AM ROOT');
//     res.send("HI I am a root")
// })

// To ManiPulate Request
// app.use((req,res,next)=>{
//     req.time=new Date().toISOString();
//     console.log(req.time);
//     console.log(req.method,req.path,req.hostname,req.httpVersion,req.url);
//     console.log(',,,,,,',req.cookies,"-------");
//     next();

// })
// app.get('/',(req,res)=>{
//     // console.log('HI I AM ROOT');
//     res.send("HI I am a root")
// })



app.use('/',(req,res,next)=>{
    console.log('/random middleware');
    next();
})
app.get('/random',(req,res,next)=>{
    console.log('/random thorugh get Method middleware');
    res.send("HI I am /random")

})
app.use((req,res)=>{
    console.log("404")
    res.status(404).send("PAGE Not Found");
})

app.listen(8080,()=>{
    console.log("Server started...");
})