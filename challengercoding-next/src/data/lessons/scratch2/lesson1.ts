export const scratch2Lesson1 = [
    {
        title: "Lesson Overview",
        content: `
                    <h1 class="tutorial-title">Scratch 2 - Lesson 1: Pong Game (1 Player)</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Check out the final project below!</h3>
                        <iframe src="https://scratch.mit.edu/projects/10128515/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                        <p class="image-caption">Interactive Pong Game Preview</p>
                    </div>
                    <div class="content-box">
                        <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                        <p class="tutorial-text">
                            In this lesson, you'll create a classic 1-player Pong game using Scratch. You'll learn about sprite creation, user input, game physics, score tracking, and game state management.
                        </p>
                        <div class="highlight-box">
                            <h3 class="text-xl font-semibold mb-2">Game Overview:</h3>
                            <ul class="list-disc list-inside">
                                <li>Control a paddle on the left side of the screen using your mouse.</li>
                                <li>Keep the bouncing ball in play by hitting it with your paddle.</li>
                                <li>Score points for each successful hit.</li>
                                <li>The game ends if the ball passes your paddle.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="quiz-container">
                        <h3 class="text-xl font-semibold mb-2">Quick Quiz</h3>
                        <p class="quiz-question">What is the main goal of the player in our Pong game?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" id="q1a" name="q1" value="a">
                                <label for="q1a">To catch the ball with the paddle</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q1b" name="q1" value="b">
                                <label for="q1b">To keep the ball in play by bouncing it off the paddle</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q1c" name="q1" value="c">
                                <label for="q1c">To move the paddle as fast as possible</label>
                            </li>
                        </ul>
                        <button onclick="checkQuiz('q1', 'b')" class="mt-4 bg-primary text-white px-4 py-2 rounded">Check Answer</button>
                        <p id="q1-feedback" class="quiz-feedback"></p>
                    </div>
        `
    },
    {
        title: "Setting Up the Game",
        content: `
                    <h1 class="tutorial-title">1. Setting Up the Game</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Creating the Backdrop</h3>
                        <p class="tutorial-text">Let's set up our game's playing field by creating a simple backdrop.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Click on the "Stage" pane in the bottom-right corner.</p>
                            <p><span class="step-number">2</span> Click the "Backdrops" tab at the top of the middle pane.</p>
                            <p><span class="step-number">3</span> Choose "Paint" to create a new backdrop.</p>
                            <p><span class="step-number">4</span> Use the fill tool to color the entire backdrop with a dark color.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Tip:</strong> A dark backdrop helps the ball and paddle stand out, making the game easier to play.</p>
                        </div>
                    </div>

        `
    },
    {
        title: "Creating the Paddle",
        content: `
                    <h1 class="tutorial-title">2. Creating the Paddle</h1>
                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Interactive Paddle Demo</h3>
                        <p>Move your mouse up and down over this area to see how the paddle would move:</p>
                        <div id="paddleDemo" style="width: 300px; height: 400px; background-color: #000; position: relative;">
                            <div id="paddle" style="width: 20px; height: 100px; background-color: #fff; position: absolute; left: 20px;"></div>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Drawing the Paddle</h3>
                        <p class="tutorial-text">Now, let's create the player's paddle. In Pong, the paddle is usually a simple rectangle.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Click the "Choose a Sprite" button at the bottom of the Sprite list.</p>
                            <p><span class="step-number">2</span> Select "Paint" to create a new sprite.</p>
                            <p><span class="step-number">3</span> Use the Rectangle tool to draw a tall, thin rectangle.</p>
                            <p><span class="step-number">4</span> Color it white or any color that contrasts with your backdrop.</p>
                            <p><span class="step-number">5</span> Name your sprite "Paddle" in the sprite info pane.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Positioning the Paddle</h3>
                        <p class="tutorial-text">Let's position our paddle on the left side of the screen.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> In the Sprite info pane, set the x position to a negative number (like -200) to move it to the left.</p>
                            <p><span class="step-number">2</span> Set the y position to 0 to center it vertically.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 3: Moving the Paddle</h3>
                        <p class="tutorial-text">Now, let's make the paddle follow the mouse's vertical movement.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Go to the "Scripts" tab for your Paddle sprite.</p>
                            <p><span class="step-number">2</span> Drag out a "when green flag clicked" block.</p>
                            <p><span class="step-number">3</span> Attach a "forever" block underneath it.</p>
                            <p><span class="step-number">4</span> Inside the forever block, add a "go to x: [] y: []" block.</p>
                            <p><span class="step-number">5</span> Set the x value to your paddle's x position (like -200).</p>
                            <p><span class="step-number">6</span> For the y value, use the "mouse y" block.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Explanation:</strong> This script continuously updates the paddle's position to match the mouse's y-coordinate, creating smooth vertical movement.</p>
                        </div>
                    </div>

                    <div class="quiz-container">
                        <h3 class="text-xl font-semibold mb-2">Quick Quiz</h3>
                        <p class="quiz-question">Which Scratch block would you use to make the paddle follow the mouse continuously?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" id="q3a" name="q3" value="a">
                                <label for="q3a">When space key pressed</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q3b" name="q3" value="b">
                                <label for="q3b">Repeat 10 times</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q3c" name="q3" value="c">
                                <label for="q3c">Forever</label>
                            </li>
                        </ul>
                        <button onclick="checkQuiz('q3', 'c')" class="mt-4 bg-primary text-white px-4 py-2 rounded">Check Answer</button>
                        <p id="q3-feedback" class="quiz-feedback"></p>
                    </div>
        `
    },
    {
        title: "Adding the Ball",
        content: `
                    <h1 class="tutorial-title">3. Adding the Ball</h1>
                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Interactive Ball Movement Demo</h3>
                        <p>Click "Start" to see how the ball would move and bounce:</p>
                        <div id="ballDemo" style="width: 300px; height: 400px; background-color: #000; position: relative;">
                            <div id="ball" style="width: 20px; height: 20px; background-color: #fff; border-radius: 50%; position: absolute;"></div>
                        </div>
                        <button id="startBallDemo" class="mt-4 bg-primary text-white px-4 py-2 rounded">Start</button>
                        <button id="stopBallDemo" class="mt-4 bg-secondary text-white px-4 py-2 rounded">Stop</button>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Creating the Ball</h3>
                        <p class="tutorial-text">Let's create the ball that will bounce around our game.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Click the "Choose a Sprite" button and select "Paint".</p>
                            <p><span class="step-number">2</span> Use the Circle tool to draw a small circle.</p>
                            <p><span class="step-number">3</span> Color it white or any color that contrasts with the backdrop.</p>
                            <p><span class="step-number">4</span> Name your sprite "Ball" in the sprite info pane.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Making the Ball Move</h3>
                        <p class="tutorial-text">Now, let's make our ball move around the screen.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Go to the "Scripts" tab for your Ball sprite.</p>
                            <p><span class="step-number">2</span> Add a "when green flag clicked" block.</p>
                            <p><span class="step-number">3</span> Attach a "forever" block.</p>
                            <p><span class="step-number">4</span> Inside the forever block, add a "move 10 steps" block.</p>
                            <p><span class="step-number">5</span> Add an "if on edge, bounce" block after the move block.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Explanation:</strong> This script makes the ball move continuously and bounce off the edges of the screen.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 3: Ball and Paddle Interaction</h3>
                        <p class="tutorial-text">Let's make the ball bounce off the paddle.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Inside your forever loop, after the "if on edge, bounce" block, add an "if then" block.</p>
                            <p><span class="step-number">2</span> In the condition of the if block, add a "touching (Paddle)?" block.</p>
                            <p><span class="step-number">3</span> Inside the if block, add a "point in direction (pick random (-90) to (90))" block.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Explanation:</strong> This makes the ball change to a random direction between straight up and straight down whenever it touches the paddle, creating a bounce effect.</p>
                        </div>
                    </div>

                    <div class="quiz-container">
                        <h3 class="text-xl font-semibold mb-2">Quick Quiz</h3>
                        <p class="quiz-question">What Scratch block would you use to make the ball bounce off the edges of the screen?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" id="q4a" name="q4" value="a">
                                <label for="q4a">Move 10 steps</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q4b" name="q4" value="b">
                                <label for="q4b">If on edge, bounce</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q4c" name="q4" value="c">
                                <label for="q4c">Turn 15 degrees</label>
                            </li>
                        </ul>
                        <button onclick="checkQuiz('q4', 'b')" class="mt-4 bg-primary text-white px-4 py-2 rounded">Check Answer</button>
                        <p id="q4-feedback" class="quiz-feedback"></p>
                    </div>
        `
    },
    {
        title: "Scoring and Game Over",
        content: `
                    <h1 class="tutorial-title">4. Scoring and Game Over</h1>
                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Interactive Scoring Demo</h3>
                        <p>Click the ball to simulate scoring points:</p>
                        <div id="scoreDemo" style="width: 300px; height: 200px; background-color: #000; position: relative;">
                            <div id="scoreBall" style="width: 50px; height: 50px; background-color: #fff; border-radius: 50%; position: absolute; top: 75px; left: 125px; cursor: pointer;"></div>
                            <div id="scoreDisplay" style="position: absolute; top: 10px; left: 10px; color: #fff; font-size: 24px;">Score: 0</div>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Creating a Score Variable</h3>
                        <p class="tutorial-text">Let's add a scoring system to our game.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Go to the "Variables" section and click "Make a Variable".</p>
                            <p><span class="step-number">2</span> Name it "Score" and click OK.</p>
                            <p><span class="step-number">3</span> In the Ball sprite's script, add a "set Score to 0" block at the beginning of your script (after the green flag block).</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Increasing the Score</h3>
                        <p class="tutorial-text">We'll increase the score each time the ball hits the paddle.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> In the Ball sprite's script, find your "if touching (Paddle)" block.</p>
                            <p><span class="step-number">2</span> Inside this block, after the "point in direction" block, add a "change Score by 1" block.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Explanation:</strong> This increases the score by 1 every time the ball bounces off the paddle.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 3: Implementing Game Over</h3>
                        <p class="tutorial-text">Let's end the game when the ball passes the paddle.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> In the Ball sprite's script, add an "if then" block after your "if touching (Paddle)" block.</p>
                            <p><span class="step-number">2</span> In the condition, use a "&lt; [] &gt;" block and fill it with "x position" and "-240".</p>
                            <p><span class="step-number">3</span> Inside this if block, add a "broadcast (message1)" block and create a new message called "Game Over".</p>
                            <p><span class="step-number">4</span> Add a "stop all" block after the broadcast block.</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 4: Creating a Game Over Screen</h3>
                        <p class="tutorial-text">Let's create a game over message.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a new sprite and use the text tool to write "Game Over".</p>
                            <p><span class="step-number">2</span> In this new sprite's script tab, add a "when I receive (Game Over)" block.</p>
                            <p><span class="step-number">3</span> Attach a "show" block to make the message appear.</p>
                            <p><span class="step-number">4</span> At the start of your game (in a "when green flag clicked" script), add a "hide" block to ensure the message is hidden initially.</p>
                        </div>
                    </div>

                    <div class="quiz-container">
                        <h3 class="text-xl font-semibold mb-2">Quick Quiz</h3>
                        <p class="quiz-question">When should the "Game Over" message be displayed?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" id="q5a" name="q5" value="a">
                                <label for="q5a">When the ball hits the paddle</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q5b" name="q5" value="b">
                                <label for="q5b">When the score reaches 10</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" id="q5c" name="q5" value="c">
                                <label for="q5c">When the ball passes the paddle on the left side</label>
                            </li>
                        </ul>
                        <button onclick="checkQuiz('q5', 'c')" class="mt-4 bg-primary text-white px-4 py-2 rounded">Check Answer</button>
                        <p id="q5-feedback" class="quiz-feedback"></p>
                    </div>
        `
    },
    {
        title: "Mini-Project",
        content: `
                    <h1 class="tutorial-title">5. Mini-Project: Extend Your Pong Game</h1>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Challenge: Enhance Your Pong Game</h3>
                        <p class="tutorial-text">Now that you've created a basic Pong game, let's make it even better! Here are some ideas to extend your game:</p>
                        <ul class="list-disc list-inside mt-2">
                            <li>Add sound effects for when the ball hits the paddle or when the player scores.</li>
                            <li>Create a win condition by setting a score limit (e.g., first to 10 points wins).</li>
                            <li>Add a second paddle for a 2-player version of the game.</li>
                            <li>Increase the ball's speed as the game progresses to make it more challenging.</li>
                            <li>Add power-ups that occasionally appear and give special abilities when collected.</li>
                        </ul>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step-by-Step Guide: Adding Sound Effects</h3>
                        <p class="tutorial-text">Let's walk through adding a sound effect when the ball hits the paddle:</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Click on the "Sounds" tab in the Ball sprite.</p>
                            <p><span class="step-number">2</span> Click "Choose a Sound" and select a suitable sound effect (e.g., "Pop" or "Boing").</p>
                            <p><span class="step-number">3</span> Go back to the "Scripts" tab.</p>
                            <p><span class="step-number">4</span> In your "if touching (Paddle)" block, add a "play sound (your chosen sound)" block.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Tip:</strong> You can create your own sounds or import sounds from external sources for a unique game experience!</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Ideas for Further Enhancements</h3>
                        <ul class="list-disc list-inside mt-2">
                            <li>Create a start screen with instructions and a "Start Game" button.</li>
                            <li>Add different levels with increasing difficulty.</li>
                            <li>Implement a high score system that persists between games.</li>
                            <li>Create obstacles that appear randomly on the screen.</li>
                            <li>Add visual effects, like particle systems when the ball hits the paddle.</li>
                        </ul>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Share Your Creation!</h3>
                        <p class="tutorial-text">Once you've enhanced your Pong game, don't forget to share it with others! You can:</p>
                        <ul class="list-disc list-inside mt-2">
                            <li>Upload it to the Scratch community and share the link with your friends.</li>
                            <li>Record a video of your game in action and post it on social media.</li>
                            <li>Present your game and its features to your class or coding club.</li>
                        </ul>
                        <p class="mt-4">Remember, the key to becoming a great programmer is practice and creativity. Keep experimenting and building new things!</p>
                    </div>
        `
    }
];
