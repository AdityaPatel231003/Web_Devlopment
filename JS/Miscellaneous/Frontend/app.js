let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,5];
arr1.sayHello=()=>{
    console.log(`sayHello...arr`);
}
arr2.sayHello=()=>{
    console.log(`sayHello...arr`);
}
// no need to make sayHelloFunction two times or any function like push/pop  .*. redundancy in codes make=> prototype 
console.log(arr1.__proto__===arr2.__proto__);

// To change defintion of prototype function;
arr1.__proto__.push=(n)=>{console.log(`Pushing ${n} in arr1.......`)};
console.log(arr1.push(7));

console.log(arr1.sayHello===arr2.sayHello);
//  Both are at different location that why false;



// Protoypte didn't  extra spaces objects didn't create copy and reference towards same property {*.* toLowerCase}
let aa="Aditya".toLowerCase==="Ujjwal".toLowerCase;
console.log(aa);


// Factory Function
function PersonMaker(name,age) {
    const person={
        name:name,
        age:age,
        talk(){
            console.log("talking........");

        }
    }
    return person;
    
}
p1=PersonMaker('adam',25);
p2=PersonMaker('Smith',27);
console.log(p1.talk===p2.talk);
// false
// Disadnatage creates copy memory inefficient 

// ________________________________________________________-----------------------________________________________________________________

// New Opertaor
// PersonMaker2 ===> Constructor
//  pp1/pp2 ===>   NewInstances

function PersonMaker2(name,age) {
    this.name=name;
    this.age=age;
    console.log(" ====",this);
}
PersonMaker2.prototype.talk=function () {
    console.log("talking........");
    
}
pp1=new PersonMaker2('adam',25);
pp2=new PersonMaker2('Smith',27);
console.log(pp1.talk===pp2.talk);
// True
// advantage  didn't creates copy  but newInsatances refere to prototype of PersonMAker2  utilize memory efficient 


// ________________________________________________________-----------------------________________________________________________________

// Classes
class PersonMaker3 {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log('TAlkING...............');
    }
}
ppp1=new PersonMaker3('adam',25);
ppp2=new PersonMaker3('eve',27);
console.log(ppp1);
console.log(ppp2);
console.log(ppp1.talk===ppp2.talk);




// _____________________________________________________----------------------------___________________________________

//Inheritances

class Mammals {
    constructor(name,wt) {
        this.type='warm-blooded';
        this.name=name;
        this.wt=wt;
        
    }
    eat(){
        console.log(`Mammals is eating and  ${this.type}`);
    }
}
class Dog extends Mammals {
    constructor(name,wt) {
        console.log("Dog class Constructor is called............");
        super(name,wt);  
    }

    // override
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class Cat extends Mammals {
    constructor(name,wt) {
        console.log("Cat class Constructor is called............");
        super(name,wt);
        
    }
    sound(){
        console.log(`meow...........'${this.name}`);
    }
}
d1=new Dog('roxy',45);
c1=new Cat('Nace',35);



class Base {
    constructor(name,l,b) {
        this.name=name;
        this.l=l;
        this.b=b;
        
    }
    area(){
        let area=this.l*this.b;
        console.log(`Base area is ${area}`);
        console.log(`l==${this.l} and b=${this.b}`);
    }
}

class Square extends Base {
    constructor(a) {
        
        super("Square",a,a);
        // this.a=a;
        
    }
     area(){
    //    let area=this.a*this.a;
    //     console.log(`Square area is ${area}`);
    //     console.log(`a==${this.a} and a=${this.a}`);


    // this.l & this.b (set in parent constructor)
    // this.a (never set in either of two class)
           let area=this.l*this.b;
        console.log(`Square area is ${area}`);
        console.log(`l==${this.l} and b=${this.b}`);
    }
}

s1=new Square(4);
console.log(s1.area());