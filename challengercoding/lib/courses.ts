export interface CourseInfo {
    name: string;
    href: string;
}

export const allCourses: CourseInfo[] = [
    { name: "Scratch Programming", href: "/tutorials/scratch" },
    { name: "Python Programming", href: "/tutorials/python" },
    { name: "Java Programming", href: "/tutorials/java" },
    { name: "Advanced Scratch", href: "/tutorials/scratch2" },
    { name: "Advanced Python", href: "/tutorials/python2" },
    { name: "Advanced Java", href: "/tutorials/java2" },
];

export interface LessonInfo {
    id: number;
    title: string;
}

export const scratchLessons: LessonInfo[] = [
    { id: 1, title: "Week 1: Welcome to Scratch!" },
    { id: 2, title: "Week 2: XY Coordinate Plane" },
    { id: 3, title: "Week 3: Animation Basics" },
    { id: 4, title: "Week 4: Loops" },
    { id: 5, title: "Week 5: Conditionals & Boolean Statements" },
    { id: 6, title: "Week 6: Boolean Statements" },
    { id: 7, title: "Week 7: Variables and Parameters" },
    { id: 8, title: "Week 8: Broadcasting" },
];

export const pythonLessons: LessonInfo[] = [
    { id: 1, title: "Lesson 1: Introduction to Python" },
    { id: 2, title: "Lesson 2: Variables and Data Types" },
    { id: 3, title: "Lesson 3: Control Flow" },
    { id: 4, title: "Lesson 4: Functions" },
    { id: 5, title: "Lesson 5: Lists and Loops" },
    { id: 6, title: "Lesson 6: Dictionaries" },
    { id: 7, title: "Lesson 7: File I/O" },
];

export const pythonWeeks: LessonInfo[] = [
    { id: 1, title: "Week 1: Getting Started" },
    { id: 2, title: "Week 2: Data Types" },
    { id: 3, title: "Week 3: Control Structures" },
    { id: 4, title: "Week 4: Functions" },
    { id: 5, title: "Week 5: Data Structures" },
    { id: 6, title: "Week 6: Advanced Topics" },
    { id: 7, title: "Week 7: Projects" },
];

export const javaLessons: LessonInfo[] = [
    { id: 1, title: "Lesson 1: Introduction to Java" },
    { id: 2, title: "Lesson 2: Variables and Operators" },
    { id: 3, title: "Lesson 3: Control Structures" },
    { id: 4, title: "Lesson 4: Methods" },
    { id: 5, title: "Lesson 5: Arrays" },
    { id: 6, title: "Lesson 6: Object-Oriented Programming" },
    { id: 7, title: "Lesson 7: Classes and Objects" },
];

export const javaWeeks: LessonInfo[] = [
    { id: 1, title: "Week 1: Java Basics" },
    { id: 2, title: "Week 2: Variables" },
    { id: 3, title: "Week 3: Control Flow" },
    { id: 4, title: "Week 4: Methods" },
    { id: 5, title: "Week 5: Arrays" },
    { id: 6, title: "Week 6: OOP Concepts" },
    { id: 7, title: "Week 7: Advanced OOP" },
];

export const scratch2Lessons: LessonInfo[] = [
    { id: 1, title: "Lesson 1: Advanced Motion" },
    { id: 2, title: "Lesson 2: Cloning" },
    { id: 3, title: "Lesson 3: Custom Blocks" },
    { id: 4, title: "Lesson 4: Lists" },
    { id: 5, title: "Lesson 5: Game Design" },
    { id: 6, title: "Lesson 6: Final Project" },
];

export const python2Lessons: LessonInfo[] = [
    { id: 1, title: "Lesson 1: Advanced Functions" },
    { id: 2, title: "Lesson 2: Object-Oriented Programming" },
    { id: 3, title: "Lesson 3: Classes and Inheritance" },
    { id: 4, title: "Lesson 4: Error Handling" },
    { id: 5, title: "Lesson 5: Modules and Packages" },
    { id: 6, title: "Lesson 6: Advanced Data Structures" },
    { id: 7, title: "Lesson 7: Final Project" },
];

export const java2Lessons: LessonInfo[] = [
    { id: 1, title: "Lesson 1: Inheritance" },
    { id: 2, title: "Lesson 2: Polymorphism" },
    { id: 3, title: "Lesson 3: Abstract Classes" },
    { id: 4, title: "Lesson 4: Interfaces" },
    { id: 5, title: "Lesson 5: Exception Handling" },
    { id: 6, title: "Lesson 6: Collections" },
    { id: 7, title: "Lesson 7: Algorithms" },
];
