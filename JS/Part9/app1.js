let para1=document.createElement("p");
para1.innerText="Hi I'm Red";
para1.style.color="red";
let body=document.querySelector("body");
body.append(para1);


let heading3=document.createElement("h3");
heading3.innerText="I'm a blue h3!";
body.append(heading3);
heading3.classList.add("blue");


//  1]
let cdiv=document.createElement("div");
let h1=document.createElement("h1");
let p=document.createElement("p");


h1.innerText="I'm  h1 in div";
p.innerText="Mee Too";

cdiv.append(h1);
cdiv.append(p);
cdiv.classList.add("box");
body.append(cdiv);

// 2]
let newinput=document.createElement("input");
let btn=document.createElement("button");
btn.innerText="Click me!";
cdiv.append(btn);
cdiv.append(newinput);

// 3]
newinput.placeholder="Type Something";
newinput.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

// 4]
let newtbn=document.querySelector("#btn");
newtbn.classList.add("btnstyle");


// 5]
let heading1=document.createElement("h1");
heading1.innerText="DOM Practice";
heading1.innerHTML=`<u>${heading1.innerText}</u>`;
cdiv.prepend(heading1);
heading1.classList.add("h1style");


// 6]
let para2=document.createElement("p");
para2.innerText="Apna College";
para2.innerHTML=`${para2.innerText} <b>Delta</b> Practice`;
cdiv.append(para2);