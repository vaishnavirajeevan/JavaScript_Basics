// Different use cases of arrow function

// 1. Without parameter

let simple =()=>console.log("Simple arrow function");
simple();

// 2. With one parameter

let square =(x)=> console.log(x*x);
square(6);

// 3. With two parameter

let add =(a,b)=> console.log(a+b);
add(2,3);

// 4. With multiple expressions

let multi =()=>{
    let a=10;
    console.log(a+2);
    console.log(a*2);
}
multi();

// 5. With IIFE

(()=>console.log("Simple IIFE"))();

// 6. with higher order functions (map)

let numbers=[1,2,3,4,5,6,7,8,9,0];
let squareNum=numbers.map(num=num*num);
console.log(squareNum);