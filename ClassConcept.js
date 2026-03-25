/* Class concept in Javascript
     -> A .js file can contain multiple classes
     -> Class is a blueprint for creating objects
     -> Inside a class, methods does not need to be created with 'function' keyword.
     -> Class can have constructors, getters, setters, static and non static methods.  */


   class student{   // It is not necessary that file name and class name must be the same

    constructor(name,group,age){   // constructor defined with the keyword constructor and name not needed
        this.name=name;            // Constructor overloading is not possible 
        this.age=age;
        this.group=group;
    }

    studentDetails(){
        console.log(`student details are: name: ${this.name}, age: ${this.age}, group: ${this.group}`);
    }
   }

   const s1 = new student("ammu",18,"plus two");
   const s2 = new student("anu",17,"plus one");

   s1.studentDetails();
   s2.studentDetails();
