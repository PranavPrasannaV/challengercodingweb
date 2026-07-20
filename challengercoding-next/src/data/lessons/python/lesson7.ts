export const pythonLesson7 = [
    {
        title: "Introduction to Functions",
        content: `
            <p class="tutorial-text">
                Functions are reusable blocks of code that perform specific tasks. They help in breaking down complex problems into smaller, manageable pieces, making your code more organized and easier to understand.
            </p>
            <div class="key-point">
                <h4>Key Concept: Functions</h4>
                <p>Functions allow you to write code once and use it multiple times, promoting code reusability and reducing redundancy.</p>
            </div>
            <h3>Anatomy of a Function:</h3>
            <div class="code-block">
def function_name():
    # Function body
    # Code to be executed
            </div>
            <p class="tutorial-text">
                Here's a breakdown of the function structure:
                <ul>
                    <li><code>def</code>: Keyword used to define a function</li>
                    <li><code>function_name</code>: The name you give to your function</li>
                    <li><code>()</code>: Parentheses for parameters (empty in this case)</li>
                    <li><code>:</code>: Colon to start the function body</li>
                    <li>Indented code block: The actual code of the function</li>
                </ul>
            </p>
            <h3>Example: Simple Greeting Function</h3>
            <div class="code-block">
def greet():
    print("Hello, World!")

# Calling the function
greet()
            </div>
            <p class="tutorial-text">
                In this example, <code>greet</code> is the function name. When called, it prints "Hello, World!".
            </p>
            <h3>Guided Exercise: Create Your Own Function</h3>
            <p class="tutorial-text">
                Now, let's create a function that prints a custom message. Follow these steps:
                <ol>
                    <li>Define a function called <code>my_function</code></li>
                    <li>Inside the function, print a message of your choice</li>
                    <li>Call the function to see the output</li>
                </ol>
            </p>
            <div class="hint">
                <strong>Hint:</strong> Remember to use the <code>def</code> keyword to define your function, and don't forget to call it after defining!
            </div>
        `,
        initialCode: `# Define your function here
def my_function():
    print("Welcome to the world of functions!")

# Call your function here
my_function()
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Functions with Parameters",
        content: `
            <p class="tutorial-text">
                Functions can accept inputs called parameters, which allow them to work with different data each time they're called. This makes functions more flexible and powerful.
            </p>
            <div class="key-point">
                <h4>Key Concept: Parameters</h4>
                <p>Parameters are variables listed inside the parentheses in the function definition. They act as placeholders for the data that will be passed to the function when it's called.</p>
            </div>
            <h3>Function with a Parameter:</h3>
            <div class="code-block">
def greet(name):
    print(f"Hello, {name}!")

# Calling the function with an argument
greet("Alice")
greet("Bob")
            </div>
            <p class="tutorial-text">
                In this example:
                <ul>
                    <li><code>name</code> is a parameter of the <code>greet</code> function</li>
                    <li>When calling the function, we provide an argument (e.g., "Alice" or "Bob")</li>
                    <li>The function uses this argument to create a personalized greeting</li>
                </ul>
            </p>
            <h3>Multiple Parameters:</h3>
            <div class="code-block">
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

describe_pet("dog", "Rex")
describe_pet("cat", "Whiskers")
            </div>
            <h3>Guided Exercise: Create a Function with Parameters</h3>
            <p class="tutorial-text">
                Let's create a function that calculates and prints the area of a rectangle. Follow these steps:
                <ol>
                    <li>Define a function called <code>calculate_area</code> that takes two parameters: <code>length</code> and <code>width</code></li>
                    <li>Inside the function, calculate the area (length * width)</li>
                    <li>Print the calculated area</li>
                    <li>Call the function with different values to test it</li>
                </ol>
            </p>
            <div class="hint">
                <strong>Hint:</strong> Use the formula: area = length * width. Don't forget to print the result!
            </div>
        `,
        initialCode: `# Define your function here
def calculate_area(length, width):
    area = length * width
    print(f"The area of the rectangle is: {area} square units")

# Call your function with different values
calculate_area(5, 3)
calculate_area(7, 2)
calculate_area(10, 10)
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Returning Values from Functions",
        content: `
            <p class="tutorial-text">
                Functions can not only perform actions but also return values using the <code>return</code> statement. This allows functions to compute results that can be used elsewhere in your program.
            </p>
            <div class="key-point">
                <h4>Key Concept: Return Statement</h4>
                <p>The <code>return</code> statement specifies the value that a function should output. When a function returns a value, it can be assigned to a variable or used in expressions.</p>
            </div>
            <h3>Function that Returns a Value:</h3>
            <div class="code-block">
def add(a, b):
    return a + b

result = add(3, 5)
print(f"The sum is: {result}")
            </div>
            <p class="tutorial-text">
                In this example:
                <ul>
                    <li>The <code>add</code> function takes two parameters and returns their sum</li>
                    <li>The returned value is stored in the <code>result</code> variable</li>
                    <li>We can then use this value in other parts of our code</li>
                </ul>
            </p>
            <h3>Multiple Return Statements:</h3>
            <div class="code-block">
def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

print(get_grade(85))  # Outputs: B
            </div>
            <h3>Guided Exercise: Create a Function that Returns a Value</h3>
            <p class="tutorial-text">
                Let's create a function that calculates the average of three numbers. Follow these steps:
                <ol>
                    <li>Define a function called <code>calculate_average</code> that takes three parameters</li>
                    <li>Inside the function, calculate the average of the three numbers</li>
                    <li>Return the calculated average</li>
                    <li>Call the function with different sets of numbers and print the results</li>
                </ol>
            </p>
            <div class="hint">
                <strong>Hint:</strong> To calculate the average, add the three numbers and divide by 3. Use the <code>return</code> keyword to send back the result.
            </div>
        `,
        initialCode: `# Define your function here
def calculate_average(num1, num2, num3):
    average = (num1 + num2 + num3) / 3
    return average

# Call your function and print the results
print(f"Average of 10, 20, 30: {calculate_average(10, 20, 30)}")
print(f"Average of 5, 15, 25: {calculate_average(5, 15, 25)}")
print(f"Average of 100, 200, 300: {calculate_average(100, 200, 300)}")
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Function Project: Calculator",
        content: `
            <p class="tutorial-text">
                Now that we've learned about functions, parameters, and return values, let's put it all together to create a simple calculator program. This project will help reinforce the concepts we've covered and show how functions can be used to create more complex programs.
            </p>
            <div class="key-point">
                <h4>Project Goal</h4>
                <p>Create a calculator that can perform basic arithmetic operations (addition, subtraction, multiplication, division) using functions.</p>
            </div>
            <h3>Project Requirements:</h3>
            <p class="tutorial-text">
                Your calculator should:
                <ol>
                    <li>Have separate functions for each arithmetic operation</li>
                    <li>Take two numbers as input for each operation</li>
                    <li>Return the result of the operation</li>
                    <li>Handle division by zero gracefully</li>
                    <li>Allow the user to choose which operation to perform</li>
                </ol>
            </p>
            <h3>Implementation Steps:</h3>
            <ol>
                <li>Define functions for addition, subtraction, multiplication, and division</li>
                <li>Create a main function that:
                    <ul>
                        <li>Prompts the user for two numbers</li>
                        <li>Asks the user which operation to perform</li>
                        <li>Calls the appropriate function based on the user's choice</li>
                        <li>Displays the result</li>
                    </ul>
                </li>
                <li>Implement error handling for division by zero</li>
                <li>Use a loop to allow multiple calculations</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> Use the <code>input()</code> function to get user input. Convert string inputs to numbers using <code>float()</code>. For division, check if the second number is zero before performing the operation.
            </div>
            <p class="tutorial-text">
                The template below provides a starting point for your Calculator project. Fill in the functions and complete the main program logic!
            </p>
        `,
        initialCode: `# Calculator functions
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Error: Division by zero"

def calculator():
    while True:
        print("\\nSimple Calculator")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Exit")

        choice = input("Enter choice (1/2/3/4/5): ")

        if choice == '5':
            print("Thank you for using the calculator. Goodbye!")
            break

        if choice in ('1', '2', '3', '4'):
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))

            if choice == '1':
                print(f"Result: {add(num1, num2)}")
            elif choice == '2':
                print(f"Result: {subtract(num1, num2)}")
            elif choice == '3':
                print(f"Result: {multiply(num1, num2)}")
            elif choice == '4':
                print(f"Result: {divide(num1, num2)}")
        else:
            print("Invalid input. Please try again.")

# Run the calculator
calculator()
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
