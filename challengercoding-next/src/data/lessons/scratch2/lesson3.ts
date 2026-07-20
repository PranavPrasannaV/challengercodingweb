export const scratch2Lesson3 = [
    {
        title: "Lesson Overview",
        content: `
                    <h1 class="tutorial-title">Scratch 2 Class - Guided Exercise</h1>
                    <h2 class="text-2xl font-semibold mb-4">Lesson 3: Basic Platformer</h2>
                    <div class="content-box">
                        <p class="tutorial-text">
                            In this lesson, we will create a basic platformer game. You will learn how to move a character left and right, jump between platforms, and avoid falling off the screen.
                        </p>
                        <p class="tutorial-text">
                            By the end of this project, you'll have a simple but functioning platformer game with basic character movement, platform interaction, and gravity effects.
                        </p>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Check out the final project below!</h3>
                        <iframe src="https://scratch.mit.edu/projects/123456789/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="mx-auto"></iframe>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Interactive Platformer Demo</h3>
                        <canvas id="game-canvas" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button" onclick="moveLeft()">Move Left</button>
                            <button class="demo-button" onclick="moveRight()">Move Right</button>
                            <button class="demo-button" onclick="jump()">Jump</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Creating the Platforms",
        content: `
                    <h1 class="tutorial-title">Mini-Lesson 1: Creating the Platforms</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Drawing the Platforms</h3>
                        <p class="tutorial-text">How do you think we should create platforms for our platformer game?</p>
                        <div class="highlight-box">
                            <p>Go to the "Backdrops" tab and draw simple rectangular platforms at different heights and widths. These will be the platforms that your character will jump onto.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Setting Up the Ground</h3>
                        <p class="tutorial-text">What should we do to set up a ground at the bottom of the screen?</p>
                        <div class="highlight-box">
                            <p>Create a large rectangular ground that spans the bottom of the screen. This will act as the base platform in your game.</p>
                        </div>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Platform Designer</h3>
                        <canvas id="platform-canvas" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button" onclick="addPlatform()">Add Platform</button>
                            <button class="demo-button" onclick="clearPlatforms()">Clear All</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Creating the Character",
        content: `
                    <h1 class="tutorial-title">Mini-Lesson 2: Creating the Character</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Drawing the Player Character</h3>
                        <p class="tutorial-text">Next, we'll need to create a character that the player will control. How should we design the character?</p>
                        <div class="highlight-box">
                            <p>Go to the "Sprites" tab and draw a simple character sprite. You can draw a stick figure, a block character, or import an existing character.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Adding Basic Movement</h3>
                        <p class="tutorial-text">How do you think we can program the character to move left and right?</p>
                        <div class="highlight-box">
                            <p>Use the <strong>when [left arrow] pressed</strong> and <strong>when [right arrow] pressed</strong> blocks to move the character left and right across the screen. Use the <strong>change x by [ ]</strong> block to control the movement.</p>
                        </div>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Character Movement Demo</h3>
                        <canvas id="character-canvas" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button" onmousedown="startMove('left')" onmouseup="stopMove()" ontouchstart="startMove('left')" ontouchend="stopMove()">Move Left</button>
                            <button class="demo-button" onmousedown="startMove('right')" onmouseup="stopMove()" ontouchstart="startMove('right')" ontouchend="stopMove()">Move Right</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Jumping and Gravity",
        content: `
                    <h1 class="tutorial-title">Mini-Lesson 3: Jumping and Gravity</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Implementing Jumping</h3>
                        <p class="tutorial-text">How do you think we can program the character to jump?</p>
                        <div class="highlight-box">
                            <p>Use the <strong>when [space key] pressed</strong> block and the <strong>change y by [ ]</strong> block to make the character jump. Adjust the value to simulate the jump height.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Simulating Gravity</h3>
                        <p class="tutorial-text">What do we need to do to simulate gravity so that the character falls back down after jumping?</p>
                        <div class="highlight-box">
                            <p>Use a <strong>forever</strong> loop with the <strong>change y by -1</strong> block to make the character constantly move down. This will simulate gravity. You'll also need to add a condition that stops the character from falling through platforms.</p>
                        </div>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Interactive Platformer Demo</h3>
                        <canvas id="game-canvas" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button" onclick="moveLeft()">Move Left</button>
                            <button class="demo-button" onclick="moveRight()">Move Right</button>
                            <button class="demo-button" onclick="jump()">Jump</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Collisions with Platforms",
        content: `
                    <h1 class="tutorial-title">Mini-Lesson 4: Collisions with Platforms</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Stopping the Character on Platforms</h3>
                        <p class="tutorial-text">How can we make sure the character stops falling when it lands on a platform using the color of the platform?</p>
                        <div class="highlight-box">
                            <p>Instead of checking if the character is touching a platform sprite, we will check if the character is touching the <strong>color</strong> of the platform. Use the <strong>if touching color [ ]</strong> block to detect the platform color.</p>
                            <p>Once the character is touching the platform's color, use the <strong>set y to [y position]</strong> block to keep the character at the same y-coordinate. This will prevent the character from falling through the platform.</p>
                            <p>You can pick the platform's color by clicking on the color picker in the <strong>if touching color [ ]</strong> block and selecting the platform's color directly.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Preventing the Character from Falling Off the Screen</h3>
                        <p class="tutorial-text">What happens if the player falls off the platforms? How can we prevent the character from falling off the screen?</p>
                        <div class="highlight-box">
                            <p>If the character's <strong>y</strong> position goes below the screen's bottom (e.g., y < -180), reset the game or place the character back at the start position. You can use an <strong>if</strong> statement to check the <strong>y</strong> value and trigger the response.</p>
                        </div>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Interactive Platformer Demo</h3>
                        <canvas id="game-canvas" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button" onclick="moveLeft()">Move Left</button>
                            <button class="demo-button" onclick="moveRight()">Move Right</button>
                            <button class="demo-button" onclick="jump()">Jump</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Homework",
        content: `
                    <h1 class="tutorial-title">Homework</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Extend Your Platformer:</h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Add new levels or obstacles to your game.</li>
                            <li>Create a goal for the player to reach at the end of each level.</li>
                            <li>Implement a scoring system based on time or collected items.</li>
                            <li>Add moving platforms or enemies to increase the challenge.</li>
                        </ul>
                    </div>

                    <div class="highlight-box">
                        <p><strong>Challenge:</strong> Can you create a level editor that allows players to design their own platformer levels?</p>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Reflection Questions:</h3>
                        <ol class="list-decimal list-inside space-y-2">
                            <li>What was the most challenging part of creating your platformer game?</li>
                            <li>How did you handle the collision detection between the character and platforms?</li>
                            <li>What additional features would you like to add to your game in the future?</li>
                        </ol>
                    </div>
        `
    }
];
