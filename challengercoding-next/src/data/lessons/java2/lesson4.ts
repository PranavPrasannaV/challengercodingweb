export const java2Lesson4 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="tutorial-title">Java 2 Guided Tutorials - Week 4: Inheritance</h1>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    Welcome to Week 4 of Java 2! This week, we'll explore inheritance, a fundamental concept in object-oriented programming. Inheritance allows us to create new classes based on existing classes, promoting code reuse and establishing a hierarchy among classes.
                </p>
                <div class="highlight-box">
                    <h3 class="text-xl font-semibold mb-2">Lesson Overview:</h3>
                    <ul class="list-disc list-inside">
                        <li>Understanding Inheritance</li>
                        <li>Types of Inheritance in Java</li>
                        <li>The 'extends' Keyword</li>
                        <li>Method Overriding</li>
                        <li>The 'super' Keyword</li>
                        <li>Quiz to test your knowledge</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="tutorial-text">
                    By the end of this week, you'll have a solid understanding of inheritance and how to use it effectively in your Java programs. Let's get started!
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Understanding Inheritance",
        content: `
            <h1 class="tutorial-title">1. Understanding Inheritance</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What is Inheritance?</h3>
                <p class="tutorial-text">
                    Inheritance is a mechanism in which one class acquires the properties (methods and fields) of another. It's a way to establish a relationship between classes, where a new class is created based on an existing class.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Inheritance promotes code reuse</li>
                        <li>It establishes an "is-a" relationship between classes</li>
                        <li>The class being inherited from is called the superclass or parent class</li>
                        <li>The class that inherits is called the subclass or child class</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a simple example of inheritance:</p>
                <pre><code>// Parent class
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();  // Inherited method
        myDog.bark(); // Dog's own method
    }
}</code></pre>
                <p class="tutorial-text">In this example, <code>Dog</code> inherits from <code>Animal</code>, so it can use the <code>eat()</code> method defined in <code>Animal</code>.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "This animal eats food\nThe dog barks"
    },
    {
        title: "Types of Inheritance",
        content: `
            <h1 class="tutorial-title">2. Types of Inheritance</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Different Types of Inheritance</h3>
                <p class="tutorial-text">
                    Java supports several types of inheritance, although some are achieved through interfaces rather than direct class inheritance.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Types of Inheritance in Java:</h4>
                    <ul class="list-disc list-inside">
                        <li><strong>Single Inheritance:</strong> A class inherits from one superclass</li>
                        <li><strong>Multilevel Inheritance:</strong> A class inherits from a class, which in turn inherits from another class</li>
                        <li><strong>Hierarchical Inheritance:</strong> Multiple classes inherit from a single superclass</li>
                        <li><strong>Multiple Inheritance:</strong> Not supported directly for classes, but can be achieved using interfaces</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating multilevel inheritance:</p>
                <pre><code>class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

class Mammal extends Animal {
    void breathe() {
        System.out.println("This mammal breathes air");
    }
}

