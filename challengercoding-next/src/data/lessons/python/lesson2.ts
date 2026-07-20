export const pythonLesson2 = [
    {
        title: "Understanding Variables",
        content: `
            <h1 class="tutorial-title">Understanding Variables</h1>
            <p class="tutorial-text">
                Variables are fundamental building blocks in programming. They act as containers that store information in a computer's memory, allowing us to work with data throughout our program.
            </p>
            <p class="tutorial-text">
                To create a variable in Python, we use the assignment operator (=). Here's an example:
            </p>
            <div class="code-block">
x = 100
            </div>
            <p class="tutorial-text">
                In this example, we've created a variable named 'x' and assigned it the value 100. We can now use 'x' throughout our program to refer to this value.
            </p>
            <p class="tutorial-text">
                Variables can store different types of data, such as numbers, text, or more complex structures. The type of data a variable holds can change during the execution of a program, which is why Python is called a dynamically-typed language.
            </p>
            <p class="tutorial-text">
                Now, let's try creating a variable named <strong>my_variable</strong> with a value of <strong>50</strong>.
            </p>
            <p class="tutorial-text">
                Write your code in the editor below and click "Run" to see the result. Remember to use the print() function to display the value of your variable.
            </p>
        `,
        initialCode: "# Create a variable named my_variable with a value of 50\n# Then print the variable\n\n",
        expectedOutput: "50",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Data Types",
        content: `
            <h1 class="tutorial-title">Data Types</h1>
            <p class="tutorial-text">
                In Python, data types define the nature of the data we're working with. Understanding data types is crucial for effective programming. Let's explore three fundamental data types: strings, integers, and floats.
            </p>
            <h2>Strings</h2>
            <p class="tutorial-text">
                A <strong>string</strong> is a sequence of characters, typically used to represent text. Strings are always enclosed in either single quotes ('') or double quotes ("").
            </p>
            <div class="code-block">
string1 = "hello"
string2 = 'I love Python'
            </div>
            <p class="tutorial-text">
                Note that you can include numbers within strings, but they'll be treated as text, not numerical values.
            </p>
            <h2>Integers</h2>
            <p class="tutorial-text">
                An <strong>integer</strong> is a whole number without a decimal point. Integers can be positive, negative, or zero.
            </p>
            <div class="code-block">
int1 = 42
int2 = -10
int3 = 0
            </div>
            <p class="tutorial-text">
                Integers are used for counting and performing arithmetic operations that don't require fractional parts.
            </p>
            <h2>Floats</h2>
            <p class="tutorial-text">
                A <strong>float</strong> (short for "floating-point number") is a number with a decimal point. Floats are used to represent real numbers in Python.
            </p>
            <div class="code-block">
float1 = 3.14
float2 = -0.5
float3 = 2.0
            </div>
            <p class="tutorial-text">
                Floats are used when we need to work with fractional values or very large or small numbers.
            </p>
            <p class="tutorial-text">
                Now, let's practice working with these data types. In the code editor below, we have some variables with mismatched data types. Your task is to fix them so that each variable has the correct data type.
            </p>
        `,
        initialCode: `# Fix the variables that have mismatched data types
int1 = 30
float1 = "hello"
string1 = 3.14
float2 = 8.56
int2 = "pi"
string2 = "I like coding"

# After fixing, print each variable to check your work
print(int1)
print(float1)
print(string1)
print(float2)
print(int2)
print(string2)
`,
        expectedOutput: "30\n3.14\nhello\n8.56\n3\nI like coding",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "String Operations",
        content: `
            <h1 class="tutorial-title">String Operations</h1>
            <p class="tutorial-text">
                Strings in Python are versatile and come with many built-in operations. One of the most common operations is string concatenation, which allows us to combine strings.
            </p>
            <p class="tutorial-text">
                We use the <strong>+</strong> operator to concatenate strings. Here's an example:
            </p>
            <div class="code-block">
first_string = "Hello, "
second_string = "World!"
full_string = first_string + second_string
print(full_string)
            </div>
            <p class="tutorial-text">
                This code will output: Hello, World!
            </p>
            <p class="tutorial-text">
                It's important to note that when concatenating strings, Python doesn't automatically add spaces. If you want a space between words, you need to include it in one of the strings or add it as a separate string.
            </p>
            <p class="tutorial-text">
                Another useful string operation is repetition, which uses the <strong>*</strong> operator:
            </p>
            <div class="code-block">
repeated_string = "Ha" * 3
print(repeated_string)  # Outputs: HaHaHa
            </div>
            <p class="tutorial-text">
                Now, let's practice string concatenation. Create two string variables and concatenate them to form the phrase "Hello, World!". Remember to include the comma and the space in one of your strings.
            </p>
        `,
        initialCode: "# Create two string variables and concatenate them to form \"Hello, World!\"\n# Print the result\n\n",
        expectedOutput: "Hello, World!",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Integer and Float Operations",
        content: `
            <h1 class="tutorial-title">Integer and Float Operations</h1>
            <p class="tutorial-text">
                Python supports various mathematical operations on integers and floats. These operations include:
            </p>
            <ul class="tutorial-text">
                <li>Addition (+)</li>
                <li>Subtraction (-)</li>
                <li>Multiplication (*)</li>
                <li>Division (/)</li>
                <li>Floor Division (//)</li>
                <li>Modulus (%)</li>
                <li>Exponentiation (**)</li>
            </ul>
            <p class="tutorial-text">
                Here's an example demonstrating some of these operations:
            </p>
            <div class="code-block">
integer_variable = 10
float_variable = 5.5

sum_result = integer_variable + float_variable
product_result = integer_variable * float_variable
division_result = integer_variable / float_variable

print(sum_result)      # Output: 15.5
print(product_result)  # Output: 55.0
print(division_result) # Output: 1.8181818181818181
            </div>
            <p class="tutorial-text">
                Notice that when we perform operations between integers and floats, the result is always a float. This is because Python automatically converts the result to the more precise type to avoid losing information.
            </p>
            <p class="tutorial-text">
                The floor division operator (//) always rounds down to the nearest integer, while the modulus operator (%) gives the remainder of a division:
            </p>
            <div class="code-block">
print(10 // 3)  # Output: 3
print(10 % 3)   # Output: 1
            </div>
            <p class="tutorial-text">
                Now, let's practice these operations. Create two variables (one integer and one float) and perform a multiplication operation. Then print the result.
            </p>
        `,
        initialCode: "# Create an integer variable and a float variable\n# Multiply them and print the result\n\n",
        expectedOutput: "55.0",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Printing Variables",
        content: `
            <h1 class="tutorial-title">Printing Variables</h1>
            <p class="tutorial-text">
                The print() function is a crucial tool in Python for displaying information. It allows us to output the values of variables, expressions, or any other data to the console.
            </p>
            <p class="tutorial-text">
                To print the value of a variable, we simply include the variable name inside the parentheses of the print() function. Here's an example:
            </p>
            <div class="code-block">
x = 100
print(x)
            </div>
            <p class="tutorial-text">
                This code will output: 100
            </p>
            <p class="tutorial-text">
                We can also print multiple items in a single print statement by separating them with commas:
            </p>
            <div class="code-block">
name = "Alice"
age = 30
print("Name:", name, "Age:", age)
            </div>
            <p class="tutorial-text">
                This code will output: Name: Alice Age: 30
            </p>
            <p class="tutorial-text">
                Python's print() function automatically adds a newline character at the end of each print statement. If you want to print without a newline, you can use the end parameter:
            </p>
            <div class="code-block">
print("Hello", end=" ")
print("World")
            </div>
            <p class="tutorial-text">
                This will output: Hello World
            </p>
            <p class="tutorial-text">
                Now, let's practice printing variables. Create a float variable with the value 3.14159 (an approximation of pi) and print it.
            </p>
        `,
        initialCode: "# Create a float variable with the value 3.14159\n# Print the variable\n\n",
        expectedOutput: "3.14159",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Art Project",
        content: `
            <h1 class="tutorial-title">Art Project: ASCII Art</h1>
            <p class="tutorial-text">
                ASCII art is a graphic design technique that uses printable characters to create images. It's a fun way to create simple graphics using just text, and it's a great exercise for practicing with print statements and string manipulation.
            </p>
            <p class="tutorial-text">
                Here's a simple example of ASCII art:
            </p>
            <div class="code-block">
print("  _____  ")
print(" /     \\ ")
print("| () () |")
print(" \\  ^  / ")
print("  |||||  ")
            </div>
            <p class="tutorial-text">
                This code creates a simple face:
            </p>
            <pre>
  _____  
 /     \\ 
| () () |
 \\  ^  / 
  |||||  
            </pre>
            <p class="tutorial-text">
                When creating ASCII art, keep these tips in mind:
            </p>
            <ul class="tutorial-text">
                <li>Use spaces to create the shape you want</li>
                <li>Backslashes (\\) need to be escaped with another backslash (\\\\) in strings</li>
                <li>You can use different characters to create different textures or shades</li>
                <li>Simple designs often work best</li>
            </ul>
            <p class="tutorial-text">
                Now it's your turn to create some ASCII art! Use multiple print statements to draw a picture. You can create anything you like - an animal, a plant, a building, or an abstract design. Be creative!
            </p>
            <p class="tutorial-text">
                Remember:
                <ul>
                    <li>Use print statements for each line of your art</li>
                    <li>You can use any printable characters: letters, numbers, and symbols</li>
                    <li>Pay attention to spaces and line breaks to create your design</li>
                </ul>
            </p>
        `,
        initialCode: "# Create your ASCII art here\n# Use multiple print statements to draw your picture\n\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
