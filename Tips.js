// This file contains some tips and tricks for Javascript

// 1. Finding unique values/remove duplicates in an array - using Set object $ spread operator

let withDupplicate=[1,5,2,7,6,2,4,6,5,7,1,9,0,6,4,3];
let noDuplicate=[... new Set(withDupplicate)];  // Set object only stores unique values -> { }
console.log(noDuplicate);                       // [...] - spread operator converts set to array

let stringDuplicate=["red","blue","green","green","blue","yellow","red"];
let stringnoDuplicate=Array.from(new Set(stringDuplicate)); // Array.from() also convert set to array
console.log(stringnoDuplicate);   

// 2. Remove falsy values from an array - using .filter(Boolean)

const falsy= [0,2,3,5,false,undefined,"",'',null,"apple"];
const removeFalse=falsy.filter(Boolean);
console.log(removeFalse);

// 3. check if a variable stored array or not - isArray 

const emptyarray=0;
const isempty=Array.isArray(emptyarray);
console.log(isempty);

// 4. check if array is empty or not - length

const numarray=[];
console.log(numarray.length==0);

// 5. check if array has a specific value - includes

const fruits=["apple","orange","banana","kiwi"];
console.log(fruits.includes("melon"));

// 6. Make copy of an array - 1. spread operator 2. slice method

const num=["one","two","three","four","five"];
const copynum=num.slice(0);
console.log(copynum);

const copyn=[...num];
console.log(copyn);

// 7. Truncate an array - slice method

const cars =["tata","toyota","mg","lexus","volvo","bmw"];
const truncate1 = cars.slice(2,5);
console.log(truncate1);

// 8. Get last item in an array - 1. length-1 2. slice

const cars2 =["tata","toyota","mg","lexus","volvo"];
console.log([cars2[cars2.length-1]]); 

console.log(cars2.slice(-1));

// 9. Array to String - join

const cars3 =["tata","toyota","mg","lexus","volvo","benz"];
const arraystring = cars3.join("");
console.log(arraystring);

// 10. Number to String -> 1. toString() 2. String()

const number = 1234;
const numstring=number.toString();
console.log(numstring);
console.log(typeof(numstring));

const numstring2 =String(number);
console.log(numstring2);
console.log(typeof(numstring2));

// 11.String to Number -> Using Number(), parseInt(), parseFloat()

const string1="12354.78";
const stringnumber = Number(string1);
console.log(stringnumber);    // 12354.78
console.log(typeof(stringnumber));

const parsintstring=parseInt(string1);
console.log(parsintstring);       // 12354
console.log(typeof(parsintstring));

const parsefloatstring=parseFloat(string1);
console.log(parsefloatstring);         // 12354.78
console.log(typeof(parsefloatstring));

// 12. swapping values in JavaScript

let x= 40;
let y= 50;
[x,y]=[y,x];
console.log(x);
console.log(y);

// 13. ToUpperCase and toLowerCase

const upper="APPLE";
const tolower=upper.toLocaleLowerCase();
console.log(tolower);

const lower="single";
const toupper=lower.toLocaleUpperCase();
console.log(toupper);

// 14. check if an object has a specific property - Object.hasOwn(obj,"property")

const person={
    name:"ammu",
    age:12
};
console.log(Object.hasOwn(person,"id"));

// 15. retrieve all properties of an Object to Array

console.log(Object.keys(person));     // [ 'name', 'age' ]
console.log(Object.values(person));   // [ 'ammu', 12 ]
console.log(Object.entries(person));  // [ [ 'name', 'ammu' ], [ 'age', 12 ] ]

// 16. get a specific object property value

console.log(person["age"]);

// 17. make copy of an object

const copyperson={...person};
console.log(copyperson);

// 18. get current date and time

const date = new Date();
console.log(date.toLocaleString());  //20/4/2026, 1:04:58 am
console.log(date.toDateString());    // Mon Apr 20 2026
