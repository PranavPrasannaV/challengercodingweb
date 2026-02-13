
export const scratchLesson1 = [
    {
        title: "Overview",
        content: `
          <h1 class="tutorial-title text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Lesson 1 Overview</h1>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  In this Scratch tutorial, you'll learn the basics of programming with Scratch.
              </p>
          </div>

          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800">Blocks Covered</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">Motion Blocks</h3>
                      <ul class="list-disc list-inside text-gray-700">
                          <li>Move 10 steps</li>
                          <li>Turn 15 degrees</li>
                          <li>If on edge, bounce</li>
                      </ul>
                  </div>
                  <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">Control Blocks</h3>
                      <ul class="list-disc list-inside text-gray-700">
                          <li>When green flag clicked</li>
                          <li>Forever</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800">Definitions</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="highlight-box bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">Sprite</h3>
                      <p class="text-gray-700">A character or object in Scratch that can be programmed to perform actions.</p>
                  </div>
                  <div class="highlight-box bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">Motion</h3>
                      <p class="text-gray-700">The movement of sprites on the Scratch stage, controlled by motion blocks.</p>
                  </div>
                  <div class="highlight-box bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">Loop</h3>
                      <p class="text-gray-700">A programming construct that repeats a set of instructions multiple times.</p>
                  </div>
                  <div class="highlight-box bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h3 class="text-xl font-semibold mb-2 text-gray-800">Event</h3>
                      <p class="text-gray-700">A trigger that starts a script, such as clicking the green flag or a sprite.</p>
                  </div>
              </div>
          </div>
      `
    },
    {
        title: "Understanding Sprites",
        content: `
          <h1 class="tutorial-title text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Understanding Sprites</h1>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  In Scratch, sprites are the characters or objects that perform actions in your projects. They're a fundamental part of any Scratch program. But what exactly is a sprite?
              </p>
              <div class="highlight-box bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                  <p class="text-gray-700"><strong>Definition:</strong> A sprite is any image that can move around and interact with other elements in your Scratch project. It could be a character, an object, or even just a simple shape.</p>
              </div>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  The default sprite in Scratch is the cat, but you can create or choose many different sprites.
              </p>
          </div>

          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Adding a New Sprite</h3>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">Here's how you can add a new sprite:</p>
              <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                   <p class="text-gray-700">Look at the bottom right of the Scratch interface. Do you see a cat icon?</p>
              </div>
              <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                   <p class="text-gray-700">Click on the cat icon. What happens?</p>
              </div>
              <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                   <p class="text-gray-700">You should see a menu with different sprite options. Try selecting one!</p>
              </div>
          </div>

          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Now that you've added a new sprite, take a moment to explore. Can you find where your new sprite appears in the Scratch interface? How many sprites can you add to your project?
              </p>
              
              <p class="image-caption text-center italic text-gray-500 mt-2">Figure 1: Adding a new sprite in Scratch</p>
          </div>

          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Remember, each sprite can have its own set of instructions (or "scripts") that tell it how to behave. In the next exercises, we'll learn how to make our sprites move and interact!
              </p>
          </div>
      `
    },
    {
        title: "Moving Sprites",
        content: `
          <h1 class="tutorial-title text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Moving Sprites</h1>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Now that we understand what sprites are, let's make them move! In Scratch, we can use motion blocks to control how our sprites move around the stage.
              </p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  One of the simplest ways to move a sprite is with the "move" block. It looks like this:
              </p>
              <img src="/assets/movesteps.png" alt="Move block in Scratch" class="image-block rounded-lg shadow-md my-6 max-w-full">
              <p class="image-caption text-center italic text-gray-500 mt-2">Figure 2: Move block in Scratch</p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  This block moves the sprite 10 steps in whatever direction it's facing. But what exactly is a "step" in Scratch? How far do you think your sprite will move?
              </p>
          </div>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Let's Try It Out</h3>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">Let's try it out:</p>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                   <p class="text-gray-700">Find the "move 10 steps" block in the Motion category (it's blue).</p>
              </div>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                   <p class="text-gray-700">Drag it into the coding area.</p>
              </div>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                   <p class="text-gray-700">Click on the block. What happens to your sprite?</p>
              </div>
          </div>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Did the sprite move as far as you expected? Try clicking the block multiple times. What happens if you change the number 10 to a different number?
              </p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Now, let's make our sprite move automatically when we start our project. Can you think of a block we might use to start our project? Hint: It's green and has a flag on it!
              </p>
              <img src="/assets/greenflag.png" alt="When green flag clicked block in Scratch" class="image-block rounded-lg shadow-md my-6 max-w-full">
              <p class="image-caption text-center italic text-gray-500 mt-2">Figure 3: When green flag clicked block in Scratch</p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Try connecting the "when green flag clicked" block to your "move" block. Then click the green flag above the stage. Does your sprite move automatically now?
              </p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Experiment with different numbers in the "move" block. Can you make your sprite move across the entire stage? What happens when it reaches the edge?
              </p>
          </div>
      `
    },
    {
        title: "Changing Sprite Direction",
        content: `
          <h1 class="tutorial-title text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Changing Sprite Direction</h1>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Moving in a straight line is fun, but what if we want our sprite to change direction? In Scratch, we can use rotation blocks to make our sprites turn.
              </p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  One of the blocks we can use is the "turn" block. It looks like this:
              </p>
              <img src="/assets/rotate.png" alt="Turn block in Scratch" class="image-block rounded-lg shadow-md my-6 max-w-full">
              <p class="image-caption text-center italic text-gray-500 mt-2">Figure 4: Turn block in Scratch</p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  This block rotates the sprite clockwise by 15 degrees. But what does 15 degrees look like? How many degrees do you think it takes to make a complete circle?
              </p>
          </div>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Let's Experiment</h3>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">Let's experiment:</p>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                   <p class="text-gray-700">Find the "turn 15 degrees" block in the Motion category.</p>
              </div>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                   <p class="text-gray-700">Place it after your "move" block.</p>
              </div>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                   <p class="text-gray-700">Click the green flag. What path does your sprite follow now?</p>
              </div>
          </div>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Try changing the number of degrees. What happens if you use a negative number? Can you make your sprite draw a square? A triangle?
              </p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Now, let's combine our movement and rotation to create a more complex pattern. Can you make your sprite draw a spiral? Here's a hint: you might need to use more than one "move" and "turn" block.
              </p>
              
              <p class="image-caption text-center italic text-gray-500 mt-2">Figure 5: Spiral pattern in Scratch</p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Remember, in Scratch, you can always experiment and try new things. What other interesting patterns can you create by combining movement and rotation?
              </p>
          </div>
      `
    },
    {
        title: "Using Loops",
        content: `
          <h1 class="tutorial-title text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Using Loops</h1>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  So far, we've been making our sprites move by repeating blocks manually. But what if we want our sprite to keep moving or turning indefinitely? This is where loops come in handy!
              </p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  In Scratch, one of the most common loops is the "forever" block. It looks like this:
              </p>
              <img src="/assets/forever.png" alt="Forever block in Scratch" class="image-block rounded-lg shadow-md my-6 max-w-full">
              <p class="image-caption text-center italic text-gray-500 mt-2">Figure 6: Forever block in Scratch</p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  The forever block repeats the blocks inside it... well, forever! Or at least until you stop the project. But how might this be useful? Let's find out!
              </p>
          </div>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Try This</h3>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">Try this:</p>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                   <p class="text-gray-700">Find the "forever" block in the Control category (it's yellow).</p>
              </div>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                   <p class="text-gray-700">Drag it under your "when green flag clicked" block.</p>
              </div>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                   <p class="text-gray-700">Place your "move" and "turn" blocks inside the forever block.</p>
              </div>
               <div class="step-box bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2 flex items-start">
                  <span class="step-number bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                   <p class="text-gray-700">Click the green flag. What happens now?</p>
              </div>
          </div>
          <div class="content-box bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Your sprite should now move and turn continuously! But what if it goes off the screen? Can you think of a way to make it bounce off the edges?
              </p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Here's a hint: look for a block in the Motion category that mentions "edge". Can you add this block to your script to keep your sprite on the screen?
              </p>
               <img src="/placeholder.svg?height=100&width=300" alt="If on edge, bounce block in Scratch" class="image-block rounded-lg shadow-md my-6 max-w-full">
              <p class="image-caption text-center italic text-gray-500 mt-2">Figure 7: If on edge, bounce block in Scratch</p>
              <p class="tutorial-text text-lg leading-relaxed text-gray-700 mb-4">
                  Experiment with different combinations of blocks inside your forever loop. Can you make your sprite draw a continuous pattern? Or move in a figure-eight? Remember, in Scratch, there are many ways to achieve  the same result - don't be afraid to try new things!
              </p>
          </div>
      `
    },
    {
        title: "Homework",
        content: `
          <h1 class="tutorial-title text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Homework and Exercises</h1>
           <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div class="grid-item bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 class="text-xl font-semibold mb-4 text-blue-600">Exercise 1: Race Two Sprites</h3>
                  <ol class="list-decimal list-inside text-gray-700 mb-4">
                      <li>Program your first sprite to move from one side of the backdrop to the other.</li>
                      <li>Add a second sprite to your project.</li>
                      <li>Program the second sprite to also move across the screen.</li>
                      <li>Experiment with different speeds to make one sprite faster than the other.</li>
                  </ol>
                  <p class="text-gray-600 text-sm">
                      This exercise will help you practice using multiple sprites and controlling their movements independently.
                  </p>
              </div>

               <div class="grid-item bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 class="text-xl font-semibold mb-4 text-blue-600">Exercise 2: Dancing Cat</h3>
                  <p class="text-gray-700 mb-4">
                      Use the blocks you've learned to animate the cat sprite. Combine different movements and rotations to create a dance-like animation. 
                      Be creative and see what interesting motions you can create!
                  </p>
                  <p class="text-gray-600 text-sm">
                      This exercise encourages experimentation and helps you understand how different blocks interact to create complex behaviors.
                  </p>
              </div>

               <div class="grid-item bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 class="text-xl font-semibold mb-4 text-blue-600">Exercise 3: Treasure Hunt</h3>
                  <ol class="list-decimal list-inside text-gray-700 mb-4">
                      <li>Create a new backdrop with several "X" marks representing treasure.</li>
                      <li>Program your sprite to move to and "collect" each treasure.</li>
                      <li>Try to make the movement as efficient as possible.</li>
                  </ol>
                  <p class="text-gray-600 text-sm mb-2">
                      This exercise combines everything you've learned about sprite movement and rotation, 
                      and introduces the concept of planning a sequence of actions to achieve a goal.
                  </p>
                  <p class="text-sm">
                      For help creating the backdrop, you can refer to this tutorial: 
                      <a href="https://www.youtube.com/watch?v=CQ4SldacxG4" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                          How to Draw in Scratch
                      </a>
                  </p>
              </div>
          </div>
      `
    }
];
