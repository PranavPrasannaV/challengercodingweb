export const scratch2Lesson2 = [
    {
        title: "Lesson Overview",
        content: `
                    <h1 class="tutorial-title">Scratch 2 - Lesson 2: Calculator</h1>
                    <div class="content-box">
                        <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                        <p class="tutorial-text">
                            In this lesson, you will create a simple calculator in Scratch. By the end of this project, you'll have a functioning calculator that can perform basic math operations (addition, subtraction, multiplication, and division).
                        </p>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Interactive Calculator Demo</h3>
                        <div id="calculator-demo">
                            <input type="number" id="num1" placeholder="Enter number 1">
                            <input type="number" id="num2" placeholder="Enter number 2">
                            <select id="operation">
                                <option value="add">Add</option>
                                <option value="subtract">Subtract</option>
                                <option value="multiply">Multiply</option>
                                <option value="divide">Divide</option>
                            </select>
                            <button onclick="calculate()">Calculate</button>
                            <p id="result"></p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Check out the final Scratch project below!</h3>
                        <iframe src="https://scratch.mit.edu/projects/963670311/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>

                    <div class="highlight-box">
                        <p><strong>Key Concepts:</strong> Variables, User Input, Conditional Statements, Mathematical Operations</p>
                    </div>
        `
    },
    {
        title: "Ask Function & Conditional Logic",
        content: `
                    <h1 class="tutorial-title">1. Ask Function & Conditional Logic</h1>
                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Try It: Conditional Logic</h3>
                        <div id="conditional-demo">
                            <input type="text" id="user-input" placeholder="Enter 'add', 'subtract', 'multiply', or 'divide'">
                            <button onclick="checkCondition()">Check Condition</button>
                            <p id="condition-result"></p>
                        </div>
                    <p>Type your math operation</p>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">The Ask and Wait Block</h3>
                        <p class="tutorial-text">
                            The <strong>ask [ ] and wait</strong> block in Scratch is crucial for getting user input. It's like asking a question and waiting for an answer.
                        </p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Drag the <strong>ask [ ] and wait</strong> block from the "Sensing" category.</p>
                            <p><span class="step-number">2</span> Type your question in the block, e.g., "What operation do you want to perform?"</p>
                            <p><span class="step-number">3</span> The user's answer is stored in the <strong>answer</strong> block.</p>
                        </div>
                        <img src="/placeholder.svg?height=100&width=300" alt="Ask and Wait Block" class="image-block">
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Conditional Logic with If-Then Blocks</h3>
                        <p class="tutorial-text">
                            We use conditional logic to decide what operation to perform based on the user's input.
                        </p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Drag an <strong>if [ ] then</strong> block from the "Control" category.</p>
                            <p><span class="step-number">2</span> Use the <strong>=</strong> block from "Operators" to check the <strong>answer</strong>.</p>
                            <p><span class="step-number">3</span> Add blocks inside the if-then to perform the chosen operation.</p>
                        </div>
                    </div>

                    <div class="highlight-box">
                        <p><strong>Pro Tip:</strong> Use multiple if-then blocks to handle different operations in your calculator.</p>
                    </div>
        `
    },
    {
        title: "Coding the Subtraction Operation",
        content: `
                    <h1 class="tutorial-title">2. Coding the Subtraction Operation</h1>
                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Try It: Subtraction</h3>
                        <div id="subtraction-demo">
                            <input type="number" id="sub-num1" placeholder="Enter number 1">
                            <input type="number" id="sub-num2" placeholder="Enter number 2">
                            <button onclick="subtract()">Subtract</button>
                            <p id="subtraction-result"></p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Getting the Numbers</h3>
                        <p class="tutorial-text">
                            Before we can subtract, we need to get two numbers from the user.
                        </p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Use two <strong>ask [ ] and wait</strong> blocks to get both numbers.</p>
                            <p><span class="step-number">2</span> Store each answer in a variable (e.g., 'number1' and 'number2').</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Performing the Subtraction</h3>
                        <p class="tutorial-text">
                            Now let's subtract the numbers and show the result.
                        </p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Use the <strong>-</strong> block from the "Operators" category.</p>
                            <p><span class="step-number">2</span> Place your 'number1' and 'number2' variables in the subtraction block.</p>
                            <p><span class="step-number">3</span> Use a <strong>say [ ]</strong> block to display the result.</p>
                        </div>
                    </div>

                    <div class="highlight-box">
                        <p><strong>Challenge:</strong> Can you modify this code to handle addition, multiplication, and division as well?</p>
                    </div>
        `
    },
    {
        title: "Homework and Exercises",
        content: `
                    <h1 class="tutorial-title">Homework and Exercises</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Exercise 1: Complete Calculator</h3>
                        <p class="tutorial-text">
                            Extend your calculator to handle all four basic operations: addition, subtraction, multiplication, and division.
                        </p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Add if-then blocks for each operation.</p>
                            <p><span class="step-number">2</span> Use appropriate operator blocks for each calculation.</p>
                            <p><span class="step-number">3</span> Test your calculator with different inputs.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Exercise 2: Advanced Operations</h3>
                        <p class="tutorial-text">
                            Add more advanced operations to your calculator.
                        </p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Implement a square root function.</p>
                            <p><span class="step-number">2</span> Add a power function (x to the power of y).</p>
                            <p><span class="step-number">3</span> Include a modulo operation (remainder after division).</p>
                        </div>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Practice: Advanced Calculator</h3>
                        <div id="advanced-calculator">
                            <input type="number" id="adv-num1" placeholder="Enter number">
                            <select id="adv-operation">
                                <option value="sqrt">Square Root</option>
                                <option value="power">Power</option>
                                <option value="modulo">Modulo</option>
                            </select>
                            <input type="number" id="adv-num2" placeholder="Enter second number (if needed)">
                            <button onclick="advancedCalculate()">Calculate</button>
                            <p id="advanced-result"></p>
                        </div>
                    </div>

                    <div class="highlight-box">
                        <p><strong>Remember:</strong> The key to becoming a great programmer is practice and creativity. Keep experimenting and building new things!</p>
                    </div>
        `
    }
];
