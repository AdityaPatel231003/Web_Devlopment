const mongoose = require("mongoose");
const {Schema} = mongoose;

 async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}
main()
.then((res)=>{console.log('Databse Connected')})
.catch((err)=>{ console.log("Error in Connection") })

// ONE TO FEW
// favour Embedding

const addressSchema=new Schema({
    location:String,
    city:String
},{_id:false})
const userSchema=new Schema({
    username:String,
    address:[addressSchema]
})
const user=mongoose.model('user',userSchema);

const adduser=async()=>{
        const user1=new user({username:"Aditya",address:[{location:"23 Street Park",city:"New York"}]})
        user1.address.push({location:"871B Mellhennton",city:"New York"})
      res=await  user1.save();
      console.log(res);
}
adduser();