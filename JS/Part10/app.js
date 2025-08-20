// 1] obj.addEventListiner("event",callback)
let btn=document.querySelector("button");

btn.addEventListener("click",function (event) {
    this.style.color="blue";
});

//  2] GENERATE RANDOM COLOR
let btnGenerate=document.querySelector("#btnGenerate");
let sectionh1=document.querySelector("section h1");
let sectiondiv=document.querySelector("#sectiondiv");

btnGenerate.addEventListener("click",function(event) {

    let randomcolor=getRandom();
    console.log("=>",randomcolor);
   sectionh1.innerText=randomcolor;
    sectiondiv.style.backgroundColor=randomcolor;
    console.log("Color updated..")
    
});
function getRandom() {
    let R=Math.floor(Math.random()*255);
     let G=Math.floor(Math.random()*255);
      let B=Math.floor(Math.random()*255);

      let color=`rgb(${R},${G},${B})`;
      return color;
    
}

// 3] formEvent

let form=document.querySelector("form");
let formbtn=document.querySelector("form button");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Stop and see event.preventDefault()");
});


//  4] Extract form  Data

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(form);
    console.dir(form);
    let user=this.elements[0];
    let passw=this.elements[1];
    let age=this.elements[2];
    console.log("User",this.elements[0].value);
    console.log(`password is:${this.elements[0].value}`);
    console.log(`age is: ${age.value}`);
});


// 5]Change Event
let username1=document.querySelector("#username1");
username1.addEventListener("change",function (event) {
    console.log("final Value:",this.value);
    
});
// 5]input Event
let username2=document.querySelector("#username2");
username2.addEventListener("input",function (event) {
    console.log("final Value:",username2.value);
    
});

//  6] Text Editor

let input=document.querySelector("TextEditor input");
let p=document.querySelector("TextEditor p");
input.addEventListener("input",function(event){
        console.log(this.value);
        p.innerText=this.value;
});


// PRACTICE QUESTIONS

// Q1 Try events

let practicesdiv1=document.querySelector("practiceQ1 div1");
practicesdiv1.classList.toggle("div");
practicesdiv1.addEventListener("mouseout",function (params) {
    practicesdiv1.style.backgroundColor="yellow";
    practicesdiv1.innerText="Mouseout";
});


// Q2 Create Button using js
let btncreate=document.createElement("button");
btncreate.innerText="Click me To green.."

practicesdiv1.insertAdjacentElement("afterend",btncreate);
btncreate.addEventListener("click",function (params) {
    btncreate.style.backgroundColor="green";
});


//  Q3]  
let createinp=document.createElement("input");
createinp.placeholder="Enter your Name";

let createh2=document.createElement("h2");
createh2.innerText="I am H2"

let q3=document.querySelector("q3");

q3.insertAdjacentElement("afterend",createinp);
q3.insertAdjacentElement("afterend",createh2);


createinp.addEventListener("input",function (events) {
   createh2.innerText=this.value;
});
