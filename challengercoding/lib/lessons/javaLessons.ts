export interface Exercise { title: string; content: string; }
export interface LessonData { exercises: Exercise[]; }

export const javaLesson1: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 1: Introduction to Java</h1><div class="content-box"><p class="tutorial-text">Learn the basics of Java programming.</p></div>` },
        { title: "1. Hello World", content: `<h1 class="tutorial-title">Hello World</h1><div class="content-box"><div class="code-block">public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}</div></div>` },
        { title: "2. Syntax", content: `<h1 class="tutorial-title">Java Syntax</h1><div class="content-box"><p class="tutorial-text">Every statement ends with semicolon. Code blocks use curly braces.</p></div>` },
    ],
};

export const javaLesson2: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 2: Variables</h1><div class="content-box"><p class="tutorial-text">Learn about variables and operators.</p></div>` },
        { title: "1. Variables", content: `<h1 class="tutorial-title">Variables</h1><div class="content-box"><div class="code-block">int age = 15;\nString name = "Alice";</div></div>` },
        { title: "2. Operators", content: `<h1 class="tutorial-title">Operators</h1><div class="content-box"><div class="code-block">int sum = a + b;</div></div>` },
    ],
};

export const javaLesson3: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 3: Control Structures</h1><div class="content-box"><p class="tutorial-text">Learn about if and switch statements.</p></div>` },
        { title: "1. If Statements", content: `<h1 class="tutorial-title">If Statements</h1><div class="content-box"><div class="code-block">if (age >= 18) {\n    System.out.println("Adult");\n}</div></div>` },
    ],
};

export const javaLesson4: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 4: Methods</h1><div class="content-box"><p class="tutorial-text">Learn about methods.</p></div>` },
        { title: "1. Creating Methods", content: `<h1 class="tutorial-title">Methods</h1><div class="content-box"><div class="code-block">public static void greet(String name) {\n    System.out.println("Hello, " + name);\n}</div></div>` },
    ],
};

export const javaLesson5: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 5: Arrays</h1><div class="content-box"><p class="tutorial-text">Learn about arrays.</p></div>` },
        { title: "1. Arrays", content: `<h1 class="tutorial-title">Arrays</h1><div class="content-box"><div class="code-block">int[] numbers = {1, 2, 3, 4, 5};</div></div>` },
    ],
};

export const javaLesson6: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 6: OOP</h1><div class="content-box"><p class="tutorial-text">Introduction to Object-Oriented Programming.</p></div>` },
        { title: "1. Classes", content: `<h1 class="tutorial-title">Classes</h1><div class="content-box"><div class="code-block">public class Dog {\n    String name;\n    int age;\n}</div></div>` },
    ],
};

export const javaLesson7: LessonData = {
    exercises: [
        { title: "Overview", content: `<h1 class="tutorial-title">Lesson 7: Objects</h1><div class="content-box"><p class="tutorial-text">Learn about constructors and objects.</p></div>` },
        { title: "1. Constructors", content: `<h1 class="tutorial-title">Constructors</h1><div class="content-box"><div class="code-block">public Dog(String name) {\n    this.name = name;\n}</div></div>` },
    ],
};

export const javaLessons: { [key: number]: LessonData } = {
    1: javaLesson1, 2: javaLesson2, 3: javaLesson3, 4: javaLesson4,
    5: javaLesson5, 6: javaLesson6, 7: javaLesson7,
};

export const javaWeeks: { [key: number]: LessonData } = {
    1: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 1: Java Basics</h1><div class='content-box'><p class='tutorial-text'>Practice exercises.</p></div>" }] },
    2: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 2: Variables</h1><div class='content-box'><p class='tutorial-text'>Practice with variables.</p></div>" }] },
    3: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 3: Control Flow</h1><div class='content-box'><p class='tutorial-text'>Practice if statements.</p></div>" }] },
    4: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 4: Methods</h1><div class='content-box'><p class='tutorial-text'>Practice creating methods.</p></div>" }] },
    5: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 5: Arrays</h1><div class='content-box'><p class='tutorial-text'>Practice with arrays.</p></div>" }] },
    6: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 6: OOP</h1><div class='content-box'><p class='tutorial-text'>Practice OOP concepts.</p></div>" }] },
    7: { exercises: [{ title: "Overview", content: "<h1 class='tutorial-title'>Week 7: Advanced OOP</h1><div class='content-box'><p class='tutorial-text'>Advanced OOP exercises.</p></div>" }] },
};
