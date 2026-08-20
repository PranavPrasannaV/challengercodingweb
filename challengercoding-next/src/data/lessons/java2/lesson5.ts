export const java2Lesson5 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="tutorial-title">Java 2 Guided Tutorials - Week 5: Polymorphism</h2>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    Welcome to Week 5 of Java 2! This week, we'll explore polymorphism, a powerful concept in object-oriented programming. Polymorphism allows objects of different types to be treated as objects of a common superclass or interface, enabling more flexible and reusable code.
                </p>
                <div class="highlight-box">
                    <h3 class="text-xl font-semibold mb-2">Lesson Overview:</h3>
                    <ul class="list-disc list-inside">
                        <li>Understanding Polymorphism</li>
                        <li>Method Overriding</li>
                        <li>Runtime Polymorphism</li>
                        <li>Polymorphism with Interfaces</li>
                        <li>Abstract Classes and Polymorphism</li>
                        <li>Quiz to test your knowledge</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="tutorial-text">
                    By the end of this week, you'll have a solid understanding of polymorphism and how to use it effectively in your Java programs. Let's get started!
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Understanding Polymorphism",
        content: `
            <h2 class="tutorial-title">1. Understanding Polymorphism</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What is Polymorphism?</h3>
                <p class="tutorial-text">
                    Polymorphism is a fundamental concept in object-oriented programming that allows objects of different types to be treated as objects of a common superclass. The word "polymorphism" means "many forms," and in Java, it refers to the ability of a single interface to represent different underlying forms (data types or classes).
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Polymorphism allows you to write more flexible and reusable code</li>
                        <li>It enables you to perform a single action in different ways</li>
                        <li>In Java, polymorphism is often achieved through method overriding and interfaces</li>
                        <li>It's closely related to inheritance and interfaces</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a simple example to illustrate the concept of polymorphism:</p>
                <pre><code>class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myAnimal.makeSound();
        myDog.makeSound();
        myCat.makeSound();
    }
}</code></pre>
                <p class="tutorial-text">In this example, we have a superclass <code>Animal</code> and two subclasses <code>Dog</code> and <code>Cat</code>. Each subclass overrides the <code>makeSound()</code> method. When we create objects of these classes and call the <code>makeSound()</code> method, the appropriate version of the method is called based on the actual object type, not the reference type. This is polymorphism in action.</p>
                <p class="tutorial-text">Try running this code in the compiler below and observe how polymorphism allows different objects to respond to the same method call in different ways.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "The animal makes a sound\nThe dog barks\nThe cat meows"
    },
    {
        title: "Method Overriding",
        content: `
            <h2 class="tutorial-title">2. Method Overriding</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding Method Overriding</h3>
                <p class="tutorial-text">
                    Method overriding is a key mechanism for achieving polymorphism in Java. It allows a subclass to provide a specific implementation of a method that is already defined in its superclass.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>The method in the subclass must have the same name and signature as the method in the superclass</li>
                        <li>The @Override annotation is recommended (but not required) to indicate an overridden method</li>
                        <li>Overriding methods can't have a more restrictive access modifier</li>
                        <li>Static and final methods can't be overridden</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating method overriding:</p>
                <pre><code>class Shape {
    public double calculateArea() {
        return 0;
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double calculateArea() {
        return length * width;
    }
}

public class MethodOverridingExample {
    public static void main(String[] args) {
        Shape shape = new Shape();
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 6);

        System.out.println("Shape area: " + shape.calculateArea());
        System.out.println("Circle area: " + circle.calculateArea());
        System.out.println("Rectangle area: " + rectangle.calculateArea());
    }
}</code></pre>
                <p class="tutorial-text">In this example, both <code>Circle</code> and <code>Rectangle</code> override the <code>calculateArea()</code> method from the <code>Shape</code> class. When we call <code>calculateArea()</code> on each object, the appropriate version of the method is called based on the actual object type.</p>
                <p class="tutorial-text">Try running this code in the compiler and observe how method overriding allows each shape to calculate its area differently. Can you add another shape, like a Triangle, and override its <code>calculateArea()</code> method?</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Shape area: 0.0\nCircle area: 78.53981633974483\nRectangle area: 24.0"
    },
    {
        title: "Runtime Polymorphism",
        content: `
            <h2 class="tutorial-title">3. Runtime Polymorphism</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding Runtime Polymorphism</h3>
                <p class="tutorial-text">
                    Runtime polymorphism, also known as dynamic method dispatch, is a process in which a call to an overridden method is resolved at runtime rather than at compile time. This is one of the most powerful features of object-oriented programming.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>It's achieved through method overriding</li>
                        <li>The method to be executed is determined by the object being referred to at runtime</li>
                        <li>It allows you to write flexible and extensible code</li>
                        <li>It's the basis for the "program to an interface, not an implementation" principle</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating runtime polymorphism:</p>
                <pre><code>class Vehicle {
    public void move() {
        System.out.println("Vehicle is moving");
    }
}

class Car extends Vehicle {
    @Override
    public void move() {
        System.out.println("Car is driving");
    }
}

class Bicycle extends Vehicle {
    @Override
    public void move() {
        System.out.println("Bicycle is pedaling");
    }
}

class Boat extends Vehicle {
    @Override
    public void move() {
        System.out.println("Boat is sailing");
    }
}

public class RuntimePolymorphismExample {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[3];
        vehicles[0] = new Car();
        vehicles[1] = new Bicycle();
        vehicles[2] = new Boat();

        for (Vehicle vehicle : vehicles) {
            vehicle.move();
        }
    }
}</code></pre>
                <p class="tutorial-text">In this example, we have a <code>Vehicle</code> superclass and several subclasses. We create an array of <code>Vehicle</code> objects, but each element is actually a different subclass. When we call the <code>move()</code> method on each object, the appropriate version of the method is called based on the actual object type at runtime.</p>
                <p class="tutorial-text">Try running this code in the compiler. Can you add another vehicle type and see how it fits into the polymorphic structure without changing the main method?</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Car is driving\nBicycle is pedaling\nBoat is sailing"
    },
    {
        title: "Polymorphism with Interfaces",
        content: `
            <h2 class="tutorial-title">4. Polymorphism with Interfaces</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using Interfaces for Polymorphism</h3>
                <p class="tutorial-text">
                    Interfaces provide another way to achieve polymorphism in Java. An interface defines a contract of methods that a class must implement, allowing for a high degree of abstraction and flexibility in your code.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Interfaces define a set of abstract methods</li>
                        <li>Classes that implement an interface must provide implementations for all its methods</li>
                        <li>A class can implement multiple interfaces</li>
                        <li>Interfaces enable you to program to a contract rather than an implementation</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating polymorphism with interfaces:</p>
                <pre><code>interface Drawable {
    void draw();
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}

class Triangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a triangle");
    }
}

