export const pythonLesson6 = [
    {
        title: "Introduction to Loops",
        content: `
            <p class="tutorial-text">
                Loops are powerful constructs in programming that allow you to repeat a block of code multiple times. They are essential for automating repetitive tasks and processing collections of data efficiently.
            </p>
            <div class="key-point">
                <h4>Key Concept: Loops</h4>
                <p>Loops help you avoid writing the same code multiple times, making your programs more efficient and easier to maintain.</p>
            </div>
            <p class="tutorial-text">
                In Python, there are two main types of loops:
                <ul>
                    <li><strong>While Loops:</strong> Execute a block of code as long as a condition is true.</li>
                    <li><strong>For Loops:</strong> Iterate over a sequence (like a list, tuple, or string) or other iterable objects.</li>
                </ul>
            </p>
            <h3>Comparing While and For Loops</h3>
            <p class="tutorial-text">
                Let's look at an example that demonstrates both types of loops achieving the same result:
            </p>
            <div class="code-block">
# For loop
print("For loop:")
for x in range(6):
    print(x)

print("\\nWhile loop:")
# While loop
y = 0
while y < 6:
    print(y)
    y += 1
            </div>
            <p class="tutorial-text">
                Both loops print numbers from 0 to 5, but they do so in slightly different ways:
                <ul>
                    <li>The for loop uses the range() function to generate a sequence of numbers.</li>
                    <li>The while loop uses a counter variable that we manually increment.</li>
                </ul>
            </p>
            <h3>Guided Exercise: Modifying Loops</h3>
            <p class="tutorial-text">
                Now, let's practice by modifying these loops. Follow these steps:
                <ol>
                    <li>Change both loops to print numbers from 1 to 5 instead of 0 to 5.</li>
                    <li>Add a print statement after each loop to separate their outputs.</li>
                    <li>For the while loop, add a condition to print "Halfway there!" when the counter reaches 3.</li>
                </ol>
            </p>
            <div class="hint">
                <strong>Hint:</strong> For the for loop, use range(1, 6). For the while loop, start y at 1 and change the condition to y <= 5. Use an if statement inside the while loop to check if y == 3.
            </div>
        `,
        initialCode: `# Modify these loops to print numbers from 1 to 5

# For loop
print("For loop:")
for x in range(1, 6):
    print(x)

print("\\nWhile loop:")
# While loop
y = 1
while y <= 5:
    print(y)
    if y == 3:
        print("Halfway there!")
    y += 1

print("\\nBoth loops completed!")
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "While Loops",
        content: `
            <p class="tutorial-text">
                While loops in Python continue to execute a block of code as long as a given condition is true. They are particularly useful when you don't know in advance how many times you need to repeat a block of code.
            </p>
            <div class="key-point">
                <h4>Key Concept: While Loops</h4>
                <p>While loops are ideal for situations where you need to repeat an action until a specific condition is met, rather than for a predetermined number of times.</p>
            </div>
            <h3>While Loop Syntax:</h3>
            <div class="code-block">
while condition:
    # code to be executed
    if some_condition:
        break  # optional
            </div>
            <p class="tutorial-text">
                Key points about while loops:
                <ul>
                    <li>The condition is checked at the beginning of each iteration.</li>
                    <li>If the condition is initially false, the loop body will not execute at all.</li>
                    <li>You need to make sure the loop condition eventually becomes false, or you'll create an infinite loop.</li>
                    <li>You can use 'break' to exit the loop prematurely.</li>
                    <li>You can use 'continue' to skip the rest of the current iteration and move to the next one.</li>
                </ul>
            </p>
            <h3>Example: Using break and continue</h3>
            <div class="code-block">
count = 0
while count < 5:
    count += 1
    if count == 2:
        print("Skipping 2")
        continue
    if count == 4:
        print("Found 4, breaking the loop")
        break
    print(f"Current count: {count}")
print("Loop ended")
            </div>
            <h3>Guided Exercise: Countdown Timer</h3>
            <p class="tutorial-text">
                Let's create a countdown timer using a while loop. Follow these steps:
                <ol>
                    <li>Start with a counter set to 10.</li>
                    <li>Use a while loop to count down from 10 to 1.</li>
                    <li>Print the current counter value in each iteration.</li>
                    <li>When the counter reaches 5, print "Halfway there!"</li>
                    <li>After the loop ends, print "Countdown finished!"</li>
                </ol>
            </p>
            <div class="hint">
                <strong>Hint:</strong> Use a while loop with the condition 'counter > 0'. Don't forget to decrement the counter in each iteration!
            </div>
        `,
        initialCode: `# Create your countdown timer here
counter = 10

while counter > 0:
    print(counter)
    if counter == 5:
        print("Halfway there!")
    counter -= 1

print("Countdown finished!")
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "For Loops",
        content: `
            <p class="tutorial-text">
                For loops in Python are used to iterate over a sequence (such as a list, tuple, string, or range) or other iterable objects. They provide a concise way to repeat a block of code a specific number of times or for each item in a collection.
            </p>
            <div class="key-point">
                <h4>Key Concept: For Loops</h4>
                <p>For loops are excellent for iterating over known sequences or when you need to perform an action a specific number of times.</p>
            </div>
            <h3>For Loop Syntax:</h3>
            <div class="code-block">
for item in iterable:
    # code to be executed for each item
            </div>
            <p class="tutorial-text">
                The range() function is often used with for loops to generate a sequence of numbers. It can take up to three arguments:
                <ul>
                    <li>range(stop): Generates numbers from 0 to stop-1</li>
                    <li>range(start, stop): Generates numbers from start to stop-1</li>
                    <li>range(start, stop, step): Generates numbers from start to stop-1, incrementing by step</li>
                </ul>
            </p>
            <h3>Example: Different ways to use range()</h3>
            <div class="code-block">
# Using range with one argument
print("Range with one argument:")
for i in range(5):
    print(i)

# Using range with two arguments
print("\\nRange with two arguments:")
for i in range(2, 7):
    print(i)

# Using range with three arguments
print("\\nRange with three arguments:")
for i in range(1, 10, 2):
    print(i)
            </div>
            <h3>Guided Exercise: Multiplication Table</h3>
            <p class="tutorial-text">
                Let's create a multiplication table using nested for loops. Follow these steps:
                <ol>
                    <li>Create an outer loop that iterates from 1 to 5.</li>
                    <li>Create an inner loop that also iterates from 1 to 5.</li>
                    <li>Inside the inner loop, multiply the outer loop variable by the inner loop variable.</li>
                    <li>Print the result of each multiplication.</li>
                    <li>Add a blank line after each row of the table for better readability.</li>
                </ol>
            </p>
            <div class="hint">
                <strong>Hint:</strong> Use two for loops with range(1, 6). Use print() with end=" " to print on the same line, and an empty print() to move to the next line.
            </div>
        `,
        initialCode: `# Create your multiplication table here

for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i * j:2d}", end=" ")
    print()  # Move to the next line after each row
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "How For Loops Work",
        content: `
            <p class="tutorial-text">
                Understanding how for loops work internally can help you use them more effectively. In Python, a for loop works by iterating over an iterable object (like a list, tuple, or range).
            </p>
            <div class="key-point">
                <h4>Key Concept: Iteration</h4>
                <p>Iteration is the process of going through each item in a sequence, one at a time. For loops automate this process, making it easy to perform actions on each item.</p>
            </div>
            <p class="tutorial-text">
                Here's what happens in each iteration of a for loop:
                <ol>
                    <li>The next item from the iterable is assigned to the loop variable.</li>
                    <li>The code block inside the loop is executed.</li>
                    <li>Steps 1 and 2 are repeated until there are no more items in the iterable.</li>
                </ol>
            </p>
            <h3>Example: Iterating over different data types</h3>
            <div class="code-block">
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
print("Iterating over a list:")
for fruit in fruits:
    print(f"Current fruit: {fruit}")

# Iterating over a string
print("\\nIterating over a string:")
for char in "Python":
    print(f"Current character: {char}")

# Iterating over a dictionary
print("\\nIterating over a dictionary:")
person = {"name": "Alice", "age": 30, "city": "New York"}
for key, value in person.items():
    print(f"{key}: {value}")
            </div>
            <h3>Guided Exercise: Analyzing Student Scores</h3>
            <p class="tutorial-text">
                Let's create a program that analyzes student scores. Follow these steps:
                <ol>
                    <li>Create a list of dictionaries, where each dictionary represents a student with 'name' and 'score' keys.</li>
                    <li>Use a for loop to iterate over this list.</li>
                    <li>Calculate and print the average score.</li>
                    <li>Find and print the name of the student with the highest score.</li>
                    <li>Count and print the number of students who scored above 80.</li>
                </ol>
            </p>
            <div class="hint">
                <strong>Hint:</strong> Use a list comprehension to extract all scores. Use the sum() and len() functions to calculate the average. Use max() with a key function to find the highest score.
            </div>
        `,
        initialCode: `# Analyze student scores here
students = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 92},
    {"name": "Charlie", "score": 78},
    {"name": "David", "score": 95},
    {"name": "Eve", "score": 88}
]

