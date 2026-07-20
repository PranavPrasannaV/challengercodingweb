export const scratchLesson3 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="tutorial-title">Lesson 3: Animations in Scratch</h1>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    In this lesson, we'll explore how to create animations in Scratch. You'll learn about costumes, 
                    switching between them, and how to time your animations to create smooth and interesting effects.
                </p>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Key Concepts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Costumes</h3>
                        <p>Different appearances or "outfits" that a sprite can wear.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Animation</h3>
                        <p>Creating the illusion of movement by rapidly switching between costumes.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Timing</h3>
                        <p>Controlling how fast or slow your animation plays by using wait blocks.</p>
                    </div>
                    <div class="highlight-box">
                        <h3 class="text-xl font-semibold mb-2">Loops</h3>
                        <p>Using repeat blocks to make animations play continuously.</p>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">Blocks We'll Use</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Looks Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Switch costume to [ ]</li>
                            <li>Next costume</li>
                        </ul>
                    </div>
                    <div class="step-box">
                        <h3 class="text-xl font-semibold mb-2">Control Blocks</h3>
                        <ul class="list-disc list-inside">
                            <li>Wait [ ] seconds</li>
                            <li>Repeat [ ]</li>
                            <li>Forever</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Understanding Costumes",
        content: `
            <h1 class="tutorial-title">Understanding Costumes</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    In Scratch, costumes are different appearances that a sprite can have. Think of them like 
                    outfits or poses for your character. By switching between costumes quickly, we can create 
                    the illusion of movement - this is the basis of animation in Scratch!
                </p>
                <div class="highlight-box">
                    <p><strong>Key Point:</strong> A single sprite can have multiple costumes, and we can switch between them to create animations.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Exploring Costumes</h3>
                <p class="tutorial-text">Let's explore costumes:</p>
                <div class="step-box">
                    <p><span class="step-number">1</span> Choose a sprite (like the cat) in your Scratch project.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Look for the "Costumes" tab at the top of the middle pane.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Click on it. You should see the different costumes your sprite has.</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Costume Viewer</h3>
                <div id="costume-demo">
                    <img src="/placeholder.svg?height=200&width=200" alt="Sprite Costume" id="costume-image">
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="changeCostume('costume1')">Costume 1</button>
                    <button class="demo-button" onclick="changeCostume('costume2')">Costume 2</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Now that you've seen how costumes work, think about how we might use them to create animations. 
                    In the next section, we'll learn how to switch between costumes programmatically!
                </p>
            </div>
        `
    },
    {
        title: "Switching Costumes",
        content: `
            <h1 class="tutorial-title">Switching Costumes</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    Now that we understand what costumes are, let's learn how to switch between them using Scratch blocks. 
                    This is the first step in creating our own animations!
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">The "Switch Costume" Block</h3>
                <p class="tutorial-text">
                    The main block we'll use for changing costumes is the "switch costume to [ ]" block. It looks like this:
                </p>
                <img src="/placeholder.svg?height=50&width=200" alt="Switch costume block in Scratch" class="image-block">
                <p class="image-caption">The "switch costume to" block in Scratch</p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Let's Try It Out</h3>
                <p class="tutorial-text">Follow these steps to switch costumes:</p>
                <div class="step-box">
                    <p><span class="step-number">1</span> Find the "switch costume to [ ]" block in the Looks category (it's purple).</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Drag it into the coding area.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Click on the dropdown in the block and select a costume.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Click on the block. What happens to your sprite?</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Costume Switcher</h3>
                <div id="costume-switch-demo">
                    <img src="/placeholder.svg?height=200&width=200" alt="Sprite Costume" id="switch-costume-image">
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="switchCostume('costume1')">Switch to Costume 1</button>
                    <button class="demo-button" onclick="switchCostume('costume2')">Switch to Costume 2</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Great job! You've just created your first costume change. In the next section, we'll learn 
                    how to time these changes to create smooth animations.
                </p>
            </div>
        `
    },
    {
        title: "Timing and Animation",
        content: `
            <h1 class="tutorial-title">Timing and Animation</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    Now that we can switch costumes, let's learn how to create smooth animations by controlling 
                    the timing of these switches.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">The "Wait" Block</h3>
                <p class="tutorial-text">
                    To control the timing of our animations, we'll use the "wait" block. It looks like this:
                </p>
                <img src="/placeholder.svg?height=50&width=200" alt="Wait block in Scratch" class="image-block">
                <p class="image-caption">The "wait" block in Scratch</p>
                <p class="tutorial-text">
                    This block pauses the script for a specified number of seconds before moving to the next block.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Creating a Simple Animation</h3>
                <p class="tutorial-text">Let's create a simple animation:</p>
                <div class="step-box">
                    <p><span class="step-number">1</span> Start with a "when green flag clicked" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add a "switch costume to [ ]" block and choose your first costume.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Add a "wait 0.5 seconds" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> Add another "switch costume to [ ]" block and choose your second costume.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Add another "wait 0.5 seconds" block.</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Simple Animation</h3>
                <div id="animation-demo">
                    <img src="/placeholder.svg?height=200&width=200" alt="Animated Sprite" id="animated-sprite">
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="startAnimation()">Start Animation</button>
                    <button class="demo-button" onclick="stopAnimation()">Stop Animation</button>
                </div>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Congratulations! You've created your first animation. Experiment with different wait times 
                    to see how it affects the speed of your animation. In the next section, we'll learn how to 
                    make our animations repeat continuously.
                </p>
            </div>
        `
    },
    {
        title: "Advanced Animations",
        content: `
            <h1 class="tutorial-title">Advanced Animations</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    Now that we've mastered the basics of animation in Scratch, let's explore some more advanced techniques 
                    to create smoother and more complex animations.
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Using Loops for Continuous Animation</h3>
                <p class="tutorial-text">
                    To make our animations repeat continuously, we can use loop blocks. The two main loop blocks we'll use are:
                </p>
                <ul class="list-disc list-inside mb-4">
                    <li>Repeat [ ] : This block repeats the enclosed blocks a specified number of times.</li>
                    <li>Forever : This block repeats the enclosed blocks indefinitely, until the script is stopped.</li>
                </ul>
                <img src="/placeholder.svg?height=100&width=200" alt="Loop blocks in Scratch" class="image-block">
                <p class="image-caption">Repeat and Forever blocks in Scratch</p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Creating a Looping Animation</h3>
                <p class="tutorial-text">Let's modify our previous animation to loop:</p>
                <div class="step-box">
                    <p><span class="step-number">1</span> Start with a "when green flag clicked" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add a "forever" block.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> Inside the forever block, add your "switch costume" and "wait" blocks from the previous exercise.</p>
                </div>
            </div>

            <div class="interactive-demo">
                <h3 class="text-xl font-semibold mb-2">Interactive Demo: Looping Animation</h3>
                <div id="looping-animation-demo">
                    <img src="/placeholder.svg?height=200&width=200" alt="Looping Animated Sprite" id="looping-animated-sprite">
                </div>
                <div class="demo-controls">
                    <button class="demo-button" onclick="startLoopingAnimation()">Start Animation</button>
                    <button class="demo-button" onclick="stopLoopingAnimation()">Stop Animation</button>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Advanced Tip: Using "Next Costume"</h3>
                <p class="tutorial-text">
                    Instead of manually switching to each costume, you can use the "next costume" block to automatically 
                    cycle through all available costumes. This is especially useful when you have many costumes!
                </p>
                <img src="/placeholder.svg?height=50&width=200" alt="Next costume block in Scratch" class="image-block">
                <p class="image-caption">The "next costume" block in Scratch</p>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Now that you've learned these advanced techniques, try creating more complex animations with 
                    multiple costumes and different timing patterns. In the next section, we'll put everything 
                    together in a mini-project!
                </p>
            </div>
        `
    },
    {
        title: "Mini-Project",
        content: `
            <h1 class="tutorial-title">Mini-Project: Animated Story Scene</h1>
            <div class="content-box">
                <p class="tutorial-text">
                    Let's put everything we've learned together to create an animated story scene in Scratch!
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">
                    Create a short animated scene with at least two sprites. One sprite should have a looping animation, 
                    while the other should change costumes in response to user input (like a mouse click).
                </p>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Step-by-Step Guide</h3>
                <div class="step-box">
                    <p><span class="step-number">1</span> Choose a backdrop for your scene.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">2</span> Add two sprites to your project. For example, you could have a tree and a character.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">3</span> For the first sprite (e.g., the tree), create a looping animation using multiple costumes. This could be leaves rustling in the wind.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">4</span> For the second sprite (e.g., the character), create different costumes representing different actions or emotions.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">5</span> Program the second sprite to change costumes when clicked.</p>
                </div>
                <div class="step-box">
                    <p><span class="step-number">6</span> Add some interactivity, like making the character say something when clicked.</p>
                </div>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Example Code Structure</h3>
                <p class="tutorial-text">Here's a basic structure for your project:</p>
                <pre class="code-block">
// For the continuously animating sprite (e.g., tree)
when green flag clicked
forever
    switch costume to [costume1]
    wait (0.5) seconds
    switch costume to [costume2]
    wait (0.5) seconds

// For the interactive sprite (e.g., character)
when this sprite clicked
switch costume to [next costume]
say [Hello!] for (2) seconds
                </pre>
            </div>

            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Challenge</h3>
                <p class="tutorial-text">
                    Can you add a third sprite with a different animation pattern? Maybe a cloud that moves across the screen, 
                    or a sun that rises and sets?
                </p>
            </div>

            <div class="content-box">
                <p class="tutorial-text">
                    Remember, creativity is key! Feel free to modify this project idea to create your own unique animated scene. 
                    Don't forget to share your project with your classmates when you're done!
                </p>
            </div>
        `
    }
];
