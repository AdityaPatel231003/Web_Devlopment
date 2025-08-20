
let started=false;
let level=0;
let trackColor=["red","yellow","blue","green"];
let userColorSeq=[];
let gameColorSeq=[];
let HighestScore=0;

let bodybtn=document.querySelector('body');
bodybtn.addEventListener('keypress',function(){
    if(started==false){
        console.log("Key pressed Game started");
        started=true;
        levelUp();
    }   
});

let h3=document.querySelector('h3');
let h4=document.querySelector('h4');
function levelUp(){
    userColorSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
     h4.innerText=`Highest Score :${HighestScore}`;

    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=trackColor[randomIndex];
    let colorbtn=document.querySelector(`.${randomColor}`);
    gameflash(colorbtn);
    gameColorSeq.push(randomColor);
    console.log(gameColorSeq);

}

function gameflash(colorbtn) {
   colorbtn.classList.add('gameColor');
   setTimeout(function() {
    colorbtn.classList.remove('gameColor');
   },160);   
}

function userGameFlash(colorbtn) {
   colorbtn.classList.add('userGameColor');
   setTimeout(function() {
    colorbtn.classList.remove('userGameColor');
   },160);   
}


function pressed(btnclick) {
    let btncolor=btnclick.getAttribute('id');
    userGameFlash(btnclick);
    console.log(btncolor);
    userColorSeq.push(btncolor);

    check(userColorSeq.length-1);

}

function check(indx) {
    if(userColorSeq[indx]===gameColorSeq[indx]){
        if(userColorSeq.length===gameColorSeq.length){
           HighestScore++;
           setTimeout(levelUp(),1000);
        }

    }
    else{
         h3.innerHTML=`Wrong choice <br> <b> Pressed any Key To restart<b> `;
        bodybtn.classList.add('red');
        setTimeout(function(){
            bodybtn.classList.remove('red');
        },1000);
            reset();
        
    }
    
}


    let btnsclick=document.querySelectorAll('.btn');

for (let btnclick of btnsclick) {
    btnclick.addEventListener('click',function (events) {
        pressed(btnclick);
    });
    
}



function reset(){
     started=false;
        level=0;
    userColorSeq=[];
    gameColorSeq=[];
}
