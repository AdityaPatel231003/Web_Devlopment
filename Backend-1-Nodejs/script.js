// 1] require from different directory
const fruits=require("./fruit");

let a="Hello";
console.log("Meri taraf sa",a);

// 2] process object
// process.argv returns array contain command line arguments when the node.js process was launched
let args=process.argv;
for (let index = 0; index < args.length; index++) {
    console.log("Hello & welcome",args[index]);
    
}


