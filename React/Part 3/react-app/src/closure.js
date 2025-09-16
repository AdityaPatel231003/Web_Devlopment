// outer function variable can be used  by inner function 
// without executin outer one is callled closure
function outer() {
    let b=10;
    function inner() {
        let a=20;
        console.log(a+b);
        
    }
    return inner;
    
}
// outer();
// inner() ;
// A JavaScript closure is when an inner function has access to the variables of its outer function 
// even after the outer function has finished execution. The code  you wrote is close to a proper closure setup, 
// but you need to capture / store the returned inner, then call it.



// If you try inner() without doing const fn = outer();, JS does not see inner globally, so error.
const inner=outer();
inner();


function outerSecond() {
    let b=10;
    function innerSecond() {
        let a=20;
        console.log(a+b);
        
    }
    return innerSecond();
    
}
outerSecond();




// ||||
// outer function variable can be used  by inner function 
// without executin outer one is callled closure