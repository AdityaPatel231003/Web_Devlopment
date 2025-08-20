// 1] BreakPoints
// function one(){
//     return 1;
// }
// function two() {
//     return one()+one();
// }
// function three() {
//     return two()+one();  
// }
// let ans=three();
// console.log(ans);


// 2] JS is Single Threaded
// console.log("Hello");
// setTimeout(()=>{
//     console.log("SET1 called");
// },1000);

// setTimeout(()=>{
//     console.log("SET2 called");
// },155);

// let str="ADITYA"
// for (let index = 0; index<str.length; index++) {
//     const element = str[index];
//     console.log(element);
// }

// console.log("BYE BYE");


//  3] CAllBackHell 
// let h1=document.querySelector('h1');
// function changeColor(color,delay,nextcolor) {
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolor){nextcolor()};
//     },delay); 
// }

// changeColor('red',1000,()=>{
//     changeColor('green',1000,()=>{
//         changeColor('blue',1000);
//     });

// });


//  4] Promises
let h1=document.querySelector('h1');
function changeColor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color=color;
        resolve("color changed:");
    },delay); 

    });
}

changeColor('red',1000)
.then(()=>{return changeColor('blue',1000)})
.then(()=>{return changeColor('green',1000)})
.then(()=>{return changeColor('purple',1000)});

// .catch((error)=>{console.log(error)});

function saveToDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10);
        if(internetSpeed>4){
                resolve("Good Connection");
        }
        else{
            reject("Weak Connection");
        }
        

    });
}

saveToDb('Data1')
.then((resolve)=>{console.log("Data1 saved");
console.log("result:",resolve);
            return saveToDb("Data2");
})
.then((ans)=>{console.log("Data2 saved");
console.log("result:",ans);
            return saveToDb("Data3");
})
.then((result)=>{console.log("Data3 saved");
console.log("result:",result);
})
.catch((error)=>{console.log("Data is not saved");
console.log("Error",error);});
