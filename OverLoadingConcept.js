/* Overloading concept in javascript
  -> tradional overloading concept does not exist in java script
  -> Javascript is a dynamically typed language and hence function parameters are not part of its signature */


  function add(a,b){
    return a+b;
  }

  function add(a,b){
    console.log(a,b);
  }

  function add(a,b,c){    // since java script doesn't support overloading it ignore above 2 methods with same name
    return a+b+c;         // and keep the last one only
  }

  console.log(add());  // NaN -> a=undefined, b=undefined, c=undefined -> undefined+undefined+undefined = NaN
  console.log(add(2,3));  // NaN -> a=2, b=3, c=undefined -> 2+3+undefined = NaN
  console.log(add("a","b")); //abundefined -> a="a", b="b", c=undefined -> "a"+"b"+undefined = abundefined
  console.log(add(1,2,3));   // 6 -> a=1, b=2, c=3 -> 1+2+3 = 6

  console.log("-----------------------------Rest Parameters------------------------------------");

  // Example of method overloading simulation using Rest Parameters 

  function sum(...num){
    return(num.reduce((a,b)=>a+b,0));
  }

  console.log(sum());
  console.log(sum(1,2));
  console.log(sum(1,2,3,4));
  console.log(sum("a","b"));

  console.log("-----------------------------Argument objects---------------------------------");

   // Example of method overloading simulation using Argument objects


   function add2(){
    let c =0;
    for(num of arguments){
        c=c+num;
    }
    return c;
   }

  console.log(add2());
  console.log(add2(1,2));
  console.log(add2(1,2,3,4));
  console.log(add2("a","b"));

  console.log("-----------------------------typeof operator---------------------------------");

  // Example of method overloading simulation using typeof operator 

  function sum2(a,b,c){
    if (typeof(a)=="number" && typeof(b)=="number" && typeof(c)=="number"){
        return a+b+c;
    }
    else if (typeof(a)=="number" && typeof(b)=="number"){
        return a+b;
    }
    else if (typeof(a)=="number"){
        return a;
    }
    else
        return 0;
  }

  console.log(sum2());
  console.log(sum2(1,2));
  console.log(sum2(1,2,3,4));




