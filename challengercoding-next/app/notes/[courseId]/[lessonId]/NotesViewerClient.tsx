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
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6 max-w-lg">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary">
                        <BookOpen className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl font-bold text-secondary font-poppins font-bold">Content Loading...</h1>
                    <button
                        onClick={() => router.back()}
                        className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
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
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col pt-20">
            {/* Mobile Header */}
            <div className="lg:hidden bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between sticky top-20 z-30">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-xl bg-primary/10 text-primary">
                    {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <span className="font-bold text-secondary text-sm font-poppins truncate max-w-[200px]">
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
                    <div className="h-full lg:h-auto bg-white/70 backdrop-blur-xl border border-white/40 rounded-r-[2rem] lg:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-100 bg-primary/5 hidden lg:block">
                            <h3 className="font-bold text-secondary text-sm uppercase tracking-widest font-poppins">Study Guide</h3>
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
                                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 group ${currentSubLessonIndex === idx
                                            ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                            : 'bg-white/50 hover:bg-white text-text-light hover:text-secondary border border-transparent hover:border-gray-200'
                                        }`}
                                >
                                    <div className={`mt-1 shrink-0 ${currentSubLessonIndex === idx ? 'text-white' : 'text-gray-300 group-hover:text-primary/40'}`}>
                                        {currentSubLessonIndex === idx ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                                    </div>
                                    <span className="font-medium text-sm leading-snug">{lesson.title}</span>
                                </button>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-100">
                            <button
                                onClick={() => router.push(`/tutorials/${courseId}`)}
                                className="w-full p-4 rounded-2xl bg-white border border-gray-200 text-text-light hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center gap-2 group shadow-sm text-sm font-semibold"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Exit to HUB
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-secondary/20 backdrop-blur-sm z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
                )}

                {/* Content */}
                <main className="flex-1 w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-12 lg:p-16">
                        <header className="mb-12 space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-2xl">
                                <Lightbulb className="w-4 h-4 text-accent" />
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-poppins">
                                    Step {currentSubLessonIndex + 1} of {subLessons.length}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-secondary font-poppins leading-tight">
                                {currentSubLesson.title}
                            </h1>
                        </header>

                        {/* Video */}
                        {currentSubLesson.video && (
                            <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl mb-12 group">
                                <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-primary/0 transition-colors" />
                                <iframe
                                    src={currentSubLesson.video}
                                    className="w-full aspect-video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        )}

                        {/* Description */}
                        <div className="prose prose-blue max-w-none text-text leading-relaxed prose-headings:font-poppins prose-headings:text-secondary prose-a:text-primary prose-strong:text-secondary mb-12 prose-lg">
                            <div dangerouslySetInnerHTML={{ __html: currentSubLesson.description }} />
                        </div>

                        {/* Quiz */}
                        {quizQuestions.length > 0 && (
                            <div className="mt-16 pt-16 border-t border-gray-100 space-y-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shadow-sm border border-accent/20">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-secondary font-poppins">Quick Check</h2>
                                </div>

                                <div className="space-y-8">
                                    {quizQuestions.map((q: QuizQuestion, qIdx: number) => (
                                        <div key={qIdx} className="bg-gray-50/50 border border-gray-100 p-8 rounded-[2rem] space-y-6 shadow-sm relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Award size={64} className="text-secondary" />
                                            </div>
                                            <p className="text-xl font-bold text-secondary leading-relaxed pr-12">{q.question}</p>

                                            <div className="grid grid-cols-1 gap-3">
                                                {q.options && q.options.length > 0 ? (
                                                    q.options.map((opt: string, optIdx: number) => {
                                                        const isSelected = quizAnswers[qIdx] === opt;
                                                        return (
                                                            <button
                                                                key={optIdx}
                                                                onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: opt }))}
                                                                className={`p-5 rounded-2xl border-2 text-left font-medium transition-all flex items-center gap-4 group ${isSelected
                                                                        ? 'bg-primary/5 border-primary text-primary shadow-lg shadow-primary/10'
                                                                        : 'bg-white border-gray-100 hover:border-primary/30 hover:shadow-md text-text-light'
                                                                    }`}
                                                            >
                                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-primary' : 'border-gray-200 group-hover:border-primary/30'}`}>
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
                                                        className="w-full p-6 bg-white border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium shadow-sm"
                                                        value={quizAnswers[qIdx] || ''}
                                                        onChange={(e) => setQuizAnswers(prev => ({ ...prev, [qIdx]: e.target.value }))}
                                                    />
                                                )}
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100/50">
                                                <button
                                                    onClick={() => checkAnswer(qIdx, q)}
                                                    disabled={!quizAnswers[qIdx]}
                                                    className="px-8 py-4 bg-secondary text-white rounded-2xl font-bold shadow-lg shadow-secondary/20 hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
                                                >
                                                    Validate Answer
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </button>

                                                {quizFeedback[qIdx] && (
                                                    <div className={`p-4 rounded-2xl flex items-center gap-3 animate-in fade-in zoom-in duration-300 ${quizFeedback[qIdx].includes("Fantastic") ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"
                                                        }`}>
                                                        {quizFeedback[qIdx].includes("Fantastic") ? <CheckCircle2 size={20} /> : <X size={20} />}
                                                        <span className="text-sm font-semibold">{quizFeedback[qIdx]}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {q.explanation && quizFeedback[qIdx]?.includes("Fantastic") && (
                                                <div className="mt-6 p-6 bg-blue-50 border border-blue-100 rounded-2xl text-sm text-blue-900 animate-in fade-in slide-in-from-top-2 flex gap-4">
                                                    <Lightbulb className="w-5 h-5 text-blue-500 shrink-0" />
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
                    <footer className="flex justify-between items-center bg-white/50 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-xl">
                        <button
                            onClick={() => {
                                if (currentSubLessonIndex > 0) {
                                    setCurrentSubLessonIndex(prev => prev - 1);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            disabled={currentSubLessonIndex === 0}
                            className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 group ${currentSubLessonIndex === 0 ? 'text-gray-300 bg-gray-100 cursor-not-allowed' : 'bg-white text-secondary hover:text-primary hover:shadow-lg border border-gray-200'
                                }`}
                        >
                            <ChevronLeft className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${currentSubLessonIndex === 0 ? '' : 'text-primary'}`} />
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
                            className="px-10 py-4 rounded-2xl font-bold bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center gap-3 group"
                        >
                            {currentSubLessonIndex < subLessons.length - 1 ? (
                                <>
                                    <span className="hidden sm:inline">Continue to Next</span>
                                    <span className="sm:hidden">Next</span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
