export interface Exercise {
    title: string;
    content: string;
}

export interface LessonData {
    exercises: Exercise[];
}

export const scratchLesson1: LessonData = {
    exercises: [
        {
            title: "Overview",
            content: `<h1 class="tutorial-title">Lesson 1 Overview</h1>
        <div class="content-box"><h2>What You'll Learn</h2><p class="tutorial-text">In this Scratch tutorial, you'll learn the basics of programming with Scratch.</p></div>
        <div class="content-box"><h2>Blocks Covered</h2>
        <div class="step-box"><h3>Motion Blocks</h3><ul><li>Move 10 steps</li><li>Turn 15 degrees</li><li>If on edge, bounce</li></ul></div>
        <div class="step-box"><h3>Control Blocks</h3><ul><li>When green flag clicked</li><li>Forever</li></ul></div></div>`,
        },
        {
            title: "1. Understanding Sprites",
            content: `<h1 class="tutorial-title">Understanding Sprites</h1>
        <div class="content-box"><p class="tutorial-text">In Scratch, sprites are the characters or objects that perform actions in your projects.</p>
        <div class="highlight-box"><p><strong>Definition:</strong> A sprite is any image that can move around and interact with other elements in your Scratch project.</p></div></div>
        <div class="content-box"><h3>Adding a New Sprite</h3>
        <div class="step-box"><p><span class="step-number">1</span> Look at the bottom right of the Scratch interface. Do you see a cat icon?</p></div>
        <div class="step-box"><p><span class="step-number">2</span> Click on the cat icon. What happens?</p></div>
        <div class="step-box"><p><span class="step-number">3</span> You should see a menu with different sprite options. Try selecting one!</p></div></div>`,
        },
        {
            title: "2. Moving Sprites",
            content: `<h1 class="tutorial-title">Moving Sprites</h1>
        <div class="content-box"><p class="tutorial-text">Now that we understand what sprites are, let's make them move! We can use motion blocks to control how our sprites move around the stage.</p>
        <img src="/movesteps.png" alt="Move block in Scratch" class="image-block" />
        <p class="tutorial-text">This block moves the sprite 10 steps in whatever direction it's facing.</p></div>
        <div class="content-box"><h3>Let's Try It Out</h3>
        <div class="step-box"><p><span class="step-number">1</span> Find the "move 10 steps" block in the Motion category (it's blue).</p></div>
        <div class="step-box"><p><span class="step-number">2</span> Drag it into the coding area.</p></div>
        <div class="step-box"><p><span class="step-number">3</span> Click on the block. What happens to your sprite?</p></div></div>`,
        },
        {
            title: "3. Changing Direction",
            content: `<h1 class="tutorial-title">Changing Sprite Direction</h1>
        <div class="content-box"><p class="tutorial-text">Moving in a straight line is fun, but what if we want our sprite to change direction?</p>
        <img src="/rotate.png" alt="Turn block in Scratch" class="image-block" />
        <p class="tutorial-text">This block rotates the sprite clockwise by 15 degrees.</p></div>`,
        },
        {
            title: "4. Using Loops",
            content: `<h1 class="tutorial-title">Using Loops</h1>
        <div class="content-box"><p class="tutorial-text">What if we want our sprite to keep moving indefinitely? This is where loops come in handy!</p>
        <img src="/forever.png" alt="Forever block in Scratch" class="image-block" />
        <p class="tutorial-text">The forever block repeats the blocks inside it... well, forever!</p></div>`,
        },
        {
            title: "5. Homework",
            content: `<h1 class="tutorial-title">Homework and Exercises</h1>
        <div class="grid-container">
        <div class="grid-item"><h3>Exercise 1: Race Two Sprites</h3><p>Program two sprites to race across the screen.</p></div>
        <div class="grid-item"><h3>Exercise 2: Dancing Cat</h3><p>Create a dance animation using movement and rotation blocks.</p></div>
        <div class="grid-item"><h3>Exercise 3: Treasure Hunt</h3><p>Create a backdrop with treasure marks and program your sprite to collect them.</p></div></div>`,
        },
    ],
};

