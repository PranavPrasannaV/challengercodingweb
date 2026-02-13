
export interface Course {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string; // The tutorial hub link (e.g., /tutorials/scratch)
    lessons: LessonSummary[];
}

export interface LessonSummary {
    id: string;
    title: string; // e.g., "Week 1: Welcome to Scratch!"
    link: string; // e.g., /lessons/scratch/1
    notesLink?: string; // e.g., /notes/scratch/1 (Optional: for video/text lessons)
    type: 'guided' | 'lesson'; // 'guided' for interactive, 'lesson' for text/notes
}

export const courses: Course[] = [
    {
        id: 'scratch',
        title: 'Scratch Programming',
        description: 'Start your coding journey with these interactive Scratch tutorials.',
        image: '/assets/scratchlogo.png',
        link: '/tutorials/scratch',
        lessons: [
            { id: '1', title: 'Week 1: Welcome to Scratch!', link: '/lessons/scratch/1', type: 'guided' },
            { id: '2', title: 'Week 2: XY Coordinate Plane', link: '/lessons/scratch/2', type: 'guided' },
            { id: '3', title: 'Week 3: Animation Basics', link: '/lessons/scratch/3', type: 'guided' },
            { id: '4', title: 'Week 4: Loops', link: '/lessons/scratch/4', type: 'guided' },
            { id: '5', title: 'Week 5: Conditionals & Boolean Statements', link: '/lessons/scratch/5', type: 'guided' },
            { id: '6', title: 'Week 6: Boolean Statements', link: '/lessons/scratch/6', type: 'guided' },
            { id: '7', title: 'Week 7: Variables and Parameters', link: '/lessons/scratch/7', type: 'guided' },
            { id: '8', title: 'Week 8: Broadcasting', link: '/lessons/scratch/8', type: 'guided' },
        ]
    },
    {
        id: 'python',
        title: 'Python Programming',
        description: 'Learn Python through these beginner-friendly tutorials and projects.',
        image: '/assets/python.png',
        link: '/tutorials/python',
        lessons: [
            { id: '1', title: 'Week 1: Hello World', link: '/lessons/python/1', notesLink: '/notes/python/1', type: 'guided' },
            { id: '2', title: 'Week 2: Variables', link: '/lessons/python/2', notesLink: '/notes/python/2', type: 'guided' },
            { id: '3', title: 'Week 3: Inputs', link: '/lessons/python/3', notesLink: '/notes/python/3', type: 'guided' },
            { id: '4', title: 'Week 4: Conditionals', link: '/lessons/python/4', notesLink: '/notes/python/4', type: 'guided' },
            { id: '5', title: 'Week 5: Lists', link: '/lessons/python/5', notesLink: '/notes/python/5', type: 'guided' },
            { id: '6', title: 'Week 6: Loops', link: '/lessons/python/6', notesLink: '/notes/python/6', type: 'guided' },
            { id: '7', title: 'Week 7: Functions', link: '/lessons/python/7', notesLink: '/notes/python/7', type: 'guided' },
            { id: 'test', title: 'Final Project: Test', link: '/lessons/python/test', type: 'guided' },
        ]
    },
    {
        id: 'java',
        title: 'Java Programming',
        description: 'Learn Java step-by-step with our comprehensive tutorials.',
        image: '/assets/java.png',
        link: '/tutorials/java',
        lessons: [
            { id: '1', title: 'Week 1: Hello World', link: '/lessons/java/1', notesLink: '/notes/java/1', type: 'guided' },
            { id: '2', title: 'Week 2: Objects, Variables, and Data', link: '/lessons/java/2', notesLink: '/notes/java/2', type: 'guided' },
            { id: '3', title: 'Week 3: If Statements', link: '/lessons/java/3', notesLink: '/notes/java/3', type: 'guided' },
            { id: '4', title: 'Week 4: Loops', link: '/lessons/java/4', notesLink: '/notes/java/4', type: 'guided' },
            { id: '5', title: 'Week 5: Methods', link: '/lessons/java/5', notesLink: '/notes/java/5', type: 'guided' },
            { id: '6', title: 'Week 6: Objects and Wrapper Classes', link: '/lessons/java/6', notesLink: '/notes/java/6', type: 'guided' },
            { id: '7', title: 'Week 7: Arrays', link: '/lessons/java/7', notesLink: '/notes/java/7', type: 'guided' },
            { id: 'test', title: 'Final Project: Test', link: '/lessons/java/test', type: 'guided' },
        ]
    },
    {
        id: 'scratch2',
        title: 'Advanced Scratch',
        description: 'Advanced Scratch concepts.',
        image: '/assets/scratchlogo.png',
        link: '/tutorials/scratch2',
        lessons: [
            { id: '1', title: 'Week 1: Advanced Concepts', link: '/lessons/scratch2/1', type: 'guided' },
            { id: '2', title: 'Week 2: More Advanced Concepts', link: '/lessons/scratch2/2', type: 'guided' },
            { id: '3', title: 'Week 3: Even More Advanced Concepts', link: '/lessons/scratch2/3', type: 'guided' },
            { id: '4', title: 'Week 4: Advanced Loops', link: '/lessons/scratch2/4', type: 'guided' },
            { id: '5', title: 'Week 5: Advanced Conditionals', link: '/lessons/scratch2/5', type: 'guided' },
            { id: '6', title: 'Week 6: Final Project', link: '/lessons/scratch2/6', type: 'guided' },
        ]
    },
    {
        id: 'python2',
        title: 'Advanced Python',
        description: 'Advanced Python programming.',
        image: '/assets/python.png',
        link: '/tutorials/python2',
        lessons: [
            { id: '1', title: 'Week 1: List Review and Algorithms', link: '/lessons/python2/1', type: 'guided' },
            { id: '2', title: 'Week 2: Dictionaries', link: '/lessons/python2/2', type: 'guided' },
            { id: '3', title: 'Week 3: Tuples', link: '/lessons/python2/3', type: 'guided' },
            { id: '4', title: 'Week 4: Sets', link: '/lessons/python2/4', type: 'guided' },
            { id: '5', title: 'Week 5: Objects/Classes', link: '/lessons/python2/5', type: 'guided' },
            { id: '6', title: 'Week 6: Modules and Scope', link: '/lessons/python2/6', type: 'guided' },
            { id: '7', title: 'Week 7: Recursion', link: '/lessons/python2/7', type: 'guided' },
            { id: 'test', title: 'Final Project: Test', link: '/lessons/python2/test', type: 'guided' },
        ]
    },
    {
        id: 'java2',
        title: 'Advanced Java',
        description: 'Advanced Java programming.',
        image: '/assets/java.png',
        link: '/tutorials/java2',
        lessons: [
            { id: '1', title: 'Week 1: Review', link: '/lessons/java2/1', type: 'guided' },
            // Add more lessons as needed
        ]
    }
];
