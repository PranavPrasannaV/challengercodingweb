
export const pythonLesson1 = [
    {
        title: "Say hello",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Exercise 1: Say hello</h1>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Welcome to your first Python programming exercise! Let's start with the classic "Hello, World" program.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              In Python, we use the <code class="bg-gray-100 p-1 rounded font-mono text-sm">print()</code> function to display text on the screen. Here's how you can print "Hello, World!":
          </p>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono">print('Hello, World!')</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Let's break this down:
          </p>
          <ul class="list-disc list-inside text-gray-700 mb-4">
              <li><code class="bg-gray-100 p-1 rounded font-mono text-sm">print</code> is the function that tells Python to display something.</li>
              <li>The parentheses <code class="bg-gray-100 p-1 rounded font-mono text-sm">()</code> contain what we want to print.</li>
              <li>The text we want to print is enclosed in single quotes <code class="bg-gray-100 p-1 rounded font-mono text-sm">''</code>.</li>
          </ul>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Now it's your turn! Try printing the following statement:
          </p>
          <div class="bg-gray-100 p-3 rounded border border-gray-300 mb-4 font-mono font-bold text-gray-800">hello, world</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Type your code in the editor below, then hit the <strong>Run</strong> button to see if it works!
          </p>
      `,
        initialCode: "# Write your code here to print 'hello, world'\n",
        expectedOutput: "hello, world",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Print your name",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Exercise 2: Print your name</h1>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Great job on your first program! Now, let's personalize things a bit by printing your name.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Remember, we use the <code class="bg-gray-100 p-1 rounded font-mono text-sm">print()</code> function to display text. If your name is John, you would write:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono">print('John')</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              You can print anything as long as it's enclosed in quotes. Try these examples:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono">print('Hello, I am John!')
print('I love Python!')
print('2023')</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Now it's your turn! Write a Python program to print your own name:
          </p>
          <div class="bg-gray-100 p-3 rounded border border-gray-300 mb-4 font-mono font-bold text-gray-800">Your Name</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Type your code in the editor below, then click the <strong>Run</strong> button to see your name in lights!
          </p>
      `,
        initialCode: "# Write code to print your name\n",
        expectedOutput: null, // No specific expected output validation for name
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Debugging",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Exercise 3: Debugging</h1>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Welcome to the world of debugging! As a programmer, you'll spend a lot of time fixing errors in code. Let's start with a simple example.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              First, let's understand what syntax is:
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
              <h3 class="font-bold text-gray-800">What is Syntax?</h3>
              <p class="text-gray-700">In programming, syntax refers to the set of rules that define how programs must be written to be valid. It's like the grammar of a programming language. When we violate these rules, we get a syntax error.</p>
          </div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Here's a piece of Python code with a syntax error:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono">print("Hello, World!)</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Can you spot the problem? This code has a syntax error because it's missing a closing quotation mark.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Your task is to fix this error. Here are the steps:
          </p>
          <ol class="list-decimal list-inside text-gray-700 mb-4">
              <li>Look at the code carefully.</li>
              <li>Find the missing quotation mark.</li>
              <li>Add the missing quotation mark in the correct place.</li>
              <li>Run the corrected code to make sure it works.</li>
          </ol>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Type the corrected code in the editor below, then click <strong>Run</strong> to check if you've fixed the bug!
          </p>
      `,
        initialCode: "# Fix the error in the code below\nprint(\"Hello, World!)",
        expectedOutput: "Hello, World!",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Printing Art",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Exercise 4: Printing Art</h1>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Let's get creative with Python! In this exercise, you'll create ASCII art using print statements.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
              <h3 class="font-bold text-gray-800">What is ASCII Art?</h3>
              <p class="text-gray-700">ASCII art is a graphic design technique that uses computers for presentation and consists of pictures pieced together from printable characters defined by the ASCII Standard.</p>
          </div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              You can create simple drawings or patterns using characters. Here's an example:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono">
print(" /\\_/\\")
print("( o.o )")
print(" > ^ <")</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              This code will print a simple cat face:
          </p>
          <div class="bg-gray-100 p-3 rounded border border-gray-300 mb-4 font-mono whitespace-pre text-gray-800">
 /\\_/\\
( o.o )
 > ^ <</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Now it's your turn! Use the editor below to create your own ASCII art. Be creative - you could draw an animal, a plant, a building, or anything else you can imagine!
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Remember to use multiple <code class="bg-gray-100 p-1 rounded font-mono text-sm">print()</code> statements to create multiple lines in your art.
          </p>
      `,
        initialCode: "# Create your ASCII art here\n# Use multiple print() statements\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Weekly Project: Star Pattern</h1>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Welcome to your weekly project! This week, you'll create a program that prints a specific star pattern. This project will help you practice using multiple print statements to create a shape.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Your task is to write a Python program that prints the following pattern:
          </p>
          <div class="bg-gray-100 p-3 rounded border border-gray-300 mb-4 font-mono whitespace-pre text-gray-800">
*
**
***
****
*****</div>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              This pattern is a right-angled triangle made of asterisks (*). Each line has one more asterisk than the line above it.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Here are the steps to create this pattern:
          </p>
          <ol class="list-decimal list-inside text-gray-700 mb-4">
              <li>Use five separate <code class="bg-gray-100 p-1 rounded font-mono text-sm">print()</code> statements, one for each line of the triangle.</li>
              <li>In each <code class="bg-gray-100 p-1 rounded font-mono text-sm">print()</code> statement, include the correct number of asterisks for that line.</li>
              <li>Make sure each line prints on a new line (this happens automatically with <code class="bg-gray-100 p-1 rounded font-mono text-sm">print()</code>).</li>
          </ol>
          <p class="text-lg leading-relaxed text-gray-700 mb-4">
              Write your code in the editor below. Use five <code class="bg-gray-100 p-1 rounded font-mono text-sm">print()</code> statements to create each line of the pattern. When you're done, click the "Run" button to see if your pattern matches the one above!
          </p>
          <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
              <h3 class="font-bold text-gray-800">Extra Challenge:</h3>
              <p class="text-gray-700">If you've successfully created the pattern, try to modify your code to print the pattern in reverse, like this:</p>
              <pre class="bg-white p-2 mt-2 rounded border border-gray-200 font-mono text-sm text-gray-800">
*****
****
***
**
*
              </pre>
          </div>
      `,
        initialCode: "# Write your code here to print the star pattern\n# Use five print() statements\n",
        expectedOutput: "*\n**\n***\n****\n*****",
        showCompiler: true,
        showAutograder: true
    }
];
