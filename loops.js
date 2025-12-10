//  loops in Javascript

// 1. for loop

for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum =sum+ i;
    }
    console.log("Sum from 1 to", n, "is:", sum);
}
sumUpTo(10);

let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log("Number at index", i, "is:", numbers[i]);
}

console.log("-----------------------------------------------------------------------------------------------------------")

// 2. for...of loop         forof loop in Javascript is similar to foreach loop in Java

let fruits = ["apple", "banana", "cherry"];
for(let fruit of fruits){       
    console.log(fruit);
}

let digits = [1, 2, 3, 4, 5];
function PrintNumbers(digits){
    for(let digit of digits){
        console.log(digit)
    }
}
PrintNumbers(digits);

console.log("-----------------------------------------------------------------------------------------------------------")

// 3. for...in loop        

let Person ={
    age : 12,
    name : "ammu"
};

for(let p in Person){
    console.log(p,Person[p]);
}

console.log("-----------------------------------------------------------------------------------------------------------")

// 3. while loop

let i=0;
while(i<=10){
    console.log(i);
    i++;
}

console.log("-----------------------------------------------------------------------------------------------------------")

// 4. do-while loop

let count =0;
do{
    console.log(count);
}while(count>0);