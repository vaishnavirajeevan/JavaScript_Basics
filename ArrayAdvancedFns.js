// map, filter and reduce methods in Javascript

/* 1. Map method (transformation)
         - is used when we have to transform each element of an array to another value
         - It can be also used to fetch a specific element from an array of objects
         - It returns another array containing the transformed elements with same length as the original array
*/

let numbers = [1,2,3,4,5,6];
let doublenumbers = numbers.map(num => num*num);
console.log(doublenumbers);