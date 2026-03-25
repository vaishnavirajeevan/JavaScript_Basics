/* Inheritance in Javascript
     -> extends keyword used for inheritance
     -> super keyword used to call parent class constructor, method, variables
     -> super keyword must be at the top
     -> child class reference variable can be used to call parent class methods
     -> multiple inheritance is not possible
     -> multi lvel inheritanc eis possible */

class vehicle{
    constructor(fuel,wheel){
        this.fuel=fuel;
        this.wheel=wheel;
    }

    starting(){
        console.log(`vehicle is started, using ${this.fuel} as fuel and having ${this.wheel} wheels`);
    }
}

class car extends vehicle{
    constructor(fuel,brand){
        super(fuel);
        this.brand=brand;
    }

    static wheel =4;

    moving(){
        console.log(`car is moving, using ${this.fuel}, brand is ${this.brand} having ${car.wheel} wheels`);
    }
}

class BMW extends car{
    constructor(fuel,color,year){
        super(fuel);
        this.color=color;
        this.year=year;
    }

    charging(){
        console.log(`BMW car charging with ${this.fuel} and color ${this.color}, model year ${this.year} having ${car.wheel} wheels`);
    }
}

class TATA extends car{
    constructor(fuel,gear){
        super(fuel);
        this.gear=gear;
    }

    parking(){
        
        console.log(`TATA car parking having ${this.fuel} fuel and ${this.gear} having ${TATA.wheel} wheels`);
        super.starting();
    }
}
console.log("------------------------VEHICLE---------------------------------------");

const v1 = new vehicle("petrol",4);
const v2 = new vehicle("diesel",3);

v1.starting();

v2.starting();

console.log("------------------------CAR---------------------------------------");

const c1 = new car("petrol","Toyota");
const c2 = new car("diesel","Volvo");
const c3 = new car("petrol");

c1.starting();
c1.moving();

c2.starting();
c2.moving();

c3.starting();
c3.moving();

console.log("------------------------BMW---------------------------------------");

const bmw1 = new BMW("EV","RED",2012);
const bmw2 = new BMW("PETROL","BLUE",2018);

bmw1.starting();
bmw1.moving();
bmw1.charging();

bmw2.starting();
bmw2.moving();
bmw2.charging();

console.log("------------------------TATA---------------------------------------");

const tata1 = new TATA("ev","automatic");
const tata2 = new TATA("diesel","manual");

tata1.starting();
tata1.moving();
//tata1.charging();
tata1.parking();

tata2.starting();
tata2.moving();
//tata2.charging();
tata2.parking();


