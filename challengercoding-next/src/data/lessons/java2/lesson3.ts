export const java2Lesson3 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="tutorial-title">Java 2 Guided Tutorials - Week 3: Encapsulation</h1>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    Welcome to Week 3 of Java 2! This week, we'll dive deep into encapsulation, one of the fundamental principles of object-oriented programming (OOP). We'll explore how encapsulation helps in creating more secure and maintainable code.
                </p>
                <div class="highlight-box">
                    <h3 class="text-xl font-semibold mb-2">Lesson Overview:</h3>
                    <ul class="list-disc list-inside">
                        <li>Understanding Encapsulation</li>
                        <li>Access Modifiers in Java</li>
                        <li>Getters and Setters</li>
                        <li>Encapsulation Best Practices</li>
                        <li>Quiz to test your knowledge</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="tutorial-text">
                    By the end of this week, you'll have a solid understanding of encapsulation and how to apply it in your Java programs. Let's get started!
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Understanding Encapsulation",
        content: `
            <h1 class="tutorial-title">1. Understanding Encapsulation</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What is Encapsulation?</h3>
                <p class="tutorial-text">
                    Encapsulation is one of the four fundamental OOP concepts. It refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components. Encapsulation is used to hide the values or state of a structured data object inside a class, preventing direct access to them by clients in a way that could expose hidden implementation details or violate class invariants.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Encapsulation provides data hiding</li>
                        <li>It helps in maintaining the integrity of data</li>
                        <li>It reduces system complexity</li>
                        <li>It improves modularity</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a simple example of encapsulation:</p>
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
                <p class="tutorial-text">In this example, the <code>balance</code> variable is private and can only be accessed or modified through the public methods <code>deposit()</code> and <code>getBalance()</code>. This is encapsulation in action.</p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Access Modifiers",
        content: `
            <h1 class="tutorial-title">2. Access Modifiers</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding Access Modifiers</h3>
                <p class="tutorial-text">
                    Access modifiers are keywords in object-oriented languages that set the accessibility of classes, methods, and other members. Java provides four types of access modifiers:
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Types of Access Modifiers:</h4>
                    <ul class="list-disc list-inside">
                        <li><strong>public:</strong> Accessible from any other class</li>
                        <li><strong>protected:</strong> Accessible within the same package and subclasses</li>
                        <li><strong>default (no modifier):</strong> Accessible only within the same package</li>
                        <li><strong>private:</strong> Accessible only within the same class</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating different access modifiers:</p>
                <pre><code>public class AccessModifierDemo {
    public int publicVar = 1;
    protected int protectedVar = 2;
    int defaultVar = 3;
    private int privateVar = 4;

    public void publicMethod() {
        System.out.println("This is a public method");
    }

    protected void protectedMethod() {
        System.out.println("This is a protected method");
    }

    void defaultMethod() {
        System.out.println("This is a default method");
    }

    private void privateMethod() {
        System.out.println("This is a private method");
    }
}</code></pre>
                <p class="tutorial-text">Try creating a class with different access modifiers and experiment with accessing them from another class. Use the compiler below to write your code.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Public method accessed\nProtected method accessed\nDefault method accessed\nPrivate method not accessible"
    },
    {
        title: "Getters and Setters",
        content: `
            <h1 class="tutorial-title">3. Getters and Setters</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding Getters and Setters</h3>
                <p class="tutorial-text">
                    Getters and setters are methods used to retrieve and modify the values of private variables. They are a fundamental part of encapsulation, allowing controlled access to class members.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>Getters retrieve the value of a private field</li>
                        <li>Setters modify the value of a private field</li>
                        <li>They allow for validation before setting a value</li>
                        <li>They provide a way to make a class immutable</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example of a class using getters and setters:</p>
                <pre><code>public class Person {
    private String name;
    private int age;

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Setter for age with validation
    public void setAge(int age) {
        if (age > 0 && age < 120) {
            this.age = age;
        } else {
            System.out.println("Invalid age");
        }
    }
}</code></pre>
                <p class="tutorial-text">Try creating a class with private fields and implement getters and setters for them. Use the compiler below to write your code.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Name: John Doe\nAge: 25\nInvalid age"
    },
    {
        title: "Encapsulation Best Practices",
        content: `
            <h1 class="tutorial-title">4. Encapsulation Best Practices</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Best Practices for Encapsulation</h3>
                <p class="tutorial-text">
                    Implementing encapsulation effectively involves following certain best practices. These guidelines help in creating more robust and maintainable code.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Best Practices:</h4>
                    <ul class="list-disc list-inside">
                        <li>Declare instance variables as private</li>
                        <li>Provide public setter and getter methods to modify and view the variables' values</li>
                        <li>For read-only fields, only provide a getter method</li>
                        <li>For write-only fields, only provide a setter method</li>
                        <li>Perform data validation in setter methods</li>
                        <li>Use meaningful names for getter and setter methods</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating these best practices:</p>
                <pre><code>public class Employee {
    private String name;
    private double salary;
    private final String employeeId;  // read-only

    public Employee(String name, String employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        } else {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        if (salary > 0) {
            this.salary = salary;
        } else {
            throw new IllegalArgumentException("Salary must be positive");
        }
    }

    public String getEmployeeId() {
        return employeeId;
    }
}</code></pre>
                <p class="tutorial-text">Try creating a class that follows these best practices. Implement proper encapsulation for at least three attributes, including one read-only attribute. Use the compiler below to write your code.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Name: Alice Johnson\nEmployee ID: EMP001\nSalary: 50000.0\nIllegal Argument Exception: Salary must be positive"
    },
    {
        title: "Quiz",
        content: `
            <h1 class="tutorial-title">5. Encapsulation Quiz</h1>
            <div class="quiz-container">
                <form id="quizForm">
                    <div class="question">
                        <p class="quiz-question">1. What is the main purpose of encapsulation?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="a" id="q1a">
                                <label for="q1a">To hide the implementation details of a class</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="b" id="q1b">
                                <label for="q1b">To create multiple instances of a class</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="c" id="q1c">
                                <label for="q1c">To inherit properties from a parent class</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">2. Which access modifier provides the highest level of encapsulation?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="a" id="q2a">
                                <label for="q2a">public</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="b" id="q2b">
                                <label for="q2b">protected</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="c" id="q2c">
                                <label for="q2c">private</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">3. What is the primary purpose of getter methods in encapsulation?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="a" id="q3a">
                                <label for="q3a">To modify private variables</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="b" id="q3b">
                                <label for="q3b">To retrieve the values of private variables</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="c" id="q3c">
                                <label for="q3c">To create new instances of a class</label>
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
                question: '1. What is the main purpose of encapsulation?',
                options: [
                    { label: 'To hide the implementation details of a class', value: 'a' },
                    { label: 'To create multiple instances of a class', value: 'b' },
                    { label: 'To inherit properties from a parent class', value: 'c' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '2. Which access modifier provides the highest level of encapsulation?',
                options: [
                    { label: 'public', value: 'a' },
                    { label: 'protected', value: 'b' },
                    { label: 'private', value: 'c' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '3. What is the primary purpose of getter methods in encapsulation?',
                options: [
                    { label: 'To modify private variables', value: 'a' },
                    { label: 'To retrieve the values of private variables', value: 'b' },
                    { label: 'To create new instances of a class', value: 'c' }
                ],
                correctAnswer: 'b'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
            <h1 class="tutorial-title">6. Weekly Project: Bank Account Management System</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">For this week's project, you'll create a simple Bank Account Management System that demonstrates the principles of encapsulation.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Create a BankAccount class with private fields for account number, balance, and owner name</li>
                        <li>Implement proper getters and setters for each field</li>
                        <li>Include methods for deposit and withdrawal with appropriate validation</li>
                        <li>Create a read-only field for the account creation date</li>
                        <li>Implement a method to print account details</li>
                        <li>In the main method, create multiple bank accounts and perform various operations</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a template to get you started:</p>
                <pre><code>import java.util.Date;

public class BankAccount {
    private String accountNumber;
    private double balance;
    private String ownerName;
    private final Date creationDate;

    // Constructor
    public BankAccount(String accountNumber, String ownerName) {
        // Initialize fields here
    }

    // Implement getters and setters

    public void deposit(double amount) {
        // Implement deposit logic
    }

    public void withdraw(double amount) {
        // Implement withdrawal logic
    }

    public void printAccountDetails() {
        // Print account details
    }

    public static void main(String[] args) {
        // Create bank accounts and perform operations
    }
}
</code></pre>
                <p class="tutorial-text">Implement the BankAccount class and demonstrate its usage in the main method. Make sure to include proper encapsulation and validation. Use the online compiler to write and test your code. Once you're satisfied with your program, paste a sample output of creating an account, depositing money, withdrawing money, and printing account details in the autograder to check your work.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Account created for John Doe\nDeposit: $1000.0\nWithdrawal: $500.0\nAccount Details:\nAccount Number: AC001\nOwner: John Doe\nBalance: $500.0\nCreation Date: [Current Date]"
    }
];
