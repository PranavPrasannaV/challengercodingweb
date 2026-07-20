export const java2Lesson2 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="tutorial-title">Java 2 Guided Tutorials - Week 2: Classes and OOP Basics</h1>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    Welcome to Week 2 of Java 2! This week, we'll dive into the world of classes and object-oriented programming (OOP). We'll start with the basics of what a class is and how to create one, then move on to more advanced concepts.
                </p>
                <div class="highlight-box">
                    <h3 class="text-xl font-semibold mb-2">Lesson Overview:</h3>
                    <ul class="list-disc list-inside">
                        <li>Introduction to Classes</li>
                        <li>Creating a Class</li>
                        <li>Constructors</li>
                        <li>Instance vs Static Methods</li>
                        <li>OOP Basics (Encapsulation, Inheritance, Polymorphism)</li>
                        <li>Quiz to test your knowledge</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="tutorial-text">
                    By the end of this week, you'll have a solid understanding of classes and basic object-oriented programming concepts in Java. Let's get started!
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Introduction to Classes",
        content: `
            <h1 class="tutorial-title">1. Introduction to Classes</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What is a Class?</h3>
                <p class="tutorial-text">
                    In Java, a class is a blueprint for creating objects. It defines a data structure that contains data fields (attributes) and methods to work with that data. Think of a class as a template for creating objects of a specific type.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Classes are used to create objects</li>
                        <li>They encapsulate data and behavior</li>
                        <li>Classes are the foundation of object-oriented programming</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a simple example of a class:</p>
                <pre><code>public class Car {
    // Attributes (instance variables)
    String make;
    String model;
    int year;

    // Method
    public void startEngine() {
        System.out.println("The " + make + " " + model + " is starting.");
    }
}</code></pre>
                <p class="tutorial-text">In this example, <code>Car</code> is a class with three attributes (<code>make</code>, <code>model</code>, and <code>year</code>) and one method (<code>startEngine</code>).</p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Creating a Class",
        content: `
            <h1 class="tutorial-title">2. Creating a Class</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">How to Create a Class</h3>
                <p class="tutorial-text">Let's create a simple class step by step:</p>
                <div class="step-box">
                    <p><span class="step-number">1</span> Start with the class keyword, followed by the class name:</p>
                    <pre><code>public class Student {
    // Class body goes here
}</code></pre>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add attributes (instance variables):</p>
                    <pre><code>public class Student {
    String name;
    int age;
    double gpa;
}</code></pre>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Add methods:</p>
                    <pre><code>public class Student {
    String name;
    int age;
    double gpa;

    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }

    public void study() {
        System.out.println(name + " is studying hard!");
    }
}</code></pre>
                </div>
                <p class="tutorial-text">Now you have a complete <code>Student</code> class with attributes and methods!</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Try it Yourself</h4>
                    <p>Create a <code>Book</code> class with attributes for title, author, and number of pages. Add a method to display the book's information. Use the compiler below to write your code, then paste the output in the autograder to check your work.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, Pages: 180"
    },
    {
        title: "Constructors",
        content: `
            <h1 class="tutorial-title">3. Constructors</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What are Constructors?</h3>
                <p class="tutorial-text">
                    A constructor is a special method used to initialize objects. It's called when an object of a class is created and can be used to set initial values for object attributes.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Constructors have the same name as the class</li>
                        <li>They don't have a return type (not even void)</li>
                        <li>If you don't create a constructor, Java provides a default no-argument constructor</li>
                    </ul>
                </div>
                <p class="tutorial-text">Let's add a constructor to our Student class:</p>
                <pre><code>public class Student {
    String name;
    int age;
    double gpa;

    // Constructor
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }

    public void study() {
        System.out.println(name + " is studying hard!");
    }
}</code></pre>
                <p class="tutorial-text">Now we can create a Student object like this:</p>
                <pre><code>Student alice = new Student("Alice", 20, 3.8);</code></pre>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Try it Yourself</h4>
                    <p>Modify your Book class to include a constructor. Create a Book object and call the method to display its information. Use the compiler to test your code.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281"
    },
    {
        title: "Instance vs Static Methods",
        content: `
            <h1 class="tutorial-title">4. Instance vs Static Methods</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding Method Types</h3>
                <p class="tutorial-text">
                    In Java, methods can be either instance methods or static methods. Understanding the difference is crucial for proper object-oriented programming.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Instance Methods:</h4>
                    <ul class="list-disc list-inside">
                        <li>Belong to the instance of the class</li>
                        <li>Can access instance variables</li>
                        <li>Called on objects of the class</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Static Methods:</h4>
                    <ul class="list-disc list-inside">
                        <li>Belong to the class itself, not any specific instance</li>
                        <li>Cannot access instance variables directly</li>
                        <li>Called on the class itself</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example illustrating both types:</p>
                <pre><code>public class MathOperations {
    // Instance variable
    private int value;

    // Constructor
    public MathOperations(int value) {
        this.value = value;
    }

    // Instance method
    public int square() {
        return value * value;
    }

    // Static method
    public static int add(int a, int b) {
        return a + b;
    }
}

// Usage:
MathOperations math = new MathOperations(5);
System.out.println(math.square());  // Outputs: 25

System.out.println(MathOperations.add(3, 4));  // Outputs: 7</code></pre>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Try it Yourself</h4>
                    <p>Modify your Book class to include both an instance method and a static method. The instance method could calculate the reading time based on the number of pages, while the static method could compare two books' page counts. Use the compiler to test your code.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Reading time: 3.0 hours\nThe longer book is: War and Peace"
    },
    {
        title: "OOP Basics",
        content: `
            <h1 class="tutorial-title">5. OOP Basics</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Object-Oriented Programming Fundamentals</h3>
                <p class="tutorial-text">
                    Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" which can contain data and code. The main principles of OOP are:
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">1. Encapsulation:</h4>
                    <p>Bundling of data and the methods that operate on that data within a single unit (class). It restricts direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the methods and data.</p>
                    <pre><code>public class BankAccount {
    private double balance;  // private - encapsulated

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}</code></pre>
                </div>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">2. Inheritance:</h4>
                    <p>A mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.</p>
                    <pre><code>public class Animal {
    public void eat() {
        System.out.println("This animal eats food.");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println("The dog barks.");
    }
}</code></pre>
                </div>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">3. Polymorphism:</h4>
                    <p>The provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types.</p>
                    <pre><code>public class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows");
    }
}

// Usage:
Animal myDog = new Dog();
Animal myCat = new Cat();
myDog.makeSound();  // Outputs: The dog barks
myCat.makeSound();  // Outputs: The cat meows</code></pre>
                </div>
                <p class="tutorial-text">These principles form the core of OOP and help in creating more organized, flexible, and maintainable code.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Try it Yourself</h4>
                    <p>Create a simple class hierarchy demonstrating inheritance and polymorphism. For example, create a Shape class with subclasses like Circle and Rectangle. Include a method to calculate area in each class. Use the compiler to test your implementation.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Circle area: 78.54\nRectangle area: 24.00"
    },
    {
        title: "Quiz",
        content: `
            <h1 class="tutorial-title">6. Classes and OOP Quiz</h1>
            <div class="quiz-container">
                <form id="quizForm">
                    <div class="question">
                        <p class="quiz-question">1. What is the purpose of a constructor in Java?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="a" id="q1a">
                                <label for="q1a">To initialize the object's state</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="b" id="q1b">
                                <label for="q1b">To destroy the object when it's no longer needed</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="c" id="q1c">
                                <label for="q1c">To define the class methods</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">2. Which of the following is a principle of OOP?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="a" id="q2a">
                                <label for="q2a">Encapsulation</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="b" id="q2b">
                                <label for="q2b">Fragmentation</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="c" id="q2c">
                                <label for="q2c">Centralization</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">3. What is the difference between an instance method and a static method?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="a" id="q3a">
                                <label for="q3a">Instance methods can access instance variables, static methods cannot</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="b" id="q3b">
                                <label for="q3b">Static methods can access instance variables, instance methods cannot</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="c" id="q3c">
                                <label for="q3c">There is no difference between instance and static methods</label>
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
                question: '1. What is the purpose of a constructor in Java?',
                options: [
                    { label: 'To initialize the object\'s state', value: 'a' },
                    { label: 'To destroy the object when it\'s no longer needed', value: 'b' },
                    { label: 'To define the class methods', value: 'c' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '2. Which of the following is a principle of OOP?',
                options: [
                    { label: 'Encapsulation', value: 'a' },
                    { label: 'Fragmentation', value: 'b' },
                    { label: 'Centralization', value: 'c' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '3. What is the difference between an instance method and a static method?',
                options: [
                    { label: 'Instance methods can access instance variables, static methods cannot', value: 'a' },
                    { label: 'Static methods can access instance variables, instance methods cannot', value: 'b' },
                    { label: 'There is no difference between instance and static methods', value: 'c' }
                ],
                correctAnswer: 'a'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
            <h1 class="tutorial-title">7. Weekly Project: Library Management System</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">For this week's project, you'll create a simple Library Management System using the OOP concepts we've learned.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Create a Book class with attributes like title, author, ISBN, and availability status</li>
                        <li>Create a Library class that manages a collection of Book objects</li>
                        <li>Implement methods in the Library class to add books, remove books, and check out/return books</li>
                        <li>Use encapsulation to protect the book's data</li>
                        <li>Implement a simple menu system for user interaction</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a template to get you started:</p>
                <pre><code>import java.util.ArrayList;
import java.util.Scanner;

class Book {
    // TODO: Implement Book class
}

class Library {
    // TODO: Implement Library class
}

public class LibraryManagementSystem {
    public static void main(String[] args) {
        Library library = new Library();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n1. Add Book");
            System.out.println("2. Remove Book");
            System.out.println("3. Check Out Book");
            System.out.println("4. Return Book");
            System.out.println("5. Display All Books");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline

            switch (choice) {
                case 1:
                    // TODO: Implement add book
                    break;
                case 2:
                    // TODO: Implement remove book
                    break;
                case 3:
                    // TODO: Implement check out book
                    break;
                case 4:
                    // TODO: Implement return book
                    break;
                case 5:
                    // TODO: Implement display all books
                    break;
                case 6:
                    System.out.println("Thank you for using the Library Management System!");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}</code></pre>
                <p class="tutorial-text">Implement the missing parts of the Book and Library classes, and complete the menu system. Use the online compiler to write and test your code. Once you're satisfied with your program, paste a sample output of adding a book, checking it out, and returning it in the autograder to check your work.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Book added: The Great Gatsby\nBook checked out: The Great Gatsby\nBook returned: The Great Gatsby"
    }
];
