export const java2Lesson7 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="tutorial-title">Java 2 Guided Tutorials - Week 7: Recursion</h2>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    Welcome to Week 7 of Java 2! This week, we'll explore recursion, a powerful programming concept where a function calls itself to solve a problem. Recursion can lead to elegant solutions for complex problems and is fundamental in many algorithms.
                </p>
                <div class="highlight-box">
                    <h3 class="text-xl font-semibold mb-2">Lesson Overview:</h3>
                    <ul class="list-disc list-inside">
                        <li>Understanding Recursion</li>
                        <li>Basic Recursive Functions</li>
                        <li>Recursive vs Iterative Approaches</li>
                        <li>Tail Recursion</li>
                        <li>Recursion in Problem Solving</li>
                        <li>Quiz to test your knowledge</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="tutorial-text">
                    By the end of this week, you'll have a solid understanding of recursion and how to apply it in your Java programs. Let's dive in!
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Understanding Recursion",
        content: `
            <h2 class="tutorial-title">1. Understanding Recursion</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What is Recursion?</h3>
                <p class="tutorial-text">
                    Recursion is a programming technique where a function calls itself to solve a problem. It's a way of breaking down a complex problem into smaller, more manageable subproblems. Each recursive call works on a smaller instance of the same problem, eventually reaching a base case that can be solved directly.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Components of Recursion:</h4>
                    <ul class="list-disc list-inside">
                        <li>Base Case: The condition that stops the recursion</li>
                        <li>Recursive Case: The part where the function calls itself</li>
                        <li>Progress Towards Base Case: Each recursive call should move closer to the base case</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a simple example to illustrate recursion:</p>
                <pre><code>public class RecursionExample {
    public static void countDown(int n) {
        // Base case
        if (n == 0) {
            System.out.println("Done!");
            return;
        }
        
        // Print the current number
        System.out.println(n);
        
        // Recursive case
        countDown(n - 1);
    }

    public static void main(String[] args) {
        countDown(5);
    }
}</code></pre>
                <p class="tutorial-text">In this example, the <code>countDown</code> function calls itself with a smaller number each time, until it reaches zero (the base case). Try running this code and observe how recursion works step by step.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "5\n4\n3\n2\n1\nDone!"
    },
    {
        title: "Basic Recursive Functions",
        content: `
            <h2 class="tutorial-title">2. Basic Recursive Functions</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Common Recursive Functions</h3>
                <p class="tutorial-text">
                    Let's explore some basic recursive functions to help you understand how recursion works in practice. We'll look at factorial calculation and the Fibonacci sequence, two classic examples of recursion.
                </p>
                <h4 class="text-lg font-semibold mb-2">Factorial Calculation</h4>
                <p class="tutorial-text">
                    The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. Here's a recursive implementation:
                </p>
                <pre><code>public class FactorialExample {
    public static int factorial(int n) {
        // Base case
        if (n == 0 || n == 1) {
            return 1;
        }
        
        // Recursive case
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + factorial(5));
    }
}</code></pre>
                <h4 class="text-lg font-semibold mb-2">Fibonacci Sequence</h4>
                <p class="tutorial-text">
                    The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. Here's a recursive implementation to find the nth Fibonacci number:
                </p>
                <pre><code>public class FibonacciExample {
    public static int fibonacci(int n) {
        // Base cases
        if (n <= 1) {
            return n;
        }
        
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        System.out.println("8th Fibonacci number: " + fibonacci(8));
    }
}</code></pre>
                <p class="tutorial-text">Try running these examples and experiment with different input values. Can you trace the recursive calls for small inputs?</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Factorial of 5: 120\n8th Fibonacci number: 21"
    },
    {
        title: "Recursive vs Iterative Approaches",
        content: `
            <h2 class="tutorial-title">3. Recursive vs Iterative Approaches</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Comparing Recursion and Iteration</h3>
                <p class="tutorial-text">
                    Many problems can be solved using either recursive or iterative approaches. Let's compare these two methods to understand their strengths and weaknesses.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Recursion vs Iteration:</h4>
                    <ul class="list-disc list-inside">
                        <li>Recursion can lead to more elegant and readable code for some problems</li>
                        <li>Iteration is often more efficient in terms of memory usage</li>
                        <li>Recursive solutions can be slower due to function call overhead</li>
                        <li>Some problems are naturally recursive and harder to solve iteratively</li>
                    </ul>
                </div>
                <p class="tutorial-text">Let's look at an example of calculating the sum of numbers from 1 to n using both approaches:</p>
                <pre><code>public class SumExample {
    // Recursive approach
    public static int sumRecursive(int n) {
        if (n <= 1) {
            return n;
        }
        return n + sumRecursive(n - 1);
    }

    // Iterative approach
    public static int sumIterative(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("Recursive sum: " + sumRecursive(n));
        System.out.println("Iterative sum: " + sumIterative(n));
    }
}</code></pre>
                <p class="tutorial-text">Both approaches produce the same result, but they differ in how they achieve it. The recursive approach breaks down the problem into smaller subproblems, while the iterative approach uses a loop to accumulate the sum. Try implementing both approaches for other problems, like factorial or Fibonacci, and compare their performance for larger inputs.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Recursive sum: 15\nIterative sum: 15"
    },
    {
        title: "Tail Recursion",
        content: `
            <h2 class="tutorial-title">4. Tail Recursion</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding Tail Recursion</h3>
                <p class="tutorial-text">
                    Tail recursion is a special form of recursion where the recursive call is the last operation in the function. This allows for potential optimizations by the compiler, as it can transform the recursion into a loop, saving stack space.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>The recursive call is the last operation in the function</li>
                        <li>No computation is done after the recursive call</li>
                        <li>Can be optimized by the compiler to use constant stack space</li>
                        <li>Not all recursive functions can be easily converted to tail recursive form</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example of converting the factorial function to use tail recursion:</p>
                <pre><code>public class TailRecursionExample {
    // Non-tail recursive factorial
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    // Tail recursive factorial
    public static int factorialTail(int n, int accumulator) {
        if (n <= 1) return accumulator;
        return factorialTail(n - 1, n * accumulator);
    }

    public static void main(String[] args) {
        System.out.println("Non-tail recursive: " + factorial(5));
        System.out.println("Tail recursive: " + factorialTail(5, 1));
    }
}</code></pre>
                <p class="tutorial-text">In the tail recursive version, we use an accumulator to store intermediate results. This allows the function to return immediately after the recursive call, without needing to perform any additional computations. While Java doesn't automatically optimize tail recursion, understanding this concept can help you write more efficient recursive functions.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Non-tail recursive: 120\nTail recursive: 120"
    },
    {
        title: "Recursion in Problem Solving",
        content: `
            <h2 class="tutorial-title">5. Recursion in Problem Solving</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Applying Recursion to Solve Problems</h3>
                <p class="tutorial-text">
                    Recursion is particularly useful for solving problems that have a recursive structure or can be broken down into smaller, similar subproblems. Let's look at a classic example: the Tower of Hanoi puzzle.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Tower of Hanoi:</h4>
                    <p>The puzzle consists of three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top. The objective is to move the entire stack to another rod, obeying the following rules:</p>
                    <ul class="list-disc list-inside">
                        <li>Only one disk can be moved at a time.</li>
                        <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.</li>
                        <li>No larger disk may be placed on top of a smaller disk.</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a recursive solution to the Tower of Hanoi problem:</p>
                <pre><code>public class TowerOfHanoi {
    public static void solveTowerOfHanoi(int n, char source, char auxiliary, char destination) {
        // Base case: If only one disk, move it directly
        if (n == 1) {
            System.out.println("Move disk 1 from " + source + " to " + destination);
            return;
        }
        
        // Move n-1 disks from source to auxiliary using destination as auxiliary
        solveTowerOfHanoi(n - 1, source, destination, auxiliary);
        
        // Move the nth disk from source to destination
        System.out.println("Move disk " + n + " from " + source + " to " + destination);
        
        // Move n-1 disks from auxiliary to destination using source as auxiliary
        solveTowerOfHanoi(n - 1, auxiliary, source, destination);
    }

    public static void main(String[] args) {
        int numberOfDisks = 3;
        solveTowerOfHanoi(numberOfDisks, 'A', 'B', 'C');
    }
}</code></pre>
                <p class="tutorial-text">This recursive solution breaks down the problem into smaller subproblems, moving n-1 disks recursively. Try running this code and observe how it solves the Tower of Hanoi puzzle step by step. Can you visualize the process for a small number of disks?</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C"
    },
    {
        title: "Quiz",
        content: `
            <h2 class="tutorial-title">6. Recursion Quiz</h2>
<div class="question">
                        <p class="quiz-question">2. What is tail recursion?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="a" id="q2a">
                                <label for="q2a">A recursive function that never reaches its base case</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="b" id="q2b">
                                <label for="q2b">A recursive function where the recursive call is the last operation</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="c" id="q2c">
                                <label for="q2c">A recursive function that calls itself multiple times</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">3. Which of the following is NOT a common use case for recursion?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="a" id="q3a">
                                <label for="q3a">Traversing tree-like data structures</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="b" id="q3b">
                                <label for="q3b">Solving divide-and-conquer problems</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="c" id="q3c">
                                <label for="q3c">Performing simple arithmetic operations</label>
                            </li>
                        </ul>
                    </div>
                </form>
                <button class="button mt-4">Submit Quiz</button>
                <p id="quizResult" class="quiz-feedback"></p>
            </div>
        `,
        quiz: [
            {
                question: '1. What is the base case in a recursive function?',
                options: [
                    { label: 'The case where the function calls itself', value: 'a' },
                    { label: 'The condition that stops the recursion', value: 'b' },
                    { label: 'The initial value passed to the function', value: 'c' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '2. What is tail recursion?',
                options: [
                    { label: 'A recursive function that never reaches its base case', value: 'a' },
                    { label: 'A recursive function where the recursive call is the last operation', value: 'b' },
                    { label: 'A recursive function that calls itself multiple times', value: 'c' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '3. Which of the following is NOT a common use case for recursion?',
                options: [
                    { label: 'Traversing tree-like data structures', value: 'a' },
                    { label: 'Solving divide-and-conquer problems', value: 'b' },
                    { label: 'Performing simple arithmetic operations', value: 'c' }
                ],
                correctAnswer: 'c'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
            <h2 class="tutorial-title">7. Weekly Project: Recursive File Explorer</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">For this week's project, you'll create a simple recursive file explorer that lists all files and directories in a given directory and its subdirectories.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Create a recursive function that explores directories</li>
                        <li>Print the names of all files and directories</li>
                        <li>Show the directory structure with proper indentation</li>
                        <li>Handle potential exceptions (e.g., access denied to certain directories)</li>
                        <li>Implement a simple command-line interface to specify the starting directory</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a template to get you started:</p>
                <pre><code>import java.io.File;
import java.util.Scanner;

public class RecursiveFileExplorer {
    public static void exploreDirectory(File directory, String indent) {
        // TODO: Implement the recursive file exploration
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the directory path to explore: ");
        String path = scanner.nextLine();
        
        File rootDirectory = new File(path);
        if (rootDirectory.exists() && rootDirectory.isDirectory()) {
            System.out.println("Exploring directory: " + rootDirectory.getAbsolutePath());
            exploreDirectory(rootDirectory, "");
        } else {
            System.out.println("Invalid directory path.");
        }
    }
}</code></pre>
                <p class="tutorial-text">Implement the <code>exploreDirectory</code> method using recursion to list all files and subdirectories. Use proper indentation to show the directory structure. Remember to handle exceptions and edge cases. Once you've completed the implementation, test your file explorer with different directories and ensure it correctly displays the file structure.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Exploring directory: /path/to/directory\n- File1.txt\n- Folder1\n  - Subfolder\n    - File2.txt\n  - File3.txt\n- File4.txt"
    }
];
