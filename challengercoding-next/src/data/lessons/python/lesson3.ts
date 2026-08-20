export const pythonLesson3 = [
    {
        title: "Understanding Inputs",
        content: `
            <h2>Exercise 1: Understanding Inputs</h2>
            <p class="tutorial-text">
                <strong>Inputs</strong> are simply data that the user provides to the computer. This can be incredibly useful as they can be used for many things.
            </p>

            <p class="tutorial-text"><strong>Here is the basic input function:</strong></p>
            <div class="code-block">input()</div>
            <p class="tutorial-text">Inputs are stored in variables from where they can be easily manipulated to perform other tasks.</p>    
            <div class="code-block">variable = input()</div>

            <p class="tutorial-text">Inside the brackets of the input function, you must place the input message, which simply prints before you ask the user for their input.</p>
            <div class="code-block">input("Please enter your name: ")</div>

            <br>
            <h3>Try it Yourself</h3>
            <p class="tutorial-text">Practice writing different input statements!</p>
        `,
        initialCode: `# practice writing a variety of input statements!
variable1 = # TODO: replace and write an input statement
variable2 = # TODO: replace and write a second input statement
variable3 = # TODO: replace and write a third input statement

# TODO: print the three variables
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Input Conversion",
        content: `
            <h2>Exercise 2: Input Conversion</h2>
            <p class="tutorial-text">
                Inputs always come out as a string, which means that if you only input a number, you cannot perform any actions on it besides the string concatenation since the <strong>integer is now a string.</strong>
            </p>
            <br>
            <p class="tutorial-text">
                Luckily, coding languages provide a function which turn the strings to the integers (if there are components of a non-integer, or words, in the string, it will provide an error).
            </p>

            <p class="tutorial-text">The <code>int()</code> function converts the string into an integer.</p> 
            <div class="code-block">int(input("Type a number"))</div>
            <p class="tutorial-text">The <code>float()</code> function converts the string into a float.</p> 
            <div class="code-block">float(input("Type a decimal"))</div>
            <h3>Try it Yourself</h3>
            <p class="tutorial-text">Write a Python program that asks the user for their name and age, and then prints a message greeting them and stating their age.</p>
        `,
        initialCode: `# write a program to ask the user for their name and age
name = #TODO
age = #TODO
print(f"Hello, {name}! You are {age} years old.")`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Guided Exercise: Temperature Converter",
        content: `
            <h2 class="tutorial-title">Guided Exercise: Temperature Converter</h2>
            <p class="tutorial-text">
                Let's create a simple temperature converter that converts Celsius to Fahrenheit. We'll guide you through the process step by step.
            </p>
            <p class="tutorial-text">
                The formula to convert Celsius to Fahrenheit is: F = (C * 9/5) + 32
            </p>
            <p class="tutorial-text">
                Follow these steps:
                <ol>
                    <li>Ask the user for a temperature in Celsius using <code>input()</code></li>
                    <li>Convert the input to a float using <code>float()</code></li>
                    <li>Apply the conversion formula</li>
                    <li>Print the result</li>
                </ol>
            </p>
            <p class="tutorial-text">
                Complete the code below to create the temperature converter:
            </p>
        `,
        initialCode: `# Step 1: Ask for temperature in Celsius
celsius = # Step 2: Convert Celsius to Fahrenheit
fahrenheit =

# Step 3: Print the result
print(f"{celsius}°C is equal to {fahrenheit}°F")
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Project: Personal Information Form",
        content: `
            <h2 class="tutorial-title">Project: Personal Information Form</h2>
            <p class="tutorial-text">
                For this project, you'll create a program that collects personal information from the user and then displays it in a formatted manner. This project will test your knowledge of input functions, string concatenation, and basic Python syntax.
            </p>
            <p class="tutorial-text">
                Your program should:
                <ol>
                    <li>Ask for the user's name, age, and favorite hobby</li>
                    <li>Calculate the year the user was born (assume current year is 2023)</li>
                    <li>Create a sentence using string concatenation that includes all this information</li>
                    <li>Print the final sentence</li>
                </ol>
            </p>
            <p class="tutorial-text">
                Use your knowledge of Python to complete this project. Remember to use appropriate input functions and string formatting.
            </p>
        `,
        initialCode: `# Personal Information Form
# Collect user's name, age, and favorite hobby
# Calculate birth year
# Create and print a sentence with all the information

`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