export const scratchLesson2: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Week 2: XY Coordinate Plane</h1><div class="content-box"><p class="tutorial-text">Learn about the XY coordinate plane and how to position sprites precisely.</p></div>` },
        { title: "1. Understanding Coordinates", content: `<h1 class="tutorial-title">Understanding Coordinates</h1><div class="content-box"><p class="tutorial-text">The Scratch stage uses a coordinate system. The center is (0, 0).</p></div>` },
        { title: "2. Moving to Positions", content: `<h1 class="tutorial-title">Moving to Positions</h1><div class="content-box"><p class="tutorial-text">Use "go to x: y:" to move to exact positions.</p></div>` },
        { title: "3. Gliding", content: `<h1 class="tutorial-title">Gliding Motion</h1><div class="content-box"><p class="tutorial-text">The glide block creates smooth movement.</p></div>` },
        { title: "4. Homework", content: `<h1 class="tutorial-title">Homework</h1><div class="grid-item"><h3>Exercise</h3><p>Program your sprite to visit all four corners of the stage.</p></div>` },
    ],
};

export const scratchLesson3: LessonData = {
    exercises: [
        { title: "Overview", content: "<h1 class='tutorial-title'>Week 3: Animation Basics</h1><div class='content-box'><p class='tutorial-text'>Learn how to create animations using costumes and backdrops.</p></div>" },
        { title: "1. Costumes", content: "<h1 class='tutorial-title'>Using Costumes</h1><div class='content-box'><p class='tutorial-text'>Sprites can have multiple costumes to create animation effects.</p></div>" },
        { title: "2. Backdrops", content: "<h1 class='tutorial-title'>Changing Backdrops</h1><div class='content-box'><p class='tutorial-text'>Change the stage backdrop to create different scenes.</p></div>" },
    ],
};

export const scratchLesson4: LessonData = {
    exercises: [
        { title: "Overview", content: "<h1 class='tutorial-title'>Week 4: Loops</h1><div class='content-box'><p class='tutorial-text'>Deep dive into using loops for efficient programming.</p></div>" },
        { title: "1. Repeat Loops", content: "<h1 class='tutorial-title'>Repeat Loops</h1><div class='content-box'><p class='tutorial-text'>Use repeat blocks to run code a specific number of times.</p></div>" },
        { title: "2. Forever Loops", content: "<h1 class='tutorial-title'>Forever Loops</h1><div class='content-box'><p class='tutorial-text'>Forever loops run continuously until the program stops.</p></div>" },
    ],
};

export const scratchLesson5: LessonData = {
    exercises: [
        { title: "Overview", content: "<h1 class='tutorial-title'>Week 5: Conditionals</h1><div class='content-box'><p class='tutorial-text'>Learn about if statements and conditions.</p></div>" },
        { title: "1. If Statements", content: "<h1 class='tutorial-title'>If Statements</h1><div class='content-box'><p class='tutorial-text'>If statements check conditions before running code.</p></div>" },
        { title: "2. If-Else", content: "<h1 class='tutorial-title'>If-Else Statements</h1><div class='content-box'><p class='tutorial-text'>If-else provides two paths based on a condition.</p></div>" },
    ],
};

export const scratchLesson6: LessonData = {
    exercises: [
        { title: "Overview", content: "<h1 class='tutorial-title'>Week 6: Boolean Statements</h1><div class='content-box'><p class='tutorial-text'>Explore boolean operators and sensing.</p></div>" },
        { title: "1. Comparisons", content: "<h1 class='tutorial-title'>Comparison Operators</h1><div class='content-box'><p class='tutorial-text'>Learn about equal, greater than, and less than.</p></div>" },
        { title: "2. Boolean Operators", content: "<h1 class='tutorial-title'>And, Or, Not</h1><div class='content-box'><p class='tutorial-text'>Combine conditions with boolean operators.</p></div>" },
    ],
};

export const scratchLesson7: LessonData = {
    exercises: [
        { title: "Overview", content: "<h1 class='tutorial-title'>Week 7: Variables</h1><div class='content-box'><p class='tutorial-text'>Learn to use variables to store and manipulate data.</p></div>" },
        { title: "1. Creating Variables", content: "<h1 class='tutorial-title'>Creating Variables</h1><div class='content-box'><p class='tutorial-text'>Variables store values like scores, lives, or positions.</p></div>" },
        { title: "2. Using Variables", content: "<h1 class='tutorial-title'>Using Variables</h1><div class='content-box'><p class='tutorial-text'>Set and change variable values in your programs.</p></div>" },
    ],
};

export const scratchLesson8: LessonData = {
    exercises: [
        { title: "Overview", content: "<h1 class='tutorial-title'>Week 8: Broadcasting</h1><div class='content-box'><p class='tutorial-text'>Learn to communicate between sprites using broadcasts.</p></div>" },
        { title: "1. Sending Broadcasts", content: "<h1 class='tutorial-title'>Sending Broadcasts</h1><div class='content-box'><p class='tutorial-text'>Broadcasts send messages that other sprites can receive.</p></div>" },
        { title: "2. Receiving Broadcasts", content: "<h1 class='tutorial-title'>Receiving Broadcasts</h1><div class='content-box'><p class='tutorial-text'>Use the 'when I receive' block to respond to broadcasts.</p></div>" },
    ],
};

export const scratchLessons: { [key: number]: LessonData } = {
    1: scratchLesson1, 2: scratchLesson2, 3: scratchLesson3, 4: scratchLesson4,
    5: scratchLesson5, 6: scratchLesson6, 7: scratchLesson7, 8: scratchLesson8,
};
