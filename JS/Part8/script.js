// Qs1.Square and sum the array elements using the arrow function and then find the average of the array.
// let arr=[1,2,3,4,5];


// let square=arr.map((el)=>{ return el*el});
// console.log(square);

// let sum=square.reduce((acc,el)=>{
//                 return (acc+el);
// });
// console.log(sum);

// let count=arr.reduce((acc,el)=>{ acc=acc+1; return acc;});
// console.log(count);
// console.log("avg: ",sum/count);


//     _________________________________________________________


// Qs2.Create a new array using the map function whose each element is equal to the original element plus 5.
// let arr=[1,2,3,4,5];
// let newarr=arr.map((el)=>{return el+5});
// console.log(newarr);


//     _________________________________________________________


// Qs3.Create a new array whose elements are in uppercase of words present in the original array.
// let arr=["Aditya","Wants","To","earn","54 LPA"];
// let newarr=arr.map((el)=>{return el.toUpperCase()});
// console.log(newarr);


//     _________________________________________________________


// Qs4.Write a function called double And Return Args
//  which accepts an array and a variable number of 
// arguments.The function  should return a newarray with 
// the original array values and all of the additional 
// arguments doubled

// let arr=[1,2,3,4];

// function double(...args) {
//    let newarray=args.map((el)=>{return el*2});  
//    return newarray;
// }

//  Cloning
// let newarr=[...double(10,20,30,40,50),...arr];
// console.log(newarr);


// shalllow copy

// let newarray=[double(10,20,30,40,50),arr];
// console.log(newarray);


// const doubleAndReturnArgs=(arr,...args)=> 
//     [...arr,args.map((el)=>{el*2})];
    


// console.log(doubleAndReturnArgs([1,2,3,4],4,4));



// ____________________________________________________________________________________________________________________________________________________________


// Q5 Write a function called merge Objects that accepts 
// two objects and returns a new object which contains 
// all the keys and values of the first object and second 
// object.

let obj1={fname:"Aditya", fage:19,fwt:52};
let obj2={sname:"Ayush", sage:19,swt:72};


let obj={...obj1,...obj2};
console.log(obj);