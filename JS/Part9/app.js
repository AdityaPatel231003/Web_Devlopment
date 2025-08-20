// 1] document.getElementById("");

// let obj=document.getElementById("mainImg");
// console.dir(obj.src);
// // obj.src="assets/creation_1.png";
// console.dir(obj.src);



// 2] document.getElementByclasssName("")

// let collect=document.getElementsByClassName("oldImg");
// console.dir(collect);
// for (const key in collect) {

//    console.dir(collect[key].src);
//    collect[key].src="assets/spiderman_img.png";

    
// }


//  3] document.getElementByTag()

// let collect=document.getElementsByTagName("a");
// console.dir(collect[3]);
// let collects=document.getElementsByTagName("p");
// console.dir(collects);
// console.dir(collects[1].outerText);
// collects[1].outerText="abc";



//  4] querySelector

// let  a=document.querySelector("p");
// console.log(a);
// console.dir(a);

// 5] querySelectorAll

// let  query=document.querySelectorAll("p");
// console.log(typeof(query));
// console.log(query);
// console.dir(query[1]);



//  6] Manipulating

// let heading=document.querySelector("p");
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.textContent);


//  7] Manipulating Attribbutes
// let para=document.querySelector("p");
// console.dir(para);
// console.dir(para.getAttribute('class'));
// console.dir(para.setAttribute('class',"green"));

// let image=document.querySelectorAll("img");
// console.dir(image);
// console.dir(image[0].getAttribute('id'));
// image[0].setAttribute('id','Ironman');


// 8] Style Manipulating
//  let p=document.querySelector("p");
//  console.dir(p);
//   console.dir(p.style.color="Red");


// 9] classList
// let para=document.querySelector("p");
// console.dir(para.classList);
// para.classList.add("green");
// para.classList.add("underline");
// console.dir(para.classList);
// para.classList.remove("underline");
// console.dir(para.classList.contains("underline"));
// para.classList.toggle("underline");
// console.dir(para.classList);


//  10] Adding Element
// let newp=document.createElement("p");
// let btn=document.createElement("button");
// let box=document.querySelector(".box");
// btn.append("Click me");
// newp.append("Hell my button is:",btn);
// box.append(newp);

// let body=document.querySelector("body");
// body.appendChild(newp);

// let para=document.querySelector("p");

// para.insertAdjacentElement("beforebegin",btn);
// para.insertAdjacentElement("afterbegin",btn);
// para.insertAdjacentElement("beforeend",btn);
// para.insertAdjacentElement("afterend",btn);


// btn.remove();
// newp.remove();
// body.remove();


//  PRACTICE QUESTION 


// Q1