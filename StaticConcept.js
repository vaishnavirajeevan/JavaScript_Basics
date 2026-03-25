/* Static concepts in Javascript
   -> Static methods and variables should access via class name
   -> these are not the part of objects but class itself */


class exampleStatic{

    static count = 1;

    nonstatic = 50;

    static addCount(){                        // static variable and method can be accessed by both static and non static method 
        exampleStatic.count++;
        console.log(exampleStatic.count);
    }

    sumCount(){                              // non static method 
        exampleStatic.count++;
        console.log(exampleStatic.count); 
        exampleStatic.addCount();
    }

    static print(obj){
        console.log(obj.nonstatic);   // static method cannot access non static variable directly
    }                                 // can be used by obj reference
}

const ex = new exampleStatic();
ex.sumCount();                      // 2 3
exampleStatic.addCount();           // 4

const ex1 =new exampleStatic();
exampleStatic.print(ex1);

