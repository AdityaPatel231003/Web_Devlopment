const express=require('express');
const app=express();
const port=3000;
app.listen(port,()=>{
        console.log(`SERVER Started with port number ${port}.....`);
});


app.get("/",(req,res)=>{
    console.log("Get with route /");
    res.send("Get with route / ");
})


app.get("/apple",(req,res)=>{
    console.log("Get with route /apple");
    res.send("Get with route /apple...... ");
})


app.get("/mango",(req,res)=>{
    console.log("Get with route /mango...");
    res.send("Get with route /mango ");
})
// Path Parameter.........
app.get("/:username/:id",(req,res)=>{
    console.log("Recicved");
    console.log(req.params);
    console.log(req.query);
    let {username,id}=req.params;
    res.send(`Welcome to @${username} .....and ${id}`);
})
// Query String
app.get('/search',(req,res)=>{
    let {q}=req.query;
    console.log(`Query:.......${q}`);
    console.log(req.query);
    res.send(`search result for query ${q}`);

})
app.get("/*path",(req,res)=>{
    console.log("Get with route /*path [CUSTOM PATH]");
    res.send("Get with route /*path [CUSTOM PATH]");
})


app.post("/",(req,res)=>{
    console.log("Post with route /");
    res.send("Post with route / ");
})


app.post("/apple",(req,res)=>{
    console.log("Post with route /apple");
    res.send("Post with route /apple ");
})


app.post("/mango",(req,res)=>{
    console.log("Post with route /mango");
    res.send("Post with route /mango ");
})


app.post("/*path",(req,res)=>{
    console.log("Post with route /*path [CUSTOM PATH]....cp");
    res.send("Post with route /*path [CUSTOM PATH]....CP ");
})

