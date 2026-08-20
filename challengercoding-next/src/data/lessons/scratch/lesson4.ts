export const scratchLesson4 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="tutorial-title">Lesson 4: Loops in Scratch</h2>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    In this lesson, we'll explore the concept of loops in Scratch. You'll learn how to use 
                    different types of loops to repeat actions and create more efficient code.
                </p>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Key Concepts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Loop</h3>
                        <p>A way to repeat a set of instructions multiple times.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Iteration</h3>
                        <p>Each time the code inside a loop is executed.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Infinite Loop</h3>
                        <p>A loop that continues indefinitely unless stopped manually.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Counter</h3>
                        <p>A variable used to keep track of the number of iterations in a loop.</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Blocks We'll Use</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Control Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Repeat [ ] times</li>
                            <li>Forever</li>
                            <li>Repeat until [ ]</li>
                        </ul>
                    </div>
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Motion Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Move [ ] steps</li>
                            <li>Turn [ ] degrees</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Understanding Loops",
        content: `
            <h2 class="tutorial-title">Understanding Loops</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    In programming, a loop is a way to repeat a set of instructions multiple times. Instead of 
                    writing the same code over and over, we can use a loop to do the repetition for us. This 
                    makes our code more efficient and easier to read and modify.
                </p>
                <div class="highlight-box">
                    <p><strong>Key Point:</strong> Loops help us avoid repetition in our code and make it more efficient.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Why Use Loops?</h3>
                <p class="tutorial-text">Loops are useful when:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>You need to perform the same action multiple times</li>
                    <li>You want to process each item in a list</li>
                    <li>You need to keep doing something until a certain condition is met</li>
                </ul>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: With and Without Loops</h3>
                <div id="loop-demo">
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Without Loop</button>
                    <button class="demo-button">With Loop</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    As you can see, using a loop can significantly reduce the amount of code we need to write. 
                    In the next section, we'll explore different types of loops in Scratch.
                </p>
            </div>
        `
    },
    {
        title: "Types of Loops",
        content: `
            <h2 class="tutorial-title">Types of Loops in Scratch</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Scratch provides several types of loops, each suited for different scenarios. Let's explore 
                    the main types of loops you'll use in your Scratch projects.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">1. Repeat Loop</h3>
                <p class="tutorial-text">
                    The "Repeat" loop executes a set of instructions a specific number of times.
                </p>
                <img src="/repeat.png" alt="Repeat Loop Block" class="image-block">
                <p class="image-caption">The "Repeat" loop block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you know exactly how many times you want to repeat an action.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">2. Forever Loop</h3>
                <p class="tutorial-text">
                    The "Forever" loop repeats a set of instructions indefinitely, until the script is stopped.
                </p>
                <img src="/forever.png" alt="Forever Loop Block" class="image-block">
                <p class="image-caption">The "Forever" loop block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you want an action to continue indefinitely, like constant movement or checking for user input.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">3. Repeat Until Loop</h3>
                <p class="tutorial-text">
                    The "Repeat Until" loop repeats a set of instructions until a specific condition is met.
                </p>
                <img src="/repeatuntil.png" alt="Repeat Until Loop Block" class="image-block">
                <p class="image-caption">The "Repeat Until" loop block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you want to repeat an action until a specific condition is true, like reaching a goal or collecting all items.</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Loop Types</h3>
                <div id="loop-types-demo">
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Repeat Loop</button>
                    <button class="demo-button">Forever Loop</button>
                    <button class="demo-button">Repeat Until Loop</button>
                </div>
            </div>
        `
    },
    {
        title: "Guided Tutorial",
        content: `
            <h2 class="tutorial-title">Guided Tutorial: Creating a Simple Maze Game</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    In this tutorial, we'll create a simple automated maze game using Scratch. We'll use loops 
                    to make our sprite navigate through the maze.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 1: Set Up the Maze</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a new Scratch project.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Click on the Stage pane, then click on "Backdrops".</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Use the drawing tools to create a simple maze. Make sure to leave a clear path from start to finish.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 2: Add the Sprite</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Choose a sprite that will navigate through the maze.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Position the sprite at the starting point of your maze.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 3: Program the Sprite's Movement</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Add a "when green flag clicked" block to start your script.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add a "forever" loop to keep the sprite moving continuously.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Inside the loop, add a "move 10 steps" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Add an "if on edge, bounce" block to keep the sprite within the stage.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 4: Add Turning Logic</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> After the "move" block, add an "if...then" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> In the condition, use "touching color [ ]" and select the color of your maze walls.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Inside the "if" block, add a "turn 15 degrees" block to make the sprite turn when it hits a wall.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 5: Test and Refine</h3>
                <p class="tutorial-text">
                    Click the green flag to test your maze game. Watch how the sprite navigates through the maze. 
                    You may need to adjust the movement speed, turning angle, or maze design to get the desired behavior.
                </p>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Maze Navigation</h3>
                <div id="maze-demo">
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Start Demo</button>
                    <button class="demo-button">Stop Demo</button>
                </div>
            </div>
        `
    },
    {
        title: "Mini-Project",
        content: `
            <h2 class="tutorial-title">Mini-Project: Create a Spiral Drawing</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Let's put everything we've learned about loops into practice by creating a program that 
                    draws a spiral pattern.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">
                    Create a Scratch project that uses a loop to draw a spiral pattern. The spiral should start 
                    small and gradually get larger.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step-by-Step Guide</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Start a new Scratch project and choose the "Pen" extension.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add a "when green flag clicked" block to start your script.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Add a "clear" block to erase any previous drawings.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Add a "pen down" block to start drawing.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Create a variable called "length" and set it to 0 at the start.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">6</span> Use a "repeat" loop to create the spiral. Experiment with the number of repetitions.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">7</span> Inside the loop, add blocks to move forward, turn, and increase the length.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example Code Structure</h3>
                <pre class="code-block">
when green flag clicked
clear
pen down
set [length] to (0)
repeat (100)
    move (length) steps
    turn (90) degrees
    change [length] by (2)
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Challenge</h3>
                <p class="tutorial-text">
                    Can you modify the project to create different spiral shapes? Try changing the turn angle 
                    or the rate at which the length increases. Can you make the spiral change colors as it draws?
                </p>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Spiral Drawing</h3>
                <div id="spiral-demo">
                    <canvas id="spiral-canvas" width="400" height="400"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Draw Spiral</button>
                    <button class="demo-button">Clear</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Remember, creativity is key! Feel free to experiment with different patterns and shapes. 
                    Don't forget to share your project with your classmates when you're done!
                </p>
            </div>
        `
    }
];
