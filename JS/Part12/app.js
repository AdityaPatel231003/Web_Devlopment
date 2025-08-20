// let jsondata='{"message":["https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_2115.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_3364.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_6421.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_7497.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_7802.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_7968.jpg"],"status":"success"}';
// 1] json/rawdata to JS object
// let validobj=JSON.parse(jsondata);
// console.log('Raw Data: ',jsondata);
// console.log('json to js object:',validobj);

// let stdobj={
//     1:"Aditya",
//     rollno: 8,
//     age:undefined,
//      age2:null
// };

// 2]object to JSON
// console.log(stdobj);
// let rawdata=JSON.stringify(stdobj);
// console.log(rawdata);



let btn=document.querySelector("#cat");
btn.addEventListener('click',async function () {
    let p=document.querySelector('p');
    let result= await getFacts();
    p.innerText=result;
    
});
let urlCat='https://catfact.ninja/fact';
async function getFacts() {
    try {
        let res= await fetch(urlCat);
        let data=await res.json();
        console.log(data.fact);
            return data.fact;
    } catch (error) {
        console.log(error);
    }
    
}

let btnd=document.querySelector("#dog");
btnd.addEventListener('click',async function () {
    let dogimg=document.querySelector('#dogimg');
    let result= await getImages();
    dogimg.setAttribute('src',result);
    
});

let urldog='https://dog.ceo/api/breeds/image/random';
async function getImages() {
    try {
        let res= await fetch(urldog);
        console.log(res);
        let data=await res.json();
           console.log(data.message);
           return data.message;
    } catch (error) {
        console.log(error);
    }
    
}

