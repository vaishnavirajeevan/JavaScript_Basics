// map, filter and reduce methods in Javascript

/* 1. Map method (transformation)
         - is used when we have to transform each element of an array to another value
         - It can be also used to fetch a specific element from an array of objects
         - It returns another array containing the transformed elements with same length as the original array
*/

let numbers = [1,2,3,4,5,6];
let doublenumbers = numbers.map(num => num*num);
console.log(doublenumbers);   // [ 1, 4, 9, 16, 25, 36 ]

let students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 23}
];

let studentName = students.map(studentname=>studentname.name);
console.log(studentName);      // [ 'Alice', 'Bob', 'Charlie' ]

console.log("*****************************************************************************");

/* 2. Filter method (selection)
         - is used when we have to apply a condition to each element of an array 
         - select the elements that satisfy the condition
         - It returns another array containing the filtered elements  
         - find method only find first element satisfies the condition but filter finds all elements  */

let num = [25,67,33,78,34,57,89,2,3,90,345,56,34,78]

let evenArray = num.filter(numb=>numb%2==0);
console.log(evenArray);    // [78, 34,  2, 90,56, 34, 78]

let studentArray = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 23}
];

let filteredStudent = studentArray.filter(stu=>stu.age>20);
console.log(filteredStudent);     // [ { name: 'Bob', age: 22 }, { name: 'Charlie', age: 23 } ]

console.log("*****************************************************************************");

/* 3. Reduce method (aggregation) 
         - is used when we have to apply a function to each element of an array and reduce it to a single value
         - It returns a single value     */

let numberArray = [1,2,3,4,5];

let sum = numberArray.reduce((acc,curr)=>acc+curr,0); // 0 is the initial value of acc and first element is the initial value of curr
console.log(sum); // 15