export type Track = 'scratch' | 'python' | 'java';

export interface Course {
    id: string;
    /** Canonical name. Used in <h1>, <title>, structured data. */
    title: string;
    /** Compact name for cards, sidebars, breadcrumbs. */
    shortTitle: string;
    track: Track;
    /** 1 = first course in a track, 2 = the continuation. */
    stage: 1 | 2;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    /** One clause for a card. Concrete — name what gets built. */
    blurb: string;
    /** One sentence for the course header and metadata. */
    description: string;
    /** Course id that should come first, where one exists. */
    prerequisite?: string;
    link: string;
    lessons: LessonSummary[];
}

export interface LessonSummary {
    id: string;
    title: string; // e.g. "Week 1: Welcome to Scratch!"
    link: string;
    notesLink?: string;
    type: 'guided' | 'lesson';
}

export const courses: Course[] = [
    {
        id: 'scratch',
        title: 'Scratch Programming',
        shortTitle: 'Scratch',
        track: 'scratch',
        stage: 1,
        level: 'Beginner',
        blurb: 'Sprites, coordinates, loops and broadcasts. Eight weeks to a working animation.',
        description:
            'Our starting course, for students who have not written code before. Everything happens in Scratch, so there is no syntax to memorize and nothing to install.',
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
        ],
    },
    {
        id: 'scratch2',
        title: 'Advanced Scratch',
        shortTitle: 'Scratch II',
        track: 'scratch',
        stage: 2,
        level: 'Beginner',
        blurb: 'Pong, a calculator, a platformer, Flappy Bird, Space Invaders. One game a week.',
        description:
            'Six weeks, six finished games. Each week starts from an empty project and ends with something a student can share.',
        prerequisite: 'scratch',
        link: '/tutorials/scratch2',
        lessons: [
            { id: '1', title: 'Week 1: Pong', link: '/lessons/scratch2/1', type: 'guided' },
            { id: '2', title: 'Week 2: Calculator', link: '/lessons/scratch2/2', type: 'guided' },
            { id: '3', title: 'Week 3: Platformer Part 1 - Basics', link: '/lessons/scratch2/3', type: 'guided' },
            { id: '4', title: 'Week 4: Rock, Paper, Scissors', link: '/lessons/scratch2/4', type: 'guided' },
            { id: '5', title: 'Week 5: Flappy Bird', link: '/lessons/scratch2/5', type: 'guided' },
            { id: '6', title: 'Week 6: Space Invaders', link: '/lessons/scratch2/6', type: 'guided' },
        ],
    },
    {
        id: 'python',
        title: 'Python Programming',
        shortTitle: 'Python',
        track: 'python',
        stage: 1,
        level: 'Intermediate',
        blurb: 'Hello World to writing your own functions, in seven weeks.',
        description:
            'The first course where students type code. Seven weekly lessons, each with an exercise checked against exact expected output, then a final project.',
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
        ],
    },
    {
        id: 'python2',
        title: 'Advanced Python',
        shortTitle: 'Python II',
        track: 'python',
        stage: 2,
        level: 'Intermediate',
        blurb: 'Dictionaries, tuples, sets, classes, modules and recursion.',
        description:
            'Where Python stops being one long script. Students build their own data structures and classes, then finish with a project.',
        prerequisite: 'python',
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
        ],
    },
    {
        id: 'java',
        title: 'Java Programming',
        shortTitle: 'Java',
        track: 'java',
        stage: 1,
        level: 'Advanced',
        blurb: 'Variables, if-statements, loops, methods and arrays.',
        description:
            'Java from the first line. Seven weekly lessons covering the language core, then a final project — roughly the ground an AP Computer Science A course opens with.',
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
        ],
    },
    {
        id: 'java2',
        title: 'Advanced Java',
        shortTitle: 'Java II',
        track: 'java',
        stage: 2,
        level: 'Advanced',
        blurb: '2D arrays through polymorphism, written rather than just defined.',
        description:
            'The object-oriented half of Java: encapsulation, inheritance and polymorphism, each written out in code before it is named.',
        prerequisite: 'java',
        link: '/tutorials/java2',
        lessons: [
            { id: '1', title: 'Week 1: 2D Arrays', link: '/lessons/java2/1', type: 'guided' },
            { id: '2', title: 'Week 2: Classes', link: '/lessons/java2/2', type: 'guided' },
            { id: '3', title: 'Week 3: Encapsulation', link: '/lessons/java2/3', type: 'guided' },
            { id: '4', title: 'Week 4: Inheritance', link: '/lessons/java2/4', type: 'guided' },
            { id: '5', title: 'Week 5: Polymorphism', link: '/lessons/java2/5', type: 'guided' },
            { id: '6', title: 'Week 6: Lists', link: '/lessons/java2/6', type: 'guided' },
            { id: '7', title: 'Week 7: Recursion', link: '/lessons/java2/7', type: 'guided' },
            { id: 'test', title: 'Final Project: Test', link: '/lessons/java2/test', type: 'guided' },
        ],
    },
];

/* -------------------------------------------------------------------------
   Derived helpers. Every count on the site comes from here, so a card and a
   course page can never disagree about how many weeks a course runs.
   ------------------------------------------------------------------------- */

export const TRACKS: { id: Track; label: string; mark: string }[] = [
    { id: 'scratch', label: 'Scratch', mark: '/assets/scratchlogo.png' },
    { id: 'python', label: 'Python', mark: '/assets/python.png' },
    { id: 'java', label: 'Java', mark: '/assets/java.png' },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);

export const coursesInTrack = (track: Track) =>
    courses.filter((c) => c.track === track).sort((a, b) => a.stage - b.stage);

/** Weekly lessons, excluding the final project. */
export const weeksIn = (course: Course) =>
    course.lessons.filter((l) => l.id !== 'test').length;

export const hasFinalProject = (course: Course) =>
    course.lessons.some((l) => l.id === 'test');

/** "Week 3" / "Final project" — the ordinal shown beside a lesson row. */
export const lessonOrdinal = (lesson: LessonSummary, index: number) =>
    lesson.id === 'test' ? 'Final project' : `Week ${index + 1}`;

/** "Loops" — the lesson title with its "Week N:" prefix removed. */
export const lessonConcept = (lesson: LessonSummary) =>
    lesson.title.replace(/^(Week\s*\d+|Final Project)\s*:\s*/i, '').trim();

export const totalLessons = courses.reduce((n, c) => n + c.lessons.length, 0);

export const totalNotes = courses.reduce(
    (n, c) => n + c.lessons.filter((l) => l.notesLink).length,
    0,
);

/** "6–8" — the honest range, rather than a single number that is wrong for four courses. */
export const weekRange = (() => {
    const all = courses.map(weeksIn);
    return `${Math.min(...all)}–${Math.max(...all)}`;
})();
