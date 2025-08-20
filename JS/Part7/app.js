
// Q1 Arrow functn to square
// let square=(n)=> (n*n);
// console.log(square(5));


// Q2 print hello at interval of 2sec for 5 times
// let id=setInterval(()=>{
//     console.log("Hello !");
// },2000);
// // if (id==5) {
// //     clearInterval(id);  WRONG LOGIC
    
// // }
// setTimeout(()=>{
//     console.log("Clear Interval Called......");
//     clearInterval(id);
// },10000)


//Q3 ARROW FUNCTION ARRAVG THAT ACCEPTS AN ARRAY OF NUMBERS AND RETURN AVERAGE OF THOSE NUMBERS
// let arr=[1,2,3,4,5];
// let arravg=(arr)=>{
//     let sum=0;
//     let count=0;
//     for (const element of arr) {
//         sum+=element; 
//         count++;  
//     }
//     return sum/count;
// };
// console.log(arravg(arr));


// Q4 ARROW FUNCTION FOR EVEN OR ODD
// let Even=(n)=>{ n%2==0? console.log("Even"):console.log("odd")};
// Even(16);


// Q5 
// const obj={
//     message:'Hello world !',
//     logMessage(){
//         console.log(this.message);
//     }

// };
// obj.logMessage(); 
// setTimeout(obj.logMessage,1000);   
// setTimeout(obj.logMessage(),1000);


// Q6
// let length=4;
// function callback() {
//     console.log(this.length);
    
// }
// const object={
//     length:5,
//     method(callback){
//         callback();
//     }
// }
// callback();
// object.method(callback,1,2);


// Q7

const objects={
    message:"Hello World by me!",
    getmessage:function() {

        console.log(this.message);
    },
     getmessage2:() =>{
        // Arrow function 
        // Have
        // lexical scope 
        // parents this === your this
        console.log(this.message);
    }
}
objects.getmessage();
objects.getmessage2();