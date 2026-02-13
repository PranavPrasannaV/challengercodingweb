import { SubLesson, QuizQuestion } from './types';

export const pythonNotes: Record<string, SubLesson[]> = {
    '1': [
        {
            id: 'lesson1',
            title: 'Python Week 1: Overview',
            video: null,
            description: `
                <p>This lesson focuses on setting up your development environment and understanding the basics of Python programming.</p>
                <h3>Key Topics:</h3>
                <ul>
                    <li>Setting up Visual Studio Code</li>
                    <li>Understanding file structure and the terminal</li>
                    <li>Writing your first Python program</li>
                </ul>
                <p><strong>Next:</strong> We’ll dive into programming concepts and why they matter.</p>
            `,
            quiz: {
                question: "What is the primary function of the terminal in VS Code?",
                correctAnswer: "To display the output of your code."
            }
        }
    ],
    '2': [
        {
            id: 'lesson1',
            title: 'Python Week 2: Overview',
            video: 'https://www.youtube.com/embed/hC1GL4ZQYcs',
            description: `
                <p>This lesson introduces key concepts regarding variables and their role in storing information.</p>
                <h2>Key Topics Covered:</h2>
                <ul>
                    <li>Introduction to Variables</li>
                    <li>Data Types: String, Integer, Float</li>
                    <li>Declaring and Redefining Variables</li>
                    <li>Operations on Integer and Float Variables</li>
                    <li>String Concatenation</li>
                </ul>
                <h2>Definitions:</h2>
                <h3>Variables:</h3>
                <p>Variables are used to store information in memory. They can store different types of data, such as numbers, text, and lists. In Python, variables are created when you assign a value to them.</p>
                <h3>Data Types:</h3>
                <p>Data types represent the kinds of information you can store in variables. Common data types include:</p>
                <ul>
                    <li><strong>String:</strong> A sequence of characters (text). Strings are enclosed in quotes (e.g., "Hello").</li>
                    <li><strong>Integer:</strong> Whole numbers without a decimal point (e.g., 5, -10).</li>
                    <li><strong>Float:</strong> Numbers with a decimal point (e.g., 3.14, -0.01).</li>
                </ul>
                <h3>Operations:</h3>
                <p>You can perform mathematical operations on variables using operators like +, -, *, and /.</p>
                <h3>Concatenation:</h3>
                <p>Concatenation is the process of joining two strings together using the + operator.</p>
            `,
            quiz: [
                {
                    question: "What is a variable in Python?",
                    options: [
                        "A fixed value that cannot be changed",
                        "A container for storing data values",
                        "A type of loop in Python",
                        "A built-in function"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Which of the following is an integer?",
                    options: [
                        "3.14",
                        "\"42\"",
                        "42",
                        "True"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "What is the result of 'Hello' + ' ' + 'World'?",
                    options: [
                        "Hello World",
                        "HelloWorld",
                        "Hello + World",
                        "Error"
                    ],
                    correctAnswer: 0
                }
            ]
        },
        {
            id: 'lesson2',
            title: 'Data Types',
            video: 'https://www.youtube.com/embed/sttIbn5M5sU',
            description: `
                <h2>Understanding Data Types in Detail</h2>
                <p>In this video, we dive deeper into the different data types in Python and how to use them effectively.</p>
                <h3>Strings</h3>
                <p>Strings are used to represent text. You can use single or double quotes to create strings.</p>
                <div class="example-box">
                    <code>
                    name = "Alice"
                    greeting = 'Hello'
                    </code>
                </div>
                <h3>Integers and Floats</h3>
                <p>Integers are whole numbers, while floats are numbers with decimal points. Python handles these types differently in memory.</p>
                <div class="example-box">
                    <code>
                    age = 25  # Integer
                    height = 5.9  # Float
                    </code>
                </div>
                <h3>Type Conversion</h3>
                <p>You can convert between data types using functions like <code>str()</code>, <code>int()</code>, and <code>float()</code>.</p>
                <div class="example-box">
                    <code>
                    string_num = "123"
                    converted_num = int(string_num)
                    print(converted_num + 5)  # Output: 128
                    </code>
                </div>
            `,
            quiz: [
                {
                    question: "What function converts a number to a string?",
                    options: [
                        "int()",
                        "float()",
                        "str()",
                        "text()"
                    ],
                    correctAnswer: 2
                }
            ]
        }
    ],
    '3': [
        {
            id: 'lesson0',
            title: 'Introduction to Python Inputs',
            video: null,
            description: `
                <div class="overview-container">
                    <h2>Overview: Understanding Python Inputs</h2>
                    <h3>What are Inputs?</h3>
                    <p>Inputs are simply data that the user provides to the computer. In Python, we use the <code>input()</code> function to get this data.</p>
                    <h3>Key Concepts</h3>
                    <ul>
                        <li>
                            <strong>Basic Input Function</strong>
                            <ul>
                                <li>The basic input function is: <code>input()</code></li>
                                <li>Inputs are stored in variables for easy manipulation</li>
                                <li>Example usage:
                                    <div class="code-example">name = input()</div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Prompts</strong>
                            <ul>
                                <li>You can add a message inside the parentheses to tell the user what to type.</li>
                                <li>Example: <code>input("Enter your name: ")</code></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            `,
            quiz: {
                question: "What is the function to get user input?",
                correctAnswer: "input()"
            }
        },
        {
            id: 'lesson1',
            title: 'Understanding Inputs',
            video: 'https://www.youtube.com/embed/DB9Cq6TSTuQ?si=-Tr_HWhIHOLJXdfI',
            description: `
                <p>This lesson covers how to convert input data types, particularly focusing on converting string inputs to integers and floats.</p>
                <h2>Understanding Input Data Types:</h2>
                <p>By default, the <code>input()</code> function returns a string. Even if the user types a number, Python treats it as text.</p>
                <h2>Converting Strings to Integers:</h2>
                <p>To convert a string input to an integer, use the <code>int()</code> function:</p>
                <div class="example-box">
                    <code>age = int(input("Enter your age: "))</code>
                </div>
                <h2>Converting Strings to Floats:</h2>
                <p>To convert a string input to a decimal number (float), use the <code>float()</code> function:</p>
                <div class="example-box">
                    <code>price = float(input("Enter the price: "))</code>
                </div>
            `,
            quiz: [
                {
                    question: "What is the basic Python function for getting user input?",
                    options: [
                        "get_input()",
                        "input()",
                        "user_input()",
                        "read_input()"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "By default, what data type does input() return?",
                    options: [
                        "Integer",
                        "Float",
                        "String",
                        "Boolean"
                    ],
                    correctAnswer: 2
                }
            ]
        }
    ],
    '4': [
        {
            id: 'lesson0',
            title: 'Introduction to Conditionals',
            video: null,
            description: `
                <h2>Definitions and More</h2>
                <p>Here, you can find the definitions and the topics that we had covered in class.</p>

                <h3>What are Conditionals?</h3>
                <p>Conditionals are simply statements that say that if something happens, the computer must do this, otherwise, the computer should do something else.</p>
                <div class="example-box">
                    <p>Think of it as your mom telling you to finish your chores. If you finish your chores, you will get your allowance. But if you don't, your mom will get mad at you.</p>
                </div>

                <h3>Types of Conditional Statements</h3>
                <ul>
                    <li><strong>If statement:</strong> The if statement simply starts off the conditional</li>
                    <li><strong>Elif statement:</strong> This is the middle, it is like, if the one before didn't happen, but this event occurs, then do the following function</li>
                    <li><strong>Else statement:</strong> This is the final statement, this ends it saying that, if nothing above happened, then do the following</li>
                </ul>

                <h3>Conditions</h3>
                <p>Conditions are the part of the conditional which state what is supposed to happen.</p>
                <h4>For math:</h4>
                <ul>
                    <li>Equal to: <code>==</code></li>
                    <li>Not equal to: <code>!=</code></li>
                    <li>Less than: <code>&lt;</code></li>
                    <li>Greater than: <code>&gt;</code></li>
                    <li>Less than or Equal to: <code>&lt;=</code></li>
                    <li>Greater than or equal to: <code>&gt;=</code></li>
                </ul>
                <p>For strings, you can use equal (==) to and not equal to (!=) for determining whether the string is the same or not the same as the other string that it is compared to.</p>

                <h3>How to Write Conditionals:</h3>
                <ul>
                    <li>For conditionals, you have the if or the elif, and then have a space and write the condition statement followed by a colon.</li>
                    <li>The next line, which tells the computer what to do, must have a tab or 4 spaces before you can start writing.</li>
                    <li>After the writing of what to do under a condition, write the elif and the statement (back to the same level/remove the four spaces/tab), or the else, depending on what you are trying to do.</li>
                    <li>Tabs/4 spaces are basically indicators that something is part of a loop, function, or conditional statement.</li>
                </ul>
            `
        },
        {
            id: 'lesson1',
            title: 'If Statements',
            video: 'https://www.youtube.com/embed/DZwmZ8Usvnk?si=vpyDCb9-wi_-2NRp',
            description: `
                <h2>If Statements in Python</h2>
                <p>The if statement is the most basic form of conditional in Python. It allows you to execute a block of code only if a certain condition is true.</p>

                <h3>Basic Syntax</h3>
                <div class="example-box">
                    <code>
                    if condition:
                        # code to execute if condition is true
                    </code>
                </div>

                <h3>Example</h3>
                <div class="example-box">
                    <code>
                    age = 18
                    if age >= 18:
                        print("You are an adult")
                    </code>
                </div>

                <p>In this example, the message "You are an adult" will only be printed if the age is 18 or greater.</p>

                <h3>Multiple Conditions</h3>
                <p>You can use logical operators to check multiple conditions:</p>
                <ul>
                    <li><code>and</code>: Both conditions must be true</li>
                    <li><code>or</code>: At least one condition must be true</li>
                    <li><code>not</code>: Inverts the condition</li>
                </ul>

                <div class="example-box">
                    <code>
                    age = 25
                    has_license = True

                    if age >= 18 and has_license:
                        print("You can drive a car")
                    </code>
                </div>

                <p>Remember, indentation is crucial in Python. The indented block under the if statement will only execute if the condition is true.</p>
            `
        },
        {
            id: 'lesson2',
            title: 'Elif and Else Statements',
            video: 'https://www.youtube.com/embed/FvMPfrgGeKs?si=cGaa6cDWggZSa5Qe',
            description: `
                <h2>Elif and Else Statements</h2>
                <p>The elif (else if) and else statements allow you to handle multiple conditions and provide alternative code blocks to execute.</p>

                <h3>Elif Statement</h3>
                <p>The elif statement allows you to check multiple conditions one after another.</p>
                <div class="example-box">
                    <code>
                    score = 85

                    if score >= 90:
                        print("A grade")
                    elif score >= 80:
                        print("B grade")
                    elif score >= 70:
                        print("C grade")
                    elif score >= 60:
                        print("D grade")
                    </code>
                </div>

                <h3>Else Statement</h3>
                
                <p>The else statement provides a default block of code to execute when none of the previous conditions are true.</p>
                <div class="example-box">
                    <code>
                    score = 55

                    if score >= 90:
                        print("A grade")
                    elif score >= 80:
                        print("B grade")
                    elif score >= 70:
                        print("C grade")
                    elif score >= 60:
                        print("D grade")
                    else:
                        print("F grade")
                    </code>
                </div>

                <p>In this example, if the score doesn't meet any of the previous conditions, it will print "F grade".</p>

                <h3>Combining If, Elif, and Else</h3>
                <p>You can use these statements together to create complex decision-making structures:</p>
                <div class="example-box">
                    <code>
                    age = 25

                    if age < 13:
                        print("Child")
                    elif age < 20:
                        print("Teenager")
                    elif age < 65:
                        print("Adult")
                    else:
                        print("Senior")
                    </code>
                </div>

                <p>Remember, Python will execute the first condition that evaluates to True and skip the rest of the conditions.</p>
            `
        },
        {
            id: 'lesson3',
            title: 'Nested Conditionals',
            video: 'https://www.youtube.com/embed/dePS_B7Loxs?si=xoK_Pz2zhWp--sne',
            description: `
                <h2>Nested Conditionals</h2>
                <p>Nested conditionals are conditional statements inside other conditional statements. They allow for more complex decision-making processes.</p>

                <h3>Basic Structure</h3>
                <div class="example-box">
                    <code>
                    if outer_condition:
                        # outer code
                        if inner_condition:
                            # inner code
                        else:
                            # inner else code
                    else:
                        # outer else code
                    </code>
                </div>

                <h3>Example</h3>
                <div class="example-box">
                    <code>
                    age = 25
                    has_license = True

                    if age >= 18:
                        print("You are an adult")
                        if has_license:
                            print("You can drive a car")
                        else:
                            print("You need a license to drive")
                    else:
                        print("You are not an adult yet")
                    </code>
                </div>

                <p>In this example, we first check if the person is an adult. If they are, we then check if they have a license to determine if they can drive.</p>

                <h3>Tips for Using Nested Conditionals</h3>
                <ul>
                    <li>Use nested conditionals sparingly, as they can make your code harder to read and maintain.</li>
                    <li>Consider using logical operators (and, or) instead of nesting when possible.</li>
                    <li>Pay close attention to indentation, as it determines the structure of your nested conditionals.</li>
                </ul>

                <p>Nested conditionals are powerful, but remember that simpler code is often easier to understand and maintain.</p>
            `
        }
    ],
    '5': [
        {
            id: 'lesson0',
            title: 'Introduction to Lists',
            video: null,
            description: `
                <h2>What are Lists in Python?</h2>
                <p>Lists are one of the most versatile and commonly used data structures in Python. They allow you to store multiple items in a single variable.</p>

                <h3>Key Characteristics of Lists:</h3>
                <ul>
                    <li>Lists are ordered: The items have a defined order, and that order will not change.</li>
                    <li>Lists are mutable: You can change, add, and remove items in a list after it is created.</li>
                    <li>Lists allow duplicate values: Since lists are indexed, they can have items with the same value.</li>
                    <li>Lists can contain different data types: A single list can contain items of different types (integers, strings, other lists, etc.).</li>
                </ul>

                <h3>Creating a List</h3>
                <p>In Python, you create a list by placing all the items (elements) inside square brackets [ ], separated by commas.</p>
                <div class="example-box">
                    <code>
                    # An empty list
                    empty_list = []

                    # A list of integers
                    numbers = [1, 2, 3, 4, 5]

                    # A list with mixed data types
                    mixed_list = [1, "Hello", 3.14, True]

                    # A nested list
                    nested_list = [1, [2, 3], 4]
                    </code>
                </div>

                <h3>Accessing List Elements</h3>
                <p>You can access list elements by referring to the index number. In Python, indices start at 0.</p>
                <div class="example-box">
                    <code>
                    fruits = ["apple", "banana", "cherry"]
                    print(fruits[0])  # Output: apple
                    print(fruits[1])  # Output: banana
                    print(fruits[-1])  # Output: cherry (negative indexing starts from the end)
                    </code>
                </div>

                <p>Lists are fundamental to Python programming and are used in various applications. In the following lessons, we'll explore more operations and methods you can use with lists.</p>
            `
        },
        {
            id: 'lesson1',
            title: 'List Basics',
            video: 'https://www.youtube.com/embed/1KLgcBcWCsE?si=vsA0cIV7w1jOdd4g',
            description: `
                <h2>Common List Operations</h2>
                <p>Python provides a variety of operations that you can perform on lists. Let's explore some of the most common ones.</p>

                <h3>1. Adding Elements to a List</h3>
                <p>You can add elements to a list using several methods:</p>
                <div class="example-box">
                    <code>
                    # Using append() to add an element to the end of the list
                    fruits = ["apple", "banana"]
                    fruits.append("cherry")
                    print(fruits)  # Output: ["apple", "banana", "cherry"]

                    # Using insert() to add an element at a specific position
                    fruits.insert(1, "orange")
                    print(fruits)  # Output: ["apple", "orange", "banana", "cherry"]

                    # Using extend() to add multiple elements
                    more_fruits = ["grape", "kiwi"]
                    fruits.extend(more_fruits)
                    print(fruits)  # Output: ["apple", "orange", "banana", "cherry", "grape", "kiwi"]
                    </code>
                </div>

                <h3>2. Removing Elements from a List</h3>
                <p>There are also several ways to remove elements from a list:</p>
                <div class="example-box">
                    <code>
                    # Using remove() to remove a specific element
                    fruits.remove("banana")
                    print(fruits)  # Output: ["apple", "orange", "cherry", "grape", "kiwi"]

                    # Using pop() to remove and return an element at a specific index
                    removed_fruit = fruits.pop(1)
                    print(removed_fruit)  # Output: orange
                    print(fruits)  # Output: ["apple", "cherry", "grape", "kiwi"]

                    # Using del to remove an element or slice
                    del fruits[0]
                    print(fruits)  # Output: ["cherry", "grape", "kiwi"]
                    </code>
                </div>

                <h3>3. Modifying Elements</h3>
                <p>You can change the value of a specific item by referring to its index number:</p>
                <div class="example-box">
                    <code>
                    fruits[1] = "blueberry"
                    print(fruits)  # Output: ["cherry", "blueberry", "kiwi"]
                    </code>
                </div>

                <h3>4. List Slicing</h3>
                <p>List slicing allows you to access a specific range of elements in a list:</p>
                <div class="example-box">
                    <code>
                    numbers = [0, 1, 2, 3, 4, 5]
                    print(numbers[2:5])  # Output: [2, 3, 4]
                    print(numbers[:3])   # Output: [0, 1, 2]
                    print(numbers[3:])   # Output: [3, 4, 5]
                    print(numbers[::2])  # Output: [0, 2, 4] (step of 2)
                    </code>
                </div>

                <p>These operations form the foundation of working with lists in Python. In the next lesson, we'll explore more advanced list methods and techniques.</p>
            `
        },
        {
            id: 'lesson2',
            title: 'List Methods',
            video: 'https://www.youtube.com/embed/0yySumZTxJ0?si=w4TBIJ8ZytXa5VFY',
            description: `
                <h2>Advanced List Methods and Techniques</h2>
                <p>Python provides a rich set of built-in methods for working with lists. Let's explore some of the most useful ones.</p>

                <h3>1. Sorting Lists</h3>
                <p>You can sort lists using the <code>sort()</code> method or the <code>sorted()</code> function:</p>
                <div class="example-box">
                    <code>
                    numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
                    numbers.sort()
                    print(numbers)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

                    fruits = ["banana", "apple", "cherry", "date"]
                    sorted_fruits = sorted(fruits)
                    print(sorted_fruits)  # Output: ["apple", "banana", "cherry", "date"]
                    </code>
                </div>

                <h3>2. Reversing Lists</h3>
                <p>You can reverse a list using the <code>reverse()</code> method:</p>
                <div class="example-box">
                    <code>
                    numbers = [1, 2, 3, 4, 5]
                    numbers.reverse()
                    print(numbers)  # Output: [5, 4, 3, 2, 1]
                    </code>
                </div>

                <h3>3. Finding Elements</h3>
                <p>Use the <code>index()</code> method to find the position of an element:</p>
                <div class="example-box">
                    <code>
                    fruits = ["apple", "banana", "cherry"]
                    print(fruits.index("banana"))  # Output: 1
                    </code>
                </div>

                <h3>4. Counting Elements</h3>
                <p>The <code>count()</code> method returns the number of times an element appears in the list:</p>
                <div class="example-box">
                    <code>
                    numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
                    print(numbers.count(3))  # Output: 3
                    </code>
                </div>

                <h3>5. List Comprehensions</h3>
                <p>List comprehensions provide a concise way to create lists:</p>
                <div class="example-box">
                    <code>
                    squares = [x**2 for x in range(10)]
                    print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

                    even_numbers = [x for x in range(20) if x % 2 == 0]
                    print(even_numbers)  # Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
                    </code>
                </div>

                <p>These advanced techniques will help you manipulate lists more efficiently in your Python programs.</p>
            `
        }
    ],
    '6': [
        {
            id: 'lesson0',
            title: 'Introduction to Loops',
            video: null,
            description: `
                <h2>What are Loops in Python?</h2>
                <p>Loops are a fundamental concept in programming that allow you to execute a block of code repeatedly. They are essential for automating repetitive tasks and processing large amounts of data efficiently.</p>

                <h3>Why Use Loops?</h3>
                <ul>
                    <li>Automate repetitive tasks</li>
                    <li>Process large datasets</li>
                    <li>Implement algorithms that require iteration</li>
                    <li>Create dynamic and interactive programs</li>
                </ul>

                <h3>Types of Loops in Python</h3>
                <p>Python provides two main types of loops:</p>
                <ol>
                    <li><strong>for loops:</strong> Used for iterating over a sequence (like a list, tuple, dictionary, set, or string) or other iterable objects.</li>
                    <li><strong>while loops:</strong> Used to execute a block of code as long as a condition is true.</li>
                </ol>

                <h3>Basic Structure of a Loop</h3>
                <div class="example-box">
                    <code>
# For loop
for item in sequence:
    # Code to be executed for each item

# While loop
while condition:
    # Code to be executed as long as the condition is true
                    </code>
                </div>

                <p>In the following lessons, we'll explore each type of loop in detail and learn about their various applications in Python programming.</p>
            `
        },
        {
            id: 'lesson1',
            title: 'For Loops',
            video: 'https://www.youtube.com/embed/KWgYha0clzw?si=eyNS3_q9h1ZlE9NA',
            description: `
                <h2>For Loops in Python</h2>
                <p>For loops are used to iterate over a sequence (such as a list, tuple, dictionary, set, or string) or other iterable objects. They provide a concise way to execute a block of code for each item in a sequence.</p>

                <h3>Basic Syntax</h3>
                <div class="example-box">
                    <code>
for item in sequence:
    # Code to be executed for each item
                    </code>
                </div>

                <h3>Examples of For Loops</h3>
                <p>1. Iterating over a list:</p>
                <div class="example-box">
                    <code>
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry
                    </code>
                </div>

                <p>2. Iterating over a string:</p>
                <div class="example-box">
                    <code>
for char in "Python":
    print(char)

# Output:
# P
# y
# t
# h
# o
# n
                    </code>
                </div>

                <p>3. Using range() function:</p>
                <div class="example-box">
                    <code>
for i in range(5):
    print(i)

# Output:
# 0
# 1
# 2
# 3
# 4
                    </code>
                </div>

                <h3>Nested For Loops</h3>
                <p>You can also nest for loops inside each other:</p>
                <div class="example-box">
                    <code>
for i in range(3):
    for j in range(2):
        print(f"i: {i}, j: {j}")

# Output:
# i: 0, j: 0
# i: 0, j: 1
# i: 1, j: 0
# i: 1, j: 1
# i: 2, j: 0
# i: 2, j: 1
                    </code>
                </div>

                <p>For loops are versatile and can be used in many different scenarios. In the next lesson, we'll explore while loops and compare them to for loops.</p>
            `
        },
        {
            id: 'lesson2',
            title: 'While Loops',
            video: 'https://www.youtube.com/embed/rRTjPnVooxE?si=gdkt5nzkjMmvIV1N',
            description: `
                <h2>While Loops in Python</h2>
                <p>While loops execute a block of code as long as a specified condition is true. They are useful when you don't know in advance how many times you need to execute a block of code.</p>

                <h3>Basic Syntax</h3>
                <div class="example-box">
                    <code>
while condition:
    # Code to be executed as long as the condition is true
                    </code>
                </div>

                <h3>Examples of While Loops</h3>
                <p>1. Basic while loop:</p>
                <div class="example-box">
                    <code>
count = 0
while count < 5:
    print(count)
    count += 1

# Output:
# 0
# 1
# 2
# 3
# 4
                    </code>
                </div>

                <p>2. Using break to exit a while loop:</p>
                <div class="example-box">
                    <code>
number = 0
while True:
    if number == 5:
        break
    print(number)
    number += 1

# Output:
# 0
# 1
# 2
# 3
# 4
                    </code>
                </div>

                <p>3. Using continue to skip an iteration:</p>
                <div class="example-box">
                    <code>
number = 0
while number < 5:
    number += 1
    if number == 3:
        continue
    print(number)

# Output:
# 1
# 2
# 4
# 5
                    </code>
                </div>

                <h3>While Loop vs For Loop</h3>
                <p>While loops are typically used when:</p>
                <ul>
                    <li>You don't know how many iterations you need in advance</li>
                    <li>You want to repeat an action until a specific condition is met</li>
                    <li>You need more complex loop control than what a for loop provides</li>
                </ul>

                <p>For loops, on the other hand, are better when:</p>
                <ul>
                    <li>You want to iterate over a sequence of elements</li>
                    <li>You know the number of iterations in advance</li>
                    <li>You want to use the loop variable in your code</li>
                </ul>

                <p>Understanding when to use each type of loop is crucial for writing efficient and readable Python code.</p>
            `
        },
        {
            id: 'lesson3',
            title: 'Loop Control Statements',
            video: 'https://www.youtube.com/embed/97NdNoA3XUQ?si=PnEOmwtJabSt8pj8',
            description: `
                <h2>Loop Control Statements in Python</h2>
                <p>Loop control statements change the execution from its normal sequence. Python supports the following loop control statements:</p>

                <h3>1. break statement</h3>
                <p>The break statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop.</p>
                <div class="example-box">
                    <code>
for letter in 'Python':
    if letter == 'h':
        break
    print(letter)

# Output:
# P
# y
# t
                    </code>
                </div>

                <h3>2. continue statement</h3>
                <p>The continue statement is used to skip the rest of the code inside a loop for the current iteration only. Loop does not terminate but continues on with the next iteration.</p>
                <div class="example-box">
                    <code>
for letter in 'Python':
    if letter == 'h':
        continue
    print(letter)

# Output:
# P
# y
# t
# o
# n
                    </code>
                </div>

                <h3>3. pass statement</h3>
                <p>The pass statement is a null operation; nothing happens when it executes. It's useful as a placeholder when a statement is required syntactically, but no code needs to be executed.</p>
                <div class="example-box">
                    <code>
for letter in 'Python':
    if letter == 'h':
        pass
    print(letter)

# Output:
# P
# y
# t
# h
# o
# n
                    </code>
                </div>

                <h3>Using else with Loops</h3>
                <p>Python allows the use of else with both for and while loops. The else block is executed when the loop condition becomes false:</p>
                <div class="example-box">
                    <code>
for i in range(5):
    print(i)
else:
    print("Loop completed normally")

# Output:
# 0
# 1
# 2
# 3
# 4
# Loop completed normally
                    </code>
                </div>

                <p>Note that if a loop is exited with a break statement, the else block is not executed.</p>

                <p>Understanding these loop control statements allows you to have finer control over your loops and create more complex and efficient algorithms.</p>
            `
        }
    ],
    '7': [
        {
            id: 'lesson0',
            title: 'Function Overview',
            video: null,
            description: `
                <h2>What is a Function in Python?</h2>
                <p>A function is a reusable block of code that performs a specific task. Functions help organize code, make it more readable, and reduce repetition.</p>

                <h3>Why Use Functions?</h3>
                <ul>
                    <li>Reuse code: Write once, use many times</li>
                    <li>Organize code: Break down complex problems into smaller parts</li>
                    <li>Make code easier to read and understand</li>
                </ul>

                <h3>Basic Structure of a Function</h3>
                <div class="example-box">
                    <code>
def function_name():
    # Function body
    # Code to be executed
    print("Hello from the function!")

# Calling the function
function_name()
                    </code>
                </div>

                <h3>Example: A Simple Greeting Function</h3>
                <div class="example-box">
                    <code>
def say_hello():
    print("Hello, World!")

# Calling the function
say_hello()  # Output: Hello, World!
say_hello()  # Output: Hello, World!
                    </code>
                </div>

                <p>In this example, we defined a function called <code>say_hello()</code> that prints "Hello, World!" when called. We can call this function multiple times to reuse the code.</p>
            `
        },
        {
            id: 'lesson1',
            title: 'Functions with Parameters',
            video: 'https://www.youtube.com/embed/89cGQjB5R4M?si=hS19uoGSgGhZnwbh',
            description: `
                <h2>Functions with Parameters</h2>
                <p>Functions can accept input values called parameters. These allow you to pass information to the function to work with.</p>

                <h3>Basic Syntax</h3>
                <div class="example-box">
                    <code>
def function_name(parameter1, parameter2):
    # Function body
    # Code that uses the parameters
                    </code>
                </div>

                <h3>Example: Greeting Function with a Name Parameter</h3>
                <div class="example-box">
                    <code>
def greet(name):
    print(f"Hello, {name}!")

# Calling the function with different arguments
greet("Alice")  # Output: Hello, Alice!
greet("Bob")    # Output: Hello, Bob!
                    </code>
                </div>

                <h3>Multiple Parameters</h3>
                <p>Functions can have multiple parameters separated by commas.</p>
                <div class="example-box">
                    <code>
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

describe_pet("dog", "Buddy")  # Output: I have a dog named Buddy.
describe_pet("cat", "Whiskers")  # Output: I have a cat named Whiskers.
                    </code>
                </div>

                <p>Parameters make functions more flexible and reusable. You can pass different values to the same function to get different results.</p>
            `
        },
        {
            id: 'lesson2',
            title: 'Functions that Return Values',
            video: 'https://www.youtube.com/embed/ZnBQfF5JFDM?si=0BEN695a8q4-ezrF',
            description: `
                <h2>Functions that Return Values</h2>
                <p>Functions can return values using the <code>return</code> statement. This allows a function to compute a result and give it back to the caller.</p>

                <h3>Basic Syntax</h3>
                <div class="example-box">
                    <code>
def function_name(parameters):
    # Function body
    # Compute something
    return result
                    </code>
                </div>

                <h3>Example: A Function that Adds Two Numbers</h3>
                <div class="example-box">
                    <code>
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # Output: 8

# You can also use the returned value directly
print(add_numbers(10, 20))  # Output: 30
                    </code>
                </div>

                <h3>Using Returned Values</h3>
                <p>You can use the returned value in various ways:</p>
                <ul>
                    <li>Assign it to a variable</li>
                    <li>Use it in another calculation</li>
                    <li>Pass it to another function</li>
                    <li>Print it directly</li>
                </ul>

                <h3>Example: Temperature Converter</h3>
                <div class="example-box">
                    <code>
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Convert 25°C to Fahrenheit
temp_f = celsius_to_fahrenheit(25)
print(f"25°C is equal to {temp_f}°F")  # Output: 25°C is equal to 77.0°F

# Use the function in a condition
if celsius_to_fahrenheit(30) > 85:
    print("It's a hot day!")
else:
    print("It's not too hot today.")
                    </code>
                </div>

                <p>Functions that return values are powerful tools in programming. They allow you to perform calculations or operations and use the results in other parts of your code.</p>
            `
        }
    ]
};
