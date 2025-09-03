const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./model/chat.js");
const methodOverride=require("method-override");

app=express();

app.listen(8080,()=>{
    console.log("Server Started..........");
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}
main()
.then((res)=>{console.log("Connected with DataBase")})
.catch((err)=>{console.log("Error ",err)})



app.set('view engine',"ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


app.get('/chats',async (req,res)=>{
const   chats= await Chat.find({}) 
    res.render("home.ejs",{chats});
})

app.get('/chats/addbtn', (req,res)=>{

    res.render("new.ejs");
})

app.post('/chats/added',(req,res)=>{

    let {from,to,msg}=req.body;

    let chat1=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
chat1.save()
.then((res)=>{console.log("res-",res)})
.catch((err)=>{console.log("Error during save ",err)})

    res.redirect('/chats');
})


app.get('/chats/edit/:id', async (req,res)=>{
    let {id}=req.params
   const chat=await Chat.findById(id);
   console.log(chat);

    res.render("ReEdit.ejs",{chat});
})


app.put('/chats/edits/:id/', async (req,res)=>{
    let {id}=req.params
     let {from,to,msg}=req.body;

     let chat= await Chat.findByIdAndUpdate(id,{
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
     })

    
console.log(chat)
    res.redirect('/chats');
  
})


app.delete('/chats/delete/:id',async(req,res)=>{

    let{id}=req.params;
let chat=await Chat.findByIdAndDelete(id);
   res.redirect('/chats');
})