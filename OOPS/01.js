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

/*
explanation:

!) Animal Class: This is the base class representing an animal. It has a constructor that takes a name parameter and assigns it to the instance variable this.name. It also has a speak() method that logs a generic noise message using the animal's name.
2) Dog Class (extends Animal): This is a subclass of the Animal class. It inherits from Animal using the extends keyword. It overrides the speak() method inherited from Animal with its own implementation, which logs a message indicating that the dog barks.
3) Instance Creation: An instance of the Dog class named dog is created with the name "Buddy".
4)Method Invocation: The speak() method of the dog instance is called. Since Dog class overrides the speak() method of the Animal class, it logs "Buddy barks." instead of the generic "Buddy makes a noise." message.

*/