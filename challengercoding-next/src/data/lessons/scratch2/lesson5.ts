export const scratch2Lesson5 = [
    {
        title: "Lesson Overview",
        content: `
                    <h2 class="tutorial-title">Scratch 2 Class - Guided Exercise</h2>
                    <h2 class="text-2xl font-semibold mb-4">Lesson 5: Flappy Bird - Foundational Components</h2>
                    <div class="content-box">
                        <p class="tutorial-text">
                            Welcome to Lesson 5 of our Scratch 2 class! Today, we're going to explore the foundational components needed to create a Flappy Bird-style game. This exciting project will help you understand key game development concepts while having fun!
                        </p>
                        <p class="tutorial-text">
                            In this lesson, you will learn:
                        </p>
                        <ul class="list-disc list-inside mt-2">
                            <li><strong>Gravity and Flapping Mechanics:</strong> How to make a character fall and rise realistically.</li>
                            <li><strong>Scrolling Backgrounds:</strong> Creating an illusion of movement using clones.</li>
                            <li><strong>Scoring System:</strong> Implementing a way to keep track of the player's progress.</li>
                        </ul>
                        <div class="highlight-box">
                            <p><strong>Note:</strong> We'll be building the core mechanics of the game in this lesson. In future lessons, we'll expand on these concepts to create a complete Flappy Bird clone!</p>
                        </div>
                    </div>

                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">What You'll Create</h3>
                        <p class="tutorial-text">
                            By the end of this lesson, you'll have created:
                        </p>
                        <ul class="list-disc list-inside mt-2">
                            <li>A bird character that responds to gravity and can flap its wings.</li>
                            <li>A continuously scrolling background.</li>
                            <li>A basic scoring system.</li>
                        </ul>
                        <p class="tutorial-text">
                            These components will form the foundation of your Flappy Bird game. In the next lesson, we'll add obstacles and refine the gameplay!
                        </p>
                    </div>
        `
    },
    {
        title: "Flapping - Gravity and Costume",
        content: `
                    <h2 class="tutorial-title">Exercise 1: Flapping - Gravity and Costume Change</h2>
                    <div class="content-box">
                        <p class="tutorial-text">
                            In this exercise, we'll create the core mechanic of our Flappy Bird game: the bird's movement. We'll implement gravity to make the bird fall, add a flap mechanism to make it rise, and change its costume to simulate wing movement.
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Step 1: Implementing Gravity</h3>
                        <p class="tutorial-text">
                            First, let's make our bird fall due to gravity. In Scratch, we can simulate gravity by constantly changing the bird's y-position.
                        </p>

                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a new sprite for your bird. You can draw it or choose one from the Scratch library.</p>
                            <p><span class="step-number">2</span> Create a new variable called "Gravity" for all sprites.</p>
                            <p><span class="step-number">3</span> Add the following script to your bird sprite:</p>
                        </div>

                        <div class="highlight-box">
                            <pre><code>
when green flag clicked
set [Gravity v] to -1
forever
    change y by (Gravity)
    change [Gravity v] by -0.1
    if &lt;(Gravity) < [-5]> then
        set [Gravity v] to [-5]
    end
end
                            </code></pre>
                        </div>

                        <p class="tutorial-text">
                            This script makes the bird fall faster over time, simulating acceleration due to gravity. The bird's fall speed is limited to prevent it from moving too quickly.
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Step 2: Flapping to Rise</h3>
                        <p class="tutorial-text">
                            Now, let's add the ability for the bird to flap and rise when the player presses the spacebar.
                        </p>

                        <div class="step-box">
                            <p><span class="step-number">1</span> Add a new script to your bird sprite:</p>
                        </div>

                        <div class="highlight-box">
                            <pre><code>
when [space v] key pressed
set [Gravity v] to [6]
                            </code></pre>
                        </div>

                        <p class="tutorial-text">
                            This script sets the Gravity to a positive value when the spacebar is pressed, causing the bird to rise. The continuous gravity script will then gradually bring the bird back down.
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Step 3: Changing Costume for Wing Movement</h3>
                        <p class="tutorial-text">
                            To make our bird look more dynamic, let's change its costume when it flaps.
                        </p>

                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a second costume for your bird with its wings in a different position.</p>
                            <p><span class="step-number">2</span> Modify your spacebar script to include costume changes:</p>
                        </div>

                        <div class="highlight-box">
                            <pre><code>
when [space v] key pressed
set [Gravity v] to [6]
switch costume to [wings-up v]
wait (0.1) seconds
switch costume to [wings-down v]
                            </code></pre>
                        </div>

                        <p class="tutorial-text">
                            This script changes the bird's costume briefly when the spacebar is pressed, creating a flapping animation.
                        </p>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Flappy Bird Gravity and Flap Demo</h3>
                        <canvas id="flappyDemo" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button">Flap (Spacebar)</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Scrolling Backdrop (Intro)",
        content: `
                    <h2 class="tutorial-title">Exercise 2: Introduction to Scrolling Backdrops</h2>
                    <div class="content-box">
                        <p class="tutorial-text">
                            In Flappy Bird, the background appears to scroll while the bird stays mostly in place. This creates an illusion of movement and makes the game more engaging. Let's explore how we can achieve this effect in Scratch!
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Understanding Scrolling Backgrounds</h3>
                        <p class="tutorial-text">
                            A scrolling background is created by moving multiple copies of the same image across the screen. When one copy moves off-screen, another takes its place, creating a seamless, continuous movement.
                        </p>

                        <div class="highlight-box">
                            <p><strong>Key Concept:</strong> In Scratch, we can use clones to create multiple copies of a background element. By moving these clones across the screen and creating new ones as needed, we can create a scrolling effect.</p>
                        </div>

                        <p class="tutorial-text">
                            In the next exercise, we'll implement this scrolling backdrop technique in Scratch!
                        </p>
                    </div>
        `
    },
    {
        title: "Implementing a Scrolling Backdrop",
        content: `
                <h2 class="tutorial-title">Exercise 3: Implementing a Scrolling Backdrop with Clones</h2>
                    <div class="content-box">
                        <p class="tutorial-text">
                            Now that we understand the concept of scrolling backgrounds, let's implement one in Scratch using clones. This technique will create the illusion of continuous movement in our Flappy Bird game.
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Step 1: Creating the Background Sprite</h3>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a new sprite that will serve as your scrolling background element. This could be a cloud, a building, or any other object that fits your game's theme.</p>
                            <p><span class="step-number">2</span> Size your sprite appropriately. It should be tall enough to cover the height of the stage and wide enough to create a seamless scroll effect.</p>
                        </div>

                        <h3 class="text-xl font-semibold mb-2">Step 2: Setting Up Cloning</h3>
                        <p class="tutorial-text">
                            We'll use cloning to create multiple copies of our background sprite. This allows us to have a continuous stream of background elements moving across the screen.
                        </p>

                        <div class="step-box">
                            <p><span class="step-number">1</span> Add the following script to your background sprite:</p>
                        </div>

                        <div class="highlight-box">
                            <pre><code>
when green flag clicked
hide
go to x: (240) y: (0)
forever
    create clone of [myself v]
    wait (2) seconds
end
                            </code></pre>
                        </div>

                        <p class="tutorial-text">
                            This script hides the original sprite, positions it at the right edge of the stage, and creates a new clone every 2 seconds.
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Step 3: Moving the Clones</h3>
                        <p class="tutorial-text">
                            Now, let's make each clone move across the screen from right to left.
                        </p>

                        <div class="step-box">
                            <p><span class="step-number">1</span> Add another script to the same sprite:</p>
                        </div>

                        <div class="highlight-box">
                            <pre><code>
when I start as a clone
show
forever
    change x by (-3)
    if &lt;(x position) < [-240]> then
        delete this clone
    end
end
                            </code></pre>
                        </div>

                        <p class="tutorial-text">
                            This script makes each clone visible, moves it to the left, and deletes it when it goes off the left edge of the stage.
                        </p>

                        <div class="highlight-box">
                            <p><strong>Tip:</strong> Adjust the x position change and wait time between clone creation to fine-tune the scrolling speed and density of your background elements.</p>
                        </div>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Scrolling Backdrop Demo</h3>
                        <canvas id="scrollingDemo" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button">Start Scrolling</button>
                            <button class="demo-button">Stop Scrolling</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Scoring Mechanism",
        content: `
                    <h2 class="tutorial-title">Exercise 4: Implementing a Scoring Mechanism</h2>
                    <div class="content-box">
                        <p class="tutorial-text">
                            A key element of any game is the scoring system. In Flappy Bird, the player earns points by successfully navigating through obstacles. Let's implement a basic scoring mechanism for our game.
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Step 1: Creating a Score Variable</h3>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a new variable called "Score" for all sprites.</p>
                            <p><span class="step-number">2</span> In the Variables section, check the box next to "Score" to display it on the stage.</p>
                        </div>

                        <h3 class="text-xl font-semibold mb-2">Step 2: Initializing the Score</h3>
                        <p class="tutorial-text">
                            We need to set the score to 0 when the game starts.
                        </p>

                        <div class="step-box">
                            <p><span class="step-number">1</span> Add the following script to your bird sprite:</p>
                        </div>

                        <div class="highlight-box">
                            <pre><code>
when green flag clicked
set [Score v] to (0)
                            </code></pre>
                        </div>

                        <h3 class="text-xl font-semibold mb-2">Step 3: Increasing the Score</h3>
                        <p class="tutorial-text">
                            In a full Flappy Bird game, we would increase the score when the bird passes through a gap between pipes. For now, let's simulate this by increasing the score every second the bird stays alive.
                        </p>

                        <div class="step-box">
                            <p><span class="step-number">1</span> Add another script to your bird sprite:</p>
                        </div>

                        <div class="highlight-box">
                            <pre><code>
when green flag clicked
forever
    wait (1) seconds
    change [Score v] by (1)
end
                            </code></pre>
                        </div>

                        <p class="tutorial-text">
                            This script increases the score by 1 every second. In a later lesson, we'll modify this to increase the score when passing obstacles.
                        </p>

                        <div class="highlight-box">
                            <p><strong>Challenge:</strong> Can you think of a way to make the game harder as the score increases? (Hint: You could increase the gravity or decrease the time between score increases!)</p>
                        </div>
                    </div>

                    <div class="interactive-demo">
                        <h3 class="text-xl font-semibold mb-2">Scoring Demo</h3>
                        <canvas id="scoringDemo" width="400" height="300"></canvas>
                        <div class="demo-controls">
                            <button class="demo-button">Increase Score</button>
                        </div>
                    </div>
        `
    },
    {
        title: "Homework",
        content: `
                    <h2 class="tutorial-title">Homework: Create Your Flappy Bird Game!</h2>
                    <div class="content-box">
                        <p class="tutorial-text">
                            Great job on completing the lesson! Now it's time to put everything together and create your own version of Flappy Bird. Here's your homework assignment:
                        </p>

                        <h3 class="text-xl font-semibold mb-2">Task: Build Your Flappy Bird Game</h3>
                        <p class="tutorial-text">
                            Using the concepts we've learned today, create a basic Flappy Bird game. Your game should include:
                        </p>

                        <ul class="list-disc list-inside mt-2">
                            <li>A bird character that responds to gravity and can flap its wings when the spacebar is pressed.</li>
                            <li>A scrolling background using the cloning technique we learned.</li>
                            <li>A scoring system that increases over time or when certain conditions are met.</li>
                        </ul>

                        <div class="highlight-box">
                            <p><strong>Bonus Challenges:</strong></p>
                            <ul class="list-disc list-inside mt-2">
                                <li>Add sound effects for flapping and scoring.</li>
                                <li>Create a "Game Over" condition (e.g., when the bird touches the ground).</li>
                                <li>Add a start screen with instructions.</li>
                                <li>Implement a high score system that saves the best score between games.</li>
                            </ul>
                        </div>

                        <h3 class="text-xl font-semibold mb-2 mt-4">Submission</h3>
                        <p class="tutorial-text">
                            When you've completed your game:
                        </p>
                        <ol class="list-decimal list-inside mt-2">
                            <li>Save your project in Scratch.</li>
                            <li>Share your project and copy the project URL.</li>
                            <li>Submit the URL to your instructor or post it in our class forum.</li>
                        </ol>

                        <p class="tutorial-text mt-4">
                            Remember, creativity is encouraged! Feel free to add your own unique elements to the game. Have fun, and don't hesitate to ask for help if you get stuck!
                        </p>
                    </div>
        `
    }
];
