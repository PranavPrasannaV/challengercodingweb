
export const python2Lesson1 = [
    {
        title: "List Terminology Review",
        content: `
            <h2 class="tutorial-title">Exercise 1: List Terminology Review</h2>
            <p class="tutorial-text">
                Welcome to Python 2! Let's start by reviewing some important list terminology.
            </p>
            <div class="hint-box">
                <h3>Key List Terms</h3>
                <ul>
                    <li><strong>List:</strong> An ordered, mutable collection of elements.</li>
                    <li><strong>Index:</strong> The position of an element in a list (starting from 0).</li>
                    <li><strong>Slice:</strong> A portion of a list, specified by a range of indices.</li>
                    <li><strong>Nested List:</strong> A list that contains other lists as elements.</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Let's practice working with these concepts. Your task is to create a list, access elements, and perform slicing.
            </p>
            <div class="code-block">
# Create a list of fruits
fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

# Print the third fruit (remember, indexing starts at 0)
print(fruits[2])

# Print a slice of the list (from index 1 to 3, not including 3)
print(fruits[1:3])

# Print the last fruit using negative indexing
print(fruits[-1])
            </div>
            <p class="tutorial-text">
                Now it's your turn! Modify the code above to:
            </p>
            <ol class="tutorial-text">
                <li>Add 'fig' to the end of the list</li>
                <li>Print the first and last two fruits using slicing</li>
                <li>Print the list in reverse order</li>
            </ol>
            <p class="tutorial-text">
                Type your code in the editor below, then hit the <strong>Run</strong> button to see if it works!
            </p>
        `,
        initialCode: "# Modify the list and print as instructed\nfruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']\n\n# Your code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Working with 2D Arrays",
        content: `
            <h2 class="tutorial-title">Exercise 2: Working with 2D Arrays</h2>
            <p class="tutorial-text">
                In Python, we can create 2D arrays (or matrices) using nested lists. Let's explore how to work with them.
            </p>
            <div class="hint-box">
                <h3>2D Array Basics</h3>
                <p>A 2D array is a list of lists. Each inner list represents a row in the matrix.</p>
                <p>To access an element: matrix[row][column]</p>
            </div>
            <p class="tutorial-text">
                Here's an example of creating and accessing elements in a 2D array:
            </p>
            <div class="code-block">
# Create a 3x3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Print the entire matrix
print(matrix)

# Print the second row
print(matrix[1])

# Print the element at the second row, third column
print(matrix[1][2])
            </div>
            <p class="tutorial-text">
                Now it's your turn! Create a 4x4 matrix representing a tic-tac-toe board with 'X', 'O', and empty spaces (' '). Then:
            </p>
            <ol class="tutorial-text">
                <li>Print the entire board</li>
                <li>Print the third row</li>
                <li>Replace the center element with an 'X' and print the updated board</li>
            </ol>
            <p class="tutorial-text">
                Write your code in the editor below and run it to see the results!
            </p>
        `,
        initialCode: "# Create and manipulate a 4x4 tic-tac-toe board\n\n# Your code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "List Iteration Algorithms",
        content: `
            <h2 class="tutorial-title">Exercise 3: List Iteration Algorithms</h2>
            <p class="tutorial-text">
                Iterating through lists is a fundamental skill in Python. Let's explore different ways to do this.
            </p>
            <div class="hint-box">
                <h3>Iteration Methods</h3>
                <ul>
                    <li>Using a for loop with elements</li>
                    <li>Using a for loop with indices</li>
                    <li>Using enumerate() for both index and value</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here are examples of different iteration methods:
            </p>
            <div class="code-block">
numbers = [1, 2, 3, 4, 5]

# Method 1: Iterate through elements
for num in numbers:
    print(num)

# Method 2: Iterate using indices
for i in range(len(numbers)):
    print(f"Index {i}: {numbers[i]}")

# Method 3: Using enumerate
for index, value in enumerate(numbers):
    print(f"Index {index}: {value}")
            </div>
            <p class="tutorial-text">
                Your task is to write a function that finds the sum and product of all elements in a list. Then, use this function on the list [1, 2, 3, 4, 5] and print the results.
            </p>
            <p class="tutorial-text">
                Write your code in the editor below and run it to check your solution!
            </p>
        `,
        initialCode: "def sum_and_product(numbers):\n    # Your code here\n    pass\n\n# Test your function\nnumbers = [1, 2, 3, 4, 5]\n# Call your function and print the results\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "List Comprehensions",
        content: `
            <h2 class="tutorial-title">Exercise 4: List Comprehensions</h2>
            <p class="tutorial-text">
                List comprehensions provide a concise way to create lists in Python. They can often replace loops and map() calls with more readable and efficient code.
            </p>
            <div class="hint-box">
                <h3>List Comprehension Syntax</h3>
                <p>[expression for item in iterable if condition]</p>
                <ul>
                    <li>expression: What to put in the new list</li>
                    <li>item: A variable representing each element in the iterable</li>
                    <li>iterable: The list, tuple, or other iterable to loop over</li>
                    <li>condition: Optional. Only include items that meet this condition</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here are some examples of list comprehensions:
            </p>
            <div class="code-block">
# Create a list of squares
squares = [x**2 for x in range(10)]
print(squares)

# Create a list of even numbers
evens = [x for x in range(20) if x % 2 == 0]
print(evens)

# Create a list of tuples (number, square) for odd numbers
odd_squares = [(x, x**2) for x in range(10) if x % 2 != 0]
print(odd_squares)
            </div>
            <p class="tutorial-text">
                Your task is to use list comprehensions to:
            </p>
            <ol class="tutorial-text">
                <li>Create a list of the first 10 powers of 2 (2^0 to 2^9)</li>
                <li>Create a list of all numbers from 1 to 50 that are divisible by 3 or 5</li>
                <li>Create a list of tuples (x, y) for all x from 1 to 5 and all y from 6 to 10</li>
            </ol>
            <p class="tutorial-text">
                Write your code in the editor below and run it to check your solutions!
            </p>
        `,
        initialCode: "# Your list comprehensions here\n\n# 1. Powers of 2\n\n# 2. Numbers divisible by 3 or 5\n\n# 3. Tuples (x, y)\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project: Matrix Operations",
        content: `
            <h2 class="tutorial-title">Weekly Project: Matrix Operations</h2>
            <p class="tutorial-text">
                For this week's project, you'll create a set of functions to perform basic matrix operations. This will help reinforce your understanding of 2D arrays and list manipulation.
            </p>
            <p class="tutorial-text">
                Your task is to implement the following functions:
            </p>
            <ol class="tutorial-text">
                <li><code>print_matrix(matrix)</code>: Neatly print a matrix</li>
                <li><code>matrix_addition(matrix1, matrix2)</code>: Add two matrices</li>
                <li><code>matrix_scalar_multiply(matrix, scalar)</code>: Multiply a matrix by a scalar</li>
                <li><code>matrix_transpose(matrix)</code>: Transpose a matrix</li>
            </ol>
            <p class="tutorial-text">
                Here's a starting template with some test cases:
            </p>
            <div class="code-block">
def print_matrix(matrix):
    # Your code here
    pass

def matrix_addition(matrix1, matrix2):
    # Your code here
    pass

def matrix_scalar_multiply(matrix, scalar):
    # Your code here
    pass

def matrix_transpose(matrix):
    # Your code here
    pass

# Test matrices
matrix_a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix_b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]

# Test your functions
print("Matrix A:")
print_matrix(matrix_a)

print("\nMatrix B:")
print_matrix(matrix_b)

print("\nMatrix A + B:")
result = matrix_addition(matrix_a, matrix_b)
print_matrix(result)

print("\nMatrix A * 2:")
result = matrix_scalar_multiply(matrix_a, 2)
print_matrix(result)

print("\nTranspose of Matrix A:")
result = matrix_transpose(matrix_a)
print_matrix(result)
            </div>
            <p class="tutorial-text">
                Implement the functions in the code editor below. Make sure to handle potential errors, such as matrices of different sizes for addition. When you're done, run your code to test all the functions.
            </p>
            <p class="tutorial-text">
                This project will give you hands-on experience with 2D arrays and help you practice the list manipulation techniques we've covered this week. Good luck!
            </p>
        `,
        initialCode: "# Implement your matrix operations here\n\ndef print_matrix(matrix):\n    # Your code here\n    pass\n\ndef matrix_addition(matrix1, matrix2):\n    # Your code here\n    pass\n\ndef matrix_scalar_multiply(matrix, scalar):\n    # Your code here\n    pass\n\ndef matrix_transpose(matrix):\n    # Your code here\n    pass\n\n# Test matrices\nmatrix_a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmatrix_b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]\n\n# Your test code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
