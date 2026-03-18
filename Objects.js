
//Different object creation methods in Javascript

/* 1. Object Literals
   2. Constructor Function 
   3. ES6 class syntax
   4. OBJECT.CREATE METHOD 
   5. OBJECT.ASSIGN METHOD
   6. FACTORY FUNCTION

console.log("--------------------------OBJECT LITERALS-------------------------------")

/* 1. using Object Literals
     - literally giving data in the object itself
     - creating object by using {}  
     - can add String, numbers, array, boolean, null, undefined, objects */

    
    let employee ={ 
        Name: "Aparna",
        Age: 25,
        Married: false,
        Spouse: null,
        Address: undefined,
        Skills:["Java","python","ruby"],
        managerDetails:{
            Name:"Ankit",
            Level:"P10",
            Contact:7889874589
        }
    }

    console.log(employee);
    console.log(employee.managerDetails);

    for(emp in employee){
        console.log(employee[emp]);
    }

console.log("--------------------------CONSTRUCTOR FUNCTION-------------------------------")

/* 2. using Constructor Function
     - creating objects using a function and new keyword
     - to create multiple objects with same structure
     - this keyword refers to the newly created object   */


     function person(name,age){
        this.name=name;
        this.age=age;
        this.welcome=()=>{
            console.log("welcome "+this.name);
        }
        this.company={
            companyName:"ACN",
            location:"TVM"
        }
        this.address=address;
     }

     let address={
        city:"Kochi",
        State:"Kerala"
     }

   let p1=new person("ammu",12);
   let p2=new person("appu",15);
   p1.welcome();
   console.log(p1.company);
   console.log(p1.address);
   p2.welcome();
   console.log(p2.company);
   console.log(p2.address);

   p1.address.city="TVM";

   console.log(p1.address);
   console.log(p2.address); // address is common memmory

console.log("--------------------------ES6 SYNTAX-------------------------------")

/* 3. using ES6 class syntax
  - It is a class that can be used to create multiple objects
  - use constructor keyword to define a constructor   */

  class person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.welcome=()=>{
            console.log("welcome "+this.name);
        }
        this.company={
            companyName:"ACN",
            location:"TVM"
        }
        this.addresss=addresss;
    }
  }
  let addresss={
        city:"Kochi",
        State:"Kerala"
     }

    let p3 = new person1("bala",20);
    let p4 = new person1("cathy",25);
    p3.welcome();
    console.log(p3.company);
    console.log(p3.addresss);
    p3.nationality="INDIAN";
    console.log(p3.nationality);
    console.log(p3);

    p4.welcome();
    console.log(p4.company);
    console.log(p4.addresss);
    console.log(p4.nationality);

    console.log("--------------------------OBJECT.CREATE METHOD-------------------------------")

/* 4. Object.create()
  -> It is used to create objects from another object
  -> The Object.create() method accepts 2 arguments
  -> The first argument is an object that will be used as the prototype of the newly created object
  -> The second argument is the newly created object which is optional  */

  let student={
    ID:12,
    Class:"plus two",
  }

  let newStudent = Object.create(student);
  console.log(newStudent); //{} - it do not copy properties
  console.log(newStudent.Class); // accessible via prototype

  newStudent.gender="female";
  console.log(newStudent); // { gender: 'female' }

  let newStudent1=Object.create(student,{school:{value:"KTM",writable:true,enumerable:true,configurable:true}});
  console.log(newStudent1); // descriptors are objects that defines how a property behaves
                            // value - actual data, writable- can change value, enumarable- show in for..in/console.log, configurable- can delete or modify settings

console.log("--------------------------OBJECT.ASSIGN METHOD-------------------------------")

/* 5. Object.assign()
      -> It is used to copy properties from one or more objects into a target object
      -> syntax - Object.assign(target, ...sources)
     -> It will return the merged object
  -> If we don't give {} as argument then it will modify the value of the first object */

  const source={ subject:" physics",mark:45};
  const target=Object.assign({},source);
  console.log(target);

  const target2=Object.assign({},source,{status:"pass"});
  console.log(target2);

  const target3=Object.assign({},source,target2);
  console.log(target3);

console.log("--------------------------FACTORY FUNCTION-------------------------------")

/* 6. Factory functions
  -> It is a function that can return an object
  -> It is a function that can be used to create multiple objects
  -> No need to use keywords like new, this etc to invoke the function
  -> We can invoke the function like any other function and it returns an object */

  function teacher(name,subject){
    return{
        name,subject,
       greet(){
        console.log("welcome "+name);
       }
    }
  }

  const t1 = teacher("arya","maths");
  console.log(t1);
  t1.greet();

  const t2 = teacher("maya","english");
  console.log(t2);
  t2.greet();



