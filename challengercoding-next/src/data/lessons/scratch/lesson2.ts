export const scratchLesson2 = [
    {
        title: "Lesson Overview and Review",
        content: `
            <h2 class="tutorial-title">Lesson 2 Overview Coordinate Planes and Sprite Movement</h2>
            <div class="content-box">
                <h2>Welcome to Your Scratch Adventure!</h2>
                <p class="tutorial-text">Today, we're going to learn how to make our Scratch sprites move around the stage like pros! We'll explore the magical world of coordinates and discover some cool new blocks that will bring our projects to life.</p>
                
                <div class="highlight-box">
                    <h3>In this lesson, you'll learn:</h3>
                    <ul>
                        <li>What a coordinate plane is and how it works in Scratch</li>
                        <li>How to move sprites to specific locations on the stage</li>
                        <li>The difference between "move" and "glide" blocks</li>
                        <li>How to create fun projects using these new skills</li>
                    </ul>
                </div>
            </div>

            <div class="content-box">
                <h3>New Scratch Blocks We'll Use Today:</h3>
                <div class="step-box">
                    <img src="/goto.png" alt="Go to X: _ Y: _" class="image-block">
                    <p>This block teleports your sprite to a specific spot on the stage.</p>
                </div>
                <div class="step-box">
                    <img src="/changex.png" alt="Change X by _" class="image-block">
                    <p>This block moves your sprite left or right.</p>
                </div>
                <div class="step-box">
                    <img src="/changey.png" alt="Change Y by _" class="image-block">
                    <p>This block moves your sprite up or down.</p>
                </div>
                <div class="step-box">
                    <img src="/glide.png" alt="Glide _ secs to X: _ Y: _" class="image-block">
                    <p>This block makes your sprite smoothly move to a specific spot.</p>
                </div>
                <div class="step-box">
                    <img src="/glide.png" alt="Glide _ secs to random position" class="image-block">
                    <p>This block makes your sprite glide to a surprise location!</p>
                </div>
            </div>
        `
    },
    {
        title: "Understanding the Coordinate Plane",
        content: `
            <h2 class="tutorial-title">1. Understanding the Coordinate Plane</h2>
            <div class="content-box">
                <p class="tutorial-text">Imagine the Scratch stage is like a big map, and we can tell our sprites exactly where to go on this map using two numbers. These numbers are called coordinates!</p>
                
                <div class="highlight-box">
                    <h3>Key Concepts:</h3>
                    <ul>
                        <li><strong>Coordinate Plane:</strong> The invisible grid on the Scratch stage.</li>
                        <li><strong>X-coordinate:</strong> Tells us how far left or right a sprite is.</li>
                        <li><strong>Y-coordinate:</strong> Tells us how far up or down a sprite is.</li>
                    </ul>
                </div>
                
                <p class="tutorial-text">Let's explore the Scratch stage:</p>
                <img src="/assets/scratch-stage-coordinates.svg" alt="The Scratch stage as a coordinate plane: x runs from -240 to 240, y from -180 to 180, and the center is (0, 0)." class="image-block" width="520" height="400">
                <p class="image-caption">The Scratch stage, with its coordinate plane drawn on top</p>
                
                <div class="step-box">
                    <p class="tutorial-text"><span class="step-number">1</span> The center of the stage is (0, 0).</p>
                    <p class="tutorial-text"><span class="step-number">2</span> Moving right increases the X value, moving left decreases it.</p>
                    <p class="tutorial-text"><span class="step-number">3</span> Moving up increases the Y value, moving down decreases it.</p>
                    <p class="tutorial-text"><span class="step-number">4</span> The stage goes from -240 to 240 in X, and -180 to 180 in Y.</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Let's Practice!</h3>
                <p class="tutorial-text">Try to guess where these coordinates would place a sprite:</p>
                <ul>
                    <li>(100, 50)</li>
                    <li>(-150, 100)</li>
                    <li>(0, -100)</li>
                </ul>
                <p class="tutorial-text">Now, open Scratch and use the "go to x: _ y: _" block to check your guesses!</p>
            </div>
        `
    },
    {
        title: "Moving Sprites with Coordinates",
        content: `
            <h2 class="tutorial-title">2. Moving Sprites with Coordinates</h2>
            <div class="content-box">
                <p class="tutorial-text">Now that we understand coordinates, let's make our sprites dance around the stage!</p>
                
                <div class="highlight-box">
                    <h3>We'll use these blocks:</h3>
                    <img src="/changex.png" alt="Change X by _" class="image-block">
                    <img src="/changey.png" alt="Change Y by _" class="image-block">
                </div>
                
                <div class="step-box">
                    <h4>Let's make a sprite move in a square:</h4>
                    <p class="tutorial-text"><span class="step-number">1</span> Drag out a "when green flag clicked" block to start your script.</p>
                    <p class="tutorial-text"><span class="step-number">2</span> Add a "change x by 100" block. This moves the sprite right.</p>
                    <p class="tutorial-text"><span class="step-number">3</span> Add a "wait 1 second" block to see the movement.</p>
                    <p class="tutorial-text"><span class="step-number">4</span> Now add "change y by 100" to move up.</p>
                    <p class="tutorial-text"><span class="step-number">5</span> Can you figure out how to complete the square?</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Challenge: Make a Triangle!</h3>
                <p class="tutorial-text">Using the "change x by" and "change y by" blocks, can you make your sprite move in a triangle shape? Remember, you might need to use negative numbers to move left or down!</p>
            </div>
        `
    },
    {
        title: 'Exploring "Move" and "Glide"',
        content: `
            <h2 class="tutorial-title">3. Exploring "Move" and "Glide"</h2>
            <div class="content-box">
                <p class="tutorial-text">We've seen how to teleport our sprites and move them step by step. Now, let's make their movements smooth and fancy!</p>
                
                <div class="highlight-box">
                    <h3>New Blocks:</h3>
                    <img src="/glide.png" alt="Glide _ secs to X: _ Y: _" class="image-block">
                    <img src="/glide.png" alt="Glide _ secs to random position" class="image-block">
                </div>
                
                <div class="step-box">
                    <h4>Let's make a sprite glide smoothly:</h4>
                    <p class="tutorial-text"><span class="step-number">1</span> Start with a "when green flag clicked" block.</p>
                    <p class="tutorial-text"><span class="step-number">2</span> Add a "glide 2 secs to x: 100 y: 100" block.</p>
                    <p class="tutorial-text"><span class="step-number">3</span> Now add "glide 2 secs to x: -100 y: -100".</p>
                    <p class="tutorial-text"><span class="step-number">4</span> Click the green flag and watch your sprite move!</p>
                </div>
            </div>

            <div class="content-box">
                <h3>Fun with Random Gliding</h3>
                <p class="tutorial-text">Let's make our sprite move to surprise locations:</p>
                <div class="step-box">
                    <p class="tutorial-text"><span class="step-number">1</span> Use a "forever" loop to repeat the action.</p>
                    <p class="tutorial-text"><span class="step-number">2</span> Inside the loop, add "glide 1 secs to random position".</p>
                    <p class="tutorial-text"><span class="step-number">3</span> Run your script and watch the sprite zoom around!</p>
                </div>
                <p class="tutorial-text">Try changing the glide time to make it faster or slower. What happens?</p>
            </div>
        `
    },
    {
        title: "Fun Projects and Homework",
        content: `
            <h2 class="tutorial-title">4. Fun Projects and Homework</h2>
            <div class="content-box">
                <p class="tutorial-text">Great job learning about coordinates and movement! Now, let's put your skills to the test with some fun projects.</p>
                
                <div class="highlight-box">
                    <h3>Project 1: Sprite Dance Party</h3>
                    <p class="tutorial-text">Create a dance floor with multiple sprites that move to different positions using the glide block. Make them change costumes for extra fun!</p>
                    <div class="step-box">
                        <p class="tutorial-text"><span class="step-number">1</span> Add at least 3 different sprites to your stage.</p>
                        <p class="tutorial-text"><span class="step-number">2</span> Use "glide" blocks to make each sprite move to different positions.</p>
                        <p class="tutorial-text"><span class="step-number">3</span> Add "switch costume" blocks to make them change appearance.</p>
                        <p class="tutorial-text"><span class="step-number">4</span> Use a "forever" loop to keep the party going!</p>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h3>Project 2: Coordinate Catcher Game</h3>
                    <p class="tutorial-text">Create a simple game where a sprite tries to catch another sprite that keeps moving to random positions.</p>
                    <div class="step-box">
                        <p class="tutorial-text"><span class="step-number">1</span> Create a "catcher" sprite that follows your mouse pointer.</p>
                        <p class="tutorial-text"><span class="step-number">2</span> Create a "target" sprite that glides to random positions.</p>
                        <p class="tutorial-text"><span class="step-number">3</span> Use the "touching" block to detect when the catcher catches the target.</p>
                        <p class="tutorial-text"><span class="step-number">4</span> Add a score variable that increases each time you catch the target.</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h3>Homework Challenge: Maze Explorer</h3>
                <p class="tutorial-text">Create a maze on the Scratch stage and program a sprite to navigate through it using the arrow keys.</p>
                <div class="step-box">
                    <p class="tutorial-text"><span class="step-number">1</span> Draw a maze backdrop or use one from the Scratch library.</p>
                    <p class="tutorial-text"><span class="step-number">2</span> Create a sprite that will explore the maze.</p>
                    <p class="tutorial-text"><span class="step-number">3</span> Use "if" blocks with "key pressed" conditions to move the sprite.</p>
                    <p class="tutorial-text"><span class="step-number">4</span> Use the "touching color" block to detect if the sprite hits a wall.</p>
                    <p class="tutorial-text"><span class="step-number">5</span> Add a starting point and a finish line to your maze.</p>
                </div>
                <p class="tutorial-text">Remember to test your maze and make sure it's possible to complete!</p>
            </div>

            <div class="content-box">
                <h3>Extra Credit: Coordinate Art</h3>
                <p class="tutorial-text">Create a drawing by programming your sprite to move to specific coordinates. Try to draw a simple picture or write your name!</p>
                <div class="step-box">
                    <p class="tutorial-text"><span class="step-number">1</span> Use the "pen down" block to start drawing.</p>
                    <p class="tutorial-text"><span class="step-number">2</span> Use "go to x: _ y: _" blocks to move your sprite.</p>
                    <p class="tutorial-text"><span class="step-number">3</span> Experiment with different colors and pen sizes.</p>
                </div>
                <p class="tutorial-text">Share your coordinate art with the class next time!</p>
            </div>
        `
    }
];
