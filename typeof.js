// typeof operator

let a=10;
console.log(typeof(a));   // number

let b = -10;
console.log(typeof(b));   // number

let c = 10.32;
console.log(typeof(c));   // number

let d = 'abcd';
console.log(typeof(d));    // string

let e = 'a'
console.log(typeof(e));    // string

let f = "abcd";
console.log(typeof(f));    // string

let g = false;
console.log(typeof(g));    // boolean

let h = ''
console.log(typeof(h));     // string

let i = "";
console.log(typeof(i));      // string

let j;
console.log(typeof(j));      // undefined

let k = null;
console.log(typeof(k));      // object

let l = [1,2,"one","two"];
console.log(typeof(l));       // object

let m =function(){
    
}
console.log(typeof(m));        // function

let n ={ name:"a",age:10};
console.log(typeof(n));         // object

let o = [{name:"a"},{name:"b"},{name:c}]
console.log(typeof(o));                    // object
