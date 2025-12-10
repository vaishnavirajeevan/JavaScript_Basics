//common array functions in Javascript

/* 1. push, 2. pop, 3. unshift, 4. shift, 5. splice, 6. split, 7. slice, 8. concat, 9. sort, 10. reverse, 11. indexOf
   12. lastIndexOf, 13. includes, 14. forEach, 15. every, 16. some, 17. find           */

//different ways of declaring an array in Javascript

let number = [];
let numbers = [10,20,30,40];
let fruits = ["apple","banana","cherry"];
let mixedArray = [10,"hello",true,20.5];

console.log(number);  // []
console.log(numbers);  // [ 10, 20, 30, 40 ]
console.log(fruits);   // [ 'apple', 'banana', 'cherry' ]
console.log(mixedArray); // [ 10, 'hello', true, 20.5 ]

console.log("*****************************************************************************");

/* 1. push method 
         - to add one or more elements
         - to the end of the array
         - returns the length of the array */
 
let len = number.push(10);
console.log("length of array "+len+" and array is "+number ); // length of array 1 and array is 10

let newLen = number.push("apple",23,34,"banana");
console.log("length of array now",newLen," and array is ",number ); // length of array now 5  and array is  [ 10, 'apple', 23, 34, 'banana' ]

console.log("*****************************************************************************");

/* 2. pop method 
         - to remove last element from an array 
         - returns the same element
         - If array is empty then it returns undefined  */

console.log(numbers);  // [ 10, 20, 30, 40 ]
let poped = numbers.pop();
console.log("deleted number",poped," and array is",numbers);  // deleted number 40  and array is [ 10, 20, 30 ]
numbers.pop();
console.log("array is",numbers);  // array is [ 10, 20 ]

console.log("*****************************************************************************");

/* 3. unshift method 
         - to add one or more elements to the beginning of the array
         - returns the length of the array   */

console.log("array is ",fruits );   // array is  [ 'apple', 'banana', 'cherry' ]
let arrylength = fruits.unshift("kiwi");
console.log("length of array "+arrylength+" and array is ",fruits );  // length of array 4 and array is  [ 'kiwi', 'apple', 'banana', 'cherry' ]

let newarrylength = fruits.unshift("watermelon","orange","grapes","pineapple");
console.log("length of array "+newarrylength+" and array is ",fruits ); // length of array 8 and array is  ['watermelon','orange','grapes','pineapple','kiwi','apple','banana','cherry']

fruits.unshift("strawberry","blueberry");
console.log("array is ",fruits );  // array is  ['strawberry','blueberry','watermelon','orange','grapes','pineapple','kiwi','apple','banana','cherry']

console.log("*****************************************************************************");

/* 4. shift method 
         - to remove an element from the beginning of the array
         - returns the same element 
         - If array is empty then it returns undefined */

let removed = fruits.shift();
console.log("deleted fruit",removed," and array is",fruits); // deleted fruit strawberry  and array is ['blueberry','watermelon','orange','grapes','pineapple','kiwi','apple','banana','cherry']

fruits.shift();
console.log("array is",fruits); //array is ['watermelon','orange','grapes','pineapple','kiwi','apple','banana',cherry']

console.log("*****************************************************************************");

/* 5. splice method 
         - to add or remove elements from an array
         - returns an array of deleted elements 
         - array.splice(starting Index,Count to Delete,items to add) 
         - staring and count is mandatory to add */

let tataCars = ["Tiago", "Tigor", "Altroz", "Harrier", "Safari"];
console.log("array is",tataCars);   // array is [ 'Tiago', 'Tigor', 'Altroz', 'Harrier', 'Safari' ]

let removedfirst = tataCars.splice(2,1,"Punch", "Nexon");
console.log("deleted cars",removedfirst," and array is",tataCars);  // deleted cars [ 'Altroz' ]  and array is [ 'Tiago', 'Tigor', 'Punch', 'Nexon', 'Harrier', 'Safari' ]

let removedsecond = tataCars.splice(0,"Harrier", "Safari"); // second item will treat and delete cound 
console.log("deleted cars",removedsecond," and array is",tataCars); // deleted cars []  and array is ['Safari','Tiago','Tigor','Punch','Nexon','Harrier','Safari']

let removedthird = tataCars.splice(0,0,"Sierra", "Curv");
console.log("deleted cars",removedthird," and array is",tataCars); // deleted cars []  and array is ['sierra','curv','Safari','Tiago','Tigor','Punch','Nexon','Harrier','Safari']

let removedfourth = tataCars.splice(2,3);
console.log("deleted cars",removedfourth," and array is",tataCars); // deleted cars [ 'Safari', 'Tiago', 'Tigor' ]  and array is [ 'sierra', 'curv', 'Punch', 'Nexon', 'Harrier', 'Safari' ]

console.log("*****************************************************************************");

/* 6. slice method 
         - to copy elements from an array
         - negative numbers can be used to specify the ending index
         - array.slice(starting index,ending index -1)                  */

let copycars = tataCars.slice(2,3);
console.log("copy cars",copycars," and array is",tataCars); // copy cars [ 'Punch' ]  and array is [ 'sierra', 'curv', 'Punch', 'Nexon', 'Harrier', 'Safari' ]

