// 1. Question 1: Understanding Class Inheritance


class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();



    // Out Put => Buddy barks.

    // Explanation : 
    // Frist define tow class : 1) Animal And 2) Dog.

    //1) A parent class called Animal  which has a constructor that takes a name parameter and sets it as a property of the instance. It also has a method speak() that simply Console that the animal makes a noise.
    //2) Then  a child class called Dog that extends the Animal class. This means that Dog inherits all the properties and methods of Animal.

    // 3) However the Dog class overrides the speak() method of the Animal class. So, when you call speak() on a Dog object it console that the dog barks instead of just making a noise.
    
    // 4) The Dog class overrides the speak() method, it Console 'Buddy barks.'.