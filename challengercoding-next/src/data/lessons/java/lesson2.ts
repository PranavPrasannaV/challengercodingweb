export const javaLesson2 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java Guided Tutorials - Week 2</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Welcome to Week 2 of our Java Guided Tutorials! This week, we'll dive deeper into Java programming concepts, focusing on data types, operations, and variables.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">Lesson Overview:</h3>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Understanding different data types in Java</li>
                        <li>Performing operations with integers and doubles</li>
                        <li>Working with strings and string operations</li>
                        <li>Creating and using variables</li>
                        <li>Printing variable values</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mt-4">
                    By the end of this week, you'll have a solid understanding of basic Java data types and operations, setting you up for more advanced programming concepts.
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Data Types",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">1. Data Types</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">In Java, primitive data types are the most basic types of data. There are several different types, each serving a specific purpose.</p>

                <h3 class="text-xl font-semibold mb-2 text-gray-800">Primitive Types:</h3>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>int:</strong> The <code class="bg-gray-100 p-1 rounded">int</code> data type is used to store integers, which are whole numbers without a decimal point.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int number = 10;</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">This data type is used when you need to perform operations with whole numbers, such as counting or indexing.</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>double:</strong> The <code class="bg-gray-100 p-1 rounded">double</code> data type is used to store decimal numbers. It's great for precision in calculations where fractions are involved.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>double pi = 3.14159;</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Use <code class="bg-gray-100 p-1 rounded">double</code> when you need to store numbers with decimals, such as measurements or calculations that require accuracy.</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>boolean:</strong> The <code class="bg-gray-100 p-1 rounded">boolean</code> data type stores only two possible values: <code class="bg-gray-100 p-1 rounded">true</code> or <code class="bg-gray-100 p-1 rounded">false</code>. It's typically used in conditional statements to make decisions in the code.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>boolean isJavaFun = true;</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Use <code class="bg-gray-100 p-1 rounded">boolean</code> when you need a simple yes/no or true/false condition.</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>char:</strong> The <code class="bg-gray-100 p-1 rounded">char</code> data type is used to store a single character, like a letter, number, or symbol. Char values are surrounded by single quotes.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>char grade = 'A';</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">This data type is useful when you need to handle individual characters, such as a letter grade or a single digit.</p>

                <h3 class="text-xl font-semibold mb-2 text-gray-800">Non-Primitive Type:</h3>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>String:</strong> Although not a primitive data type, <code class="bg-gray-100 p-1 rounded">String</code> is a special kind of data in Java that is used to store text. Strings are sequences of characters enclosed in double quotes.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>String greeting = "Hello, World!";</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Strings can contain letters, numbers, and symbols, and they are commonly used for displaying text and handling user input.</p>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                    <p class="text-gray-700">Now fix the non-examples for each data type in the code editor below.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "",
        initialCode: `// Fix the following non-examples for each data type:

int myNumber = "42";  // Should be an integer
double myDecimal = 3;  // Should be a decimal number
boolean isTrue = "yes";  // Should be true or false
char myLetter = "A";  // Should be a single character
String myText = 'Hello';  // Should use double quotes
`
    },
    {
        title: "Integer and Double Operations",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">2. Integer and Double Operations</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">In Java, integers and doubles can be used in various mathematical operations. These operations include:</p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Addition (+):</strong> Adds two numbers together.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int sum = 10 + 5;  // sum is 15</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Subtraction (-):</strong> Subtracts one number from another.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int difference = 10 - 5;  // difference is 5</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Multiplication (*):</strong> Multiplies two numbers together.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int product = 10 * 5;  // product is 50</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Division (/):</strong> Divides one number by another.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int quotient = 10 / 5;  // quotient is 2</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Modulus (%):</strong> Returns the remainder of a division operation.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int remainder = 10 % 3;  // remainder is 1</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4">These operations can be used with both <strong>int</strong> and <strong>double</strong> data types. When using them with different types, the result will be automatically cast to the appropriate type. For example:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int integer_variable = 10;
double double_variable = 5.5;
double result = integer_variable + double_variable;
System.out.println(result);  // result is 15.5</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4">Look at the text editor below, and follow the instructions.</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Write your code in the Java environment and click "Run".</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `// Perform the following operations and print the results:

int a = 10;
int b = 3;

// 1. Add a and b
// 2. Subtract b from a
// 3. Multiply a and b
// 4. Divide a by b
// 5. Find the remainder of a divided by b

double x = 10.5;
double y = 3.2;

// 6. Add x and y
// 7. Multiply x and y
// 8. Divide x by y
`
    },
    {
        title: "String Operations",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">3. String Operations</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Strings, and other values such as int and double can be combined using the <strong>+</strong> operator. This is called string concatenation. For example:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>String first_string = "Hello, ";
String second_string = "World!";
String full_string = first_string + second_string;
System.out.println(full_string); // will print Hello, World!</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Run the following code in the environment below.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "",
        initialCode: `// Perform the following string operations:

String str1 = "Hello";
String str2 = "World";

// 1. Concatenate str1 and str2 with a space in between
// 2. Print the length of the resulting string
// 3. Convert the resulting string to uppercase
// 4. Check if the resulting string contains the word "HELLO"
`
    },
    {
        title: "Understanding Variables",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">4. Understanding Variables</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Variables are where information is stored in a computer's memory. Here's an example of how to create a variable:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int num = 100;</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Now, let's try creating a variable named <strong>my_variable</strong> with a value of <strong>50</strong>.</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Write your code below. Once you are done, copy the code into the Java environment.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "",
        initialCode: `// Create the following variables:

// 1. An integer named 'age' with a value of 25
// 2. A double named 'height' with a value of 5.9
// 3. A boolean named 'isStudent' with a value of true
// 4. A String named 'name' with your name as the value

// Print all the variables
`
    },
    {
        title: "Printing Variables",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">5. Printing Variables</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">To print the value of a variable, simply include the variable name in the print function:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int x = 100;
System.out.println(x);</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Let's print a variable that contains a double value.</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Write your code below and test it within the Java environment.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "",
        initialCode: `// Create and print the following variables:

// 1. Create a double variable named 'pi' with the value 3.14159
// 2. Create an integer variable named 'count' with the value 100
// 3. Create a String variable named 'message' with the value "Java is fun!"

// Print each variable on a new line
// Then, print a sentence using all three variables
`
    },
    {
        title: "Weekly Project",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">6. Weekly Project: Art Project</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Use this space to create your own design using <strong>print</strong> statements.</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Remember that anything you input between the parentheses gets printed!</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Here is mine: \\_('_')_/</p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">What's yours? Get creative with it!</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `// Create your ASCII art design here using print statements
// For example:
System.out.println("\\_('_')_/");

// Now, create your own design!
`
    }
];
