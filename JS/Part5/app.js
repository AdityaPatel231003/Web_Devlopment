let student={
    // O/p is unordered  No specific oreder of object
    name:"Aditya PATEL",
    age:21,
    CGPA:7.71,
    favourite_Movie:["Border","Hera Pheri","titanic"]
}
let student2=["Aditya Patel",21,7.71];

// Object of objects
let obj={
    obj_key1:{
        name:"Aditya",
        age:23,
        city:"Indore"
    },
    obj_key2:{
        name:"Ajay",
        age:23,
        city:"dewas"

    },
    obj_key3:{
        name:"Arjun",
        age:21,
        city:"Banaras"
    },

}

// Array of objects
let Array=[
    {   name:"Aditya",
        age:23,
        city:"Indore"
    },
    {
        name:"Ajay",
        age:23,
        city:"dewas"
    },
    {
        name:"Arjun",
        age:21,
        city:"Banaras"

    }
];

// Random Number between 21 to 27
var num=Math.floor(Math.random()*7)+1+20;
// Random Number between 26 to 30
var num=Math.floor(Math.random()*5)+6+20;
// Random Number between 1 to 100
var num=Math.floor(Math.random()*100)+1;
// Random Number between 38 to 40
var num=Math.floor(Math.random()*3)+7+3;


// Q1 Twitter Post
const post={
    username:"Aditya",
    content:"I have write some thing below the post",
    Like:150,
    tage:["@NarendraModi","@AkshayKumar","Aditya212334"],
    reposts:23
}

// Q2  Guessing a random number 
let Max=prompt("Enter a maximum Number");
let random=Math.floor(Math.random()*Max)+1;

let guess=(prompt("Guess the Random Number"));
while(guess!="exit"){
    if(guess==random){
        console.log("Congrats correct guess");
        break;
    }
    if(guess>random){
        guess=(prompt("Guess is too large than the Random Number, try again! "));
    }
    else{
         guess=(prompt("Guess is small  than the Random Number, try again! "));
    }
}


// Q3 create a program that generatesa random number representing a dice roll
let dice=(Math.floor)(Math.random()*6)+1;
console.log("Random acurrances ",dice);

// Q4 create a car object with various properties

let car={
    name:"Tata",
    mode:"Tata Safari",
    price:20,
    colour:"Black"
}
console.log(car);


// Q5   create a person object with various properties and update and add properties 
const person={
    name:"Aditya",
    age:22,
    city:"Newyork",

}
console.log(person.city="New Jersey");
console.log(person);
console.log(person.country="America");
console.log(person);