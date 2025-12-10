// variables in JavaScript

/* 1. let 
          - can be reassigned
          - can't redeclared  
*/

let l;   // default value will be undefined
let l1 = 20; // integer
// let l1 = 30;  // SyntaxError: Identifier 'l1' has already been declared
let l2 = "JavaScript"; // string
let l3 = 'Learn'; // single and double quotes works same
let l4 = true; // boolean 
let l5 = [1,2,3]; // array
let l6 = {"count":0}; // object

console.log(l);
console.log(l1);
console.log(l2);
console.log(l3);
console.log(l4);
console.log(l5);
console.log(l6.count);

if(true){
    let n = 10;  // block scope or global scope
}

// console.log(n); // ReferenceError: n is not defined

console.log("*****************************************************************************");

/* 2. var
         - can be reassigned
         - cn be redeclared      
*/

var v;   // default value will be undefined
var v1 = 20; // integer
var v1 = 30; 
var v2 = "JavaScript variable"; // string
var v3 = 'Learn var'; // single and double quotes works same
var v4 = false; // boolean 
var v5 = ["one","two"]; // array
var v6 = {"name":"arya"}; // object

console.log(v);
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);
console.log(v6.name);

if(true){
    var n = 10;  // function scope or global scope
}

console.log(n);

function varScope(){
    var v7 = 500;
}

// console.log(v7);  // ReferenceError: v is not defined

console.log("*****************************************************************************");

/* 3. const
           - can't be reassigned
           - can;t be redeclared
*/

// const c;  // SyntaxError: Missing initializer in const declaration
             // must be initilized

const c1 =10; // integer
// const c1 = 20; // SyntaxError: Identifier 'c1' has already been declared
const c2 = "JavaScript constant"; // string
const c3 = 'Learn const'; // single and double quotes works same
const c4 = false; // boolean 
const c5 = ["odd","even"]; // array
const c6 = {"age":28}; // object

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
console.log(c5);
console.log(c6.age);


if(true){
    const n = 10;  // function scope or global scope
}
// console.log(n); // ReferenceError: n is not defined