# Calculate average score
scores = [student["score"] for student in students]
average_score = sum(scores) / len(scores)
print(f"Average score: {average_score:.2f}")

# Find student with highest score
top_student = max(students, key=lambda x: x["score"])
print(f"Top student: {top_student['name']} with score {top_student['score']}")

# Count students scoring above 80
high_scorers = sum(1 for student in students if student["score"] > 80)
print(f"Number of students scoring above 80: {high_scorers}")
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Loop Project: Number Guessing Game",
        content: `
            <p class="tutorial-text">
                Now that we've learned about loops, let's put our knowledge into practice by creating a simple number guessing game. This project will help reinforce the concepts we've covered and show how loops can be used in a real-world scenario.
            </p>
            <div class="key-point">
                <h4>Project Goal</h4>
                <p>Create a game where the computer generates a random number, and the player tries to guess it. The game will provide hints and keep track of the number of attempts.</p>
            </div>
            <h3>Project Requirements:</h3>
            <p class="tutorial-text">
                Your Number Guessing Game should:
                <ol>
                    <li>Generate a random number between 1 and 100.</li>
                    <li>Ask the player to guess the number.</li>
                    <li>Provide feedback on whether the guess is too high, too low, or correct.</li>
                    <li>Keep track of the number of attempts.</li>
                    <li>Allow the player to play again if they want to.</li>
                </ol>
            </p>
            <h3>Implementation Steps:</h3>
            <ol>
                <li>Import the random module to generate random numbers.</li>
                <li>Create a function to generate a random number.</li>
                <li>Use a while loop to keep the game running until the player guesses correctly.</li>
                <li>Use conditional statements to provide feedback on the player's guess.</li>
                <li>Implement a counter to keep track of the number of attempts.</li>
                <li>Use another while loop to allow multiple games if the player wants to continue.</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> Use random.randint(1, 100) to generate a random number. Use input() to get the player's guess, and don't forget to convert it to an integer!
            </div>
            <p class="tutorial-text">
                The template below provides a starting point for your Number Guessing Game. Fill in the functions and add any additional functionality you think would make the game more engaging!
            </p>
        `,
        initialCode: `import random

def generate_number():
    return random.randint(1, 100)

def play_game():
    number_to_guess = generate_number()
    attempts = 0

    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")

    while True:
        guess = int(input("Enter your guess: "))
        attempts += 1

        if guess < number_to_guess:
            print("Too low! Try again.")
        elif guess > number_to_guess:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You guessed the number in {attempts} attempts!")
            return attempts

def main():
    while True:
        play_game()
        play_again = input("Do you want to play again? (yes/no): ").lower()
        if play_again != 'yes':
            print("Thanks for playing! Goodbye!")
            break

main()
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
