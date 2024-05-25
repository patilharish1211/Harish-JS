class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());

/* The getColor() method is defined in the Shape class and returns the color property of the object. The ColoredCircle class extends the Circle class, which in turn extends the Shape class. Therefore, the ColoredCircle class inherits the getColor() method from the Shape class.

When you create a new instance of the ColoredCircle class with the color 'blue' and radius 5, and then call the getColor() method on it, it returns the color of the object, which is 'blue'. */