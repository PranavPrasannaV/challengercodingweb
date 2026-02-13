/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { pythonNotes } from '@/src/data/notes/python';
import { javaNotes } from '@/src/data/notes/java';
import { SubLesson, QuizQuestion } from '@/src/data/notes/types';
import { Menu, X, ChevronLeft, CheckCircle2, Circle } from 'lucide-react';

const notesMap: Record<string, Record<string, SubLesson[]>> = {
    'python': pythonNotes,
    'java': javaNotes,
};

export default function NotesViewerClient({ params }: { params: { courseId: string; lessonId: string } }) {
    const router = useRouter();
    const { courseId, lessonId } = params;

    const [subLessons, setSubLessons] = useState<SubLesson[] | null>(null);
    const [currentSubLessonIndex, setCurrentSubLessonIndex] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar toggle

    // Quiz State
    const [quizAnswers, setQuizAnswers] = useState<Record<string, string | number>>({});
    const [quizFeedback, setQuizFeedback] = useState<Record<string, string>>({});

    useEffect(() => {
        const courseNotes = notesMap[courseId];
        if (courseNotes && courseNotes[lessonId]) {
            setSubLessons(courseNotes[lessonId]);
            setCurrentSubLessonIndex(0); // Reset to first sub-lesson on lesson change
            setQuizAnswers({});
            setQuizFeedback({});
        } else {
            console.warn(`Notes data not found for ${courseId} lesson ${lessonId}`);
        }
    }, [courseId, lessonId]);

    if (!subLessons && !notesMap[courseId]) {
        return (
            <div className="p-8 text-center min-h-screen flex flex-col items-center justify-center bg-[#F5F7FA]">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Lesson Not Found</h1>
                <button onClick={() => router.back()} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Go Back
                </button>
            </div>
        );
    }

    if (!subLessons) {
        return <div className="p-8 text-center min-h-screen flex items-center justify-center bg-[#F5F7FA]">
            <div className="text-xl font-semibold text-gray-600">Loading lesson content...</div>
        </div>;
    }

    const currentSubLesson = subLessons[currentSubLessonIndex];

    // Helper to normalize quiz data into an array
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
            // Compare index
            const selectedIndex = question.options.indexOf(String(userAnswer));
            isCorrect = selectedIndex === question.correctAnswer;
        } else {
            // Direct string match
            isCorrect = String(userAnswer).trim().toLowerCase() === String(question.correctAnswer).trim().toLowerCase();
        }

        setQuizFeedback(prev => ({
            ...prev,
            [qIndex]: isCorrect ? "Correct! Great job." : "Not quite. Try again!"
        }));
    };

    return (
        <div className="min-h-screen bg-[#F5F7FA] flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <span className="font-semibold text-gray-800 truncate ml-2 flex-1 text-center">
                    {currentSubLesson.title}
                </span>
                <button onClick={() => router.push(`/tutorials/${courseId}`)} className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                    Exit
                </button>
            </div>

            {/* Sidebar Navigation */}
            <aside className={`
                fixed inset-y-0 left-0 z-10 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out shadow-lg md:shadow-none
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:block md:w-80
            `}>
                <div className="p-6 border-b border-gray-100 hidden md:flex items-center justify-between">
                    <button
                        onClick={() => router.push(`/tutorials/${courseId}`)}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium group"
                    >
                        <ChevronLeft size={18} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Course
                    </button>
                </div>

                <div className="p-4 md:p-6 overflow-y-auto h-full pb-20 md:pb-6">
                    <h2 className="font-bold text-gray-800 mb-6 text-lg px-2">Lesson Content</h2>
                    <div className="space-y-2">
                        {subLessons.map((lesson, idx) => (
                            <button
                                key={lesson.id}
                                onClick={() => {
                                    setCurrentSubLessonIndex(idx);
                                    setIsSidebarOpen(false); // Close mobile sidebar on select
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`
                                    w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center
                                    ${currentSubLessonIndex === idx
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent'}
                                `}
                            >
                                <div className={`mr-3 ${currentSubLessonIndex === idx ? 'text-blue-600' : 'text-gray-300'}`}>
                                    {currentSubLessonIndex === idx ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                                </div>
                                <span className="truncate flex-1">{lesson.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-0 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full max-w-5xl mx-auto min-h-[calc(100vh-60px)]">
                <div className="mb-6 md:mb-8">
                    <div className="flex items-center text-sm text-gray-500 mb-2 uppercase tracking-wider font-semibold">
                        Step {currentSubLessonIndex + 1} of {subLessons.length}
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">{currentSubLesson.title}</h1>
                </div>

                {/* Video Section */}
                {currentSubLesson.video && (
                    <div className="bg-black rounded-2xl overflow-hidden shadow-xl mb-10 aspect-video w-full ring-1 ring-black/5">
                        <iframe
                            src={currentSubLesson.video}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {/* Text Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10 mb-10">
                    <div
                        className="prose prose-blue prose-lg max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: currentSubLesson.description }}
                    />
                </div>

                {/* Quiz Section - Only render if questions exist */}
                {quizQuestions.length > 0 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {quizQuestions.map((q: QuizQuestion, qIdx: number) => (
                            <div key={qIdx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>

                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full uppercase tracking-wide mr-3 font-bold border border-yellow-200">Knowledge Check</span>
                                    Question {quizQuestions.length > 1 ? qIdx + 1 : ''}
                                </h3>

                                <p className="mb-8 text-gray-800 font-medium text-lg leading-relaxed">{q.question}</p>

                                <div className="space-y-3 mb-8">
                                    {q.options && q.options.length > 0 ? (
                                        q.options.map((opt: string, optIdx: number) => (
                                            <label
                                                key={optIdx}
                                                className={`
                                                    flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group
                                                    ${quizAnswers[qIdx] === opt
                                                        ? 'border-blue-500 bg-blue-50 shadow-md ring-1 ring-blue-500/20'
                                                        : 'border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-white'}
                                                `}
                                            >
                                                <div className={`
                                                    w-5 h-5 rounded-full border-2 flex items-center justify-center
                                                    ${quizAnswers[qIdx] === opt ? 'border-blue-500' : 'border-gray-300 group-hover:border-blue-400'}
                                                `}>
                                                    {quizAnswers[qIdx] === opt && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                                                </div>
                                                <input
                                                    type="radio"
                                                    name={`quiz-${qIdx}`}
                                                    value={opt}
                                                    checked={quizAnswers[qIdx] === opt}
                                                    onChange={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: opt }))}
                                                    className="hidden" // Hiding default radio for custom UI
                                                />
                                                <span className={`font-medium ${quizAnswers[qIdx] === opt ? 'text-blue-900' : 'text-gray-600'}`}>
                                                    {opt}
                                                </span>
                                            </label>
                                        ))
                                    ) : (
                                        <input
                                            type="text"
                                            placeholder="Type your answer here..."
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-lg"
                                            value={quizAnswers[qIdx] || ''}
                                            onChange={(e) => setQuizAnswers(prev => ({ ...prev, [qIdx]: e.target.value }))}
                                        />
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => checkAnswer(qIdx, q)}
                                        disabled={!quizAnswers[qIdx]}
                                        className={`
                                            px-8 py-3 rounded-xl font-bold shadow-lg transition-all transform active:scale-95
                                            ${!quizAnswers[qIdx]
                                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/30'}
                                        `}
                                    >
                                        Check Answer
                                    </button>

                                    {quizFeedback[qIdx] && (
                                        <div className={`
                                            px-4 py-2 rounded-lg font-bold flex items-center animate-in fade-in slide-in-from-right-4
                                            ${quizFeedback[qIdx].includes("Correct")
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"}
                                        `}>
                                            {quizFeedback[qIdx].includes("Correct") ? (
                                                <CheckCircle2 size={18} className="mr-2" />
                                            ) : (
                                                <X size={18} className="mr-2" />
                                            )}
                                            {quizFeedback[qIdx]}
                                        </div>
                                    )}
                                </div>

                                {q.explanation && quizFeedback[qIdx]?.includes("Correct") && (
                                    <div className="mt-6 p-5 bg-blue-50/50 rounded-xl border border-blue-100 text-sm text-blue-800 animate-in fade-in slide-in-from-top-2">
                                        <strong className="block mb-1 text-blue-900">Why?</strong> {q.explanation}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Navigation Footer */}
                <div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-200">
                    <button
                        onClick={() => {
                            if (currentSubLessonIndex > 0) {
                                setCurrentSubLessonIndex(prev => prev - 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        disabled={currentSubLessonIndex === 0}
                        className={`
                            px-6 py-3 rounded-xl font-medium transition-all flex items-center
                            ${currentSubLessonIndex === 0
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-600 hover:bg-white hover:shadow-md hover:text-blue-600 bg-gray-50'}
                        `}
                    >
                        <ChevronLeft size={20} className="mr-2" />
                        Previous Lesson
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
                        className="px-6 py-3 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all flex items-center"
                    >
                        {currentSubLessonIndex < subLessons.length - 1 ? (
                            <>
                                Next: {subLessons[currentSubLessonIndex + 1].title}
                                <ChevronLeft size={20} className="ml-2 rotate-180" />
                            </>
                        ) : (
                            <>
                                Complete Week
                                <CheckCircle2 size={20} className="ml-2" />
                            </>
                        )}
                    </button>
                </div>
            </main>
        </div>
    );
}