class Dog extends Mammal {
    void bark() {
        System.out.println("The dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();    // From Animal
        myDog.breathe(); // From Mammal
        myDog.bark();    // From Dog
    }
}</code></pre>
                <p class="tutorial-text">Try creating a class hierarchy demonstrating hierarchical inheritance. Create a base class <code>Vehicle</code> and two subclasses <code>Car</code> and <code>Motorcycle</code>. Use the compiler to implement and test your code.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Vehicle started\nCar is driving\nMotorcycle is riding"
    },
    {
        title: "The 'extends' Keyword",
        content: `
            <h1 class="tutorial-title">3. The 'extends' Keyword</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using 'extends' for Inheritance</h3>
                <p class="tutorial-text">
                    In Java, we use the <code>extends</code> keyword to create a subclass that inherits from a superclass. This keyword establishes the inheritance relationship between two classes.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>The <code>extends</code> keyword is used in the class declaration</li>
                        <li>It indicates that the new class is inheriting from an existing class</li>
                        <li>A class can only extend one other class (single inheritance for classes)</li>
                        <li>The subclass inherits all non-private members of the superclass</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example using the <code>extends</code> keyword:</p>
                <pre><code>class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle");
    }
}

class Square extends Shape {
    void draw() {
        System.out.println("Drawing a square");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape = new Shape();
        Circle circle = new Circle();
        Square square = new Square();

        shape.draw();
        circle.draw();
        square.draw();
    }
}</code></pre>
                <p class="tutorial-text">In this example, both <code>Circle</code> and <code>Square</code> extend <code>Shape</code>, inheriting its properties and methods. Try modifying this example by adding a new shape, like <code>Triangle</code>, and implement its <code>draw()</code> method. Use the compiler to test your code.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Drawing a shape\nDrawing a circle\nDrawing a square\nDrawing a triangle"
    },
    {
        title: "Method Overriding",
        content: `
            <h1 class="tutorial-title">4. Method Overriding</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding Method Overriding</h3>
                <p class="tutorial-text">
                    Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. This is a key aspect of runtime polymorphism in Java.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>The method in the subclass must have the same name and signature as in the superclass</li>
                        <li>The <code>@Override</code> annotation is recommended (but not required) to indicate an overridden method</li>
                        <li>Overriding methods can't have a more restrictive access modifier</li>
                        <li>Static and final methods can't be overridden</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example of method overriding:</p>
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

public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal dog = new Dog();
        Animal cat = new Cat();

        animal.makeSound();
        dog.makeSound();
        cat.makeSound();
    }
}</code></pre>
                <p class="tutorial-text">In this example, both <code>Dog</code> and <code>Cat</code> override the <code>makeSound()</code> method from the <code>Animal</code> class. Try adding a new animal, like <code>Cow</code>, and override its <code>makeSound()</code> method. Use the compiler to implement and test your code.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "The animal makes a sound\nThe dog barks\nThe cat meows\nThe cow moos"
    },
    {
        title: "The 'super' Keyword",
        content: `
            <h1 class="tutorial-title">5. The 'super' Keyword</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using the 'super' Keyword</h3>
                <p class="tutorial-text">
                    The <code>super</code> keyword in Java is used to refer to the superclass (parent) of the current class. It can be used to call superclass methods, access superclass fields, and invoke superclass constructors.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Uses of 'super' Keyword:</h4>
                    <ul class="list-disc list-inside">
                        <li>To call a superclass method</li>
                        <li>To access a superclass field</li>
                        <li>To invoke a superclass constructor</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating the use of <code>super</code>:</p>
                <pre><code>class Animal {
    String name = "Animal";

    Animal() {
        System.out.println("Animal constructor called");
    }

    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    String name = "Dog";

    Dog() {
        super(); // Call to superclass constructor
        System.out.println("Dog constructor called");
    }

    void printName() {
        System.out.println("Local name: " + name);
        System.out.println("Superclass name: " + super.name);
    }

    @Override
    void eat() {
        super.eat(); // Call to superclass method
        System.out.println("Dog is eating");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.printName();
        myDog.eat();
    }
}</code></pre>
                <p class="tutorial-text">In this example, we use <code>super</code> to call the superclass constructor, access a superclass field, and call a superclass method. Try modifying this example by adding a new method in the <code>Animal</code> class and use <code>super</code> to call it from a method in the <code>Dog</code> class. Use the compiler to implement and test your code.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Animal constructor called\nDog constructor called\nLocal name: Dog\nSuperclass name: Animal\nAnimal is eating\nDog is eating"
    },
    {
        title: "Quiz",
        content: `
            <h1 class="tutorial-title">6. Inheritance Quiz</h1>
            <div class="quiz-container">
                <form id="quizForm">
                    <div class="question">
                        <p class="quiz-question">1. What keyword is used to inherit from a class in Java?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="a" id="q1a">
                                <label for="q1a">inherit</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="b" id="q1b">
                                <label for="q1b">extends</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="c" id="q1c">
                                <label for="q1c">implements</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">2. What is the purpose of the 'super' keyword in Java?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="a" id="q2a">
                                <label for="q2a">To create a new instance of the superclass</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="b" id="q2b">
                                <label for="q2b">To refer to the superclass of the current class</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="c" id="q2c">
                                <label for="q2c">To define a superclass</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">3. Which of the following is true about method overriding?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="a" id="q3a">
                                <label for="q3a">The overriding method must have the same name and parameters as the overridden method</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="b" id="q3b">
                                <label for="q3b">The overriding method can have a more restrictive access modifier</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="c" id="q3c">
                                <label for="q3c">Static methods can be overridden</label>
                            </li>
                        </ul>
                    </div>
                </form>
                <button onclick="submitQuiz()" class="button mt-4">Submit Quiz</button>
                <p id="quizResult" class="quiz-feedback"></p>
            </div>
        `,
        quiz: [
            {
                question: '1. What keyword is used to inherit from a class in Java?',
                options: [
                    { label: 'inherit', value: 'a' },
                    { label: 'extends', value: 'b' },
                    { label: 'implements', value: 'c' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '2. What is the purpose of the \'super\' keyword in Java?',
                options: [
                    { label: 'To create a new instance of the superclass', value: 'a' },
                    { label: 'To refer to the superclass of the current class', value: 'b' },
                    { label: 'To define a superclass', value: 'c' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '3. Which of the following is true about method overriding?',
                options: [
                    { label: 'The overriding method must have the same name and parameters as the overridden method', value: 'a' },
                    { label: 'The overriding method can have a more restrictive access modifier', value: 'b' },
                    { label: 'Static methods can be overridden', value: 'c' }
                ],
                correctAnswer: 'a'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
            <h1 class="tutorial-title">7. Weekly Project: Shape Hierarchy</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">For this week's project, you'll create a shape hierarchy using inheritance. This will help reinforce the concepts of inheritance, method overriding, and the use of the <code>super</code> keyword.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Create a base class called <code>Shape</code> with methods for calculating area and perimeter</li>
                        <li>Create subclasses for at least three different shapes (e.g., Circle, Rectangle, Triangle)</li>
                        <li>Override the area and perimeter calculation methods in each subclass</li>
                        <li>Use the <code>super</code> keyword to call the superclass constructor</li>
                        <li>Implement a method to display information about each shape</li>
                        <li>In the main method, create instances of different shapes and demonstrate polymorphism</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a template to get you started:</p>
                <pre><code>abstract class Shape {
    String name;

    Shape(String name) {
        this.name = name;
    }

    abstract double calculateArea();
    abstract double calculatePerimeter();

    void displayInfo() {
        System.out.println("Shape: " + name);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
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

public class Main {
    public static void main(String[] args) {
        // Create instances of different shapes
        // Call methods to demonstrate inheritance and polymorphism
    }
}</code></pre>
                <p class="tutorial-text">Implement the missing parts of the Shape hierarchy. Create instances of different shapes, calculate their areas and perimeters, and display their information. Use the online compiler to write and test your code. Once you're satisfied with your program, paste a sample output showing the information for at least three different shapes in the autograder to check your work.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Shape: Circle\nArea: 78.54\nPerimeter: 31.42\nShape: Rectangle\nArea: 24.00\nPerimeter: 20.00\nShape: Triangle\nArea: 6.00\nPerimeter: 12.00"
    }
];
