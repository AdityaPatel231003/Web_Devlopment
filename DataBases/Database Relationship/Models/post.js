const mongoose = require("mongoose");
const {Schema} = mongoose;

 async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}
main()
.then((res)=>{console.log('Databse Connected')})
.catch((err)=>{ console.log("Error in Connection") })



// ONE TO SQUILLION
const userSchema=new Schema({username:String,email:String})
const Instauser=mongoose.model('Instauser',userSchema)



const postSchema=new Schema({content:String,likes:Number,user:{type:Schema.Types.ObjectId,ref:"Instauser"}})
const Post=mongoose.model('Post',postSchema)



const  adddata=async()=>{
    const user1=new Instauser({username:"RahulKumar",email:"RahulKumar123@gmail.com"})
    await user1.save();

    const post1=new Post({content:"Hello World",likes:111})
    post1.user=user1;
    await  post1.save();

    const post2=new Post({content:"Hello World",likes:111})
    post2.user=user1;
    await  post2.save();

    
}


// adddata();

findpost=async()=>{
    //res=await Post.find({});
    res=await Post.find({}).populate('user');
    console.log(res);
}
findpost();





