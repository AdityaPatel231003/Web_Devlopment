// Q1 Select my Favourite  Movie

let favourite="Border";
let guess=prompt("My favourite movie is");
while((guess!=favourite)&& (guess!="exit")){
guess=prompt("Wrong guess  try again");
}
if (guess==favourite) {
    console.log("guess write");
    
}
else{
   console.log("exit");

}


// Q2 Nested loop with nested array

let heroes=[["superman","wondar woman","batman"],["ironman","captain America"]];
for (const hero of heroes) {
    console.log(` ${hero.length}`);
    for (const items of hero) {
        console.log(items);
        
    }
    
}


// Q3 TODO APP


let req=prompt("Enter request to add/delete/list/exit:");
let todo=[];
while (req!="exit") {
    if(req=="add"){
        let task=prompt("Eneter task :");
        todo.push(task);
      console.log("Task added sucessfully");
    }
    else if(req=="list"){
        for (let i=0;i<todo.length;i++) {
            console.log(`idx:${i}=${todo[i]}`);
        }
    }
    else if(req=="delete"){
            let idx=parseInt(prompt("Enter index :"));
            todo.splice(idx,1);
            console.log("Deleted Sucessfully");
    }
    else{
        console.log("Wrong request :");
    }
     req=prompt("Enter request  again to add/delete/list/exit:");    
}
console.log("exit");


// Q4 Write a JS program to delete all occurrences of element ‘num’ in a given array.
//          Example: if array=[1,2,3,4,5,6,2,3] & num=2
//          Result should be array=[1,3,4,5,6,3]
let array=[1,2,3,4,5,6,2,3];
let num=2;
for (let i =0;i< array.length;i++) {
    if (array[i]==num) {
        array.splice(i,1);
        
    }
    
}
console.log(array);



// Q5 Write a JS program to find the no of digits in a number
//              Example:if number=287152,count=6

let number=287152;
let count=0;
while(number>0){
    number=Math.floor(number/10);
    count++;

}
console.log("count==",count);


// Q6 Write a JS program to find the sum of digits in a number.
//              Example: if number=287152,sum=25

 number=287152;
let  sum=0;
while(number>0){
    let ld=number%10;
    sum+=ld;
    number=Math.floor(number/10);

}
console.log("sum ==",sum);

// Q7 Find factorial of a number
let n=parseInt(prompt("Enter number:"));
let fact=1;
for(let i=n;i>=1;i--){
fact*=i;
}
console.log("Factorial ==",fact);


// Q8 Find the largest number in an array with only positive numbers
let arr=[10,20,4,5,3,543,67,9];
let max=0;
for (const element of arr) {
    if(element>=max){
        max=element;
    }
    
}
console.log("Maxmium number in an array ",max);