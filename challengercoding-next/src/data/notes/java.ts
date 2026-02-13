import { SubLesson } from './types';

export const javaNotes: Record<string, SubLesson[]> = {
    '1': [
        {
            id: 'lesson0',
            title: 'Introduction to Java',
            video: null,
            description: `
                <h2>What is Java?</h2>
                <p>Java is a popular, versatile, and object-oriented programming language used for developing a wide range of applications.</p>

                <h3>Key Features of Java</h3>
                <ul>
                    <li><strong>Platform Independence:</strong> Write once, run anywhere (WORA)</li>
                    <li><strong>Object-Oriented:</strong> Based on the concept of objects containing data and code</li>
                    <li><strong>Simple:</strong> Easy to learn and understand</li>
                    <li><strong>Secure:</strong> Developed with built-in security features</li>
                    <li><strong>High Performance:</strong> Supports multithreading and is highly efficient</li>
                </ul>

                <h3>Java Development Kit (JDK)</h3>
                <p>To start programming in Java, you need to install the Java Development Kit (JDK). The JDK includes:</p>
                <ul>
                    <li>Java Runtime Environment (JRE)</li>
                    <li>Compiler (javac)</li>
                    <li>Debugger</li>
                    <li>Other development tools</li>
                </ul>

                <p>In the following lessons, we'll guide you through setting up your development environment and writing your first Java program.</p>
            `
        },
        {
            id: 'lesson1',
            title: 'Setting Up Java Environment',
            video: 'https://www.youtube.com/embed/placeholder_video_id',
            description: `
                <h2>Setting Up Your Java Development Environment</h2>
                <p>Before we can start coding, we need to set up our Java development environment. Follow these steps:</p>

                <h3>1. Download and Install JDK</h3>
                <ol>
                    <li>Visit the official Oracle website or adopt OpenJDK</li>
                    <li>Download the latest version of JDK for your operating system</li>
                    <li>Run the installer and follow the installation wizard</li>
                </ol>

                <h3>2. Set Up Environment Variables</h3>
                <p>To use Java from any directory in your command prompt or terminal:</p>
                <ul>
                    <li>Add JAVA_HOME to your system variables</li>
                    <li>Add %JAVA_HOME%\\bin to your PATH variable</li>
                </ul>

                <h3>3. Verify Installation</h3>
                <p>Open a command prompt or terminal and type:</p>
                <div class="example-box">
                    <code>
java -version
javac -version
                    </code>
                </div>
                <p>If you see version information, your Java environment is set up correctly!</p>

                <h3>4. Choose an Integrated Development Environment (IDE)</h3>
                <p>While you can write Java code in any text editor, an IDE can make development easier. Popular choices include:</p>
                <ul>
                    <li>IntelliJ IDEA</li>
                    <li>Eclipse</li>
                    <li>NetBeans</li>
                </ul>

                <p>In the next lesson, we'll write our first Java program!</p>
            `
        },
        {
            id: 'lesson2',
            title: 'Writing Your First Java Program',
            video: 'https://www.youtube.com/embed/placeholder_video_id',
            description: `
                <h2>Hello, World! in Java</h2>
                <p>Now that we have our environment set up, let's write our first Java program - the classic "Hello, World!"</p>

                <h3>The Code</h3>
                <div class="example-box">
                    <code>
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
                    </code>
                </div>

                <h3>Understanding the Code</h3>
                <ul>
                    <li><code>public class HelloWorld</code>: Defines a public class named HelloWorld</li>
                    <li><code>public static void main(String[] args)</code>: The main method, entry point of our program</li>
                    <li><code>System.out.println("Hello, World!");</code>: Prints the text to the console</li>
                </ul>

                <h3>Running the Program</h3>
                <ol>
                    <li>Save the file as <code>HelloWorld.java</code></li>
                    <li>Open a command prompt or terminal in the directory containing your file</li>
                    <li>Compile the program: <code>javac HelloWorld.java</code></li>
                    <li>Run the program: <code>java HelloWorld</code></li>
                </ol>

                <p>You should see "Hello, World!" printed in your console.</p>

                <h3>Key Points</h3>
                <ul>
                    <li>Java is case-sensitive</li>
                    <li>Every statement ends with a semicolon</li>
                    <li>The class name should match the file name</li>
                    <li>The main method is required for every Java program</li>
                </ul>

                <p>Congratulations! You've written and run your first Java program.</p>
            `
        },
        {
            id: 'lesson3',
            title: 'Java Syntax and Structure',
            video: 'https://www.youtube.com/embed/placeholder_video_id',
            description: `
                <h2>Understanding Java Syntax and Structure</h2>
                <p>Now that we've written our first program, let's dive deeper into Java's syntax and structure.</p>

                <h3>Basic Syntax Rules</h3>
                <ul>
                    <li>Java is case-sensitive</li>
                    <li>Class names should start with an uppercase letter</li>
                    <li>Method names should start with a lowercase letter</li>
                    <li>File name must match the class name (when the class is public)</li>
                </ul>

                <h3>Program Structure</h3>
                <div class="example-box">
                    <code>
// Package declaration (optional)
package com.example;

// Import statements (optional)
import java.util.Scanner;

// Class declaration
public class MyProgram {
    // Field declarations (optional)
    private int myField;

    // Constructor (optional)
    public MyProgram() {
        // Constructor code
    }

    // Method declarations
    public void myMethod() {
        // Method code
    }

    // Main method
    public static void main(String[] args) {
        // Program execution starts here
    }
}
                    </code>
                </div>

                <h3>Comments in Java</h3>
                <p>Java supports three types of comments:</p>
                <ul>
                    <li>Single-line comments: <code>// This is a single-line comment</code></li>
                    <li>Multi-line comments: <code>/* This is a multi-line comment */</code></li>
                    <li>Documentation comments: <code>/** This is a documentation comment */</code></li>
                </ul>

                <p>Understanding these basic syntax rules and program structure will help you write clean and organized Java code.</p>
            `
        }
    ],
    '2': [
        {
            id: 'overview',
            title: 'Lesson Overview',
            video: null,
            description: `
                <h2>Overview: Understanding Java Objects, Variables, and Data</h2>
                
                <h3>What are Objects, Variables, and Data?</h3>
                <p>Objects, variables, and data are fundamental concepts in Java programming. They form the building blocks of any Java application, allowing you to store, manipulate, and organize information in your programs.</p>

                <h3>Key Concepts</h3>
                <ul>
                    <li>
                        <strong>Variables</strong>
                        <ul>
                            <li>Variables are containers for storing data values</li>
                            <li>They have a specific type and name</li>
                            <li>Example declaration:
                                <div class="code-example">int age;</div>
                            </li>
                            <li>Example initialization:
                                <div class="code-example">int age = 25;</div>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <strong>Data Types</strong>
                        <ul>
                            <li>Java is a strongly-typed language, meaning every variable must have a declared type</li>
                            <li>Primitive types: int, double, boolean, char</li>
                            <li>Reference type: String</li>
                            <li>Example:
                                <div class="code-example">
int age = 25;
double height = 5.9;
boolean isStudent = true;
char grade = 'A';
String name = "Alice";</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Basic Operations</strong>
                        <ul>
                            <li>Arithmetic operations: +, -, *, /, %</li>
                            <li>String concatenation: +</li>
                            <li>Increment and decrement: ++, --</li>
                            <li>Example:
                                <div class="code-example">
int a = 5;
int b = 3;
int sum = a + b;  // Addition
String fullName = "John" + " " + "Doe";  // Concatenation
a++;  // Increment</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Printing Variables</strong>
                        <ul>
                            <li>Use System.out.println() for basic printing</li>
                            <li>Use System.out.printf() for formatted output</li>
                            <li>Examples:
                                <div class="code-example">
System.out.println("Age: " + age);
System.out.printf("Name: %s, Age: %d\n", name, age);</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Objects</strong>
                        <ul>
                            <li>Objects are instances of classes</li>
                            <li>They bundle related state and behavior</li>
                            <li>Created using the new keyword</li>
                            <li>Example:
                                <div class="code-example">
String greeting = new String("Hello, World!");
java.util.Date today = new java.util.Date();</div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>Why are these concepts important?</h3>
                <ul>
                    <li>They form the foundation of Java programming</li>
                    <li>Enable data storage and manipulation in programs</li>
                    <li>Allow for creation of complex, interactive applications</li>
                    <li>Essential for understanding object-oriented programming</li>
                </ul>

                <p>Select a lesson from the sidebar to dive deeper into each of these concepts!</p>
            `
        },
        {
            id: 'variables',
            title: 'Variables in Java',
            video: 'https://www.youtube.com/embed/N8LDSryePuc',
            description: `
                <h2>Understanding Variables in Java</h2>
                
                <p>Variables are fundamental to programming in Java. They allow us to store and manipulate data in our programs.</p>

                <h3>What is a Variable?</h3>
                <p>A variable is a container that holds a value. In Java, every variable has a specific type that determines what kind of data it can hold.</p>

                <h3>Declaring Variables</h3>
                <p>To declare a variable in Java, you specify its type and give it a name:</p>
                <div class="code-example">
int age;
String name;
double salary;</div>

                <h3>Initializing Variables</h3>
                <p>You can initialize a variable when you declare it, or later in your code:</p>
                <div class="code-example">
int age = 25;
String name = "John Doe";
double salary;
salary = 50000.50;</div>

                <h3>Variable Naming Rules</h3>
                <ul>
                    <li>Variable names are case-sensitive</li>
                    <li>They must begin with a letter, underscore (_), or dollar sign ($)</li>
                    <li>Subsequent characters may be letters, digits, underscores, or dollar signs</li>
                    <li>Convention is to use camelCase for variable names</li>
                </ul>

                <h3>Practice</h3>
                <p>Try declaring and initializing different types of variables. Experiment with naming conventions and try to use meaningful variable names in your code.</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>Variables are containers for storing data</li>
                    <li>Each variable in Java has a specific type</li>
                    <li>Variables must be declared before use</li>
                    <li>You can initialize variables at declaration or later in the code</li>
                    <li>Follow Java naming conventions for clear and readable code</li>
                </ul>
            `
        },
        {
            id: 'data-types',
            title: 'Data Types in Java',
            video: 'https://www.youtube.com/embed/UwpXXiGdlOE?si=VRev5VK0GucLtQvs',
            description: `
                <h2>Understanding Data Types in Java</h2>
                
                <p>Java is a strongly-typed language, which means every variable must have a declared data type. Understanding these types is crucial for effective Java programming.</p>

                <h3>Primitive Data Types</h3>
                <p>Java has eight primitive data types:</p>
                <ul>
                    <li><strong>byte</strong>: 8-bit signed two's complement integer</li>
                    <li><strong>short</strong>: 16-bit signed two's complement integer</li>
                    <li><strong>int</strong>: 32-bit signed two's complement integer</li>
                    <li><strong>long</strong>: 64-bit signed two's complement integer</li>
                    <li><strong>float</strong>: single-precision 32-bit IEEE 754 floating point</li>
                    <li><strong>double</strong>: double-precision 64-bit IEEE 754 floating point</li>
                    <li><strong>boolean</strong>: true or false</li>
                    <li><strong>char</strong>: single 16-bit Unicode character</li>
                </ul>

                <h3>Reference Data Types</h3>
                <p>Reference types are used to refer to objects. The most commonly used reference type is String.</p>
                <div class="code-example">
String greeting = "Hello, World!";</div>

                <h3>Examples</h3>
                <div class="code-example">
int age = 25;
double height = 5.9;
boolean isStudent = true;
char grade = 'A';
String name = "Alice";</div>

                <h3>Type Conversion</h3>
                <p>Java supports both implicit and explicit type conversion:</p>
                <div class="code-example">
int x = 5;
long y = x;  // Implicit conversion
int z = (int) y;  // Explicit conversion (casting)</div>

                <h3>Practice</h3>
                <p>Try declaring variables of different data types and perform operations on them. Experiment with type conversions and observe the results.</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>Java has 8 primitive data types and many reference types</li>
                    <li>Each data type has a specific size and range of values it can hold</li>
                    <li>Choosing the right data type is important for memory efficiency and preventing errors</li>
                    <li>Type conversion allows you to change a value from one data type to another</li>
                </ul>
            `
        },
        {
            id: 'objects',
            title: 'Objects in Java',
            video: 'https://www.youtube.com/embed/8yjkWGRlUmY',
            description: `
                <h2>Understanding Objects in Java</h2>
                
                <p>Objects are a fundamental concept in Java, as it is an object-oriented programming language. Understanding objects is key to mastering Java.</p>

                <h3>What is an Object?</h3>
                <p>An object is an instance of a class. It bundles related data and methods that operate on that data.</p>

                <h3>Creating Objects</h3>
                <p>Objects are created using the 'new' keyword:</p>
                <div class="code-example">
String greeting = new String("Hello, World!");
java.util.Date today = new java.util.Date();</div>

                <h3>Object Properties and Methods</h3>
                <p>Objects have properties (attributes) and methods (behaviors):</p>
                <div class="code-example">
String str = "Hello";
int length = str.length();  // length() is a method of String objects
char firstChar = str.charAt(0);  // charAt() is another method</div>

                <h3>The 'null' Value</h3>
                <p>'null' is a special value that indicates an object reference is not currently referring to any object:</p>
                <div class="code-example">
String str = null;
// str.length();  // This would cause a NullPointerException</div>

                <h3>Practice</h3>
                <p>Try creating objects of different classes (like String, Date, ArrayList). Experiment with calling methods on these objects and accessing their properties.</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>Objects are instances of classes</li>
                    <li>They bundle data (properties) and behavior (methods)</li>
                    <li>Objects are created using the 'new' keyword</li>
                    <li>Understanding objects is crucial for Java programming</li>
                    <li>Always check for 'null' before using an object to avoid NullPointerExceptions</li>
                </ul>
            `
        }
    ],
    '3': [
        {
            id: 'overview',
            title: 'Introduction to If Statements',
            video: null,
            description: `
                <h2>Overview: Understanding If Statements in Java</h2>
                
                <h3>What are If Statements?</h3>
                <p>If statements are fundamental control structures in Java that allow you to make decisions in your code. They enable your program to execute different blocks of code based on whether a specified condition is true or false.</p>

                <h3>Key Concepts</h3>
                <ul>
                    <li>
                        <strong>Basic If Statement</strong>
                        <ul>
                            <li>Executes a block of code if a condition is true</li>
                            <li>Example:
                                <div class="code-example">
if (condition) {
    // code to be executed if condition is true
}</div>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <strong>If-Else Statement</strong>
                        <ul>
                            <li>Provides an alternative block of code to execute if the condition is false</li>
                            <li>Example:
                                <div class="code-example">
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>If-Else If-Else Statement</strong>
                        <ul>
                            <li>Allows checking multiple conditions</li>
                            <li>Example:
                                <div class="code-example">
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if all conditions are false
}</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Nested If Statements</strong>
                        <ul>
                            <li>If statements inside other if statements</li>
                            <li>Example:
                                <div class="code-example">
if (outerCondition) {
    if (innerCondition) {
        // code to be executed if both conditions are true
    }
}</div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>Why are If Statements important?</h3>
                <ul>
                    <li>They allow programs to make decisions</li>
                    <li>Enable creation of more complex and interactive applications</li>
                    <li>Form the basis for more advanced control structures</li>
                    <li>Essential for implementing business logic and algorithms</li>
                </ul>

                <p>Select a lesson from the sidebar to dive deeper into each of these concepts!</p>
            `
        },
        {
            id: 'basic-if',
            title: 'Basic If Statements',
            video: 'https://www.youtube.com/embed/MY03bt_0JQI',
            description: `
                <h2>Understanding Basic If Statements in Java</h2>
                
                <p>The basic if statement is the simplest form of conditional statement in Java. It allows you to execute a block of code only if a specified condition is true.</p>

                <h3>Syntax of Basic If Statement</h3>
                <div class="code-example">
if (condition) {
    // code to be executed if condition is true
}</div>

                <h3>How It Works</h3>
                <ol>
                    <li>The condition inside the parentheses is evaluated.</li>
                    <li>If the condition is true, the code block inside the curly braces is executed.</li>
                    <li>If the condition is false, the code block is skipped.</li>
                </ol>

                <h3>Example</h3>
                <div class="code-example">
int age = 18;

if (age >= 18) {
    System.out.println("You are eligible to vote.");
}</div>

                <p>In this example, the message will be printed because the condition (age >= 18) is true.</p>

                <h3>Important Points</h3>
                <ul>
                    <li>The condition must be a boolean expression (evaluates to true or false).</li>
                    <li>If the code block contains only one statement, curly braces are optional (but recommended for clarity).</li>
                    <li>You can use any valid boolean expression as the condition, including method calls that return boolean values.</li>
                </ul>

                <h3>Practice</h3>
                <p>Try writing if statements with different conditions. Experiment with various comparison operators (==, !=, >, <, >=, <=) and logical operators (&&, ||, !).</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>Basic if statements allow conditional execution of code.</li>
                    <li>The condition must evaluate to a boolean value.</li>
                    <li>If statements are fundamental to creating decision-making logic in programs.</li>
                    <li>Always consider the readability of your code when using if statements.</li>
                    <li>Practice writing if statements to become comfortable with their usage.</li>
                </ul>
            `
        },
        {
            id: 'if-else',
            title: 'If-Else Statements',
            video: 'https://www.youtube.com/embed/MY03bt_0JQI',
            description: `
                <h2>Understanding If-Else Statements in Java</h2>
                
                <p>If-Else statements extend the basic if statement by providing an alternative block of code to execute when the condition is false.</p>

                <h3>Syntax of If-Else Statement</h3>
                <div class="code-example">
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}</div>

                <h3>How It Works</h3>
                <ol>
                    <li>The condition inside the parentheses is evaluated.</li>
                    <li>If the condition is true, the code block after the if is executed.</li>
                    <li>If the condition is false, the code block after the else is executed.</li>
                </ol>

                <h3>Example</h3>
                <div class="code-example">
int age = 15;

if (age >= 18) {
    System.out.println("You are eligible to vote.");
} else {
    System.out.println("You are not eligible to vote yet.");
}</div>

                <p>In this example, the second message will be printed because the condition (age >= 18) is false.</p>

                <h3>Important Points</h3>
                <ul>
                    <li>The else block is optional but provides a way to handle the false condition explicitly.</li>
                    <li>Only one of the two blocks (if or else) will be executed, never both.</li>
                    <li>You can chain multiple if-else statements for more complex conditions.</li>
                </ul>

                <h3>Practice</h3>
                <p>Try writing if-else statements for different scenarios. For example, check if a number is positive or negative, or determine if a year is a leap year.</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>If-Else statements provide two-way decision making in your code.</li>
                    <li>They improve code readability by explicitly handling both true and false conditions.</li>
                    <li>If-Else statements are fundamental for creating branching logic in programs.</li>
                    <li>Consider using if-else when you have two mutually exclusive code paths.</li>
                </ul>
            `
        },
        {
            id: 'if-else-if',
            title: 'If-Else If-Else Statements',
            video: 'https://www.youtube.com/embed/MY03bt_0JQI',
            description: `
                <h2>Understanding If-Else If-Else Statements in Java</h2>
                
                <p>If-Else If-Else statements allow you to check multiple conditions and execute different code blocks based on which condition is true.</p>

                <h3>Syntax of If-Else If-Else Statement</h3>
                <div class="code-example">
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else if (condition3) {
    // code to be executed if condition3 is true
} else {
    // code to be executed if all conditions are false
}</div>

                <h3>How It Works</h3>
                <ol>
                    <li>Each condition is evaluated in order.</li>
                    <li>If a condition is true, its corresponding code block is executed.</li>
                    <li>Once a true condition is found and its block executed, the rest of the conditions are skipped.</li>
                    <li>If none of the conditions are true, the else block (if present) is executed.</li>
                </ol>

                <h3>Example</h3>
                <div class="code-example">
int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else if (score >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: F");
}</div>

                <p>In this example, "Grade: B" will be printed because the score is 85.</p>

                <h3>Important Points</h3>
                <ul>
                    <li>You can have any number of else if clauses.</li>
                    <li>The else block is optional but provides a way to handle all other cases.</li>
                    <li>Only one block in the entire if-else if-else chain will be executed.</li>
                    <li>The order of conditions matters - place more specific conditions before general ones.</li>
                </ul>

                <h3>Practice</h3>
                <p>Try writing if-else if-else statements for different scenarios. For example, categorize BMI values, determine tax brackets based on income, or classify weather based on temperature.</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>If-Else If-Else statements allow for multi-way decision making in your code.</li>
                    <li>They are useful when you have multiple conditions to check.</li>
                    <li>The order of conditions is important for correct logic implementation.</li>
                    <li>Consider using switch statements for cleaner code when checking multiple values of a single variable.</li>
                </ul>
            `
        }
    ],
    '4': [
        {
            id: 'overview',
            title: 'Introduction to Loops',
            video: null,
            description: `
                <h2>Overview: Understanding Loops in Java</h2>
                
                <h3>What are Loops?</h3>
                <p>Loops are control structures in Java that allow you to repeat a block of code multiple times. They are essential for efficient programming and automating repetitive tasks.</p>

                <h3>Key Concepts</h3>
                <ul>
                    <li>
                        <strong>For Loop</strong>
                        <ul>
                            <li>Used when you know how many times you want to repeat a block of code</li>
                            <li>Example:
                                <div class="code-example">
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}</div>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <strong>While Loop</strong>
                        <ul>
                            <li>Repeats a block of code while a condition is true</li>
                            <li>Example:
                                <div class="code-example">
int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
    count++;
}</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Do-While Loop</strong>
                        <ul>
                            <li>Similar to while loop, but guarantees at least one execution of the code block</li>
                            <li>Example:
                                <div class="code-example">
int x = 0;
do {
    System.out.println("x: " + x);
    x++;
} while (x < 5);</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Enhanced For Loop (For-Each)</strong>
                        <ul>
                            <li>Used to iterate over arrays or collections</li>
                            <li>Example:
                                <div class="code-example">
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println("Number: " + num);
}</div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>Why are Loops important?</h3>
                <ul>
                    <li>They allow efficient repetition of code</li>
                    <li>Essential for iterating over collections of data</li>
                    <li>Crucial for implementing algorithms and solving complex problems</li>
                    <li>Help in automating tasks and reducing code redundancy</li>
                </ul>

                <p>Select a lesson from the sidebar to dive deeper into each of these loop types!</p>
            `
        },
        {
            id: 'for-loop',
            title: 'For Loop',
            video: 'https://www.youtube.com/embed/GwcisLY5avc?si=BuAzw6lZoMIuaf90',
            description: `
                <h2>Understanding For Loops in Java</h2>
                
                <p>The for loop is one of the most commonly used loops in Java. It's particularly useful when you know in advance how many times you want to execute a block of code.</p>

                <h3>Syntax of For Loop</h3>
                <div class="code-example">
for (initialization; condition; update) {
    // code to be repeated
}</div>

                <h3>Components of a For Loop</h3>
                <ul>
                    <li><strong>Initialization:</strong> Executed once at the beginning. Usually used to initialize a counter variable.</li>
                    <li><strong>Condition:</strong> Checked before each iteration. If false, the loop ends.</li>
                    <li><strong>Update:</strong> Executed at the end of each iteration. Usually used to update the counter variable.</li>
                </ul>

                <h3>Example</h3>
                <div class="code-example">
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}</div>

                <p>This loop will print "Iteration: " followed by the numbers 0 through 4.</p>

                <h3>Important Points</h3>
                <ul>
                    <li>The initialization, condition, and update parts are optional, but the semicolons are required.</li>
                    <li>You can declare multiple variables in the initialization and perform multiple updates.</li>
                    <li>The scope of variables declared in the initialization is limited to the loop.</li>
                </ul>

                <h3>Practice</h3>
                <p>Try writing for loops with different conditions. For example, count backwards, skip numbers, or nest loops within each other.</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>For loops are ideal when you know the number of iterations in advance.</li>
                    <li>They provide a compact way to write loops with clear start and end conditions.</li>
                    <li>Understanding for loops is crucial for efficient Java programming.</li>
                    <li>Practice writing different types of for loops to become comfortable with their usage.</li>
                </ul>
            `
        },
        {
            id: 'while-loop',
            title: 'While Loop',
            video: 'https://www.youtube.com/embed/g8GcFboF2rM?si=PqjejuogbiDsuwhQ',
            description: `
                <h2>Understanding While Loops in Java</h2>
                
                <p>The while loop in Java is used to repeat a block of code as long as a specified condition is true. It's particularly useful when you don't know in advance how many times the loop should run.</p>

                <h3>Syntax of While Loop</h3>
                <div class="code-example">
while (condition) {
    // code to be repeated
}</div>

                <h3>How It Works</h3>
                <ol>
                    <li>The condition is evaluated before each iteration of the loop.</li>
                    <li>If the condition is true, the code block is executed.</li>
                    <li>This process repeats until the condition becomes false.</li>
                </ol>

                <h3>Example</h3>
                <div class="code-example">
int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
    count++;
}</div>

                <p>This loop will print "Count: " followed by the numbers 0 through 4.</p>

                <h3>Important Points</h3>
                <ul>
                    <li>Ensure that the condition will eventually become false, or you'll create an infinite loop.</li>
                    <li>The condition is checked at the beginning of each iteration.</li>
                    <li>If the condition is false initially, the loop body will never execute.</li>
                </ul>

                <h3>Practice</h3>
                <p>Try writing while loops for different scenarios. For example, implement a guessing game or process user input until a specific condition is met.</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>While loops are ideal when the number of iterations is not known in advance.</li>
                    <li>They provide flexibility in loop execution based on dynamic conditions.</li>
                    <li>Be cautious to avoid infinite loops by ensuring the loop condition will eventually become false.</li>
                    <li>While loops are often used with user input or when processing data of unknown quantity.</li>
                </ul>
            `
        },
        {
            id: 'do-while-loop',
            title: 'Do-While Loop',
            video: 'https://www.youtube.com/embed/2E-UgePiOoo?si=WDQmFirbQaeB54T1',
            description: `
                <h2>Understanding Do-While Loops in Java</h2>
                
                <p>The do-while loop in Java is similar to the while loop, but with one key difference: it guarantees that the code block will be executed at least once before checking the condition.</p>

                <h3>Syntax of Do-While Loop</h3>
                <div class="code-example">
do {
    // code to be repeated
} while (condition);</div>

                <h3>How It Works</h3>
                <ol>
                    <li>The code block is executed once.</li>
                    <li>Then, the condition is evaluated.</li>
                    <li>If the condition is true, the loop continues and repeats from step 1.</li>
                    <li>If the condition is false, the loop ends.</li>
                </ol>

                <h3>Example</h3>
                <div class="code-example">
int x = 0;
do {
    System.out.println("x: " + x);
    x++;
} while (x < 5);</div>

                <p>This loop will print "x: " followed by the numbers 0 through 4.</p>

                <h3>Important Points</h3>
                <ul>
                    <li>The do-while loop always executes its body at least once, even if the condition is initially false.</li>
                    <li>The condition is checked at the end of each iteration.</li>
                    <li>Do-while loops are less common than while loops but can be very useful in certain situations.</li>
                </ul>

                <h3>Practice</h3>
                <p>Try writing do-while loops for scenarios where you need to ensure at least one execution. For example, implement a menu system where you want to display options at least once before asking if the user wants to continue.</p>
            `
        }
    ],
    '5': [
        {
            id: 'overview',
            title: 'Introduction to Methods',
            video: null,
            description: `
                <h2>Overview: Understanding Methods in Java</h2>
                
                <h3>What are Methods?</h3>
                <p>Methods in Java are blocks of code that perform specific tasks. They are used to organize code, make it reusable, and break down complex problems into smaller, manageable pieces.</p>

                <h3>Key Concepts</h3>
                <ul>
                    <li>
                        <strong>Method Declaration</strong>
                        <ul>
                            <li>Consists of method name, return type, and parameters</li>
                            <li>Example:
                                <div class="code-example">
public static void sayHello() {
    System.out.println("Hello, World!");
}</div>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <strong>Method Invocation</strong>
                        <ul>
                            <li>Calling a method to execute its code</li>
                            <li>Example:
                                <div class="code-example">
sayHello(); // This will print "Hello, World!"</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Parameters and Arguments</strong>
                        <ul>
                            <li>Parameters: Variables in method declaration</li>
                            <li>Arguments: Values passed when calling the method</li>
                            <li>Example:
                                <div class="code-example">
public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

greet("Alice"); // Argument "Alice" is passed to parameter "name"</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Return Values</strong>
                        <ul>
                            <li>Methods can send back a value to where they were called</li>
                            <li>Example:
                                <div class="code-example">
public static int add(int a, int b) {
    return a + b;
}

int sum = add(5, 3); // sum will be 8</div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>Why are Methods important?</h3>
                <ul>
                    <li>They promote code reusability</li>
                    <li>They help in organizing and structuring code</li>
                    <li>They make programs easier to understand and maintain</li>
                    <li>They allow for better testing and debugging</li>
                </ul>

                <p>Select a lesson from the sidebar to dive deeper into each of these method concepts!</p>
            `
        },
        {
            id: 'method-basics',
            title: 'Method Basics',
            video: 'https://www.youtube.com/embed/r0SewFmbCUI',
            description: `
                <h2>Understanding Method Basics in Java</h2>
                
                <p>Methods are fundamental building blocks in Java programming. They allow you to organize your code into reusable pieces, making your programs more modular and easier to understand.</p>

                <h3>Anatomy of a Method</h3>
                <div class="code-example">
public static void methodName(parameter1Type parameter1, parameter2Type parameter2) {
    // Method body
    // Code to be executed
}</div>

                <h3>Components of a Method</h3>
                <ul>
                    <li><strong>Access Modifier:</strong> (e.g., public, private) Determines the visibility of the method.</li>
                    <li><strong>Static Keyword:</strong> If present, indicates that the method belongs to the class rather than an instance of the class.</li>
                    <li><strong>Return Type:</strong> Specifies the type of value the method returns (or void if it doesn't return anything).</li>
                    <li><strong>Method Name:</strong> The name used to call the method.</li>
                    <li><strong>Parameters:</strong> Input values the method can work with (optional).</li>
                    <li><strong>Method Body:</strong> The actual code that gets executed when the method is called.</li>
                </ul>

                <h3>Example</h3>
                <div class="code-example">
public class MethodExample {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        greet("Alice");  // Outputs: Hello, Alice!
        greet("Bob");    // Outputs: Hello, Bob!
    }
}</div>

                <p>In this example, <code>greet</code> is a method that takes a <code>String</code> parameter and prints a greeting. The <code>main</code> method calls <code>greet</code> twice with different arguments.</p>

                <h3>Important Points</h3>
                <ul>
                    <li>Methods must be declared within a class.</li>
                    <li>The <code>main</code> method is a special method that serves as the entry point for Java programs.</li>
                    <li>Method names should be descriptive and follow camelCase convention (e.g., calculateTotal, printReport).</li>
                    <li>Methods can call other methods, including themselves (recursion).</li>
                </ul>

                <h3>Practice</h3>
                <p>Try writing simple methods that perform basic tasks, such as calculating the area of a rectangle or converting temperatures between Celsius and Fahrenheit.</p>
            `
        },
        {
            id: 'static-methods',
            title: 'Static Methods',
            video: 'https://www.youtube.com/embed/3LtIk7wFGi0?si=FPEZPNNMmLkgNDjb',
            description: `
                <h2>Understanding Static Methods in Java</h2>
                
                <p>Static methods are an important concept in Java. They belong to the class rather than any specific instance (object) of the class. This means you can call a static method without creating an object of the class.</p>

                <h3>Characteristics of Static Methods</h3>
                <ul>
                    <li>They are declared using the <code>static</code> keyword.</li>
                    <li>They can be called using the class name, without creating an instance of the class.</li>
                    <li>They can only directly access other static members (methods or variables) of the class.</li>
                    <li>They cannot use the <code>this</code> keyword as they don't belong to any instance of the class.</li>
                </ul>

                <h3>Syntax of Static Methods</h3>
                <div class="code-example">
public class ClassName {
    public static returnType methodName(parameters) {
        // Method body
    }
}</div>

                <h3>Example</h3>
                <div class="code-example">
public class MathOperations {
    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = MathOperations.add(5, 3);
        System.out.println("5 + 3 = " + result);  // Outputs: 5 + 3 = 8
    }
}</div>

                <p>In this example, <code>add</code> is a static method. We can call it using the class name <code>MathOperations.add(5, 3)</code> without creating an instance of <code>MathOperations</code>.</p>

                <h3>When to Use Static Methods</h3>
                <ul>
                    <li>For utility functions that don't require object state.</li>
                    <li>When the method's behavior doesn't depend on instance variables.</li>
                    <li>To create helper functions that are used across multiple instances of a class.</li>
                </ul>
            `
        },
        {
            id: 'return-methods',
            title: 'Return Methods',
            video: 'https://www.youtube.com/embed/14Cfx3fpH-w?si=9hNHzOnJ1qZRffQ5',
            description: `
                <h2>Understanding Return Methods in Java</h2>
                
                <p>Return methods are methods that send a value back to the code that called them. This returned value can be of any data type, including primitive types and objects.</p>

                <h3>Anatomy of a Return Method</h3>
                <div class="code-example">
public static returnType methodName(parameters) {
    // Method body
    return value; // Must match the returnType
}</div>

                <h3>Key Points About Return Methods</h3>
                <ul>
                    <li>The return type is specified in the method declaration.</li>
                    <li>The <code>return</code> statement is used to send a value back.</li>
                    <li>The returned value must match the declared return type.</li>
                    <li>If the return type is <code>void</code>, the method doesn't return a value.</li>
                    <li>A method can have multiple <code>return</code> statements, but only one will be executed.</li>
                </ul>

                <h3>Example</h3>
                <div class="code-example">
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double calculateCircleArea(double radius) {
        return Math.PI * radius * radius;
    }

    public static String greet(String name) {
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        int sum = add(5, 3);
        System.out.println("5 + 3 = " + sum);  // Outputs: 5 + 3 = 8

        double area = calculateCircleArea(2.5);
        System.out.println("Area of circle with radius 2.5: " + area);

        String greeting = greet("Alice");
        System.out.println(greeting);  // Outputs: Hello, Alice!
    }
}</div>

                <p>In this example, we have three return methods: <code>add</code> returns an <code>int</code>, <code>calculateCircleArea</code> returns a <code>double</code>, and <code>greet</code> returns a <code>String</code>.</p>

                <h3>Using Returned Values</h3>
                <p>When a method returns a value, you can:</p>
                <ul>
                    <li>Assign it to a variable</li>
                    <li>Use it directly in an expression or as an argument to another method</li>
                    <li>Ignore it (though this is generally not recommended)</li>
                </ul>
            `
        },
        {
            id: 'method-overloading',
            title: 'Method Overloading',
            video: 'https://www.youtube.com/embed/YvKnA5Bt0vc',
            description: `
                <h2>Understanding Method Overloading in Java</h2>
                
                <p>Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters. This can make your code more readable and flexible.</p>

                <h3>Key Concepts of Method Overloading</h3>
                <ul>
                    <li>Methods must have the same name but different parameter lists.</li>
                    <li>Return type alone is not sufficient for method overloading.</li>
                    <li>Overloaded methods can have different return types.</li>
                    <li>It's a form of compile-time polymorphism.</li>
                </ul>

                <h3>Example of Method Overloading</h3>
                <div class="code-example">
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(5, 3));           // Calls add(int, int)
        System.out.println(add(4.5, 3.2));       // Calls add(double, double)
        System.out.println(add(1, 2, 3));        // Calls add(int, int, int)
    }
}</div>

                <p>In this example, we have three <code>add</code> methods, each with a different parameter list. Java determines which method to call based on the arguments provided.</p>

                <h3>Rules for Method Overloading</h3>
                <ul>
                    <li>Methods must have the same name</li>
                    <li>Methods must have different parameter lists</li>
                    <li>Methods can have different return types</li>
                    <li>Methods can have different access modifiers</li>
                    <li>Methods can throw different exceptions</li>
                </ul>
            `
        }
    ],
    '6': [
        {
            id: 'overview',
            title: 'Introduction to Objects and Wrapper Classes',
            video: null,
            description: `
                <h2>Overview: Understanding Objects and Wrapper Classes in Java</h2>
                
                <h3>What are Objects?</h3>
                <p>Objects in Java are instances of classes. They represent real-world entities and contain both data (attributes) and code (methods).</p>

                <h3>What are Wrapper Classes?</h3>
                <p>Wrapper classes in Java provide a way to use primitive data types as objects. They "wrap" primitive types into objects, allowing them to be used in contexts that require objects.</p>

                <h3>Key Concepts</h3>
                <ul>
                    <li>
                        <strong>Object Creation</strong>
                        <ul>
                            <li>Objects are created using the 'new' keyword</li>
                            <li>Example:
                                <div class="code-example">
String str = new String("Hello, World!");
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <strong>Wrapper Classes</strong>
                        <ul>
                            <li>Java provides wrapper classes for each primitive type</li>
                            <li>Example:
                                <div class="code-example">
Integer num = new Integer(42);
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Autoboxing and Unboxing</strong>
                        <ul>
                            <li>Autoboxing: Automatic conversion of primitive types to wrapper objects</li>
                            <li>Unboxing: Automatic conversion of wrapper objects to primitive types</li>
                            <li>Example:
                                <div class="code-example">
Integer num = 42; // Autoboxing
int value = num;  // Unboxing
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>Why are Objects and Wrapper Classes important?</h3>
                <ul>
                    <li>Objects allow for more complex and organized code structures</li>
                    <li>Wrapper classes enable the use of primitive types in object-oriented contexts</li>
                    <li>They provide useful methods for data manipulation and conversion</li>
                    <li>Essential for working with Java collections and generics</li>
                </ul>

                <p>Select a lesson from the sidebar to dive deeper into objects and wrapper classes in Java!</p>
            `
        },
        {
            id: 'objects-basics',
            title: 'Object Basics',
            video: 'https://www.youtube.com/embed/YvKnA5Bt0vc',
            description: `
                <h2>Understanding Object Basics in Java</h2>
                
                <p>Objects are fundamental to Java programming. They are instances of classes and represent real-world entities in code.</p>

                <h3>Creating Objects</h3>
                <div class="code-example">
ClassName objectName = new ClassName();
                </div>

                <h3>Components of an Object</h3>
                <ul>
                    <li><strong>State:</strong> Represented by instance variables (attributes)</li>
                    <li><strong>Behavior:</strong> Represented by methods</li>
                </ul>

                <h3>Example</h3>
                <div class="code-example">
public class Car {
    // State (attributes)
    String brand;
    String model;
    int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Behavior (method)
    public void startEngine() {
        System.out.println("The " + brand + " " + model + " is starting...");
    }

    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Corolla", 2022);
        myCar.startEngine();  // Outputs: The Toyota Corolla is starting...
    }
}
                </div>

                <h3>Key Points</h3>
                <ul>
                    <li>Objects are created from classes using the 'new' keyword</li>
                    <li>They encapsulate data and behavior</li>
                    <li>Objects interact with each other through method calls</li>
                    <li>The 'this' keyword refers to the current object</li>
                </ul>
            `
        },
        {
            id: 'wrapper-classes',
            title: 'Wrapper Classes',
            video: 'https://www.youtube.com/embed/aPMPyVLRgxw',
            description: `
                <h2>Understanding Wrapper Classes in Java</h2>
                
                <p>Wrapper classes provide a way to use primitive data types as objects. Java provides a wrapper class for each primitive type.</p>

                <h3>Primitive Types and Their Wrapper Classes</h3>
                <ul>
                    <li>byte - Byte</li>
                    <li>short - Short</li>
                    <li>int - Integer</li>
                    <li>long - Long</li>
                    <li>float - Float</li>
                    <li>double - Double</li>
                    <li>boolean - Boolean</li>
                    <li>char - Character</li>
                </ul>

                <h3>Creating Wrapper Objects</h3>
                <div class="code-example">
Integer num = new Integer(42);
Double pi = new Double(3.14);
                </div>

                <h3>Autoboxing and Unboxing</h3>
                <p>Java provides automatic conversion between primitive types and their wrapper classes.</p>
                <div class="code-example">
// Autoboxing
Integer num = 42;

// Unboxing
int value = num;
                </div>

                <h3>Useful Methods in Wrapper Classes</h3>
                <ul>
                    <li>parseInt() in Integer class</li>
                    <li>valueOf() in all wrapper classes</li>
                    <li>toString() to convert to String</li>
                </ul>

                <h3>Example</h3>
                <div class="code-example">
public class WrapperExample {
    public static void main(String[] args) {
        // Creating wrapper objects
        Integer num1 = new Integer(42);
        Integer num2 = Integer.valueOf(42);

        // Autoboxing
        Integer num3 = 42;

        // Unboxing
        int value = num3;

        // Using methods of wrapper classes
        String numStr = "123";
        int parsedNum = Integer.parseInt(numStr);

        System.out.println("Parsed number: " + parsedNum);
        System.out.println("Maximum value of Integer: " + Integer.MAX_VALUE);
    }
}
                </div>
            `
        },
        {
            id: 'object-methods',
            title: 'Object Methods',
            video: 'https://www.youtube.com/embed/7WhnYwoBY24',
            description: `
                <h2>Understanding Object Methods in Java</h2>
                
                <p>Object methods are functions that belong to a class and operate on objects of that class. They define the behavior of objects.</p>

                <h3>Key Concepts of Object Methods</h3>
                <ul>
                    <li>Methods are defined within a class</li>
                    <li>They can access and modify object state (instance variables)</li>
                    <li>Methods can take parameters and return values</li>
                    <li>They encapsulate behavior and promote code reuse</li>
                </ul>

                <h3>Example of Object Methods</h3>
                <div class="code-example">
public class Rectangle {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Method to calculate area
    public double calculateArea() {
        return length * width;
    }

    // Method to calculate perimeter
    public double calculatePerimeter() {
        return 2 * (length + width);
    }

    // Method to check if it's a square
    public boolean isSquare() {
        return length == width;
    }

    public static void main(String[] args) {
        Rectangle rect = new Rectangle(5, 3);
        System.out.println("Area: " + rect.calculateArea());
        System.out.println("Perimeter: " + rect.calculatePerimeter());
        System.out.println("Is Square? " + rect.isSquare());
    }
}
                </div>
            `
        },
        {
            id: 'object-comparison',
            title: 'Object Comparison',
            video: 'https://www.youtube.com/embed/Vy_Z6IXNF9Y',
            description: `
                <h2>Understanding Object Comparison in Java</h2>
                
                <p>Comparing objects in Java is more complex than comparing primitive types. It involves understanding the difference between reference equality and content equality.</p>

                <h3>Key Concepts of Object Comparison</h3>
                <ul>
                    <li>Reference Equality (==): Compares if two references point to the same object in memory</li>
                    <li>Content Equality (.equals()): Compares the content or state of two objects</li>
                    <li>The hashCode() method: Used in conjunction with equals() for consistent object comparison</li>
                </ul>

                <h3>Example of Object Comparison</h3>
                <div class="code-example">
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return age == person.age && Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    public static void main(String[] args) {
        Person p1 = new Person("Alice", 30);
        Person p2 = new Person("Alice", 30);
        Person p3 = p1;

        System.out.println("p1 == p2: " + (p1 == p2));           // false
        System.out.println("p1.equals(p2): " + p1.equals(p2));   // true
        System.out.println("p1 == p3: " + (p1 == p3));           // true
    }
}
                </div>
            `
        }
    ],
    '7': [
        {
            id: 'introduction',
            title: 'Introduction to Arrays',
            video: '',
            description: `
                <h2>What are Arrays?</h2>
                
                <p>Arrays are a fundamental concept in Java programming. They allow you to store multiple values of the same type in a single variable. Think of an array as a container that can hold a fixed number of items of the same kind.</p>

                <h3>Key Concepts</h3>
                <ul>
                    <li>An array is a collection of similar types of data</li>
                    <li>Arrays have a fixed size, which is determined when they are created</li>
                    <li>Array elements are stored in contiguous memory locations</li>
                    <li>Each element in an array can be accessed using its index (position)</li>
                    <li>Array indices start at 0, not 1</li>
                </ul>

                <h3>Declaring an Array</h3>
                <div class="code-example">
// Method 1
int[] numbers;

// Method 2
int numbers[];
                </div>

                <h3>Creating an Array</h3>
                <div class="code-example">
// Create an array of integers with size 5
int[] numbers = new int[5];

// Create and initialize an array
int[] numbers = {1, 2, 3, 4, 5};
                </div>

                <h3>Accessing Array Elements</h3>
                <div class="code-example">
int[] numbers = {10, 20, 30, 40, 50};

// Access the first element (index 0)
System.out.println(numbers[0]);  // Outputs: 10

// Access the third element (index 2)
System.out.println(numbers[2]);  // Outputs: 30
                </div>

                <h3>Why Use Arrays?</h3>
                <ul>
                    <li>Efficient storage of multiple items of the same type</li>
                    <li>Easy access to elements using indices</li>
                    <li>Useful for storing and manipulating collections of data</li>
                    <li>Foundation for more complex data structures</li>
                </ul>
            `
        },
        {
            id: 'array-basics',
            title: 'Array Basics and Operations',
            video: 'https://www.youtube.com/embed/xzjZy-dHHLw',
            description: `
                <h2>Working with Arrays</h2>
                
                <p>Now that we understand what arrays are, let's look at some basic operations we can perform with them.</p>

                <h3>Initializing Arrays</h3>
                <div class="code-example">
// Method 1: Declare and then initialize
int[] numbers = new int[5];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Method 2: Declare and initialize in one line
int[] numbers = {10, 20, 30, 40, 50};
                </div>

                <h3>Array Length</h3>
                <p>You can find out how many elements an array has using the <code>length</code> property:</p>
                <div class="code-example">
int[] numbers = {10, 20, 30, 40, 50};
System.out.println("Array length: " + numbers.length);  // Outputs: Array length: 5
                </div>

                <h3>Iterating Through an Array</h3>
                <p>You can use a loop to go through all elements of an array:</p>
                <div class="code-example">
int[] numbers = {10, 20, 30, 40, 50};

// Using a for loop
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element at index " + i + ": " + numbers[i]);
}

// Using a for-each loop (enhanced for loop)
for (int number : numbers) {
    System.out.println("Element: " + number);
}
                </div>

                <h3>Modifying Array Elements</h3>
                <p>You can change the value of an array element by assigning a new value to a specific index:</p>
                <div class="code-example">
int[] numbers = {10, 20, 30, 40, 50};
numbers[2] = 35;  // Change the third element (index 2) to 35
System.out.println("Updated third element: " + numbers[2]);  // Outputs: Updated third element: 35
                </div>
            `
        },
        {
            id: 'array-algorithms',
            title: 'Common Array Algorithms',
            video: '',
            description: `
                <h2>Common Array Algorithms</h2>
                
                <p>Arrays are often used in various algorithms. Let's look at some common operations you might perform on arrays.</p>

                <h3>1. Finding the Sum of Array Elements</h3>
                <div class="code-example">
int[] numbers = {5, 10, 15, 20, 25};
int sum = 0;

for (int number : numbers) {
    sum += number;
}

System.out.println("Sum of array elements: " + sum);  // Outputs: Sum of array elements: 75
                </div>

                <h3>2. Finding the Largest Element</h3>
                <div class="code-example">
int[] numbers = {12, 45, 7, 23, 56, 89, 34};
int largest = numbers[0];  // Assume first element is largest

for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

System.out.println("Largest element: " + largest);  // Outputs: Largest element: 89
                </div>

                <h3>3. Reversing an Array</h3>
                <div class="code-example">
int[] numbers = {1, 2, 3, 4, 5};
int[] reversed = new int[numbers.length];

for (int i = 0; i < numbers.length; i++) {
    reversed[i] = numbers[numbers.length - 1 - i];
}

System.out.println("Reversed array: " + Arrays.toString(reversed));
// Outputs: Reversed array: [5, 4, 3, 2, 1]
                </div>
            `
        }
    ]
};
