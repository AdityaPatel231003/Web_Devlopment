const mongoose=require('mongoose');

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/college")
}
main()
.then((res)=>{console.log("Connected....")})
.catch((err)=>{console.log("Error........",err)})

userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:[13,"Not Eligible"]
    }
})

User=mongoose.model('User',userSchema)

// User.deleteMany({age:10})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log("Error........",err)})

// User.findByIdAndDelete('68b5c93cdfad813584576616')
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log("Error........",err)})


