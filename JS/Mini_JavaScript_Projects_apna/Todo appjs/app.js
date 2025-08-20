let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');

btn.addEventListener('click',function(events){
  item=document.createElement('li');
  item.innerText=inp.value;
  inp.value=" ";
  ul.appendChild(item);

   newbutton=document.createElement('button');
   newbutton.innerText='Delete';
   newbutton.classList.add('deletebtn');
   item.appendChild(newbutton);


});

// Event Deleagation
// let deletebtns=document.querySelectorAll('.deletebtn');
// for (let deletebtn of deletebtns) {
//   deletebtn.addEventListener('click',function(events){
//     deletebtn.parentElement.remove();
//   });
// }



// TO make Evemt Delegetation

ul.addEventListener('click',function(events){

  if(events.target.nodeName=="BUTTON"){
      events.target.parentElement.remove();
  }
  console.log("Event Deleted");
});


// Event Delegation
// let lis=document.querySelectorAll('li');
// for (const li of lis) {
//  li.addEventListener('click',function(events){
//    console.log(events.target.nodeName);
//      console.log(events.target);
//   if(events.target.nodeName=="BUTTON"){
//       events.target.parentElement.remove();
//   }
//   console.log("Event Deleted");
// });
  
// }