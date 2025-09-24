const mongoose = require("mongoose");
const {Schema} = mongoose;

 async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}
main()
.then((res)=>{console.log('Databse Connected')})
.catch((err)=>{ console.log("Error in Connection") })


// ONE TO THOUSAND
const orderSchema=new Schema({item:String,price:Number,})
const Order=mongoose.model('Order',orderSchema)

const addorder=async()=>{
    await Order.insertMany([
        {item:"Samosa",price:12},
        {item:"chips",price:5},
        {item:"chocolate",price:25}
    ]);
}

const coustmerSchema=new Schema({customerName:String,orders:[{type:Schema.Types.ObjectId,ref:"Order"},],})
const Coustmer=mongoose.model('Coustmer',coustmerSchema)

const addcoustmer=async()=>{
    const coustmer1=new Coustmer({customerName:"RahulKumar",})

    const order1=await Order.findOne({item:"Samosa"});
   const order2=await Order.findOne({item:"chips"});

   coustmer1.orders.push(order1);
   coustmer1.orders.push(order2);
    res=await coustmer1.save();
    console.log(res);
    
}
// addorder();
// addcoustmer();

// findcoustomer=async()=>{
//     res=await Coustmer.find({});
//     console.log(res)
// }
// findcoustomer();

findcoustomer=async()=>{
    res=await Coustmer.find({}).populate('orders');
    console.log(res)
}
findcoustomer();