public class InterfacePolymorphismExample {
    public static void drawShape(Drawable shape) {
        shape.draw();
    }

    public static void main(String[] args) {
        Drawable circle = new Circle();
        Drawable rectangle = new Rectangle();
        Drawable triangle = new Triangle();

        drawShape(circle);
        drawShape(rectangle);
        drawShape(triangle);
    }
}</code></pre>
                <p class="tutorial-text">In this example, we define a <code>Drawable</code> interface and several classes that implement it. The <code>drawShape</code> method takes a <code>Drawable</code> object as a parameter, allowing it to work with any class that implements the <code>Drawable</code> interface. This is polymorphism through interfaces.</p>
                <p class="tutorial-text">Try running this code in the compiler. Can you add another shape that implements the <code>Drawable</code> interface? How does this approach differ from using inheritance for polymorphism?</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Drawing a circle\nDrawing a rectangle\nDrawing a triangle"
    },
    {
        title: "Abstract Classes and Polymorphism",
        content: `
            <h2 class="tutorial-title">5. Abstract Classes and Polymorphism</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using Abstract Classes for Polymorphism</h3>
                <p class="tutorial-text">
                    Abstract classes provide a way to achieve polymorphism while also allowing for some implementation details to be shared among subclasses. An abstract class is a class that cannot be instantiated and may contain abstract methods (methods without a body) that must be implemented by its subclasses.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Abstract classes can have both abstract and concrete methods</li>
                        <li>Subclasses of an abstract class must implement all its abstract methods</li>
                        <li>Abstract classes can have constructors and instance variables</li>
                        <li>They provide a common interface while allowing for some shared implementation</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating polymorphism with abstract classes:</p>
                <pre><code>abstract class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public abstract void makeSound();

    public void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(name + " barks");
    }
}

class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(name + " meows");
    }
}

public class AbstractClassPolymorphismExample {
    public static void main(String[] args) {
        Animal dog = new Dog("Buddy");
        Animal cat = new Cat("Whiskers");

        dog.makeSound();
        dog.eat();

        cat.makeSound();
        cat.eat();
    }
}</code></pre>
                <p class="tutorial-text">In this example, we have an abstract <code>Animal</code> class with an abstract <code>makeSound()</code> method and a concrete <code>eat()</code> method. The <code>Dog</code> and <code>Cat</code> classes extend <code>Animal</code> and provide their own implementations of <code>makeSound()</code>. This allows for polymorphic behavior while also sharing common functionality through the abstract class.</p>
                <p class="tutorial-text">Try running this code in the compiler. Can you add another animal type that extends the Animal class? How does using an abstract class compare to using an interface in this scenario?</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Buddy barks\nBuddy is eating\nWhiskers meows\nWhiskers is eating"
    },
    {
        title: "Quiz",
        content: `
            <h2 class="tutorial-title">6. Polymorphism Quiz</h2>
<div class="question">
                        <p class="quiz-question">2. Which of the following is NOT a way to achieve polymorphism in Java?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="a" id="q2a">
                                <label for="q2a">Method overriding</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="b" id="q2b">
                                <label for="q2b">Interfaces</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="c" id="q2c">
                                <label for="q2c">Method overloading</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">3. What is runtime polymorphism?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="a" id="q3a">
                                <label for="q3a">Polymorphism achieved through method overloading</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="b" id="q3b">
                                <label for="q3b">Polymorphism achieved through method overriding and resolved at runtime</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="c" id="q3c">
                                <label for="q3c">Polymorphism achieved through interfaces and resolved at compile time</label>
                            </li>
                        </ul>
                    </div>
                </form>
                <button class="button mt-4">Submit Quiz</button>
                <p id="quizResult" class="quiz-feedback"></p>
            </div>
        `,
        quiz: [
            {
                question: '1. What is polymorphism in Java?',
                options: [
                    { label: 'The ability to create multiple objects', value: 'a' },
                    { label: 'The ability of an object to take on many forms', value: 'b' },
                    { label: 'The process of creating a new class from an existing class', value: 'c' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '2. Which of the following is NOT a way to achieve polymorphism in Java?',
                options: [
                    { label: 'Method overriding', value: 'a' },
                    { label: 'Interfaces', value: 'b' },
                    { label: 'Method overloading', value: 'c' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '3. What is runtime polymorphism?',
                options: [
                    { label: 'Polymorphism achieved through method overloading', value: 'a' },
                    { label: 'Polymorphism achieved through method overriding and resolved at runtime', value: 'b' },
                    { label: 'Polymorphism achieved through interfaces and resolved at compile time', value: 'c' }
                ],
                correctAnswer: 'b'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
            <h2 class="tutorial-title">7. Weekly Project: Shape Calculator</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">For this week's project, you'll create a Shape Calculator that demonstrates polymorphism. You'll implement various shapes and calculate their areas and perimeters using polymorphic methods.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Create an abstract Shape class with abstract methods for calculating area and perimeter</li>
                        <li>Implement at least three different shape classes (e.g., Circle, Rectangle, Triangle) that extend the Shape class</li>
                        <li>Create a ShapeCalculator class that can work with any shape</li>
                        <li>Demonstrate polymorphism by creating an array of shapes and performing calculations on them</li>
                        <li>Implement error handling for invalid inputs</li>
                        <li>Add a simple menu-driven interface for user interaction</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a template to get you started:</p>
                <pre><code>import java.util.Scanner;

abstract class Shape {
    abstract double calculateArea();
    abstract double calculatePerimeter();
}

class Circle extends Shape {
    // Implement Circle class
}

class Rectangle extends Shape {
    // Implement Rectangle class
}

class Triangle extends Shape {
    // Implement Triangle class
}

class ShapeCalculator {
    public void printShapeDetails(Shape shape) {
        System.out.println("Area: " + shape.calculateArea());
        System.out.println("Perimeter: " + shape.calculatePerimeter());
    }
}

public class ShapeCalculatorApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ShapeCalculator calculator = new ShapeCalculator();
        Shape[] shapes = new Shape[3];

        while (true) {
            System.out.println("\\n1. Create Circle");
            System.out.println("2. Create Rectangle");
            System.out.println("3. Create Triangle");
            System.out.println("4. Calculate for all shapes");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    // TODO: Create Circle
                    break;
                case 2:
                    // TODO: Create Rectangle
                    break;
                case 3:
                    // TODO: Create Triangle
                    break;
                case 4:
                    // TODO: Calculate for all shapes
                    break;
                case 5:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}</code></pre>
                <p class="tutorial-text">Implement the missing parts of the Shape classes and the calculator logic. Use the online compiler to write and test your code. Once you're satisfied with your program, paste a sample output showing the calculations for different shapes in the autograder to check your work.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Shape: Circle\nArea: 78.54\nPerimeter: 31.42\nShape: Rectangle\nArea: 24.00\nPerimeter: 20.00\nShape: Triangle\nArea: 6.00\nPerimeter: 12.00"
    }
];
