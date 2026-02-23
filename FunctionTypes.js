
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
    let iife = "vaishnavi";  // non parameterized IIFE 
    console.log("Hello "+iife);
})();

(()=>console.log("immedietly involked function"))(); // Arrow function as IIFE

(function(a,b){
    console.log(a+b);  // IIFE with 2 parameter
})(10,5);

let peoples=["Anna","Manu","Annie","John","Hari","Sita"];

(function(peoples){
    peoples.forEach((people)=>console.log(people));   //Array of Strings as parameter
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

/* 3. Function Constructor
         -> format  - new Function(arg1,arg2....argn, functionBody)
         -> usage - used to create functions dynamically from strings -- parametrs and method body will give as string
         -> less commonly used compared to the above 4 types  */

let constr= new Function("return 2*4");
console.log(constr());

new Function(console.log("hi"));

let constr1= new Function("a","b","return a*b");
console.log(constr1(5,3));

let op="+";
let constr2= new Function("a","b","return a"+op+"b");
console.log(constr2(3,2));


/* 4. Generator Function
         -> A function that can pause its execution
         -> resume later
         -> Syntax  - function* which indicates the function is a generator
             - yield keyword which is used to pause and resume, can also return a value
             - generator objects (next(), return(), throw())   */


function* myGenerator(){
    yield "hi";
    yield "welcome";
    yield "goodbye";
}

const gen = myGenerator();
console.log(gen.next().value);   // to extract only value, else it will return like object -{ value: 'hi', done: false }
console.log("it can pause its execution");
console.log(gen.next().value);
console.log("again it can pause its execution");
console.log(gen.next().value);
console.log(gen.next().value);

for(let g of myGenerator()){     //using for in loop and accessing all the values in generator
    console.log(g);
}

/* 5. Higher Order Function
         -> takes one or more functions as arguments and can return a function
         -> map, filter and reduce are examples of higher order functions  */


function plus(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function calculator(a,b,functionName){
    return functionName(a,b);
}

console.log(calculator(10,5,plus));
console.log(calculator(10,5,subtract));
console.log(calculator(10,5,multiply));
console.log(calculator(10,5,divide));