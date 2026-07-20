export const scratchLesson5 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="tutorial-title">Lesson 5: Conditionals in Scratch</h1>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    In this lesson, we'll explore conditionals in Scratch. You'll learn how to use if statements 
                    and if-else statements to make decisions in your code, allowing your sprites to respond to 
                    different conditions.
                </p>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Key Concepts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Conditional</h3>
                        <p>A statement that performs different actions based on whether a condition is true or false.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Boolean</h3>
                        <p>A data type that represents one of two values: true or false.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">If Statement</h3>
                        <p>A conditional that executes a set of instructions only if a certain condition is true.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">If-Else Statement</h3>
                        <p>A conditional that executes one block of code if a condition is true and another if it's false.</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Blocks We'll Use</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Control Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>If [ ] then</li>
                            <li>If [ ] then ... else</li>
                        </ul>
                    </div>
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Sensing Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Key [ ] pressed?</li>
                            <li>Touching [ ]?</li>
                            <li>Mouse down?</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Understanding Conditionals",
        content: `
            <h1 class="tutorial-title">Understanding Conditionals</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    In programming, a conditional is a statement that allows your code to make decisions. It's like 
                    asking a question and then doing something based on the answer. In Scratch, we use conditionals 
                    to make our sprites react to different situations.
                </p>
                <div class="highlight-box">
                    <p><strong>Key Point:</strong> Conditionals help your program make decisions based on different conditions.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">How Conditionals Work</h3>
                <p class="tutorial-text">A conditional typically follows this pattern:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>If (some condition is true)</li>
                    <li>Then (do this)</li>
                    <li>Otherwise (do something else)</li>
                </ul>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Conditional Check</h3>
                <div id="conditional-demo">
                    <canvas id="conditional-canvas" width="400" height="200"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="toggleLight()">Toggle Light</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In the demo above, we're using a conditional to check if the light is on or off. Based on this 
                    condition, we either show a bright or dark room. This is a simple example of how conditionals 
                    can change the behavior of our program.
                </p>
            </div>
        `
    },
    {
        title: "If Statements",
        content: `
            <h1 class="tutorial-title">If Statements</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    An "If" statement is the most basic type of conditional. It allows you to execute a block of 
                    code only if a certain condition is true.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">The "If" Block in Scratch</h3>
                <p class="tutorial-text">
                    In Scratch, the "If" block looks like this:
                </p>
                <img src="/placeholder.svg?height=50&width=200" alt="If Block in Scratch" class="image-block">
                <p class="image-caption">The "If" block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you want to perform an action only under certain conditions.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example: Moving a Sprite with Arrow Keys</h3>
                <p class="tutorial-text">Let's create a simple script that moves a sprite when an arrow key is pressed:</p>
                <div class="step-box">
                    <p><span class="step-number">1</span> Drag an "If" block into your script area.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> From the "Sensing" category, drag a "Key [space] pressed?" block into the condition of the "If" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Change "space" to "right arrow" in the dropdown menu.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Inside the "If" block, add a "Move 10 steps" block from the "Motion" category.</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Moving with Arrow Keys</h3>
                <div id="arrow-key-demo">
                    <canvas id="arrow-key-canvas" width="400" height="400"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onmousedown="moveSprite('right')" onmouseup="stopSprite()">Right</button>
                    <button class="demo-button" onmousedown="moveSprite('left')" onmouseup="stopSprite()">Left</button>
                    <button class="demo-button" onmousedown="moveSprite('up')" onmouseup="stopSprite()">Up</button>
                    <button class="demo-button" onmousedown="moveSprite('down')" onmouseup="stopSprite()">Down</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In this example, we've used "If" statements to check which arrow key is pressed and move the 
                    sprite accordingly. Try pressing the different arrow buttons to see how the sprite moves!
                </p>
            </div>
        `
    },
    {
        title: "If-Else Statements",
        content: `
            <h1 class="tutorial-title">If-Else Statements</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    An "If-Else" statement allows you to execute one block of code if a condition is true, and a 
                    different block of code if the condition is false.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">The "If-Else" Block in Scratch</h3>
                <p class="tutorial-text">
                    In Scratch, the "If-Else" block looks like this:
                </p>
                <img src="/placeholder.svg?height=100&width=200" alt="If-Else Block in Scratch" class="image-block">
                <p class="image-caption">The "If-Else" block in Scratch</p>
                <div class="highlight-box">
                    <p><strong>Use Case:</strong> When you want to perform one action if a condition is true, and a different action if it's false.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example: Changing Sprite Color Based on Position</h3>
                <p class="tutorial-text">Let's create a script that changes a sprite's color based on its position:</p>
                <div class="step-box">
                    <p><span class="step-number">1</span> Drag an "If-Else" block into your script area.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> From the "Operators" category, drag a "[ ] > [ ]" block into the condition of the "If-Else" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> From the "Motion" category, drag an "x position" block into the first space of the ">" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Type "0" into the second space of the ">" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Inside the "If" part, add a "Set color effect to 0" block from the "Looks" category.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">6</span> Inside the "Else" part, add another "Set color effect to 50" block.</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Color Change Based on Position</h3>
                <div id="color-change-demo">
                    <canvas id="color-change-canvas" width="400" height="200"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="moveColorSprite('left')">Move Left</button>
                    <button class="demo-button" onclick="moveColorSprite('right')">Move Right</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In this example, we've used an "If-Else" statement to change the sprite's color based on its 
                    x-position. If the sprite is on the right side of the stage (x > 0), it turns one color. 
                    Otherwise, it turns a different color. Try moving the sprite left and right to see the color change!
                </p>
            </div>
        `
    },
    {
        title: "Guided Tutorial",
        content: `
            <h1 class="tutorial-title">Guided Tutorial: Creating a Simple Game with Conditionals</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    In this tutorial, we'll create a simple game where a sprite tries to catch falling objects. 
                    We'll use conditionals to control the sprite's movement and detect collisions.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 1: Setting Up the Stage</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a new Scratch project.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Choose a backdrop for your game. You can use the default backdrop or choose a new one from the library.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 2: Creating the Player Sprite</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Choose a sprite for the player. This will be the character that moves to catch falling objects.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add the following script to control the player's movement:</p>
                </div>
                <pre class="code-block">
when green flag clicked
forever
    if &lt;key [left arrow] pressed?&gt; then
        change x by -10
    end
    if &lt;key [right arrow] pressed?&gt; then
        change x by 10
    end
    if &lt;touching [edge v]?&gt; then
        if &lt;(x position) &gt; (0)&gt; then
            set x to (240)
        else
            set x to (-240)
        end
    end
end
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 3: Creating the Falling Object</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Add a new sprite that will be the falling object. You can use any sprite you like.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add the following script to control the falling object:</p>
                </div>
                <pre class="code-block">
when green flag clicked
forever
    go to x: (pick random (-240) to (240)) y: (180)
    repeat until &lt;touching [edge v]?&gt;
        change y by -5
        if &lt;touching [Player v]?&gt; then
            change [score v] by (1)
            play sound (pop)
            wait (0.1) seconds
        end
    end
end
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 4: Adding a Score</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a variable called "score" for all sprites.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add the following script to initialize the score:</p>
                </div>
                <pre class="code-block">
when green flag clicked
set [score v] to (0)
                </pre>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Catch the Falling Object</h3>
                <div id="game-demo">
                    <canvas id="game-canvas" width="480" height="360"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="startGame()">Start Game</button>
                    <button class="demo-button" onclick="movePlayer('left')">Move Left</button>
                    <button class="demo-button" onclick="movePlayer('right')">Move Right</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Congratulations! You've created a simple game using conditionals. The player sprite moves left 
                    and right based on key presses, and the falling object resets its position when it touches the 
                    edge or the player. The score increases each time the player catches the falling object.
                </p>
                <p class="tutorial-text">
                    Try playing the demo above to see how the game works. You can move the player left and right 
                    using the buttons, and try to catch the falling object to increase your score!
                </p>
            </div>
        `
    },
    {
        title: "Mini-Project",
        content: `
            <h1 class="tutorial-title">Mini-Project: Create a Maze Game with Conditionals</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    Now it's your turn to create a project using what you've learned about conditionals. You'll be 
                    creating a simple maze game where a sprite navigates through a maze using arrow keys.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">
                    Create a Scratch project where a sprite navigates through a maze. The sprite should move with 
                    arrow keys and stop when it hits a wall. When the sprite reaches the end of the maze, it should 
                    display a "You Win!" message.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step-by-Step Guide</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a new Scratch project and design a simple maze as the backdrop.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add a sprite that will navigate through the maze.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Use "If" statements to move the sprite when arrow keys are pressed.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Use an "If-Else" statement to check if the sprite is touching a wall. If it is, move it back slightly.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Add another conditional to check if the sprite has reached the end of the maze.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">6</span> Display a "You Win!" message when the sprite reaches the end.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example Code Structure</h3>
                <pre class="code-block">
when green flag clicked
forever
    if &lt;key [right arrow] pressed?&gt; then
        point in direction (90)
        move (5) steps
    end
    if &lt;key [left arrow] pressed?&gt; then
        point in direction (-90)
        move (5) steps
    end
    if &lt;key [up arrow] pressed?&gt; then
        point in direction (0)
        move (5) steps
    end
    if &lt;key [down arrow] pressed?&gt; then
        point in direction (180)
        move (5) steps
    end
    if &lt;touching color [#000000]?&gt; then
        move (-5) steps
    end
    if &lt;touching color [#00FF00]?&gt; then
        say [You Win!] for (2) seconds
        stop [all v]
    end
end
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Challenge</h3>
                <p class="tutorial-text">
                    Can you add a timer to your maze game? Use a variable to keep track of time, and display how long 
                    it took the player to complete the maze. You might need to use some additional conditionals to 
                    start and stop the timer at the right moments!
                </p>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Simple Maze Game</h3>
                <div id="maze-demo">
                    <canvas id="maze-canvas" width="400" height="400"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="moveMazeSprite('up')">Up</button>
                    <button class="demo-button" onclick="moveMazeSprite('down')">Down</button>
                    <button class="demo-button" onclick="moveMazeSprite('left')">Left</button>
                    <button class="demo-button" onclick="moveMazeSprite('right')">Right</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Remember, creativity is key! Feel free to add your own twists to the maze game. Maybe add 
                    collectibles, multiple levels, or even enemies to avoid. Don't forget to share your project 
                    with your classmates when you're done!
                </p>
            </div>
        `
    }
];
