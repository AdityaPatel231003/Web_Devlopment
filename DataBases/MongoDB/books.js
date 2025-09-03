const mongoose=require('mongoose');

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/Amazon")
}
main()
.then((res)=>{console.log("Connected....")})
.catch((err)=>{console.log("Error........",err)})

bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        minlength:[10,"Small author name kudasi"]
    },
    price:{
        type:Number,
        min:1
    },
    discount:{
        type:Number,
        default:10

    },
    category:{
            type:String,
        enum:["fiction","Spritual","Non fiction"]
    }

})

User=mongoose.model('User',bookSchema)


user1    = new User(
    {
        title:"One irl",
        author:"Chetan Sir",
        price:-1,
        category:"self Help Book"
    }
)

user1.save()
.then((res)=>{console.log("---",res)})
.catch((err)=>{console.log("",err)})

