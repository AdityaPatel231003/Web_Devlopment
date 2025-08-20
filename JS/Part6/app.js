// Lexical scope and hoisting
function outer() {
    function inner() {
        console.log(x); // Lexical scope a variable defined in outside functn and used inside
        console.log(y); // hoisting
        let a=2;  // function scope
        
    }
    let x=5;
    let y=10;
    inner();
    
}
outer();

// Higher order function

let greed=function() {
    console.log("Namaste");
}
function Multiplegreed(func,n) {
    for (let index = 0; index < n; index++) {
       func();
        
    }
}
Multiplegreed(greed,100);

function oddEvenFactory(request) {
    if (request=="odd") {
        return function(n){
            console.log(!(n%2==0));
        }
        
    }
    else if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }else{
        console.log("Wrong request");
    }
    
}
// let request="odd";
// let func=oddEvenFactory(request);
// console.log(func(3));



// **************************************************************Practices Questions***************************************************************

// Q1 functn to genearte a valur for diece
function roll() {
    return (Math.floor(Math.random()*6))+1;
    
}
console.log(roll());

// Q2 function to concat all strings of array
let str_arr=["hi ","My name ","is Aditya ","Patel"];
function concatenation(str_arr) {
    let str=str_arr[0];
    for (let index = 1; index < str_arr.length; index++) {
        str+=str_arr[index];
        
    }
    return str;
    
}
console.log(concatenation(str_arr));



//  Q3 function that returns array elements larger than a number.
let array=[3,7,9,14,15,18,20];
let num=14;
function larger(array,num) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]>num) {
           console.log(`${array[index]} at idex ${index} is greater than ${num}`);
        }
        
    }
    
}
larger(array,num);


// Q4 function to extract unique characters from a string.
//  Example: str= “abcdabcdefgggh”
//           ans=“abcdefgh”

let given_str= "abcdabcdefgggh";
function unique(given_str) {
    let ans="";
    for (let index = 0; index < given_str.length; index++) {
        let str=given_str[index];
        if(!(ans.includes(str))){
            ans+=str;

        }
        
    }
    return ans;
}
console.log(unique(given_str));



// Q5  function that accepts a list of country names as input and return longest country name as output
//      Example: country=["Australia","Germany","UnitedStatesofAmerica"]
//              output:"UnitedStatesofAmerica"

let country=["Australia","Germany","UnitedStatesofAmerica"];

function longest(country) {
    let largest=0;
    let idx=-1;
    for (let index = 0; index < country.length; index++) { 
        let lng=    country[index].length;
        if(lng>=largest){
            largest=lng;
            idx=index;
        }
    }
    return  country[idx];
}

console.log(longest(country));


// Q6 function to count the number of vowels in a String argument.
    given_str= "adityapatel";

    function No_of_Vowels(given_str) {
        let count=0;
        for (let index = 0; index < given_str.length; index++) {
            let ch=given_str[index];
           if ((ch=='a')||(ch=='e')||(ch=='i')||(ch=='o')||(ch=='u')) {
             count++;
           }
            
        }
        return count;
    }
    console.log(No_of_Vowels(given_str));



    // Q7 function to generate a random number with in a range(start,end)
    let start=21;
    let end=47;
    function randomNumber(start,end) {
        return (Math.floor(Math.random()*(end-start))+start);
        
    }
    console.log(randomNumber(start,end));