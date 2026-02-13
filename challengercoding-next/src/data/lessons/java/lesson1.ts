
export const javaLesson1 = [
    {
        title: "Lesson Overview",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java Guided Tutorials - Week 1</h1>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">
                  Welcome to Week 1 of our Java Guided Tutorials! This week, we'll introduce you to the basics of Java programming. You'll learn how to create and run your first Java program, understand Java syntax, and practice basic debugging techniques.
              </p>
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 class="text-xl font-semibold mb-2 text-gray-800">Lesson Overview:</h3>
                  <ul class="list-disc list-inside text-gray-700">
                      <li>Creating and running your first Java program</li>
                      <li>Understanding Java syntax and structure</li>
                      <li>Basic debugging techniques</li>
                      <li>Quiz to test your knowledge</li>
                      <li>Weekly project to apply what you've learned</li>
                  </ul>
              </div>
              <p class="text-lg leading-relaxed text-gray-700 mt-4">
                  By the end of this week, you'll have a solid foundation in Java programming and be ready to tackle more advanced concepts. Let's get started!
              </p>
          </div>
      `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "My First Java Program",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">1. My First Java Program</h1>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Hello, Java!</h3>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Let's start by creating a simple Java program that prints "Hello, Java!" to the console. Follow these steps:</p>
              <ol class="list-decimal list-inside mb-4 text-gray-700">
                  <li>Open the online compiler below</li>
                  <li>Replace the existing code with the following:</li>
              </ol>
              <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code></pre>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Let's break down this code:</p>
              <ul class="list-disc list-inside mb-4 text-gray-700">
                  <li><code class="bg-gray-100 p-1 rounded">public class HelloJava</code>: This declares a public class named HelloJava.</li>
                  <li><code class="bg-gray-100 p-1 rounded">public static void main(String[] args)</code>: This is the main method, which is the entry point of our program.</li>
                  <li><code class="bg-gray-100 p-1 rounded">System.out.println("Hello, Java!");</code>: This line prints the text "Hello, Java!" to the console.</li>
              </ul>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Now, click the "Run" button in the compiler to execute your first Java program!</p>
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                  <p class="text-gray-700">Modify the program to print "Welcome to Java class!" instead. Once you've made the change, run the program and paste the output in the autograder below to check your work.</p>
              </div>
          </div>
      `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Welcome to Java class!"
    },
    {
        title: "Syntax and Java Basics",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">2. Syntax and Java Basics</h1>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Java Program Structure</h3>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Every executable Java program consists of a <strong>class</strong> that contains a <strong>main method</strong>. Let's explore the basic structure of a Java program:</p>
              <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class ProgramName {
    public static void main(String[] args) {
        // Your code goes here
        System.out.println("This is a Java program!");
    }
}</code></pre>
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h4 class="text-lg font-semibold mb-2 text-gray-800">Key Points:</h4>
                  <ul class="list-disc list-inside text-gray-700">
                      <li>The class name (ProgramName) should match the file name (ProgramName.java)</li>
                      <li>The main method is the entry point of the program</li>
                      <li>Statements end with a semicolon ;</li>
                      <li>Code blocks are enclosed in curly braces { }</li>
                      <li>Java is case-sensitive: System.out.println is not the same as system.out.println</li>
                  </ul>
              </div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Try it Yourself</h3>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Create a Java program that prints the following output:</p>
              <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>Hello, world!

This program produces
four lines of output.</code></pre>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Use the online compiler below to write and run your code. Then, paste your output in the autograder to check your work.</p>
          </div>
      `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Hello, world!\n\nThis program produces\nfour lines of output."
    },
    {
        title: "Debugging",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">3. Debugging</h1>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Finding and Fixing Errors</h3>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Debugging is an essential skill for any programmer. Let's practice by finding and fixing errors in Java code.</p>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Here's a Java program with some errors:</p>
              <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class DebugExample {
    public static void main(String[] args) {
        System.out.println("Let's debug this program!)
        int x = 5
        int y = 0;
        System.out.println(x / y);
    }
}</code></pre>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">This program contains several errors. Can you identify and fix them?</p>
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                  <h4 class="text-lg font-semibold mb-2 text-gray-800">Common Java Errors:</h4>
                  <ul class="list-disc list-inside text-gray-700">
                      <li>Syntax errors (missing semicolons, unmatched quotes or brackets)</li>
                      <li>Runtime errors (division by zero)</li>
                      <li>Logical errors (incorrect calculations or unexpected behavior)</li>
                  </ul>
              </div>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Try to fix the errors in the code above. Use the online compiler to test your solutions. Once you've corrected all the errors and the program runs without any issues, paste the output in the autograder to check your work.</p>
          </div>
      `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Let's debug this program!\nCannot divide by zero" // Note: This expected output might be tricky if user fixes div by zero differently. Just preserving original logic essentially.
    },
    {
        title: "Quiz",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">4. Java Basics Quiz</h1>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Test your knowledge of the concepts covered in this lesson.</p>
          </div>
      `,
        quiz: [
            {
                question: '1. What is the correct syntax to output "Hello, World" in Java?',
                options: [
                    { label: 'System.out.println("Hello, World");', value: 'a' },
                    { label: 'echo("Hello, World");', value: 'b' },
                    { label: 'print("Hello, World");', value: 'c' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '2. Which of the following is the correct way to declare the main method in Java?',
                options: [
                    { label: 'public static void main(String args[])', value: 'a' },
                    { label: 'public void main(String[] args)', value: 'b' },
                    { label: 'static public void main(String[] args)', value: 'c' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '3. What is the purpose of the semicolon (;) in Java?',
                options: [
                    { label: 'To separate methods', value: 'a' },
                    { label: 'To end a statement', value: 'b' },
                    { label: 'To declare a variable', value: 'c' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '4. Which of the following is NOT a valid Java identifier?',
                options: [
                    { label: 'myVariable', value: 'a' },
                    { label: '_myVariable', value: 'b' },
                    { label: '2myVariable', value: 'c' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '5. What is the output of the following code?\n\nint x = 5;\nSystem.out.println(x++);\nSystem.out.println(x);',
                options: [
                    { label: '5 5', value: 'a' },
                    { label: '5 6', value: 'b' },
                    { label: '6 6', value: 'c' }
                ],
                correctAnswer: 'b'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
          <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">5. Weekly Project: Personal Information Printer</h1>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Project Description</h3>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">For this week's project, you'll create a Java program that prints out your personal information. This will help you practice using the System.out.println() method and formatting your output.</p>
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                  <h4 class="text-lg font-semibold mb-2 text-gray-800">Requirements:</h4>
                  <p class="text-gray-700">Your program should print the following information:</p>
                  <ul class="list-disc list-inside mb-4 text-gray-700">
                      <li>Your name</li>
                      <li>Your age</li>
                      <li>Your favorite programming language</li>
                      <li>A short sentence about why you're learning Java</li>
                  </ul>
                  <p class="text-gray-700">Use separate System.out.println() statements for each piece of information.</p>
              </div>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Here's a template to get you started:</p>
              <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class PersonalInfo {
    public static void main(String[] args) {
        // Your code here
    }
}</code></pre>
              <p class="text-lg leading-relaxed text-gray-700 mb-4">Use the online compiler below to write and test your code. Once you're satisfied with your program, paste the output in the autograder to check your work.</p>
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h4 class="text-lg font-semibold mb-2 text-gray-800">Bonus Challenge:</h4>
                  <p class="text-gray-700">Try to format your output to look like a simple ASCII art business card!</p>
              </div>
          </div>
      `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Name: [Your Name]\nAge: [Your Age]\nFavorite Language: [Your Favorite Language]\nWhy I'm learning Java: [Your Reason]"
    }
];
