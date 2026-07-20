export interface QuizOption {
    label: string;
    value: string;
}

export interface QuizQuestion {
    question: string;
    options?: QuizOption[] | string[];
    correctAnswer: string | number;
    explanation?: string;
}

export interface SubLesson {
    id: string;
    title: string;
    video: string | null;
    description: string; // HTML content
    quiz?: QuizQuestion | QuizQuestion[];
}
