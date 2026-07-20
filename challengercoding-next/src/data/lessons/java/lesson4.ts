export const javaLesson4 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java Guided Tutorials - Loops</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Welcome to our Java Loops Tutorial! This lesson is all about understanding loop structures in Java. Loops are essential in programming as they allow your code to repeat a specific set of instructions multiple times without rewriting them. We'll go through different types of loops and understand how to apply them in various situations.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">Lesson Breakdown:</h3>
                    <ul class="list-disc list-inside text-gray-700">
                        <li><strong>For Loops:</strong> Used for repeating actions when you know the exact number of repetitions.</li>
                        <li><strong>While Loops:</strong> Useful when you need to keep repeating until a condition is met, but you don't know how many repetitions are needed beforehand.</li>
                        <li><strong>Do-While Loops:</strong> Similar to while loops but ensures at least one execution of the code block.</li>
                        <li><strong>Weekly Project:</strong> Apply loops to create your own interactive program.</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mt-4">
                    By the end of this lesson, you'll be able to decide which type of loop to use and implement loops to make your Java programs more powerful and efficient.
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Introduction to For Loops",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">1. Introduction to For Loops in Java</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">For Loops</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    A <strong>for loop</strong> is ideal for repeating an action a specific number of times. For example, if you want to print numbers from 1 to 5, a for loop lets you set up a counter that automatically stops after reaching 5.
                </p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Here's the basic structure of a for loop:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>for (initialization; condition; update) {
    // code to be repeated
}</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Initialization:</strong> Set up your loop counter variable (often named <code class="bg-gray-100 p-1 rounded">i</code>).
                    <br><strong>Condition:</strong> Define the stopping condition for the loop (e.g., <code class="bg-gray-100 p-1 rounded">i <= 5</code>).
                    <br><strong>Update:</strong> Update the counter after each loop iteration (e.g., <code class="bg-gray-100 p-1 rounded">i++</code> to increase the counter).
                </p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Now, let's look at a simple example:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}</code></pre>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                    <p class="text-gray-700">Complete the following program to use a for loop that prints numbers from 1 to 5.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "1\n2\n3\n4\n5",
        initialCode: `public class NumberPrinter {
    public static void main(String[] args) {
        // Use a for loop to print numbers from 1 to 5
    }
}`
    },
    {
        title: "While Loops",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">2. Working with While Loops in Java</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">While Loops</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    A <strong>while loop</strong> is ideal when you need to repeat an action until a certain condition becomes false. Unlike a for loop, a while loop doesn't rely on a specific number of repetitions. Instead, it continues as long as its condition is true.
                </p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Here's the basic structure of a while loop:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>while (condition) {
    // code to be repeated
}</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    For example, you could use a while loop to count down from 5 to 1:
                </p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int count = 5;
while (count > 0) {
    System.out.println(count);
    count--;
}</code></pre>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                    <p class="text-gray-700">Complete the CountdownTimer program below. Use a while loop to count down from 5 to 1 and end with "Blastoff!"</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "5\n4\n3\n2\n1\nBlastoff!",
        initialCode: `public class CountdownTimer {
    public static void main(String[] args) {
        int count = 5;

        // Use a while loop to count down from 5 to 1
        System.out.println("Blastoff!");
    }
}`
    },
    {
        title: "Do-While Loops",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">3. Understanding Do-While Loops in Java</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Do-While Loops</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    A <strong>do-while loop</strong> is similar to a while loop but with one key difference: it guarantees that the loop will execute at least once before checking the condition. This makes it useful when you want a piece of code to run at least one time regardless of the condition.
                </p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Here's the basic structure of a do-while loop:</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>do {
    // code to be repeated
} while (condition);</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    For example, if you want a program to keep asking for a positive number until the user enters one, a do-while loop would work well:
                </p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int number;

do {
    System.out.println("Please enter a positive number: ");
    number = scanner.nextInt();
} while (number <= 0);

System.out.println("You entered: " + number);</code></pre>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                    <p class="text-gray-700">Complete the PositiveNumberChecker program. Use a do-while loop to keep asking for a positive number until the user enters one.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Please enter a positive number: \nPlease enter a positive number: \nYou entered: 5",
        initialCode: `import java.util.Scanner;

public class PositiveNumberChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number;

        // Use a do-while loop to keep asking for a positive number

        scanner.close();
    }
}`
    },
    {
        title: "Weekly Project",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">4. Weekly Project: Number Guessing Game</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Project Description</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Create a Java program for a simple number guessing game. This project will incorporate all the loop concepts you've learned.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4 text-gray-700">
                        <li>Generate a random number between 1 and 100</li>
                        <li>Use a loop to allow the user to guess multiple times</li>
                        <li>Provide feedback on whether the guess is too high or too low</li>
                        <li>Keep track of the number of guesses</li>
                        <li>End the game when the correct number is guessed</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Implement the NumberGuessingGame program. Use the online compiler below to write and test your code. Once you're satisfied with your program, paste the output in the autograder to check your work.
                </p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Enter your guess: \nToo low! Try again.\nEnter your guess: \nToo high! Try again.\nEnter your guess: \nCongratulations! You guessed the number in 3 tries.",
        initialCode: `import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int numberToGuess = random.nextInt(100) + 1;
        int userGuess;
        int numberOfGuesses = 0;

        // Your code here
        // Implement the number guessing game using a loop

        scanner.close();
    }
}`
    }
];
