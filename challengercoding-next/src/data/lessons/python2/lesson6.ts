
export const python2Lesson6 = [
    {
        title: "Introduction to Modules",
        content: `
            <h1 class="tutorial-title">Exercise 1: Introduction to Modules</h1>
            <p class="tutorial-text">
                Welcome to Python 2, Lesson 6! Today, we'll learn about modules in Python. Modules are files containing Python code that can be imported and used in other Python programs.
            </p>
            <div class="hint-box">
                <h3>What are Modules?</h3>
                <p>Modules are reusable pieces of code that can be imported into your Python programs. They help organize and structure your code, making it easier to maintain and reuse.</p>
            </div>
            <p class="tutorial-text">
                Python comes with many built-in modules that you can use right away. Let's start by importing and using the 'math' module:
            </p>
            <div class="code-block">
import math

# Using the sqrt function from the math module
result = math.sqrt(16)
print(f"The square root of 16 is: {result}")

# Using the pi constant from the math module
circumference = 2 * math.pi * 5
print(f"The circumference of a circle with radius 5 is: {circumference:.2f}")
            </div>
            <p class="tutorial-text">
                Now it's your turn! Import the 'random' module and use it to generate random numbers:
            </p>
            <ol class="tutorial-text">
                <li>Import the 'random' module</li>
                <li>Generate a random integer between 1 and 10 (inclusive) using random.randint()</li>
                <li>Generate a random float between 0 and 1 using random.random()</li>
                <li>Print both results</li>
            </ol>
        `,
        initialCode: "# Import the random module and generate random numbers here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Creating and Using Custom Modules",
        content: `
            <h1 class="tutorial-title">Exercise 2: Creating and Using Custom Modules</h1>
            <p class="tutorial-text">
                In addition to using built-in modules, you can create your own custom modules to organize your code better.
            </p>
            <div class="hint-box">
                <h3>Creating Custom Modules</h3>
                <ul>
                    <li>A module is just a Python file with a .py extension</li>
                    <li>You can import functions, classes, and variables from your custom modules</li>
                    <li>Use the 'import' keyword to use your custom modules in other Python files</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Let's create a simple custom module and use it. First, we'll create a module called 'greetings.py':
            </p>
            <div class="code-block">
# This is the content of greetings.py
def say_hello(name):
    return f"Hello, {name}!"

def say_goodbye(name):
    return f"Goodbye, {name}!"
            </div>
            <p class="tutorial-text">
                Now, let's use our custom module in another Python file:
            </p>
            <div class="code-block">
# This is a new Python file using our custom module
import greetings

print(greetings.say_hello("Alice"))
print(greetings.say_goodbye("Bob"))
            </div>
            <p class="tutorial-text">
                Your turn! Create a custom module called 'calculator.py' with the following functions:
            </p>
            <ol class="tutorial-text">
                <li>add(a, b): returns the sum of a and b</li>
                <li>subtract(a, b): returns the difference between a and b</li>
                <li>multiply(a, b): returns the product of a and b</li>
                <li>divide(a, b): returns the result of a divided by b</li>
            </ol>
            <p class="tutorial-text">
                Then, create a main program that imports your calculator module and uses all of its functions.
            </p>
        `,
        initialCode: "# Create your calculator module and use it here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Understanding Variable Scope",
        content: `
            <h1 class="tutorial-title">Exercise 3: Understanding Variable Scope</h1>
            <p class="tutorial-text">
                Variable scope refers to the part of a program where a variable is accessible. Understanding scope is crucial for writing clean and bug-free code.
            </p>
            <div class="hint-box">
                <h3>Types of Variable Scope</h3>
                <ul>
                    <li>Local scope: Variables defined inside a function</li>
                    <li>Global scope: Variables defined outside of any function</li>
                    <li>Enclosing scope: Variables in the outer function of nested functions</li>
                    <li>Built-in scope: Names that are pre-assigned in Python</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Let's look at an example demonstrating local and global scope:
            </p>
            <div class="code-block">
# Global variable
x = 10

def print_x():
    # Local variable
    x = 20
    print(f"Local x: {x}")

print_x()
print(f"Global x: {x}")
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create a global variable called 'message' with the value "Hello, World!"</li>
                <li>Create a function called 'change_message' that creates a local variable also called 'message' with a different value</li>
                <li>Print both the local and global 'message' variables to see the difference</li>
            </ol>
        `,
        initialCode: "# Demonstrate variable scope here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Global and Local Variables",
        content: `
            <h1 class="tutorial-title">Exercise 4: Global and Local Variables</h1>
            <p class="tutorial-text">
                Sometimes, you might want to modify a global variable from within a function. Python provides the 'global' keyword for this purpose.
            </p>
            <div class="hint-box">
                <h3>Using the 'global' Keyword</h3>
                <ul>
                    <li>The 'global' keyword allows you to modify a global variable from within a function</li>
                    <li>It tells Python that the variable is global and should not be treated as a local variable</li>
                    <li>Use 'global' with caution, as it can make your code harder to understand and maintain</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example of using the 'global' keyword:
            </p>
            <div class="code-block">
count = 0

def increment():
    global count
    count += 1
    print(f"Count is now: {count}")

increment()
increment()
increment()
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create a global variable called 'balance' with an initial value of 1000</li>
                <li>Create a function called 'deposit' that takes an amount and adds it to the balance</li>
                <li>Create a function called 'withdraw' that takes an amount and subtracts it from the balance</li>
                <li>Use both functions a few times and print the final balance</li>
            </ol>
        `,
        initialCode: "# Create a simple banking system using global variables\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project: Weather Forecast App",
        content: `
            <h1 class="tutorial-title">Weekly Project: Weather Forecast App</h1>
            <p class="tutorial-text">
                Let's put everything we've learned about modules and scope into practice by creating a simple weather forecast app.
            </p>
            <p class="tutorial-text">
                Your task is to create a program that:
            </p>
            <ol class="tutorial-text">
                <li>Creates a custom module called 'weather.py' with functions for different weather conditions</li>
                <li>Uses the random module to generate random weather conditions</li>
                <li>Keeps track of the current temperature as a global variable</li>
                <li>Allows the user to check the weather for different days of the week</li>
            </ol>
            <p class="tutorial-text">
                Here's a starting template:
            </p>
            <div class="code-block">
# weather.py
import random

def sunny():
    return "It's a sunny day!"

def rainy():
    return "It's raining today."

def cloudy():
    return "It's a cloudy day."

def get_random_weather():
    conditions = [sunny, rainy, cloudy]
    return random.choice(conditions)()

# main.py
import weather

temperature = 20  # Global variable for temperature

def check_weather(day):
    global temperature
    temperature += random.randint(-5, 5)
    condition = weather.get_random_weather()
    return f"{day}: {condition} Temperature: {temperature}°C"

# Test your Weather Forecast App
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

for day in days:
    print(check_weather(day))
            </div>
            <p class="tutorial-text">
                Enhance the Weather Forecast App by adding the following features:
            </p>
            <ol class="tutorial-text">
                <li>Add more weather conditions (e.g., snowy, windy) to the weather.py module</li>
                <li>Create a function to calculate the average temperature for the week</li>
                <li>Add a feature to find the warmest and coldest days of the week</li>
                <li>Implement error handling for invalid inputs (e.g., checking weather for an invalid day)</li>
            </ol>
            <p class="tutorial-text">
                This project will give you hands-on experience with modules, scope, and practical application of Python concepts. Good luck!
            </p>
        `,
        initialCode: "# Implement your enhanced Weather Forecast App here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
