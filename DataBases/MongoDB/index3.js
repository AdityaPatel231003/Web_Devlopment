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

// User.updateOne({name:"Hari"},{age:95})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log("Error........",err)})


// User.findOneAndUpdate({name:"Hari"},{age:95})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log("Error........",err)})

// User.findOneAndUpdate({name:"Hari"},{age:95},{new:true})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log("Error........",err)})



User.findByIdAndUpdate('68b5c93590c2360f89ad5a63',{age:10},{ new: true })
.then((res)=>{console.log(res)})
.catch((err)=>{console.log("Error........",err)})


// User.findByIdAndUpdate('68b5c93590c2360f89ad5a63',{age:4},{ runValidators: true })
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log("Error........",err)})
