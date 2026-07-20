
export const python2Lesson7 = [
    {
        title: "Introduction to Recursion",
        content: `
            <h1 class="tutorial-title">Exercise 1: Introduction to Recursion</h1>
            <p class="tutorial-text">
                Welcome to Python 2, Lesson 7! Today, we'll learn about recursion, a powerful programming concept where a function calls itself to solve a problem.
            </p>
            <div class="hint-box">
                <h3>What is Recursion?</h3>
                <p>Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. In programming, recursion occurs when a function calls itself.</p>
            </div>
            <p class="tutorial-text">
                Let's start with a simple example of a recursive function that counts down from a given number:
            </p>
            <div class="code-block">
def countdown(n):
    if n <= 0:
        print("Blastoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(5)
            </div>
            <p class="tutorial-text">
                Now it's your turn! Create a recursive function called <code>count_up</code> that counts up from 1 to a given number:
            </p>
            <ol class="tutorial-text">
                <li>Define the function <code>count_up(n)</code></li>
                <li>If n is greater than 5, print "Done!"</li>
                <li>Otherwise, print the current number and call <code>count_up(n + 1)</code></li>
                <li>Test your function with <code>count_up(1)</code></li>
            </ol>
        `,
        initialCode: "# Define your count_up function here\n\n# Test your function\ncount_up(1)\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Recursive Functions",
        content: `
            <h1 class="tutorial-title">Exercise 2: Recursive Functions</h1>
            <p class="tutorial-text">
                Recursive functions are functions that call themselves. They can be very powerful for solving problems that have a recursive nature.
            </p>
            <div class="hint-box">
                <h3>Key Components of a Recursive Function</h3>
                <ul>
                    <li>Base case: The condition that stops the recursion</li>
                    <li>Recursive case: The part where the function calls itself</li>
                    <li>Progress towards the base case: Each recursive call should bring us closer to the base case</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Let's look at a classic example of a recursive function: calculating the factorial of a number.
            </p>
            <div class="code-block">
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Should print 120
            </div>
            <p class="tutorial-text">
                Your turn! Create a recursive function to calculate the sum of all numbers from 1 to n:
            </p>
            <ol class="tutorial-text">
                <li>Define a function called <code>sum_to_n(n)</code></li>
                <li>If n is 1, return 1 (this is the base case)</li>
                <li>Otherwise, return n plus the result of calling sum_to_n(n-1)</li>
                <li>Test your function with sum_to_n(5) (which should return 15)</li>
            </ol>
        `,
        initialCode: "# Define your sum_to_n function here\n\n# Test your function\nprint(sum_to_n(5))\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Base Case and Recursive Case",
        content: `
            <h1 class="tutorial-title">Exercise 3: Base Case and Recursive Case</h1>
            <p class="tutorial-text">
                Understanding the base case and recursive case is crucial for writing effective recursive functions.
            </p>
            <div class="hint-box">
                <h3>Base Case vs Recursive Case</h3>
                <ul>
                    <li>Base case: The condition where the function stops calling itself</li>
                    <li>Recursive case: The condition where the function calls itself with a modified input</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Let's look at an example of a recursive function to calculate the nth Fibonacci number:
            </p>
            <div class="code-block">
def fibonacci(n):
    # Base cases
    if n <= 0:
        return "Invalid input"
    elif n == 1 or n == 2:
        return 1
    # Recursive case
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(7))  # Should print 13
            </div>
            <p class="tutorial-text">
                Your task: Create a recursive function to calculate the power of a number:
            </p>
            <ol class="tutorial-text">
                <li>Define a function called <code>power(base, exponent)</code></li>
                <li>If the exponent is 0, return 1 (base case)</li>
                <li>Otherwise, return base multiplied by power(base, exponent - 1) (recursive case)</li>
                <li>Test your function with power(2, 3) (which should return 8)</li>
            </ol>
        `,
        initialCode: "# Define your power function here\n\n# Test your function\nprint(power(2, 3))\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Recursion vs. Iteration",
        content: `
            <h1 class="tutorial-title">Exercise 4: Recursion vs. Iteration</h1>
            <p class="tutorial-text">
                Many problems can be solved using either recursion or iteration. It's important to understand the trade-offs between these approaches.
            </p>
            <div class="hint-box">
                <h3>Recursion vs. Iteration</h3>
                <ul>
                    <li>Recursion can make code more readable and easier to understand for some problems</li>
                    <li>Iteration can be more efficient in terms of memory usage</li>
                    <li>Some problems are naturally recursive and are easier to solve with recursion</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Let's compare recursive and iterative approaches to calculating the sum of a list of numbers:
            </p>
            <div class="code-block">
# Recursive approach
def sum_recursive(lst):
    if not lst:
        return 0
    return lst[0] + sum_recursive(lst[1:])

# Iterative approach
def sum_iterative(lst):
    total = 0
    for num in lst:
        total += num
    return total

numbers = [1, 2, 3, 4, 5]
print(sum_recursive(numbers))  # Should print 15
print(sum_iterative(numbers))  # Should print 15
            </div>
            <p class="tutorial-text">
                Your task: Implement both a recursive and an iterative function to reverse a string:
            </p>
            <ol class="tutorial-text">
                <li>Define a function called <code>reverse_recursive(s)</code> that reverses a string recursively</li>
                <li>Define a function called <code>reverse_iterative(s)</code> that reverses a string iteratively</li>
                <li>Test both functions with the string "hello"</li>
            </ol>
        `,
        initialCode: "# Define your recursive and iterative string reversal functions here\n\n# Test your functions\nprint(reverse_recursive('hello'))\nprint(reverse_iterative('hello'))\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project: Fractal Tree",
        content: `
            <h1 class="tutorial-title">Weekly Project: Fractal Tree</h1>
            <p class="tutorial-text">
                Let's put everything we've learned about recursion into practice by creating a fractal tree using the turtle graphics library.
            </p>
            <p class="tutorial-text">
                Your task is to create a program that:
            </p>
            <ol class="tutorial-text">
                <li>Uses the turtle graphics library to draw a fractal tree</li>
                <li>Implements a recursive function to draw branches of the tree</li>
                <li>Allows customization of the tree's depth and angle</li>
            </ol>
            <p class="tutorial-text">
                Here's a starting template:
            </p>
            <div class="code-block">
import turtle

def draw_tree(branch_length, angle, depth):
    if depth > 0:
        turtle.forward(branch_length)
        turtle.right(angle)
        draw_tree(branch_length - 15, angle, depth - 1)
        turtle.left(2 * angle)
        draw_tree(branch_length - 15, angle, depth - 1)
        turtle.right(angle)
        turtle.backward(branch_length)

def main():
    turtle.speed(0)  # Set the drawing speed to the fastest
    turtle.left(90)  # Turn the turtle to point upwards
    turtle.up()
    turtle.backward(100)
    turtle.down()
    draw_tree(75, 20, 7)
    turtle.done()

if __name__ == "__main__":
    main()
            </div>
            <p class="tutorial-text">
                Enhance the Fractal Tree program by adding the following features:
            </p>
            <ol class="tutorial-text">
                <li>Add color to the branches (e.g., make them brown)</li>
                <li>Add leaves at the end of the smallest branches (e.g., green circles)</li>
                <li>Allow user input for the initial branch length, angle, and depth</li>
                <li>Experiment with different patterns by changing the angle or length reduction in recursive calls</li>
            </ol>
            <p class="tutorial-text">
                This project will give you hands-on experience with recursion and visual programming. Have fun and be creative with your fractal tree!
            </p>
        `,
        initialCode: "# Implement your enhanced Fractal Tree program here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
