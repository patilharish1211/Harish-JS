    // Question 2: Multiple Levels of Inheritance


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



// Output:
// blue


/* Explanation:
    --> Define 3 class => 1) Shape, 2) Circle, and 3) ColoredCircle.

/* 1) The Shape class is the parent class, which has a constructor that initializes the color property and a method getColor() that returns the color of the shape.

   2) The Circle class extends the Shape class. It has a constructor that takes both color and radius parameters, and it calls the super() method to call the constructor of the parent class (Shape). It sets the radius property specific to circles.

   3) The ColoredCircle class extends the Circle class. It doesn't add any new properties or methods but simply calls the constructor of its immediate superclass (Circle) using 

*/