/* Method overriding in Javascript
   -> Method overriding is part of Inheritance
   -> when child class has its own implementation of a method that already exist in parent class  */


class car{
    constructor(wheel,fuel){
        this.wheel=wheel;
        this.fuel=fuel;
    }

    refilling(){
        console.log(`car is filling with ${this.fuel}`);
    }
}

class EVcar extends car{
    constructor(wheel,model,fuel){
        super(wheel,fuel);
        this.model=model;
    }

    refilling(){
        super.refilling();   // super keyword can be used to class parent class method
        console.log(`EVcar ${this.model} is filling with ${this.fuel} `);
    }
}

const c = new car(4,"petrol");
c.refilling();  // car is filling with petrol

const ev =new EVcar(4,"X200","EV");
ev.refilling();              // child class method override parent class method