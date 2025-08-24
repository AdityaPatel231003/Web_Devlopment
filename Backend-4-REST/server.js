const express=require("express");
const path=require("path");
const {v4 : uuidv4}=require("uuid");
const methodOverride=require("method-override");
const app=express();
const port=3000;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server runing on port ${port}........`);
})

posts=[
    {id:uuidv4(),username:"AdityaPAtel",content:"Making Routes"},
    {id:uuidv4(),username:"UjjwalChoudhary",content:"Learn, love & laugh"},
    {id:uuidv4(),username:"ApnaCollege",content:"Love Teaching"}
]

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})
app.get('/posts/create',(req,res)=>{
    res.render('form.ejs');
})
app.post('/posts',(req,res)=>{
  let{username, content}=req.body;
   console.log(`${username} and ${content}`);
let  id=uuidv4();
   posts.push({id,username,content});
   res.redirect('/posts');
})


app.get('/posts/:id',(req,res)=>{
  let{id}=req.params;
  post=posts.find((p)=>{ return (id===p.id)});
   res.render('newview.ejs',{post});
})

app.get('/posts/:id/edit',(req,res)=>{
        let {id}=req.params;
        post=posts.find((p)=>{ return (id===p.id)});
         res.render('newform.ejs',{post});

})

app.patch('/posts/:id',(req,res)=>{
    let {id}=req.params;
        let newcontent=req.body.content;
        console.log(newcontent);
        post=posts.find((p)=>{ return (id===p.id)});
        post.content=newcontent;
         res.redirect('/posts');

})


app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params;
        posts=posts.filter((p)=>id!==p.id);
         res.redirect('/posts');

})
