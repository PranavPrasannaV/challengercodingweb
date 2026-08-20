export const pythonLesson4 = [
    {
        title: "Introduction to Conditionals",
        content: `
            <h2 class="tutorial-title">Exercise 1: Introduction to Conditionals</h2>
            <p class="tutorial-text">
                Welcome to conditionals in Python! Conditionals are statements that allow your program to make decisions based on certain conditions.
            </p>
            <div class="hint-box">
                <h3>What are Conditionals?</h3>
                <p>Conditionals are simply statements that say if something happens, the computer must do this; otherwise, the computer should do something else.</p>
            </div>
            <p class="tutorial-text">
                Here's a simple example of how conditionals work:
            </p>
            <div class="code-block">
if choresComplete:
    # receiveAllowance
else:
    # you get yelled at
            </div>
            <p class="tutorial-text">
                There are three types of conditional statements:
            </p>
            <ul class="tutorial-text">
                <li><strong>If statement:</strong> The if statement starts off the conditional.</li>
                <li><strong>Elif statement:</strong> This is the middle, it says that if the previous conditions didn't happen, but this one does, then do the following function.</li>
                <li><strong>Else statement:</strong> This ends the conditional, saying that if nothing above happened, then do the following.</li>
            </ul>
            <div class="code-block">
if condition:
    # do something
elif another_condition:
    # do something else
else:
    # do something if none of the above conditions are true
            </div>
            <p class="tutorial-text">
                Now it's your turn! Complete the Python program that uses if and else statements to check if a person's credit score is high enough to qualify for a loan.
            </p>
        `,
        initialCode: `# This program checks if the person's credit score is high enough to qualify for a loan.
credit_score = 800

if credit_score > 600:
    print("You get the loan!")
# TODO - write the else statement
`,
        expectedOutput: "You get the loan!",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Conditions",
        content: `
            <h2 class="tutorial-title">Exercise 2: Conditions</h2>
            <p class="tutorial-text">
                Conditions are the part of the conditional which state what is supposed to happen. Let's explore different types of conditions we can use in Python.
            </p>
            <div class="hint-box">
                <h3>Comparison Operators</h3>
                <ul>
                    <li>Equal to: <code>==</code></li>
                    <li>Not equal to: <code>!=</code></li>
                    <li>Less than: <code><</code></li>
                    <li>Greater than: <code>></code></li>
                    <li>Less than or Equal to: <code><=</code></li>
                    <li>Greater than or equal to: <code>>=</code></li>
                </ul>
            </div>
            <p class="tutorial-text">
                For strings, you can use equal (==) and not equal (!=) to determine whether the string is the same or not the same as the other string that it is compared to.
            </p>
            <p class="tutorial-text">
                Here are some examples of conditions:
            </p>
            <div class="code-block">
if age == 18:
    print("You are 18 years old")
if name != "John":
    print("You are not John")
if height > 160:
    print("You are tall")
            </div>
            <p class="tutorial-text">
                Now it's your turn! Write a Python program using different conditions to check a person's age and print appropriate messages.
            </p>
        `,
        initialCode: `# Write a program that checks a person's age and prints messages accordingly
age = 25

# TODO: Write conditions to check if the person is a child (0-12), teenager (13-19), adult (20-59), or senior (60+)
# Print an appropriate message for each age group
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Debugging Conditionals",
        content: `
            <h2 class="tutorial-title">Exercise 3: Debugging Conditionals</h2>
            <p class="tutorial-text">
                Debugging is an essential skill for any programmer. Let's practice debugging some conditional statements!
            </p>
            <div class="hint-box">
                <h3>Common Errors in Conditionals</h3>
                <ul>
                    <li>Incorrect indentation</li>
                    <li>Missing or extra colons</li>
                    <li>Using = instead of == for comparison</li>
                    <li>Forgetting to close parentheses</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's a piece of code with some errors. Can you spot and fix them?
            </p>
            <div class="code-block">
if age > 18:
print("You are an adult")
    elif age == 18:
print("You just became an adult")
else:
print("You are not an adult yet")
            </div>
            <p class="tutorial-text">
                Your task is to debug the code above. Remember to use proper indentation!
            </p>
        `,
        initialCode: `# Debug the code below
age = 20

if age > 18:
print("You are an adult")
    elif age == 18:
print("You just became an adult")
else:
print("You are not an adult yet")
`,
        expectedOutput: "You are an adult",
        showCompiler: true,
        showAutograder: true
    },
    {
        title: "Project: Grade Calculator",
        content: `
            <h2 class="tutorial-title">Project: Grade Calculator</h2>
            <p class="tutorial-text">
                Congratulations on making it to the project! Now you'll put your knowledge of conditionals to use by creating a grade calculator.
            </p>
            <div class="hint-box">
                <h3>Project Requirements</h3>
                <ol>
                    <li>Ask the user to input a score (0-100)</li>
                    <li>Use conditional statements to determine the grade</li>
                    <li>Print the corresponding grade</li>
                </ol>
            </div>
            <p class="tutorial-text">
                Use the following grading scale:
            </p>
            <ul class="tutorial-text">
                <li>A: 90-100</li>
                <li>B: 80-89</li>
                <li>C: 70-79</li>
                <li>D: 60-69</li>
                <li>F: 0-59</li>
            </ul>
            <p class="tutorial-text">
                Make sure to handle invalid inputs (scores below 0 or above 100) by printing an error message.
            </p>
            <div class="challenge-box">
                <h3>Extra Challenge:</h3>
                <p>If you've successfully created the basic grade calculator, try to add '+' and '-' grades. For example, 95-100 could be an A+, 90-94 an A, and 87-89 a B+.</p>
            </div>
        `,
        initialCode: `# Grade Calculator Project

# TODO: Ask the user for their score

# TODO: Implement the grade calculation using conditional statements

# TODO: Print the grade or an error message for invalid inputs
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
