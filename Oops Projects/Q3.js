// Question 3: Accessing Parent Class Methods

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

// Output:
// Make: Toyota, Model: Camry, Year: 2020

/* Explanation: 
--> Define two class: 1) Vehicle and 2) Car.

    1) The Vehicle class is defined with a constructor that initializes the make and model properties, and a method getInfo() that returns a string containing the make and model of the vehicle.

    2) The Car class extends the Vehicle class. It adds a year property specific to cars. The constructor calls the superclass constructor using super() to initialize the make and model properties inherited from Vehicle, and sets the year property.

    3) The getInfo() method in the Car class overrides the getInfo() method of the Vehicle class. It first calls super.getInfo() to get the make and model information from the parent class, then appends the year information specific to cars.
    
*/