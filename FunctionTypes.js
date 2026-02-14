
/* 1.Function declaration, 2.Function expression, 3.Arrow function, 4.Immediately invoked function expression
   5.Function Constructor, 6.Generator function, 7.Higher Order Function */
    

/* 1.Function declaration
     - Will always have a name
     - Can or cannot have parameters
     - Has hoisting capabilities - means can be invoked before it is declared    */


function write(){
    console.log("simple print function")  // non parameterized function 
}
write();

function write2(){
    let c = 2+3;                    // non parameterized return function
    return c;
}
let c = write2();
console.log(c);

function write3(a,b){
    console.log(a+b);               // function with 2 parameters
}
write3(5,10);

let sum = write4(3,2);
console.log(sum);
function write4(c,d){
    return c*d;                      // function call before declaration
}

console.log("*****************************************************************************");

/* 2. Function Expression
     -> Can be anonymous or named
     -> Does not have hoisting capabilities - means cannot be invoked before it is declared
     -> require an explicit return statement
     -> Used primarily when functions are passed as arguments to another function (filter, map, reduce, IIFE etc) 
     -> stored in a variable */

 // A. anonymous function expression
  
  let add = function(){    
    return 5+5;
 };

  console.log(add());

 // B. named function expression

  let exp = function rec(n){ 
    if(n==1)
        return 1
    return n*rec(n-1);
 };

 // B. Arrow function expression

 let arrow = ()=>{
    console.log("simple arrow function");
 };
 arrow();

 let square =(x)=>{
    return x*x;
 };
 console.log(square(5));

 let square2=(x)=> x*x;    // implicit return
  console.log(square2(5));

/* C.Immediately invoked function expression
     -> Is defined and invoked at the same time, no need to explicitly call/invoke it
     -> Syntax- Wrap the function in () and use another () at the end that invokes the function followed by a semicolon
     -> Usage of IIFE - To have a new scope that works only within the IIFE and doesn't pollute the global scope   */
 
(function(){
    let iife = "vaishnavi";
    console.log("Hello "+iife);
})();

(()=>console.log("immedietly involked function"))(); // Arrow function as Immediately invoked function expression

(function(a,b){
    console.log(a+b);
})(10,5);

let peoples=["Anna","Manu","Annie","John","Hari","Sita"];

(function(peoples){
    peoples.forEach((people)=>console.log(people));   
})(peoples);

// D.Function expression in object method

let person ={
    name:"Ammu",
    age:13,
    wish:function(){
        console.log(this.name+" is "+this.age+" year old")
    },
    wisharrow:()=>console.log(person.name+" is "+person.age+" year old"), // arrow have does not have this scope. it have global object scope only
};
person.wish();
person.wisharrow();