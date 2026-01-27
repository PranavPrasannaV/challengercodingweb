export interface Exercise { title: string; content: string; }
export interface LessonData { exercises: Exercise[]; }

export const pythonLesson1: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 1: Introduction to Python</h1><div class="content-box"><p class="tutorial-text">Learn the basics of Python programming.</p></div>` },
        { title: "1. Hello World", content: `<h1 class="tutorial-title">Hello World</h1><div class="content-box"><div class="code-block">print("Hello, World!")</div></div>` },
        { title: "2. Comments", content: `<h1 class="tutorial-title">Comments</h1><div class="content-box"><div class="code-block"># This is a comment</div></div>` },
        { title: "3. Practice", content: `<h1 class="tutorial-title">Practice</h1><div class="grid-item"><p>Write a program that prints your name.</p></div>` },
    ],
};

export const pythonLesson2: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 2: Variables</h1><div class="content-box"><p class="tutorial-text">Learn about variables and data types.</p></div>` },
        { title: "1. Variables", content: `<h1 class="tutorial-title">Variables</h1><div class="content-box"><div class="code-block">name = "Alice"\nage = 15</div></div>` },
        { title: "2. Data Types", content: `<h1 class="tutorial-title">Data Types</h1><div class="content-box"><p class="tutorial-text">String, int, float, bool</p></div>` },
    ],
};

export const pythonLesson3: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 3: Control Flow</h1><div class="content-box"><p class="tutorial-text">Learn about if statements.</p></div>` },
        { title: "1. If Statements", content: `<h1 class="tutorial-title">If Statements</h1><div class="content-box"><div class="code-block">if age >= 18:\n    print("Adult")</div></div>` },
        { title: "2. Elif", content: `<h1 class="tutorial-title">Elif</h1><div class="content-box"><div class="code-block">if score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")</div></div>` },
    ],
};

export const pythonLesson4: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 4: Functions</h1><div class="content-box"><p class="tutorial-text">Learn about functions.</p></div>` },
        { title: "1. Defining Functions", content: `<h1 class="tutorial-title">Functions</h1><div class="content-box"><div class="code-block">def greet(name):\n    print(f"Hello, {name}!")</div></div>` },
    ],
};

export const pythonLesson5: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 5: Lists</h1><div class="content-box"><p class="tutorial-text">Learn about lists and loops.</p></div>` },
        { title: "1. Lists", content: `<h1 class="tutorial-title">Lists</h1><div class="content-box"><div class="code-block">fruits = ["apple", "banana"]</div></div>` },
        { title: "2. For Loops", content: `<h1 class="tutorial-title">Loops</h1><div class="content-box"><div class="code-block">for fruit in fruits:\n    print(fruit)</div></div>` },
    ],
};

export const pythonLesson6: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 6: Dictionaries</h1><div class="content-box"><p class="tutorial-text">Learn about dictionaries.</p></div>` },
        { title: "1. Creating Dictionaries", content: `<h1 class="tutorial-title">Dictionaries</h1><div class="content-box"><div class="code-block">student = {"name": "Alice", "age": 15}</div></div>` },
    ],
};

export const pythonLesson7: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 7: File I/O</h1><div class="content-box"><p class="tutorial-text">Learn about file operations.</p></div>` },
        { title: "1. Reading Files", content: `<h1 class="tutorial-title">Reading Files</h1><div class="content-box"><div class="code-block">with open("file.txt") as f:\n    content = f.read()</div></div>` },
    ],
};

export const pythonLessons: { [key: number]: LessonData } = {
    1: pythonLesson1, 2: pythonLesson2, 3: pythonLesson3, 4: pythonLesson4,
    5: pythonLesson5, 6: pythonLesson6, 7: pythonLesson7,
};

export const pythonWeeks: { [key: number]: LessonData } = {
    1: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 1: Getting Started</h1><div class='content-box'><p class='tutorial-text'>Practice exercises for Python basics.</p></div>" }] },
    2: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 2: Data Types</h1><div class='content-box'><p class='tutorial-text'>Practice with data types.</p></div>" }] },
    3: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 3: Control Flow</h1><div class='content-box'><p class='tutorial-text'>Practice if statements.</p></div>" }] },
    4: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 4: Functions</h1><div class='content-box'><p class='tutorial-text'>Practice creating functions.</p></div>" }] },
    5: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 5: Data Structures</h1><div class='content-box'><p class='tutorial-text'>Practice with lists and dictionaries.</p></div>" }] },
    6: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 6: Advanced Topics</h1><div class='content-box'><p class='tutorial-text'>Advanced exercises.</p></div>" }] },
    7: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 7: Projects</h1><div class='content-box'><p class='tutorial-text'>Mini project exercises.</p></div>" }] },
};
