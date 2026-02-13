"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { courses } from '@/src/data/courses';
import { scratchLesson1 } from '@/src/data/lessons/scratch/lesson1';
import { javaLesson1 } from '@/src/data/lessons/java/lesson1';
import { pythonLesson1 } from '@/src/data/lessons/python/lesson1';
import {
    ChevronLeft,
    ChevronRight,
    PlayCircle,
    CheckCircle2,
    Clipboard,
    Terminal,
    Award,
    BookOpen,
    ArrowLeft
} from 'lucide-react';

const lessonMap: Record<string, any> = {
    'scratch-1': scratchLesson1,
    'java-1': javaLesson1,
    'python-1': pythonLesson1
};

export default function LessonViewerClient({ params }: { params: { courseId: string; lessonId: string } }) {
    const router = useRouter();
    const { courseId, lessonId } = params;

    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [lessonData, setLessonData] = useState<any[] | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // States for interactive elements
    const [autograderInput, setAutograderInput] = useState('');
    const [autograderFeedback, setAutograderFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizScore, setQuizScore] = useState<{ score: number; total: number } | null>(null);
    const [copyFeedback, setCopyFeedback] = useState(false);

    useEffect(() => {
        const key = `${courseId}-${lessonId}`;
        if (lessonMap[key]) {
            setLessonData(lessonMap[key]);
        }
    }, [courseId, lessonId]);

    useEffect(() => {
        setAutograderInput('');
        setAutograderFeedback(null);
        setQuizAnswers({});
        setQuizSubmitted(false);
        setQuizScore(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentExerciseIndex]);

    if (!lessonData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6 max-w-lg">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary">
                        <BookOpen className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl font-bold text-secondary font-poppins font-bold">Lesson Under Construction</h1>
                    <p className="text-text-light">We are working hard to bring you this content. Check back soon!</p>
                    <button
                        onClick={() => router.back()}
                        className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
                    >
                        Return to Catalog
                    </button>
                </div>
            </div>
        );
    }

    const currentExercise = lessonData[currentExerciseIndex];

    const handleCheckOutput = () => {
        if (!currentExercise.expectedOutput) return;
        const userOutput = autograderInput.trim();
        const expectedOutput = currentExercise.expectedOutput.trim();
        if (userOutput === expectedOutput) {
            setAutograderFeedback({ message: "Excellent! Your output is perfectly matched.", type: 'success' });
        } else {
            setAutograderFeedback({
                message: `The output doesn't quite match. Check for exact spacing and characters.`,
                type: 'error'
            });
        }
    };

    const handleQuizOptionChange = (questionIndex: number, value: string) => {
        setQuizAnswers(prev => ({ ...prev, [questionIndex]: value }));
    };

    const handleSubmitQuiz = () => {
        if (!currentExercise.quiz) return;
        let correctCount = 0;
        currentExercise.quiz.forEach((q: any, index: number) => {
            if (quizAnswers[index] === q.correctAnswer) correctCount++;
        });
        setQuizScore({ score: correctCount, total: currentExercise.quiz.length });
        setQuizSubmitted(true);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Progress Sidebar */}
                    <aside className="w-full lg:w-80 lg:sticky lg:top-32 space-y-6">
                        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-xl overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-primary/5">
                                <h3 className="font-bold text-secondary text-sm uppercase tracking-widest font-poppins">Curriculum</h3>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                                    {currentExerciseIndex + 1}/{lessonData.length}
                                </span>
                            </div>
                            <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
                                {lessonData.map((exercise, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentExerciseIndex(index)}
                                        className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 group ${currentExerciseIndex === index
                                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                                : 'bg-white/50 hover:bg-white text-text-light hover:text-secondary border border-transparent hover:border-gray-200'
                                            }`}
                                    >
                                        <span className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 ${currentExerciseIndex === index ? 'bg-white text-primary' : 'bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
                                            }`}>
                                            {index + 1}
                                        </span>
                                        <span className="font-medium text-sm leading-snug">{exercise.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => router.push(`/tutorials/${courseId}`)}
                            className="w-full p-4 rounded-2xl bg-white border border-gray-200 text-text-light hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center gap-2 group shadow-sm text-sm font-semibold"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Return to Course Hub
                        </button>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl overflow-hidden">
                            <div className="p-8 md:p-12">
                                <header className="mb-10 space-y-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase">
                                        <span className="w-8 h-1 bg-primary rounded-full" />
                                        Lesson {lessonId} • {currentExercise.title}
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-bold text-secondary font-poppins leading-tight">
                                        {currentExercise.title}
                                    </h1>
                                </header>

                                {/* Content Rendering */}
                                <div className="prose prose-blue max-w-none text-text leading-relaxed prose-headings:font-poppins prose-headings:text-secondary prose-a:text-primary prose-strong:text-secondary mb-12">
                                    <div dangerouslySetInnerHTML={{ __html: currentExercise.content }} />
                                </div>

                                {/* Starter Code */}
                                {currentExercise.initialCode && (
                                    <div className="group relative mt-10 rounded-[1.5rem] overflow-hidden border border-gray-200 shadow-lg">
                                        <div className="bg-gray-100 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                                <span className="ml-2 text-xs font-bold text-gray-500 uppercase tracking-widest font-poppins">Starter Code</span>
                                            </div>
                                            <button
                                                onClick={() => handleCopy(currentExercise.initialCode)}
                                                className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors px-3 py-1 rounded-full bg-primary/10"
                                            >
                                                {copyFeedback ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clipboard className="w-3.5 h-3.5" />}
                                                {copyFeedback ? 'Copied!' : 'Copy Snippet'}
                                            </button>
                                        </div>
                                        <pre className="p-6 bg-secondary text-gray-300 font-mono text-sm overflow-x-auto">
                                            <code>{currentExercise.initialCode}</code>
                                        </pre>
                                    </div>
                                )}

                                {/* Interactive Modules */}
                                <div className="space-y-12 mt-12 pt-12 border-t border-gray-100">

                                    {/* Compiler */}
                                    {currentExercise.showCompiler && (
                                        <section className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                                                    <Terminal className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-secondary font-poppins">Live Playground</h3>
                                                    <p className="text-sm text-text-light">Experiment with your code in real-time below</p>
                                                </div>
                                            </div>
                                            <div className="rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl bg-white p-2">
                                                <iframe src="https://www.jdoodle.com/embed/v0/" title="Compiler" className="w-full h-[600px] rounded-[1.5rem]" />
                                            </div>
                                        </section>
                                    )}

                                    {/* Autograder */}
                                    {currentExercise.showAutograder && (
                                        <section className="bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-[2rem] p-8 md:p-10 border border-blue-100 space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-blue-100">
                                                    <Award className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-secondary font-poppins">Output Verification</h3>
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-text font-medium">Expected Result:</p>
                                                <div className="bg-secondary text-white p-4 rounded-xl font-mono text-sm shadow-inner italic">
                                                    {currentExercise.expectedOutput}
                                                </div>
                                                <p className="text-text font-medium pt-2">Paste your output here:</p>
                                                <textarea
                                                    value={autograderInput}
                                                    onChange={(e) => setAutograderInput(e.target.value)}
                                                    className="w-full h-32 p-6 bg-white border border-blue-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-mono text-sm shadow-sm"
                                                    placeholder="Enter exact output..."
                                                />
                                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                                                    <button
                                                        onClick={handleCheckOutput}
                                                        className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all shrink-0"
                                                    >
                                                        Run Verification
                                                    </button>
                                                    {autograderFeedback && (
                                                        <div className={`p-4 rounded-2xl flex items-center gap-3 animate-in zoom-in duration-300 ${autograderFeedback.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
                                                            }`}>
                                                            {autograderFeedback.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                                                            <span className="text-sm font-semibold">{autograderFeedback.message}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </section>
                                    )}

                                    {/* Quiz */}
                                    {currentExercise.quiz && (
                                        <section className="space-y-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shadow-sm border border-accent/20">
                                                    <PlayCircle className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-secondary font-poppins">Knowledge Check</h3>
                                            </div>

                                            <div className="space-y-6">
                                                {currentExercise.quiz.map((q: any, qIndex: number) => (
                                                    <div key={qIndex} className="bg-gray-50/50 border border-gray-100 p-8 rounded-[2rem] space-y-6 shadow-sm">
                                                        <p className="text-lg font-bold text-secondary">{q.question}</p>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {q.options.map((option: any, oIndex: number) => {
                                                                const isSelected = quizAnswers[qIndex] === option.value;
                                                                const isCorrect = option.value === q.correctAnswer;
                                                                let style = "bg-white border-gray-200 hover:border-primary/30 hover:shadow-md";
                                                                if (quizSubmitted) {
                                                                    if (isCorrect) style = "bg-green-100 border-green-300 text-green-800";
                                                                    else if (isSelected) style = "bg-red-100 border-red-300 text-red-800";
                                                                    else style = "bg-white border-gray-100 opacity-60";
                                                                } else if (isSelected) {
                                                                    style = "bg-primary/5 border-primary text-primary shadow-lg shadow-primary/10";
                                                                }

                                                                return (
                                                                    <button
                                                                        key={oIndex}
                                                                        onClick={() => !quizSubmitted && handleQuizOptionChange(qIndex, option.value)}
                                                                        disabled={quizSubmitted}
                                                                        className={`p-6 rounded-2xl border-2 text-left font-medium transition-all flex justify-between items-center group ${style}`}
                                                                    >
                                                                        {option.label}
                                                                        {quizSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                                                                        {quizSubmitted && isSelected && !isCorrect && <AlertCircle className="w-5 h-5 text-red-600" />}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {!quizSubmitted ? (
                                                <button
                                                    onClick={handleSubmitQuiz}
                                                    disabled={Object.keys(quizAnswers).length !== currentExercise.quiz.length}
                                                    className="px-12 py-4 bg-secondary text-white rounded-2xl font-bold shadow-xl shadow-secondary/20 hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed mx-auto block"
                                                >
                                                    Submit Assessment
                                                </button>
                                            ) : (
                                                <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-10 text-center space-y-6 shadow-xl animate-in zoom-in duration-500">
                                                    <div className="text-5xl font-bold font-poppins text-primary">
                                                        {quizScore?.score} / {quizScore?.total}
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-xl font-bold text-secondary">Quiz Finalized!</p>
                                                        <p className="text-text-light">You&apos;ve completed the knowledge check for this section.</p>
                                                    </div>
                                                    <button
                                                        onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); setQuizScore(null); }}
                                                        className="text-primary font-bold hover:underline"
                                                    >
                                                        Retry Assessment
                                                    </button>
                                                </div>
                                            )}
                                        </section>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Footer */}
                        <footer className="flex justify-between items-center pt-8">
                            <button
                                onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
                                disabled={currentExerciseIndex === 0}
                                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 group ${currentExerciseIndex === 0 ? 'text-gray-300 bg-gray-100 cursor-not-allowed' : 'bg-white text-secondary hover:text-primary hover:shadow-xl border border-gray-200'
                                    }`}
                            >
                                <ChevronLeft className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${currentExerciseIndex === 0 ? '' : 'text-primary'}`} />
                                Previous
                            </button>

                            <button
                                onClick={() => setCurrentExerciseIndex(prev => Math.min(lessonData.length - 1, prev + 1))}
                                disabled={currentExerciseIndex === lessonData.length - 1}
                                className={`px-10 py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center gap-2 group ${currentExerciseIndex === lessonData.length - 1
                                        ? 'text-gray-300 bg-gray-100 cursor-not-allowed'
                                        : 'bg-primary text-white hover:bg-primary-dark shadow-primary/25 hover:shadow-primary/40'
                                    }`}
                            >
                                {currentExerciseIndex === lessonData.length - 1 ? 'Last Lesson reached' : 'Continue'}
                                {currentExerciseIndex < lessonData.length - 1 && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}

// Simple Helper for Alert (Used but not imported correctly in quick swap, fixing here)
function AlertCircle(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    )
}
