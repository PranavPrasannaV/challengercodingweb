export const scratchLesson6 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="tutorial-title">Lesson 6: Boolean Statements and Operators in Scratch</h2>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    In this lesson, we'll explore Boolean statements and operators in Scratch. You'll learn how to 
                    use logical operators to create complex conditions and make decisions in your code.
                </p>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Key Concepts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Boolean</h3>
                        <p>A data type that can only have two possible values: true or false.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Logical Operators</h3>
                        <p>Operators that work with Boolean values to create complex conditions.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Comparison Operators</h3>
                        <p>Operators that compare two values and return a Boolean result.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Arithmetic Operators</h3>
                        <p>Operators that perform mathematical calculations on numerical values.</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Blocks We'll Use</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Operators Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>and</li>
                            <li>or</li>
                            <li>not</li>
                            <li>&lt; (less than)</li>
                            <li>&gt; (greater than)</li>
                            <li>= (equal to)</li>
                        </ul>
                    </div>
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Arithmetic Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>+ (addition)</li>
                            <li>- (subtraction)</li>
                            <li>* (multiplication)</li>
                            <li>/ (division)</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Boolean Operators",
        content: `
            <h2 class="tutorial-title">Boolean Operators</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Boolean operators are used to combine or modify Boolean values (true or false). In Scratch, 
                    we have three main Boolean operators: AND, OR, and NOT.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">The "AND" Operator</h3>
                <p class="tutorial-text">
                    The AND operator returns true only if both conditions are true.
                </p>
                <img src="/and.png" alt="AND Operator in Scratch" class="image-block">
                <p class="image-caption">The "and" block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you want an action to occur only if multiple conditions are met.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">The "OR" Operator</h3>
                <p class="tutorial-text">
                    The OR operator returns true if at least one of the conditions is true.
                </p>
                <img src="/or.png" alt="OR Operator in Scratch" class="image-block">
                <p class="image-caption">The "or" block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you want an action to occur if any of multiple conditions are met.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">The "NOT" Operator</h3>
                <p class="tutorial-text">
                    The NOT operator reverses a Boolean value. It turns true into false and false into true.
                </p>
                <img src="/not.png" alt="NOT Operator in Scratch" class="image-block">
                <p class="image-caption">The "not" block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you want to check if a condition is not true.</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Boolean Operators</h3>
                <div id="boolean-demo">
                    <canvas id="boolean-canvas" width="400" height="200"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Toggle A</button>
                    <button class="demo-button">Toggle B</button>
                    <button class="demo-button">AND</button>
                    <button class="demo-button">OR</button>
                    <button class="demo-button">NOT</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In the demo above, you can toggle two conditions (A and B) and see how different Boolean 
                    operators affect the result. This helps visualize how these operators work in practice.
                </p>
            </div>
        `
    },
    {
        title: "Numerical Operators",
        content: `
            <h2 class="tutorial-title">Numerical Operators</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Numerical operators in Scratch allow you to perform mathematical operations and comparisons. 
                    These include both arithmetic operators and comparison operators.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Arithmetic Operators</h3>
                <p class="tutorial-text">
                    Arithmetic operators perform basic mathematical calculations.
                </p>
                <ul class="list-disc list-inside mb-4">
                    <li>Addition (+)</li>
                    <li>Subtraction (-)</li>
                    <li>Multiplication (*)</li>
                    <li>Division (/)</li>
                </ul>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Comparison Operators</h3>
                <p class="tutorial-text">
                    Comparison operators compare two values and return a Boolean result.
                </p>
                <ul class="list-disc list-inside mb-4">
                    <li>Greater than (&gt;)</li>
                    <li>Less than (&lt;)</li>
                    <li>Equal to (=)</li>
                </ul>
                <div class="grid grid-cols-3 gap-2 mb-4">
                    <div>
                        <img src="/greaterthan.png" alt="Greater-than operator block in Scratch" class="image-block">
                        <p class="image-caption">Greater Than (&gt;)</p>
                    </div>
                    <div>
                        <img src="/lessthan.png" alt="Less-than operator block in Scratch" class="image-block">
                        <p class="image-caption">Less Than (&lt;)</p>
                    </div>
                    <div>
                        <img src="/equal.png" alt="Equal-to operator block in Scratch" class="image-block">
                        <p class="image-caption">Equal To (=)</p>
                    </div>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Numerical Operations</h3>
                <div id="numerical-demo">
                    <canvas id="numerical-canvas" width="400" height="200"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">A + 1</button>
                    <button class="demo-button">A - 1</button>
                    <button class="demo-button">B + 1</button>
                    <button class="demo-button">B - 1</button>
                    <button class="demo-button">+</button>
                    <button class="demo-button">-</button>
                    <button class="demo-button">*</button>
                    <button class="demo-button">/</button>
                    <button class="demo-button">&gt;</button>
                    <button class="demo-button">&lt;</button>
                    <button class="demo-button">=</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In this demo, you can change the values of A and B and apply different arithmetic and comparison 
                    operations. This helps you understand how these operators work with actual numbers.
                </p>
            </div>
        `
    },
    {
        title: "Guided Exercise",
        content: `
            <h2 class="tutorial-title">Guided Exercise: Creating a Simple Game with Boolean and Numerical Operators</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    In this exercise, we'll create a simple game that uses both Boolean and numerical operators. 
                    The game will involve a sprite trying to collect items while avoiding obstacles.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 1: Setting Up the Game</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a new Scratch project.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Choose a backdrop for your game.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Add a sprite for the player, one for the collectible item, and one for the obstacle.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 2: Programming the Player Movement</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Add the following script to control the player's movement:</p>
                </div>
                <pre class="code-block">
when green flag clicked
forever
    if &lt;key [right arrow] pressed?&gt; then
        change x by (5)
    end
    if &lt;key [left arrow] pressed?&gt; then
        change x by (-5)
    end
    if &lt;&lt;key [up arrow] pressed?&gt; and &lt;(y position) &lt; (170)&gt;&gt; then
        change y by (5)
    end
    if &lt;&lt;key [down arrow] pressed?&gt; and &lt;(y position) &gt; (-170)&gt;&gt; then
        change y by (-5)
    end
end
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 3: Programming the Collectible Item</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Add the following script to the collectible item sprite:</p>
                </div>
                <pre class="code-block">
when green flag clicked
forever
    go to x: (pick random (-240) to (240)) y: (pick random (-180) to (180))
    wait until &lt;touching [Player v]?&gt;
    change [score v] by (1)
end
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 4: Programming the Obstacle</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Add the following script to the obstacle sprite:</p>
                </div>
                <pre class="code-block">
when green flag clicked
forever
    move (10) steps
    if &lt;touching [edge v]?&gt; then
        turn (180) degrees
    end
    if &lt;touching [Player v]?&gt; then
        stop [all v]
    end
end
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 5: Adding a Score and Timer</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create variables for "score" and "time".</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add the following script to control the timer:</p>
                </div>
                <pre class="code-block">
when green flag clicked
set [time v] to (30)
repeat until &lt;(time) = (0)&gt;
    wait (1) seconds
    change [time v] by (-1)
end
stop [all v]
                </pre>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Simple Collection Game</h3>
                <div id="game-demo">
                    <canvas id="game-canvas" width="480" height="360"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Start Game</button>
                    <button class="demo-button">Move Left</button>
                    <button class="demo-button">Move Right</button>
                    <button class="demo-button">Move Up</button>
                    <button class="demo-button">Move Down</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Congratulations! You've created a simple game using Boolean and numerical operators. The player 
                    moves using arrow keys (Boolean operators check for key presses), collects items to increase the 
                    score (numerical addition), and must avoid the obstacle while racing against the timer 
                    (numerical comparison for time running out).
                </p>
                <p class="tutorial-text">
                    Try playing the demo above to see how the game works. You can move the player using the arrow 
                    buttons, try to collect the items, and avoid the moving obstacle!
                </p>
            </div>
        `
    },
    {
        title: "Mini-Project",
        content: `
            <h2 class="tutorial-title">Mini-Project: Create a Quiz Game with Boolean and Numerical Operators</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Now it's your turn to create a project using what you've learned about Boolean and numerical 
                    operators. You'll be creating a simple quiz game that asks math questions and keeps track of 
                    the player's score.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">
                    Create a Scratch project that presents the player with math questions. The game should generate 
                    random numbers for each question, ask the player for an answer, and check if the answer is correct 
                    using Boolean and numerical operators.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step-by-Step Guide</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create variables for "number1", "number2", "operator", "correct_answer", and "score".</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Create a custom block called "generate_question" that sets random values for number1 and number2, and randomly chooses an operator (+, -, or *).</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Create a custom block called "calculate_answer" that computes the correct answer based on the numbers and operator.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Use the "ask and wait" block to get the player's answer.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Use an "if-else" statement with the "=" operator to check if the player's answer matches the correct answer.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">6</span> Update the score using the "change [score] by (1)" block if the answer is correct.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example Code Structure</h3>
                <pre class="code-block">
when green flag clicked
set [score v] to (0)
repeat (5)
    generate_question
    calculate_answer
    ask (join (join (number1) (operator)) (number2)) and wait
    if &lt;(answer) = (correct_answer)&gt; then
        change [score v] by (1)
        say [Correct!] for (2) seconds
    else
        say (join [Wrong! The correct answer was ] (correct_answer)) for (2) seconds
    end
end
say (join [Game over! Your score: ] (score)) for (5) seconds
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Challenge</h3>
                <p class="tutorial-text">
                    Can you add different difficulty levels to your quiz game? Use numerical comparisons to set 
                    the range of random numbers based on the chosen difficulty. You might also add a timer using 
                    a numerical countdown, and use Boolean operators to check if the player answered within the time limit.
                </p>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Math Quiz Game</h3>
                <div id="quiz-demo">
                    <canvas id="quiz-canvas" width="400" height="300"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Start Quiz</button>
                    <input type="number" id="answer-input" placeholder="Your answer">
                    <button class="demo-button">Submit Answer</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Remember, creativity is key! Feel free to add your own twists to the quiz game. Maybe add 
                    different types of questions, or create a multiplayer version where two players compete. 
                    Don't forget to share your project with your classmates when you're done!
                </p>
            </div>
        `
    }
];
