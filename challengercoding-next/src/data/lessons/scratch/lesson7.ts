export const scratchLesson7 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="tutorial-title">Lesson 7: Variables and Parameters in Scratch</h2>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    In this lesson, we'll explore variables and parameters in Scratch. You'll learn how to 
                    create and use variables to store information, and how to use parameters to make your 
                    code more flexible and reusable.
                </p>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Key Concepts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Variable</h3>
                        <p>A container that stores a value which can change during the program's execution.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Parameter</h3>
                        <p>A value that can be passed into a block to customize its behavior.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Scope</h3>
                        <p>The area of the program where a variable can be accessed and modified.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Data Types</h3>
                        <p>Different kinds of data that can be stored in variables (numbers, text, etc.).</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Blocks We'll Use</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Variable Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Make a Variable</li>
                            <li>Set [variable] to [value]</li>
                            <li>Change [variable] by [value]</li>
                            <li>Show/Hide Variable</li>
                        </ul>
                    </div>
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Parameter Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Pick Random [1] to [10]</li>
                            <li>Ask [Question] and Wait</li>
                            <li>Answer</li>
                            <li>Timer</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Understanding Variables",
        content: `
            <h2 class="tutorial-title">Understanding Variables</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Variables in Scratch are like containers that can hold different types of information. 
                    They're useful for storing data that might change during your program's execution, 
                    such as a player's score or the number of lives remaining.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Creating a Variable</h3>
                <p class="tutorial-text">
                    To create a variable in Scratch:
                </p>
                <ol class="list-decimal list-inside mb-4">
                    <li>Click on the "Variables" category in the block palette</li>
                    <li>Click the "Make a Variable" button</li>
                    <li>Give your variable a name (e.g., "score")</li>
                    <li>Choose whether the variable is for all sprites or just for one sprite</li>
                </ol>
                <p class="tutorial-text">
                    Once you make a variable, Scratch adds an oval block with its name to the palette.
                    This is the reporter block: it reports the value the variable is holding right now,
                    and you can drop it into any other block that needs that value.
                </p>
                <img src="/assets/scratch-variable-reporter.png" alt="An orange oval Scratch block labelled &quot;variable&quot;, the reporter block that stands for a variable's value." class="image-block" width="216" height="117">
                <p class="image-caption">The reporter block for a variable</p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using Variables</h3>
                <p class="tutorial-text">
                    Once you've created a variable, you can use these blocks to work with it:
                </p>
                <ul class="list-disc list-inside mb-4">
                    <li>Set [variable] to [value]: Sets the variable to a specific value</li>
                    <li>Change [variable] by [value]: Increases or decreases the variable's value</li>
                    <li>Show Variable: Displays the variable's value on the stage</li>
                    <li>Hide Variable: Hides the variable from view on the stage</li>
                </ul>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                    <div>
                        <img src="/setvar.png" alt="Set variable block in Scratch" class="image-block">
                        <p class="image-caption">Set Variable</p>
                    </div>
                    <div>
                        <img src="/changevar.png" alt="Change variable block in Scratch" class="image-block">
                        <p class="image-caption">Change Variable</p>
                    </div>
                    <div>
                        <img src="/showvar.png" alt="Show variable block in Scratch" class="image-block">
                        <p class="image-caption">Show Variable</p>
                    </div>
                    <div>
                        <img src="/hidevar.png" alt="Hide variable block in Scratch" class="image-block">
                        <p class="image-caption">Hide Variable</p>
                    </div>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Score Counter</h3>
                <div id="variable-demo">
                    <canvas id="variable-canvas" width="400" height="200"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Increase Score</button>
                    <button class="demo-button">Reset Score</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In this demo, we've created a simple score counter using a variable. Click the "Increase Score" 
                    button to add points, and "Reset Score" to start over. This demonstrates how variables can 
                    be used to keep track of changing values in your Scratch projects.
                </p>
            </div>
        `
    },
    {
        title: "Exploring Parameters",
        content: `
            <h2 class="tutorial-title">Exploring Parameters</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Parameters in Scratch are values that you can input into blocks to customize their behavior. 
                    They allow you to create more flexible and reusable code by changing the input without 
                    having to modify the entire block.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Common Parameter Blocks</h3>
                <ul class="list-disc list-inside mb-4">
                    <li>Pick Random [1] to [10]: Generates a random number between two values</li>
                    <li>Ask [Question] and Wait: Prompts the user with a question and waits for input</li>
                    <li>Say [Message] for [2] seconds: Displays a message for a specified duration</li>
                    <li>Move [10] steps: Moves the sprite a specified number of steps</li>
                </ul>
                <img src="/assets/scratch-parameter-blocks.svg" alt="Four Scratch blocks with their input slots labelled: pick random 1 to 10, ask What's your name? and wait, say Hello! for 2 seconds, and move 10 steps." class="image-block">
                <p class="image-caption">Blocks that take parameters, with each input slot labelled</p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using Parameters</h3>
                <p class="tutorial-text">
                    To use parameters effectively:
                </p>
                <ol class="list-decimal list-inside mb-4">
                    <li>Identify blocks with input fields (usually rounded rectangles)</li>
                    <li>Click on the input field to change its value</li>
                    <li>You can enter numbers, text, or even use other blocks as inputs</li>
                    <li>Experiment with different values to see how they affect your project</li>
                </ol>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Random Mover</h3>
                <div id="parameter-demo">
                    <canvas id="parameter-canvas" width="400" height="400"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Move Randomly</button>
                    <input type="number" id="min-steps" value="1" min="1" max="50">
                    <input type="number" id="max-steps" value="10" min="1" max="50">
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In this demo, we're using parameters to control the random movement of a sprite. 
                    You can adjust the minimum and maximum number of steps the sprite can move. 
                    Click "Move Randomly" to see the sprite move a random number of steps within your specified range. 
                    This shows how parameters can make your projects more dynamic and interactive.
                </p>
            </div>
        `
    },
    {
        title: "Guided Exercise",
        content: `
            <h2 class="tutorial-title">Guided Exercise: Creating a Simple Quiz Game</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    In this exercise, we'll create a simple quiz game that uses both variables and parameters. 
                    The game will ask the player questions, keep track of their score, and provide feedback.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 1: Setting Up the Variables</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a new Scratch project.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Create a variable called "Score" to keep track of the player's points.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Create a variable called "Question Number" to track which question we're on.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 2: Creating the Quiz Logic</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Use the "Ask [Question] and Wait" block to pose questions to the player.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Use an "If-Then" block to check if the answer is correct.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> If correct, increase the "Score" variable and provide positive feedback.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> If incorrect, provide the correct answer as feedback.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Increase the "Question Number" variable after each question.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 3: Adding Multiple Questions</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Use a "Repeat" block to ask multiple questions.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Inside the repeat block, use "If-Then-Else" blocks to select different questions based on the "Question Number" variable.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example Code Structure</h3>
                <pre class="code-block">
when green flag clicked
set [Score v] to (0)
set [Question Number v] to (1)
repeat (3)
    if &lt;(Question Number) = (1)&gt; then
        ask [What is the capital of France?] and wait
        if &lt;(answer) = [Paris]&gt; then
            change [Score v] by (1)
            say [Correct!] for (2) seconds
        else
            say (join [Incorrect. The answer is ] [Paris]) for (2) seconds
        end
    end
    if &lt;(Question Number) = (2)&gt; then
        ask [How many continents are there?] and wait
        if &lt;(answer) = [7]&gt; then
            change [Score v] by (1)
            say [Correct!] for (2) seconds
        else
            say (join [Incorrect. The answer is ] [7]) for (2) seconds
        end
    end
    if &lt;(Question Number) = (3)&gt; then
        ask [What is the largest planet in our solar system?] and wait
        if &lt;(answer) = [Jupiter]&gt; then
            change [Score v] by (1)
            say [Correct!] for (2) seconds
        else
            say (join [Incorrect. The answer is ] [Jupiter]) for (2) seconds
        end
    end
    change [Question Number v] by (1)
end
say (join [Quiz complete! Your score: ] (Score)) for (5) seconds
                </pre>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Simple Quiz Game</h3>
                <div id="quiz-demo">
                    <canvas id="quiz-canvas" width="400" height="300"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Start Quiz</button>
                    <input type="text" id="answer-input" placeholder="Your answer">
                    <button class="demo-button">Submit Answer</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    This simple quiz game demonstrates how variables can be used to keep track of the score and 
                    question number, while parameters are used in the "Ask" blocks to pose different questions. 
                    Try playing the demo to see how it works!
                </p>
            </div>
        `
    },
    {
        title: "Mini-Project",
        content: `
            <h2 class="tutorial-title">Mini-Project: Create a Customizable Story Generator</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Now it's your turn to create a project using what you've learned about variables and parameters. 
                    You'll be creating a customizable story generator that asks the user for inputs and then 
                    generates a short story based on those inputs.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">
                    Create a Scratch project that asks the user for various inputs (like a character name, 
                    a place, an object, etc.) and then uses these inputs to generate a short story. Use 
                    variables to store the user's inputs and parameters to insert them into the story.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step-by-Step Guide</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create variables for each piece of information you want to collect (e.g., "character", "place", "object").</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Use "Ask [Question] and Wait" blocks to prompt the user for each piece of information.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Store the user's answers in the corresponding variables.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Create a story template using "Say" blocks, leaving spaces for the variables.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Use the "Join" block to combine your story template with the variables.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">6</span> Display the final story to the user.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example Code Structure</h3>
                <pre class="code-block">
when green flag clicked
ask [What is the main character's name?] and wait
set [character v] to (answer)
ask [Where does the story take place?] and wait
set [place v] to (answer)
ask [Name an object for the story.] and wait
set [object v] to (answer)
say (join [Once upon a time, ] (join (character) (join [ went to ] (join (place) (join [. There, they found a magical ] (join (object) [. The end.])))))) for (10) seconds
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Challenge</h3>
                <p class="tutorial-text">
                    Can you add more complexity to your story generator? Try adding conditional statements 
                    to create different story paths based on the user's inputs. For example, if the place 
                    is "forest", the story could involve encountering animals, while if it's "city", it 
                    could involve exploring tall buildings.
                </p>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Story Generator</h3>
                <div id="story-demo">
                    <canvas id="story-canvas" width="400" height="300"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Start Story Generator</button>
                    <input type="text" id="story-input" placeholder="Your input">
                    <button class="demo-button">Submit Input</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Remember, creativity is key! Feel free to expand on this basic structure to create more 
                    complex and interesting stories. You could add more variables, create longer stories, 
                    or even add illustrations that change based on the user's inputs. Don't forget to share 
                    your project with your classmates when you're done!
                </p>
            </div>
        `
    }
];
