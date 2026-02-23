
/* 1. Spread Operator

-> Spread operator written as ...

// spread out the individual elements in an array, string, object */

const numbers=[2,4,6,8,0];
console.log(...numbers);

const word="hello";
console.log(...word);

// copy an arry 

 let arr1=[1,2,3,4,5];
 let arr2=[...arr1];
 console.log(arr2);

 // merge arrays

 let a=[2,4,6,8,0];
 let b=[1,3,5,7,9];
 let c=[...a,...b];
 console.log(c);

 // with objects

const obj={ id:1,name:"aliya",age:19};
const newobj={...obj};
console.log(newobj);   // { id: 1, name: 'aliya', age: 19 } opens the object-> takes properties out -> place them into new object

const lastobj={...obj,class:10};
console.log(lastobj);

const otherobj={id:2,value:"odd",property:"text"};
const mergeobj={...obj,...otherobj};
console.log(mergeobj);

// as argument

function additionOfElements(a, b, c) {
    console.log(a + b + c);
}

function additionOfElementsRest(...nums) {   // taking rest parameter and spread operator as argument
    console.log(nums.reduce((a,b)=>a+b,0));
}
let numberValues = [1, 2, 3];
// additionOfElements(numberValues); // 1,2,3undefinedundefined
additionOfElements(...numberValues);
additionOfElementsRest(...numberValues);

/*Rest Parameter
    -> It is used to pass indefinite number of arguments as an array to a function
    -> It can be used along with defined parameters but then it must be at the end of the function declaration
    -> Its a true array hence can be used with higher order functions - map, filter, reduce
    -> Can be used with arrow functions   */


let brwoserDetails=function(name="edge",...details){
    console.log(`the browser details are name - ${name}, ${details}`);
}

brwoserDetails("chrome","version - 12.89.0");
brwoserDetails("version");  // values willbe assigned based on position. first will go to default rest will got to rest parameter
brwoserDetails();
brwoserDetails(undefined,"company-google");

/*Argument Objects
    -> arguments is a special objects available inside normal function (not arrow functions)
    -> it contains all the values passed to the function even if parameter are not passed 
    -> takes as an array but not actual array */

function show(){
    console.log(arguments);
}

show();
show(1,2,3,4);

function showValue(){
    for (let val of arguments){
        console.log(val);
    }
}

showValue(3,2,4,5);

function print(){
    console.log(arguments[0]);
}

print("Hello");

function printValues(a,b){
    console.log(a);
    console.log(b)
    console.log(arguments);
}

printValues(10,20,30);
printValues(10,20);
printValues(10);



