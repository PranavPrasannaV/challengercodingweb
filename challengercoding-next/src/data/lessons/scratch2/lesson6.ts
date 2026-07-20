export const scratch2Lesson6 = [
    {
        title: "Lesson Overview",
        content: `
                  <h1 class="tutorial-title">Scratch 2 Class - Guided Exercise</h1>
                  <h2 class="text-2xl font-semibold mb-4">Lesson 6: Space Invaders - Foundational Components</h2>
                  <div class="content-box">
                      <p class="tutorial-text">
                          In this lesson, we will focus on teaching foundational components needed to create a Space Invaders-style game. You will learn key elements like player movement, enemy cloning and movement, collision detection, scoring, and game over mechanics. Each exercise builds toward understanding the game mechanics, but you won't be making the entire game just yet!
                      </p>
                  </div>

                  <div class="interactive-demo">
                      <h3 class="text-xl font-semibold mb-2">Space Invaders Demo</h3>
                      <canvas id="gameCanvas" width="400" height="400"></canvas>
                      <div class="demo-controls">
                          <button class="demo-button" onclick="startGame()">Start Game</button>
                          <button class="demo-button" onclick="stopGame()">Stop Game</button>
                      </div>
                  </div>
        `
    },
    {
        title: "Player Movement",
        content: `
                  <h1 class="tutorial-title">Exercise 1: Player Movement</h1>
                  <div class="content-box">
                      <p class="tutorial-text">In this exercise, you will learn how to implement player movement for the spaceship in Space Invaders. We'll use the left and right arrow keys to control the spaceship's horizontal movement.</p>

                      <h3 class="text-xl font-semibold mb-2">Step 1: Creating the Player Sprite</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Create a new sprite for your spaceship.</p>
                          <p><span class="step-number">2</span> Position the spaceship at the bottom of the screen.</p>
                      </div>

                      <h3 class="text-xl font-semibold mb-2">Step 2: Implementing Movement</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Add the following script to your spaceship sprite:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when green flag clicked
forever
  if &lt;key [left arrow v] pressed?&gt; then
    change x by (-5)
  end
  if &lt;key [right arrow v] pressed?&gt; then
    change x by (5)
  end
end
                          </code></pre>
                      </div>

                      <p class="tutorial-text">
                          This script continuously checks if the left or right arrow keys are pressed and moves the spaceship accordingly.
                      </p>

                      <h3 class="text-xl font-semibold mb-2">Step 3: Limiting Movement</h3>
                      <p class="tutorial-text">
                          To prevent the spaceship from moving off-screen, we need to add boundary checks.
                      </p>

                      <div class="highlight-box">
                          <pre><code>
when green flag clicked
forever
  if &lt;key [left arrow v] pressed?&gt; and &lt;(x position) > (-230)&gt; then
    change x by (-5)
  end
  if &lt;key [right arrow v] pressed?&gt; and &lt;(x position) < (230)&gt; then
    change x by (5)
  end
end
                          </code></pre>
                      </div>

                      <p class="tutorial-text">
                          This updated script checks the spaceship's position before moving, ensuring it stays within the screen boundaries.
                      </p>
                  </div>

                  <div class="interactive-demo">
                      <h3 class="text-xl font-semibold mb-2">Player Movement Demo</h3>
                      <canvas id="playerMovementDemo" width="400" height="300"></canvas>
                      <div class="demo-controls">
                          <button class="demo-button" onmousedown="moveLeft()" onmouseup="stopMoving()" ontouchstart="moveLeft()" ontouchend="stopMoving()">Move Left</button>
                          <button class="demo-button" onmousedown="moveRight()" onmouseup="stopMoving()" ontouchstart="moveRight()" ontouchend="stopMoving()">Move Right</button>
                      </div>
                  </div>
        `
    },
    {
        title: "Enemy Movement and Cloning",
        content: `
                  <h1 class="tutorial-title">Exercise 2: Enemy Movement and Cloning</h1>
                  <div class="content-box">
                      <p class="tutorial-text">In this exercise, we'll create multiple enemy invaders using cloning and implement their movement pattern.</p>

                      <h3 class="text-xl font-semibold mb-2">Step 1: Creating the Enemy Sprite</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Create a new sprite for your enemy invader.</p>
                          <p><span class="step-number">2</span> Position the enemy at the top-left of the screen.</p>
                      </div>

                      <h3 class="text-xl font-semibold mb-2">Step 2: Cloning Enemies</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Add the following script to your enemy sprite:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when green flag clicked
hide
repeat (5)
  create clone of [myself v]
  change x by (50)
end
                          </code></pre>
                      </div>

                      <p class="tutorial-text">
                          This script creates 5 clones of the enemy, spacing them out horizontally.
                      </p>

                      <h3 class="text-xl font-semibold mb-2">Step 3: Enemy Movement</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Add another script to the enemy sprite:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when I start as a clone
show
forever
  move (2) steps
  if &lt;touching [edge v]?&gt; then
    turn (180) degrees
    change y by (-10)
  end
end
                          </code></pre>
                      </div>

                      <p class="tutorial-text">
                          This script makes each enemy clone move back and forth, dropping down a level when it reaches the edge of the screen.
                      </p>
                  </div>

                  <div class="interactive-demo">
                      <h3 class="text-xl font-semibold mb-2">Enemy Movement Demo</h3>
                      <canvas id="enemyMovementDemo" width="400" height="300"></canvas>
                      <div class="demo-controls">
                          <button class="demo-button" onclick="startEnemyMovement()">Start Movement</button>
                          <button class="demo-button" onclick="stopEnemyMovement()">Stop Movement</button>
                      </div>
                  </div>
        `
    },
    {
        title: "Collision Detection",
        content: `
                  <h1 class="tutorial-title">Exercise 3: Collision Detection</h1>
                  <div class="content-box">
                      <p class="tutorial-text">In this exercise, we'll implement collision detection between the player's bullets and the enemy invaders.</p>

                      <h3 class="text-xl font-semibold mb-2">Step 1: Creating Bullets</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Create a new sprite for the bullet.</p>
                          <p><span class="step-number">2</span> Add the following script to the bullet sprite:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when green flag clicked
hide

when [space v] key pressed
create clone of [myself v]

when I start as a clone
go to [Spaceship v]
show
repeat until &lt;&lt;touching [edge v]?&gt; or &lt;touching [Enemy v]?&gt;&gt;
  change y by (10)
end
if &lt;touching [Enemy v]?&gt; then
  broadcast [hit v]
end
delete this clone
                          </code></pre>
                      </div>

                      <h3 class="text-xl font-semibold mb-2">Step 2: Handling Enemy Hits</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Add this script to the enemy sprite:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when I receive [hit v]
if &lt;touching [Bullet v]?&gt; then
  delete this clone
end
                          </code></pre>
                      </div>

                      <p class="tutorial-text">
                          This script deletes the enemy clone when it's hit by a bullet.
                      </p>
                  </div>

                  <div class="interactive-demo">
                      <h3 class="text-xl font-semibold mb-2">Collision Detection Demo</h3>
                      <canvas id="collisionDemo" width="400" height="300"></canvas>
                      <div class="demo-controls">
                          <button class="demo-button" onclick="fireBullet()">Fire Bullet</button>
                      </div>
                  </div>
        `
    },
    {
        title: "Scoring and Game Over",
        content: `
                  <h1 class="tutorial-title">Exercise 4: Scoring and Game Over</h1>
                  <div class="content-box">
                      <p class="tutorial-text">In this final exercise, we'll implement a scoring system and game over conditions.</p>

                      <h3 class="text-xl font-semibold mb-2">Step 1: Setting Up the Score</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Create a variable called "Score".</p>
                          <p><span class="step-number">2</span> Add this script to the stage:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when green flag clicked
set [Score v] to (0)
                          </code></pre>
                      </div>

                      <h3 class="text-xl font-semibold mb-2">Step 2: Increasing the Score</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Modify the enemy's "hit" script:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when I receive [hit v]
if &lt;touching [Bullet v]?&gt; then
  change [Score v] by (1)
  delete this clone
end
                          </code></pre>
                      </div>

                      <h3 class="text-xl font-semibold mb-2">Step 3: Game Over Condition</h3>
                      <div class="step-box">
                          <p><span class="step-number">1</span> Add this script to the spaceship sprite:</p>
                      </div>

                      <div class="highlight-box">
                          <pre><code>
when green flag clicked
forever
  if &lt;touching [Enemy v]?&gt; then
    broadcast [game over v]
    stop [all v]
  end
end
                          </code></pre>
                      </div>

                      <p class="tutorial-text">
                          This script ends the game if an enemy reaches the spaceship.
                      </p>
                  </div>

                  <div class="interactive-demo">
                      <h3 class="text-xl font-semibold mb-2">Scoring Demo</h3>
                      <canvas id="scoringDemo" width="400" height="300"></canvas>
                      <div class="demo-controls">
                          <button class="demo-button" onclick="incrementScore()">Increase Score</button>
                          <button class="demo-button" onclick="triggerGameOver()">Game Over</button>
                      </div>
                  </div>
        `
    },
    {
        title: "Homework",
        content: `
                  <h1 class="tutorial-title">Homework</h1>
                  <div class="content-box">
                      <h3 class="text-xl font-semibold mb-2">Homework: Complete Your Space Invaders Game!</h3>
                      <p class="tutorial-text">
                          Now that you've learned the foundational components of Space Invaders, your homework is to complete the game! Here are some tasks to guide you:
                      </p>
                      <ul class="list-disc list-inside mt-4">
                          <li>Implement all the components we've covered in class.</li>
                          <li>Add a start screen with instructions.</li>
                          <li>Create multiple levels with increasing difficulty.</li>
                          <li>Add sound effects for shooting and enemy destruction.</li>
                          <li>Implement a high score system.</li>
                          <li>Be creative! Add your own unique features to make the game more exciting.</li>
                      </ul>
                      <p class="tutorial-text mt-4">
                          Remember to test your game thoroughly and have fun creating it!
                      </p>
                  </div>
        `
    }
];