let copycarsfirst = tataCars.slice(2);
console.log("copy cars",copycarsfirst," and array is",tataCars); // copy cars [ 'Punch', 'Nexon', 'Harrier', 'Safari' ]  and array is [ 'sierra', 'curv', 'Punch', 'Nexon', 'Harrier', 'Safari' ]

let copycarssecond = tataCars.slice(2,0);
console.log("copy cars",copycarssecond," and array is",tataCars); // copy cars []  and array is [ 'sierra', 'curv', 'Punch', 'Nexon', 'Harrier', 'Safari' ]

let copycarsthird = tataCars.slice(2,-1);
console.log("copy cars",copycarsthird," and array is",tataCars); // copy cars [ 'Punch', 'Nexon', 'Harrier' ]  and array is [ 'sierra', 'curv', 'Punch', 'Nexon', 'Harrier', 'Safari' ]

console.log("*****************************************************************************");

/* 7. split method 
         - to split a string into an array 
         - specify the scenario to split                */

let sentence = "Elephent is an animal";
let newarray = sentence.split(' ');
console.log(newarray); // [ 'Elephent', 'is', 'an', 'animal' ]

let myname ="vaishnavi";
let namearray = myname.split('');
console.log(namearray); // ['v','a','i','s','h','n','a','v','i']

console.log("*****************************************************************************");

/* 8. concat method 
         - to merge two or more arrays 
         - return new array           */

let mixarray = tataCars.concat(fruits);
console.log(mixarray); // ['sierra','curv','Punch','Nexon','Harrier','Safari','watermelon','orange','grapes','pineapple','kiwi','apple','banana','cherry']

let mix3array = tataCars.concat(fruits,mixedArray);
console.log(mix3array); // ['sierra','curv','Punch','Nexon','Harrier','Safari','watermelon','orange','grapes','pineapple','kiwi','apple','banana','cherry', 10,'hello',true,20.5]

console.log("*****************************************************************************");

/* 9. sort method 
         - to sort the elements of an array
         - original array will be sorted                */

let sortarray = tataCars.sort();
console.log(sortarray); // [ 'Curv', 'Harrier', 'Nexon', 'Punch', 'Safari', 'Sierra' ]
console.log(tataCars);  // [ 'Curv', 'Harrier', 'Nexon', 'Punch', 'Safari', 'Sierra' ]

console.log(mixedArray.sort()); // [ 10, 20.5, 'hello', true ]

console.log("*****************************************************************************");

/* 10. reverse method 
         - to reverse the elements of an array 
         - original array will be reversed                  */

console.log(tataCars.reverse()); // [ 'Sierra', 'Safari', 'Punch', 'Nexon', 'Harrier', 'Curv' ]
console.log(fruits);             // ['watermelon','orange','grapes','pineapple','kiwi','apple','banana','cherry']
console.log(fruits.reverse());   // ['cherry','banana','apple','kiwi','pineapple','grapes','orange','watermelon']
console.log(fruits);             // // ['cherry','banana','apple','kiwi','pineapple','grapes','orange','watermelon']

console.log("*****************************************************************************");

/* 11. indexOf method 
         - to find the index of an element in an array         */

let rivers =["nile", "ganga","nile" ,"yamuna","amazon","nile"];
let nile = rivers.indexOf("nile");
console.log(nile); // 0

console.log(rivers.indexOf("ganga")); // 1

console.log(rivers.indexOf("nile",nile+3)); // 3 - second position

console.log("*****************************************************************************");

/* 12. lastIndexOf method  
         - to find the last index of an element in an array     */

console.log(rivers.lastIndexOf("nile")); // 5

console.log("*****************************************************************************");

/* 13. includes method 
         - to check if an element is present in an array, returns boolean value    */

let bool = tataCars.includes("tata");  //  false
console.log(bool);

console.log(tataCars.includes("Punch"));   //  true

console.log(myname.includes("v"));   //  true

console.log("*****************************************************************************");

/* 14. forEach method 
         - to execute a function on each element of an array        */

let count = 0;
rivers.forEach(river => {
    if(river=="nile"){
        count++;
    }
});
console.log(count);

console.log("*****************************************************************************");

/* 15. every method 
         - to check if all elements of an array satisfy a condition   
         - returns boolean   */

let evennumbers = [2,4,6,8,12,46,80,100,151];
let checkEven = evennumbers.every(even => (even%2)==0)  // to check every element in the arrray is even number
console.log(checkEven);

let superheros =["batman","spiderman","ironman","superman","wonder women"];
let man = superheros.every(hero => hero.includes("man"));  // to check every element includes a value
console.log(man);

let students = [
   {   name:"arya",age:20 },
   {   name:"deva",age:18 },
   {   name:"renu",age:19 },
   {   name:"anu", age:18 }
];

let adult=students.every(student => student.age>=18);
console.log(adult);

console.log("*****************************************************************************");

/* 16 .some method 
         - to check if any element of an array satisfies a condition
         - returns boolean   */

let superhero = superheros.some(superhero => superhero.includes("man"));
console.log(superhero);

console.log("*****************************************************************************");

/* 17. find method 
         - to find the first element that satisfies a condition  */

let numberarray = [20, 16,3,98,0,23,55,789,3542,1];
let zero = numberarray.find(num => num==0);
console.log(zero);
