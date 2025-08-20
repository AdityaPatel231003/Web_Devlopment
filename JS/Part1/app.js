console.log("java script Part 1 of learning");
// NAN number
let a=0/0;
console.log(a);
console.log(typeof a);

// Operator Precedences
let num=(2*4/5%(6**2%10**2+1)%12*3);
console.log(num);
console.log(typeof num);


// Nearest Value
let l=0.99999999999999999
console.log(l);


// Syntax declaration
if(1){
    let a=90;
    // let a=89; No redeclaration
    a=86; // Re assignment
    console.log(a);

    const pi=3.14;
    // const pi=89; No redeclaration
    // pi=123; // No Re assignment
    console.log(pi);

    var v=90;
      console.log(v);
    
}
  console.log(v);  // var is function scope
    // console.log(pi); // let and const is block scoped
    //   console.log(a);



    //   Undefined
    let numb;
    console.log(numb);
    console.log(typeof numb);

    // Null
    let number=null;
    console.log(number);
    console.log(typeof number);