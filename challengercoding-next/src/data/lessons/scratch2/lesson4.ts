export const scratch2Lesson4 = [
    {
        title: "Lesson Overview",
        content: `
                    <h2 class="tutorial-title">Scratch 2 - Lesson: Rock Paper Scissors Game</h2>
                    <div class="content-box">
                        <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                        <p class="tutorial-text">
                            In this lesson, you'll create a classic Rock Paper Scissors game using Scratch. You'll learn about sprite creation, user input, game logic, score tracking, and game state management.
                        </p>
                        <div class="highlight-box">
                            <h3 class="text-xl font-semibold mb-2">Game Overview:</h3>
                            <ul class="list-disc list-inside">
                                <li>Create sprites for Rock, Paper, and Scissors</li>
                                <li>Implement game logic to determine the winner</li>
                                <li>Add a scoring system for the player and computer</li>
                                <li>Create an interactive interface for player choices</li>
                                <li>Display the game result after each round</li>
                            </ul>
                        </div>
                    </div>

`,
        quiz: [
            {
                question: 'What determines the winner in Rock Paper Scissors?',
                options: [
                    { label: 'The player who chooses Rock always wins', value: 'a' },
                    { label: 'It\'s completely random', value: 'b' },
                    { label: 'Each choice beats one other choice and loses to the third', value: 'c' },
                ],
                correctAnswer: 'c',
            },
        ]

    },
    {
        title: "Setting Up the Game",
        content: `
                    <h2 class="tutorial-title">1. Setting Up the Game</h2>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Creating the Backdrop</h3>
                        <p class="tutorial-text">Let's set up our game's playing field by creating a simple backdrop.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Click on the "Stage" pane in the bottom-right corner.</p>
                            <p><span class="step-number">2</span> Click the "Backdrops" tab at the top of the middle pane.</p>
                            <p><span class="step-number">3</span> Choose "Paint" to create a new backdrop.</p>
                            <p><span class="step-number">4</span> Use the fill tool to color the entire backdrop with a light color of your choice.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Tip:</strong> A light-colored backdrop helps the game elements stand out, making the game easier to play and understand.</p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Creating Sprites for Rock, Paper, and Scissors</h3>
                        <p class="tutorial-text">Now, let's create sprites for Rock, Paper, and Scissors.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Click the "Choose a Sprite" button at the bottom of the Sprite list.</p>
                            <p><span class="step-number">2</span> Select "Paint" to create a new sprite.</p>
                            <p><span class="step-number">3</span> Draw a simple representation of a rock (e.g., a circle or oval shape).</p>
                            <p><span class="step-number">4</span> Repeat steps 1-3 to create sprites for Paper and Scissors.</p>
                            <p><span class="step-number">5</span> Name your sprites "Rock", "Paper", and "Scissors" respectively in the sprite info pane.</p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Interactive Demo: Random Choice Generator</h3>
                        <p class="tutorial-text">Let's see how we can generate random choices for the computer player. This will be useful when we implement the game logic.</p>
                        <div class="interactive-demo">
                            <div id="random-choice"></div>
                            <div class="demo-controls">
                                <button class="demo-button">Generate Random Choice</button>
                            </div>
                        </div>
                        <p class="tutorial-text">This demo shows how we can randomly select between Rock, Paper, and Scissors. In Scratch, we'll use a similar concept with the "pick random" block.</p>
                    </div>
        `
    },
    {
        title: "Implementing Game Logic",
        content: `
                    <h2 class="tutorial-title">2. Implementing Game Logic</h2>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Creating Variables</h3>
                        <p class="tutorial-text">Let's create variables to keep track of the game state and scores.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Go to the "Variables" section and click "Make a Variable".</p>
                            <p><span class="step-number">2</span> Create the following variables:</p>
                            <ul class="list-disc list-inside ml-8">
                                <li>"Player Choice"</li>
                                <li>"Computer Choice"</li>
                                <li>"Player Score"</li>
                                <li>"Computer Score"</li>
                            </ul>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Implementing Player Choice</h3>
                        <p class="tutorial-text">Now, let's create a way for the player to make their choice.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> For each sprite (Rock, Paper, Scissors), add a "when this sprite clicked" block.</p>
                            <p><span class="step-number">2</span> Inside each block, add a "set [Player Choice] to [sprite name]" block.</p>
                            <p><span class="step-number">3</span> Add a "broadcast [Make Choice]" block after setting the player's choice.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Explanation:</strong> This allows the player to make their choice by clicking on the corresponding sprite, and then triggers the next part of the game logic.</p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 3: Implementing Computer Choice</h3>
                        <p class="tutorial-text">Let's create the logic for the computer's choice.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a new sprite called "Game Logic".</p>
                            <p><span class="step-number">2</span> Add a "when I receive [Make Choice]" block.</p>
                            <p><span class="step-number">3</span> Use a "set [Computer Choice] to (pick random (1) to (3))" block.</p>
                            <p><span class="step-number">4</span> Add an "if-then-else" block to convert the random number to "Rock", "Paper", or "Scissors".</p>
                        </div>
                    </div>
`,
        quiz: [
            {
                question: 'How can we ensure the computer\'s choice is random?',
                options: [
                    { label: 'Always choose Rock', value: 'a' },
                    { label: 'Use a "pick random" block', value: 'b' },
                    { label: 'Let the player choose for the computer', value: 'c' },
                ],
                correctAnswer: 'b',
            },
        ]

    },
    {
        title: "Determining the Winner",
        content: `
                    <h2 class="tutorial-title">3. Determining the Winner</h2>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Creating the Win Logic</h3>
                        <p class="tutorial-text">Let's implement the logic to determine the winner of each round.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> In the "Game Logic" sprite, add a new "when I receive [Make Choice]" block.</p>
                            <p><span class="step-number">2</span> Use "if-then-else" blocks to compare "Player Choice" and "Computer Choice".</p>
                            <p><span class="step-number">3</span> Implement the following logic:</p>
                            <ul class="list-disc list-inside ml-8">
                                <li>If choices are the same, it's a tie</li>
                                <li>Rock beats Scissors</li>
                                <li>Scissors beats Paper</li>
                                <li>Paper beats Rock</li>
                            </ul>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Updating Scores</h3>
                        <p class="tutorial-text">Now, let's update the scores based on the winner.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Inside each winning condition, add a "change [Player Score] by (1)" or "change [Computer Score] by (1)" block.</p>
                            <p><span class="step-number">2</span> For a tie, don't change any scores.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Tip:</strong> Consider adding sound effects or visual feedback to make winning or losing more engaging!</p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 3: Displaying the Result</h3>
                        <p class="tutorial-text">Let's show the player what happened in each round.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a new sprite called "Result Display".</p>
                            <p><span class="step-number">2</span> Add a "when I receive [Make Choice]" block.</p>
                            <p><span class="step-number">3</span> Use "say" blocks to display the choices and the result.</p>
                            <p><span class="step-number">4</span> Use "if-then-else" blocks to determine what message to display (Win, Lose, or Tie).</p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Interactive Demo: Rock Paper Scissors Game</h3>
                        <p class="tutorial-text">Try out this simple implementation of the Rock Paper Scissors game to see how the win logic works!</p>
                        <div class="interactive-demo">
                            <div id="game-result"></div>
                            <div class="demo-controls">
                                <button class="demo-button">Rock</button>
                                <button class="demo-button">Paper</button>
                                <button class="demo-button">Scissors</button>
                            </div>
                        </div>
                        <p class="tutorial-text">This demo shows how the game determines the winner based on the player's and computer's choices. In your Scratch project, you'll implement similar logic using if-then-else blocks.</p>
                    </div>
`,
        quiz: [
            {
                question: 'What happens if both the player and computer choose Rock?',
                options: [
                    { label: 'The player wins', value: 'a' },
                    { label: 'The computer wins', value: 'b' },
                    { label: 'It\'s a tie', value: 'c' },
                ],
                correctAnswer: 'c',
            },
        ]

    },
    {
        title: "Finishing Touches",
        content: `
                    <h2 class="tutorial-title">4. Finishing Touches</h2>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 1: Adding Instructions</h3>
                        <p class="tutorial-text">Let's add some instructions to help players understand how to play the game.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Create a new sprite called "Instructions".</p>
                            <p><span class="step-number">2</span> Use the text tool to write brief instructions on how to play.</p>
                            <p><span class="step-number">3</span> Position the instructions at the top or bottom of the stage.</p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 2: Adding Sound Effects</h3>
                        <p class="tutorial-text">Let's add some sound effects to make our game more engaging.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> Go to the "Sounds" tab in the "Game Logic" sprite.</p>
                            <p><span class="step-number">2</span> Add different sounds for winning, losing, and tying.</p>
                            <p><span class="step-number">3</span> In your game logic, use "play sound" blocks to play the appropriate sound after each round.</p>
                        </div>
                        <div class="highlight-box">
                            <p><strong>Tip:</strong> Choose sounds that match the mood of winning, losing, or tying to enhance the player's experience.</p>
                        </div>
                    </div>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Step 3: Adding a Game Over Condition</h3>
                        <p class="tutorial-text">Let's add a condition to end the game after a certain number of rounds or points.</p>
                        <div class="step-box">
                            <p><span class="step-number">1</span> In the "Game Logic" sprite, add an "if-then" block after updating the scores.</p>
                            <p><span class="step-number">2</span> Set a condition like "if (Player Score) > 5 or (Computer Score) > 5".</p>
                            <p><span class="step-number">3</span> If the condition is met, use a "broadcast" block to send a "Game Over" message.</p>
                            <p><span class="step-number">4</span> Create a new sprite for the Game Over screen and show it when it receives the "Game Over" message.</p>
                        </div>
                    </div>
`,
        quiz: [
            {
                question: 'What could you add to make the game more challenging or interesting?',
                options: [
                    { label: 'A timer for each choice', value: 'a' },
                    { label: 'More choices (like Rock, Paper, Scissors, Lizard, Spock)', value: 'b' },
                    { label: 'Both of the above', value: 'c' },
                ],
                correctAnswer: 'c',
            },
        ]

    },
    {
        title: "Homework Project",
        content: `
                    <h2 class="tutorial-title">5. Homework Project</h2>
                    <div class="content-box">
                        <h3 class="text-xl font-semibold mb-2">Create a "Rock Paper Scissors Lizard Spock" Game</h3>
                        <div class="homework-project">
                            <p class="tutorial-text">Extend your Rock Paper Scissors game to include two more options: Lizard and Spock. This game, popularized by the TV show "The Big Bang Theory," adds more complexity and fun to the original game.</p>
                            <h4 class="text-lg font-semibold mt-4 mb-2">Game Rules:</h4>
                            <ul class="list-disc list-inside ml-4">
                                <li>Scissors cuts Paper</li>
                                <li>Paper covers Rock</li>
                                <li>Rock crushes Lizard</li>
                                <li>Lizard poisons Spock</li>
                                <li>Spock smashes Scissors</li>
                                <li>Scissors decapitates Lizard</li>
                                <li>Lizard eats Paper</li>
                                <li>Paper disproves Spock</li>
                                <li>Spock vaporizes Rock</li>
                                <li>Rock crushes Scissors</li>
                            </ul>
                            <h4 class="text-lg font-semibold mt-4 mb-2">Project Steps:</h4>
                            <ol class="list-decimal list-inside ml-4">
                                <li>Create two new sprites for Lizard and Spock</li>
                                <li>Update the game logic to include the new choices</li>
                                <li>Modify the win condition checks to account for the new rules</li>
                                <li>Update the UI to allow players to select Lizard and Spock</li>
                                <li>Add new variables to track Lizard and Spock wins if needed</li>
                                <li>Create a visual guide explaining the expanded rules</li>
                            </ol>
                            <p class="tutorial-text mt-4">This project will help you practice more complex game logic and expand on the skills you've learned in the Rock Paper Scissors tutorial. Good luck and have fun!</p>
                        </div>
                    </div>
        `
    }
];
