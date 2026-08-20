export const scratchLesson8 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="tutorial-title">Lesson 8: Events and Broadcasting in Scratch</h2>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    In this lesson, we'll explore events and broadcasting in Scratch. You'll learn how to create 
                    interactive projects that respond to user actions and how different parts of your project can 
                    communicate with each other.
                </p>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Key Concepts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Events</h3>
                        <p>Actions or occurrences detected by the program, such as a key press or a mouse click.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Broadcasting</h3>
                        <p>A way for sprites to communicate with each other by sending and receiving messages.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Event Listeners</h3>
                        <p>Blocks that wait for a specific event to occur before running the attached code.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Message Passing</h3>
                        <p>The process of sending messages between different parts of a program.</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Blocks We'll Use</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Event Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>When Green Flag clicked</li>
                            <li>When this sprite clicked</li>
                            <li>When [key] key pressed</li>
                            <li>When backdrop switches to [backdrop]</li>
                        </ul>
                    </div>
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Broadcasting Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Broadcast [message]</li>
                            <li>Broadcast [message] and wait</li>
                            <li>When I receive [message]</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Understanding Events",
        content: `
            <h2 class="tutorial-title">Understanding Events</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Events in Scratch are like triggers that start a sequence of actions. They allow your project 
                    to respond to user interactions or changes in the program's state.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Common Event Blocks</h3>
                <ul class="list-disc list-inside mb-4">
                    <li>When Green Flag clicked: Starts the script when the green flag is clicked.</li>
                    <li>When this sprite clicked: Runs the script when the sprite is clicked.</li>
                    <li>When [key] key pressed: Executes the code when a specific key is pressed.</li>
                    <li>When backdrop switches to [backdrop]: Triggers when the backdrop changes.</li>
                </ul>
                <div class="grid grid-cols-3 gap-2 mb-4">
                    <div>
                        <img src="/clicksprite.png" alt="When sprite clicked block in Scratch" class="image-block">
                        <p class="image-caption">When Sprite Clicked</p>
                    </div>
                    <div>
                        <img src="/keypress.png" alt="When key pressed block in Scratch" class="image-block">
                        <p class="image-caption">When Key Pressed</p>
                    </div>
                    <div>
                        <img src="/backdropchange.png" alt="When backdrop switches block in Scratch" class="image-block">
                        <p class="image-caption">When Backdrop Switches</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using Event Blocks</h3>
                <p class="tutorial-text">
                    To use an event block, simply drag it into the script area and attach the code you want to run 
                    when that event occurs. For example:
                </p>
                <pre class="code-block">
when green flag clicked
say [Hello, World!] for (2) seconds
                </pre>
                <p class="tutorial-text">
                    This script will make the sprite say "Hello, World!" for 2 seconds when the green flag is clicked.
                </p>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Event Triggers</h3>
                <div id="event-demo">
                    <canvas id="event-canvas" width="400" height="300"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Green Flag</button>
                    <button class="demo-button">Click Sprite</button>
                    <button class="demo-button">Press Space</button>
                    <button class="demo-button">Change Backdrop</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In this demo, you can see how different events trigger different actions. Click the buttons 
                    to simulate various events and observe how the sprite responds.
                </p>
            </div>
        `
    },
    {
        title: "Broadcasting",
        content: `
            <h2 class="tutorial-title">Broadcasting</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Broadcasting in Scratch is a way for sprites to communicate with each other. It's like sending 
                    a message that other sprites can listen for and respond to.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Broadcasting Blocks</h3>
                <ul class="list-disc list-inside mb-4">
                    <li>Broadcast [message]: Sends a message to all sprites.</li>
                    <li>Broadcast [message] and wait: Sends a message and waits for all receivers to finish their scripts.</li>
                    <li>When I receive [message]: Starts a script when a specific message is received.</li>
                </ul>
                <div class="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <img src="/broadcast.png" alt="Broadcast block in Scratch" class="image-block">
                        <p class="image-caption">Broadcast</p>
                    </div>
                    <div>
                        <img src="/receive.png" alt="When I receive block in Scratch" class="image-block">
                        <p class="image-caption">When I Receive</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using Broadcasting</h3>
                <p class="tutorial-text">
                    To use broadcasting:
                </p>
                <ol class="list-decimal list-inside mb-4">
                    <li>Use a "Broadcast [message]" block to send a message.</li>
                    <li>In the receiving sprite, use a "When I receive [message]" block to listen for the message.</li>
                    <li>Attach the code you want to run when the message is received.</li>
                </ol>
                <pre class="code-block">
// In the sending sprite
when green flag clicked
broadcast [start game]

// In the receiving sprite
when I receive [start game]
say [Let's play!] for (2) seconds
                </pre>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Broadcasting</h3>
                <div id="broadcast-demo">
                    <canvas id="broadcast-canvas" width="400" height="300"></canvas>
                </div>
                <div class="demo-controls">
                    <button class="demo-button">Start Game</button>
                    <button class="demo-button">Jump</button>
                    <button class="demo-button">End Game</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    In this demo, you can see how broadcasting works. Click the buttons to broadcast different 
                    messages and observe how the sprites respond to each message.
                </p>
            </div>
        `
    },
    {
        title: "Guided Exercise",
        content: `
            <h2 class="tutorial-title">Guided Exercise: Creating a Simple Interactive Story</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    In this exercise, we'll create a simple interactive story using events and broadcasting. 
                    The story will have multiple scenes, and the user can interact with elements to progress through the story.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 1: Setting Up the Project</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a new Scratch project.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Create three backdrops for different scenes in your story.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Add a main character sprite and any other necessary sprites for your story.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 2: Programming the Story Flow</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Use the "When Green Flag clicked" event to start your story:</p>
                </div>
                <pre class="code-block">
when green flag clicked
switch backdrop to [Scene1 v]
say [Welcome to our story!] for (2) seconds
broadcast [start scene1]
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 3: Creating Interactive Elements</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Add clickable sprites that progress the story. For example:</p>
                </div>
                <pre class="code-block">
when this sprite clicked
broadcast [next scene]
hide
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step 4: Programming Scene Transitions</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Use broadcasting to trigger scene changes:</p>
                </div>
                <pre class="code-block">
when I receive [next scene]
switch backdrop to [Scene2 v]
show
say [You've entered a new area!] for (2) seconds
                </pre>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    By following these steps, you can create a simple interactive story that uses events to 
                    handle user interactions and broadcasting to manage scene transitions. Experiment with 
                    different events and messages to create a more complex and engaging story!
                </p>
            </div>
        `
    },
    {
        title: "Mini-Project",
        content: `
            <h2 class="tutorial-title">Mini-Project: Create an Interactive Quiz Game</h2>
            <div class="content-box">
                <p class="tutorial-text">
                    Now it's your turn to create a project using what you've learned about events and broadcasting. 
                    You'll be creating an interactive quiz game that uses events to handle user input and broadcasting 
                    to manage the game flow.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">
                    Create a Scratch project that presents the player with a series of multiple-choice questions. 
                    Use events to handle user selections and broadcasting to manage the flow between questions.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step-by-Step Guide</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Create a sprite for each answer choice (A, B, C, D).</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Create a sprite to display the question text.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Use the "When Green Flag clicked" event to start the game and display the first question.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Use "When this sprite clicked" events for each answer choice to handle user selection.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Broadcast messages to move to the next question or end the game.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">6</span> Keep track of the score and display it at the end of the quiz.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example Code Structure</h3>
                <pre class="code-block">
// In the question display sprite
when green flag clicked
set [question number v] to (1)
broadcast [show question]

when I receive [show question]
switch costume to (question (question number))
broadcast [show answers]

// In an answer choice sprite (repeat for each choice)
when I receive [show answers]
show
go to x: (-120) y: (0)

when this sprite clicked
if &lt;(costume name) = (answer (question number))&gt; then
    change [score v] by (1)
    say [Correct!] for (2) seconds
else
    say [Incorrect] for (2) seconds
end
broadcast [next question]

// In the game control sprite
when I receive [next question]
change [question number v] by (1)
if &lt;(question number) &gt; (5)&gt; then
    broadcast [end game]
else
    broadcast [show question]
end

when I receive [end game]
say (join [Quiz complete! Your score: ] (score)) for (5) seconds
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Challenge</h3>
                <p class="tutorial-text">
                    Can you add a timer to each question using events? Use the "when I receive [show question]" 
                    event to start a countdown, and broadcast a "time's up" message if the player doesn't answer in time.
                </p>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    This project will help you practice using events and broadcasting in a practical application. 
                    Feel free to add your own creative elements to make the quiz more engaging and interactive!
                </p>
            </div>
        `
    }
];
