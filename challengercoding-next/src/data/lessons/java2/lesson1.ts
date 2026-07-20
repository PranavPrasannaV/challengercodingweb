export const java2Lesson1 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="tutorial-title">Java 2 Guided Tutorials - Week 1: 2D Arrays</h1>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    Welcome to Week 1 of Java 2! This week, we'll dive into the world of 2D arrays. We'll start with a quick review of 1D arrays from Java 1, then move on to understanding and working with 2D arrays.
                </p>
                <div class="highlight-box">
                    <h3 class="text-xl font-semibold mb-2">Lesson Overview:</h3>
                    <ul class="list-disc list-inside">
                        <li>Review of 1D arrays from Java 1</li>
                        <li>Introduction to 2D arrays</li>
                        <li>Declaring and initializing 2D arrays</li>
                        <li>Accessing and modifying elements in 2D arrays</li>
                        <li>Common operations with 2D arrays</li>
                        <li>Quiz to test your knowledge</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="tutorial-text">
                    By the end of this week, you'll have a solid understanding of 2D arrays and be able to use them in your Java programs. Let's get started!
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Review of 1D Arrays",
        content: `
            <h1 class="tutorial-title">1. Review of 1D Arrays</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Quick Recap: 1D Arrays</h3>
                <p class="tutorial-text">Before we dive into 2D arrays, let's quickly review 1D arrays from Java 1:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>An array is a collection of elements of the same data type</li>
                    <li>Arrays have a fixed size once created</li>
                    <li>Array indices start at 0</li>
                </ul>
                <p class="tutorial-text">Here's a quick example of creating and using a 1D array:</p>
                <pre><code>// Declaring and initializing an array
int[] numbers = {1, 2, 3, 4, 5};

// Accessing elements
System.out.println(numbers[0]); // Outputs: 1

// Modifying elements
numbers[2] = 10;

// Iterating through an array
for (int i = 0; i < numbers.length; i++) {
    System.out.print(numbers[i] + " ");
}
// Outputs: 1 2 10 4 5</code></pre>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Try it Yourself</h4>
                    <p>Create a 1D array of your favorite fruits and print them out using a for-each loop. Use the compiler below to write and run your code, then paste the output in the autograder to check your work.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Apple Banana Orange"
    },
    {
        title: "Introduction to 2D Arrays",
        content: `
            <h1 class="tutorial-title">2. Introduction to 2D Arrays</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What are 2D Arrays?</h3>
                <p class="tutorial-text">A 2D array is an array of arrays. You can think of it as a table with rows and columns. Each element in a 2D array is accessed using two indices: one for the row and one for the column.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Points:</h4>
                    <ul class="list-disc list-inside">
                        <li>2D arrays are useful for representing grids, matrices, or tables</li>
                        <li>They are declared using two sets of square brackets</li>
                        <li>The first index represents the row, the second represents the column</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's how to declare and initialize a 2D array:</p>
                <pre><code>// Method 1: Declare and initialize in one line
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Method 2: Declare first, then initialize
int[][] grid = new int[3][3];
grid[0][0] = 1; grid[0][1] = 2; grid[0][2] = 3;
grid[1][0] = 4; grid[1][1] = 5; grid[1][2] = 6;
grid[2][0] = 7; grid[2][1] = 8; grid[2][2] = 9;</code></pre>
                <p class="tutorial-text">Try creating a 2D array representing a tic-tac-toe board. Use 'X', 'O', and ' ' (space) as elements. Print out the board using nested loops.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "X O X\nO X O\nX   O"
    },
    {
        title: "Accessing and Modifying 2D Arrays",
        content: `
            <h1 class="tutorial-title">3. Accessing and Modifying 2D Arrays</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Working with 2D Arrays</h3>
                <p class="tutorial-text">To access or modify elements in a 2D array, we use two indices: [row][column].</p>
                <pre><code>int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Accessing elements
System.out.println(matrix[1][2]); // Outputs: 6

// Modifying elements
matrix[0][1] = 10;

// Iterating through a 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println(); // New line after each row
}</code></pre>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Try it Yourself</h4>
                    <p>Create a 3x3 2D array representing student grades for three subjects. Calculate and print the average grade for each student.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Student 1 average: 85.0\nStudent 2 average: 78.33\nStudent 3 average: 92.67"
    },
    {
        title: "Quiz",
        content: `
            <h1 class="tutorial-title">4. 2D Arrays Quiz</h1>
            <div class="quiz-container">
                <form id="quizForm">
                    <div class="question">
                        <p class="quiz-question">1. How do you declare a 2D array of integers with 3 rows and 4 columns?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="a" id="q1a">
                                <label for="q1a">int[][] array = new int[3][4];</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="b" id="q1b">
                                <label for="q1b">int array[][] = new int[4][3];</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q1" value="c" id="q1c">
                                <label for="q1c">int[3][4] array = new int[][];</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">2. What does the following code print?</p>
                        <pre><code>int[][] arr = {{1, 2}, {3, 4}, {5, 6}};
System.out.println(arr[1][1]);</code></pre>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="a" id="q2a">
                                <label for="q2a">2</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="b" id="q2b">
                                <label for="q2b">3</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="c" id="q2c">
                                <label for="q2c">4</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">3. How many elements are in the following 2D array?</p>
                        <pre><code>int[][] matrix = new int[3][4];</code></pre>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="a" id="q3a">
                                <label for="q3a">7</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="b" id="q3b">
                                <label for="q3b">12</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="c" id="q3c">
                                <label for="q3c">3</label>
                            </li>
                        </ul>
                    </div>
                </form>
                <button onclick="submitQuiz()" class="button mt-4">Submit Quiz</button>
                <p id="quizResult" class="quiz-feedback"></p>
            </div>
        `,
        quiz: [
            {
                question: '1. How do you declare a 2D array of integers with 3 rows and 4 columns?',
                options: [
                    { label: 'int[][] array = new int[3][4];', value: 'a' },
                    { label: 'int array[][] = new int[4][3];', value: 'b' },
                    { label: 'int[3][4] array = new int[][];', value: 'c' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '2. What does the following code print?\n\nint[][] arr = {{1, 2}, {3, 4}, {5, 6}};\nSystem.out.println(arr[1][1]);',
                options: [
                    { label: '2', value: 'a' },
                    { label: '3', value: 'b' },
                    { label: '4', value: 'c' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '3. How many elements are in the following 2D array?\n\nint[][] matrix = new int[3][4];',
                options: [
                    { label: '7', value: 'a' },
                    { label: '12', value: 'b' },
                    { label: '3', value: 'c' }
                ],
                correctAnswer: 'b'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
            <h1 class="tutorial-title">5. Weekly Project: Tic-Tac-Toe Game</h1>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">For this week's project, you'll create a simple Tic-Tac-Toe game using a 2D array to represent the game board.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Create a 3x3 2D array to represent the Tic-Tac-Toe board</li>
                        <li>Implement a method to print the current state of the board</li>
                        <li>Allow two players to take turns placing their marks (X and O)</li>
                        <li>Check for a win condition after each move</li>
                        <li>End the game when there's a winner or a draw</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a template to get you started:</p>
                <pre><code>import java.util.Scanner;

public class TicTacToe {
    private static char[][] board = new char[3][3];
    private static char currentPlayer = 'X';

    public static void main(String[] args) {
        initializeBoard();
        playGame();
    }

    private static void initializeBoard() {
        // Initialize the board with empty spaces
    }

    private static void printBoard() {
        // Print the current state of the board
    }

    private static void playGame() {
        // Implement the game logic here
    }

    private static boolean checkWin() {
        // Check for a win condition
        return false;
    }

    private static boolean isBoardFull() {
        // Check if the board is full (draw condition)
        return false;
    }
}
</code></pre>
                <p class="tutorial-text">Implement the missing methods and game logic. Use the online compiler to write and test your code. Once you're satisfied with your program, paste the output of a complete game in the autograder to check your work.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Player X wins!"
    }
];
