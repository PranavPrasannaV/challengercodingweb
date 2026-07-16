/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { pythonNotes } from '@/src/data/notes/python';
import { javaNotes } from '@/src/data/notes/java';
import { SubLesson, QuizQuestion } from '@/src/data/notes/types';
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Circle,
    BookOpen,
    Play,
    Award,
    ArrowLeft,
    Lightbulb
} from 'lucide-react';

const notesMap: Record<string, Record<string, SubLesson[]>> = {
    'python': pythonNotes,
    'java': javaNotes,
};

export default function NotesViewerClient({ params }: { params: { courseId: string; lessonId: string } }) {
    const router = useRouter();
    const { courseId, lessonId } = params;

    const [subLessons, setSubLessons] = useState<SubLesson[] | null>(null);
    const [currentSubLessonIndex, setCurrentSubLessonIndex] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Quiz State
    const [quizAnswers, setQuizAnswers] = useState<Record<string, string | number>>({});
    const [quizFeedback, setQuizFeedback] = useState<Record<string, string>>({});

    useEffect(() => {
        const courseNotes = notesMap[courseId];
        if (courseNotes && courseNotes[lessonId]) {
            setSubLessons(courseNotes[lessonId]);
            setCurrentSubLessonIndex(0);
            setQuizAnswers({});
            setQuizFeedback({});
        }
    }, [courseId, lessonId]);

    if (!subLessons) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
                <div className="bg-surface hairline rounded-xl max-w-lg w-full p-12 text-center space-y-6">
                    <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h1 className="text-h2 font-serif font-bold text-text">Content Loading...</h1>
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    const currentSubLesson = subLessons[currentSubLessonIndex];

    const getQuizQuestions = () => {
        if (!currentSubLesson.quiz) return [];
        return Array.isArray(currentSubLesson.quiz) ? currentSubLesson.quiz : [currentSubLesson.quiz];
    };

    const quizQuestions = getQuizQuestions();

    const checkAnswer = (qIndex: number, question: QuizQuestion) => {
        const userAnswer = quizAnswers[qIndex];
        if (userAnswer === undefined || userAnswer === '') return;

        let isCorrect = false;
        if (typeof question.correctAnswer === 'number' && question.options) {
            const selectedIndex = question.options.indexOf(String(userAnswer));
            isCorrect = selectedIndex === question.correctAnswer;
        } else {
            isCorrect = String(userAnswer).trim().toLowerCase() === String(question.correctAnswer).trim().toLowerCase();
        }

        setQuizFeedback(prev => ({
            ...prev,
            [qIndex]: isCorrect ? "Fantastic! That's the correct answer." : "Not quite. Review the notes and try again."
        }));
    };

    return (
        <div className="min-h-screen bg-background relative flex flex-col pt-20">
            {/* Mobile Header */}
            <div className="lg:hidden bg-surface border-b border-border p-4 flex items-center justify-between sticky top-20 z-30">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg bg-alt-bg text-primary">
                    {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <span className="font-bold text-text text-sm font-sans truncate max-w-[200px]">
                    {currentSubLesson.title}
                </span>
                <div className="w-10" /> {/* Spacer */}
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-8 pb-12">

                {/* Sidebar */}
                <aside className={`
                    fixed lg:sticky lg:top-32 inset-y-0 left-0 z-40 w-80 transform transition-transform duration-300 lg:translate-x-0
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}>
                    <div className="bg-surface hairline rounded-xl h-full lg:h-auto flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-border hidden lg:block">
                            <h3 className="font-bold text-text text-sm uppercase tracking-wider font-sans">Study Guide</h3>
                        </div>
                        <div className="p-4 space-y-2 overflow-y-auto max-h-[70vh]">
                            {subLessons.map((lesson, idx) => (
                                <button
                                    key={lesson.id}
                                    onClick={() => {
                                        setCurrentSubLessonIndex(idx);
                                        setIsSidebarOpen(false);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`w-full text-left p-4 rounded-lg transition-colors flex items-start gap-4 ${
                                        currentSubLessonIndex === idx
                                            ? 'bg-primary text-white'
                                            : 'bg-surface hover:bg-alt-bg text-text-secondary hover:text-text border border-border'
                                    }`}
                                >
                                    <div className={`mt-1 shrink-0 ${currentSubLessonIndex === idx ? 'text-white' : 'text-gray-300'}`}>
                                        {currentSubLessonIndex === idx ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                                    </div>
                                    <span className="font-medium text-sm leading-snug">{lesson.title}</span>
                                </button>
                            ))}
                        </div>
                        <div className="p-4 border-t border-border">
                            <button
                                onClick={() => router.push(`/tutorials/${courseId}`)}
                                className="w-full py-3 bg-surface hairline rounded-lg text-text-secondary hover:text-text hover:bg-alt-bg transition-colors text-sm font-semibold flex items-center justify-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Exit to HUB
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-dark-bg/20 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
                )}

                {/* Content */}
                <main className="flex-1 w-full space-y-8">
                    <div className="bg-surface hairline rounded-xl overflow-hidden p-8 md:p-12 lg:p-16">
                        <header className="mb-12 space-y-4">
                            <div className="text-primary text-xs font-bold tracking-wider uppercase">
                                Step {currentSubLessonIndex + 1} of {subLessons.length}
                            </div>
                            <h1 className="text-h1 font-serif font-bold text-text leading-tight">
                                {currentSubLesson.title}
                            </h1>
                        </header>

                        {/* Video */}
                        {currentSubLesson.video && (
                            <div className="hairline rounded-lg overflow-hidden mb-12">
                                <iframe
                                    src={currentSubLesson.video}
                                    className="w-full aspect-video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        )}

                        {/* Description */}
                        <div className="prose prose-blue max-w-none text-text leading-relaxed prose-headings:font-serif prose-headings:text-text prose-a:text-primary prose-strong:text-text mb-12 prose-lg">
                            <div dangerouslySetInnerHTML={{ __html: currentSubLesson.description }} />
                        </div>

                        {/* Quiz */}
                        {quizQuestions.length > 0 && (
                            <div className="mt-16 pt-16 border-t border-border space-y-10">
                                <div className="flex items-center gap-3">
                                    <Award className="w-6 h-6 text-primary" />
                                    <h2 className="text-h2 font-serif font-bold text-text">Quick Check</h2>
                                </div>

                                <div className="space-y-8">
                                    {quizQuestions.map((q: QuizQuestion, qIdx: number) => (
                                        <div key={qIdx} className="bg-surface hairline rounded-xl p-8 space-y-6">
                                            <p className="text-xl font-bold text-text leading-relaxed">{q.question}</p>

                                            <div className="grid grid-cols-1 gap-3">
                                                {q.options && q.options.length > 0 ? (
                                                    q.options.map((opt: string, optIdx: number) => {
                                                        const isSelected = quizAnswers[qIdx] === opt;
                                                        return (
                                                            <button
                                                                key={optIdx}
                                                                onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: opt }))}
                                                                className={`p-5 rounded-lg border-2 text-left font-medium transition-colors flex items-center gap-4 ${
                                                                    isSelected
                                                                        ? 'bg-primary/5 border-primary text-primary'
                                                                        : 'bg-surface border-border hover:bg-alt-bg text-text-secondary'
                                                                }`}
                                                            >
                                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                                                                    isSelected ? 'border-primary' : 'border-border'
                                                                }`}>
                                                                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                                                </div>
                                                                {opt}
                                                            </button>
                                                        );
                                                    })
                                                ) : (
                                                    <input
                                                        type="text"
                                                        placeholder="Type your insight here..."
                                                        className="w-full p-6 bg-surface hairline rounded-lg outline-none font-medium"
                                                        value={quizAnswers[qIdx] || ''}
                                                        onChange={(e) => setQuizAnswers(prev => ({ ...prev, [qIdx]: e.target.value }))}
                                                    />
                                                )}
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border/50">
                                                <button
                                                    onClick={() => checkAnswer(qIdx, q)}
                                                    disabled={!quizAnswers[qIdx]}
                                                    className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                                >
                                                    Validate Answer
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>

                                                {quizFeedback[qIdx] && (
                                                    <div className={`p-4 rounded-lg flex items-center gap-3 ${
                                                        quizFeedback[qIdx].includes("Fantastic")
                                                            ? "bg-sage/10 border border-sage/20 text-sage"
                                                            : "bg-error/10 border border-error/20 text-error"
                                                    }`}>
                                                        {quizFeedback[qIdx].includes("Fantastic") ? <CheckCircle2 size={20} /> : <X size={20} />}
                                                        <span className="text-sm font-semibold">{quizFeedback[qIdx]}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {q.explanation && quizFeedback[qIdx]?.includes("Fantastic") && (
                                                <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-lg text-sm text-text-secondary flex gap-4">
                                                    <Lightbulb className="w-5 h-5 text-primary shrink-0" />
                                                    <p><strong>Insight:</strong> {q.explanation}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Footer */}
                    <footer className="bg-surface hairline rounded-xl p-6 flex justify-between items-center">
                        <button
                            onClick={() => {
                                if (currentSubLessonIndex > 0) {
                                    setCurrentSubLessonIndex(prev => prev - 1);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            disabled={currentSubLessonIndex === 0}
                            className={`py-3 px-8 rounded-lg font-bold transition-colors flex items-center gap-2 ${
                                currentSubLessonIndex === 0
                                    ? 'text-gray-300 bg-alt-bg cursor-not-allowed'
                                    : 'bg-surface border-border text-text-secondary hover:bg-alt-bg'
                            }`}
                        >
                            <ChevronLeft className={`w-5 h-5 ${currentSubLessonIndex === 0 ? '' : 'text-primary'}`} />
                            Back
                        </button>

                        <button
                            onClick={() => {
                                if (currentSubLessonIndex < subLessons.length - 1) {
                                    setCurrentSubLessonIndex(prev => prev + 1);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    router.push(`/tutorials/${courseId}`);
                                }
                            }}
                            className="py-3 px-10 rounded-lg font-bold bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-3"
                        >
                            {currentSubLessonIndex < subLessons.length - 1 ? (
                                <>
                                    <span className="hidden sm:inline">Continue to Next</span>
                                    <span className="sm:hidden">Next</span>
                                    <ChevronRight className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    Complete Session
                                    <CheckCircle2 className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </footer>
                </main>
            </div>
        </div>
    );
}
