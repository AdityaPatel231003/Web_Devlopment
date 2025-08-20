const express=require('express');

const app=express();


const port=3000;

app.listen(port,()=>{
        console.log(`Server is started with port no. ${port}  :`);
});



app.use((req,res)=>{
    console.log("Request recived :");
    // res.send("Response is a String");
    // res.send({
    //     name:"Apple",color:"Red"
    // });
    code="<h1>HI Fruits in</h1> <ol><li>Apple :Red :100Kg</li> <li>Banana :yellow :30Kg</li></ol>";
    res.send(code);

});
