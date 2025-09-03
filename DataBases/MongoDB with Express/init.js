
const mongoose=require("mongoose");
const Chat=require("./model/chat.js");




async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}
main()
.then((res)=>{console.log("Connected with DataBase")})
.catch((err)=>{console.log("Error ".err)})


// const chat1= new Chat({
//     from:"Ajay",
//     to:"Ajeet",
//     msg:"College ayega ka  bhi nahi ",
//     created_at:new Date()
// })
// chat1.save()
// .then((res)=>{console.log("res-",res)})
// .catch((err)=>{console.log("Error during save ",err)})

Chat.insertMany([


    {
        from:"Rajkumar",
        to:"Rishi",
        msg:"Your Movie is Good",
         created_at:new Date()
    },

        {
        from:"Gill",
        to:"Virat Kohli",
        msg:"Whats your opnion about Cricket previous england TestSeries",
         created_at:new Date()
    },

    {
        from:"Ram",
        to:"Shyam",
        msg:"Hello",
         created_at:new Date()
    },
])

