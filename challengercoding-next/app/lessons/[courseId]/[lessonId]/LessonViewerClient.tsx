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
                <div className="bg-surface hairline rounded-xl max-w-lg w-full p-12 text-center space-y-6">
                    <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h1 className="text-h2 font-serif font-bold text-text">Lesson Under Construction</h1>
                    <p className="text-body text-text-secondary">We are working hard to bring you this content. Check back soon!</p>
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-colors"
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
                        <div className="bg-surface hairline rounded-xl overflow-hidden">
                            <div className="p-6 border-b border-border flex items-center justify-between">
                                <h3 className="font-bold text-text text-sm uppercase tracking-wider font-sans">Curriculum</h3>
                                <span className="text-xs font-bold text-primary bg-alt-bg px-2 py-1 rounded-md">
                                    {currentExerciseIndex + 1}/{lessonData.length}
                                </span>
                            </div>
                            <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
                                {lessonData.map((exercise, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentExerciseIndex(index)}
                                        className={`w-full text-left p-4 rounded-lg transition-colors flex items-start gap-4 ${
                                            currentExerciseIndex === index
                                                ? 'bg-primary text-white'
                                                : 'bg-surface hover:bg-alt-bg text-text-secondary hover:text-text border border-border'
                                        }`}
                                    >
                                        <span className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                                            currentExerciseIndex === index
                                                ? 'bg-white text-primary'
                                                : 'bg-alt-bg text-text-secondary'
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
                            className="w-full py-3 bg-surface hairline rounded-lg text-text-secondary hover:text-text hover:bg-alt-bg transition-colors text-sm font-semibold flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Return to Course Hub
                        </button>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 w-full space-y-8">
                        <div className="bg-surface hairline rounded-xl overflow-hidden">
                            <div className="p-8 md:p-12">
                                <header className="mb-10 space-y-4">
                                    <div className="text-primary font-bold text-sm tracking-wider uppercase">
                                        Lesson {lessonId} &bull; {currentExercise.title}
                                    </div>
                                    <h1 className="text-h1 font-serif font-bold text-text leading-tight">
                                        {currentExercise.title}
                                    </h1>
                                </header>

                                {/* Content Rendering */}
                                <div className="prose prose-blue max-w-none text-text leading-relaxed prose-headings:font-serif prose-headings:text-text prose-a:text-primary prose-strong:text-text mb-12">
                                    <div dangerouslySetInnerHTML={{ __html: currentExercise.content }} />
                                </div>

                                {/* Starter Code */}
                                {currentExercise.initialCode && (
                                    <div className="hairline rounded-lg overflow-hidden mt-10">
                                        <div className="bg-alt-bg px-6 py-3 flex items-center justify-between border-b border-border">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                                <span className="ml-2 text-xs font-bold text-text-secondary uppercase tracking-widest font-sans">Starter Code</span>
                                            </div>
                                            <button
                                                onClick={() => handleCopy(currentExercise.initialCode)}
                                                className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
                                            >
                                                {copyFeedback ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clipboard className="w-3.5 h-3.5" />}
                                                {copyFeedback ? 'Copied!' : 'Copy Snippet'}
                                            </button>
                                        </div>
                                        <pre className="p-6 bg-dark-bg text-gray-300 font-mono text-sm overflow-x-auto">
                                            <code>{currentExercise.initialCode}</code>
                                        </pre>
                                    </div>
                                )}

                                {/* Interactive Modules */}
                                <div className="space-y-12 mt-12 pt-12 border-t border-border">

                                    {/* Compiler */}
                                    {currentExercise.showCompiler && (
                                        <section className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <Terminal className="w-6 h-6 text-primary" />
                                                <div>
                                                    <h3 className="text-h3 font-serif font-bold text-text">Live Playground</h3>
                                                    <p className="text-small text-text-secondary">Experiment with your code in real-time below</p>
                                                </div>
                                            </div>
                                            <div className="hairline rounded-lg overflow-hidden">
                                                <iframe src="https://www.jdoodle.com/embed/v0/" title="Compiler" className="w-full h-[600px]" />
                                            </div>
                                        </section>
                                    )}

                                    {/* Autograder */}
                                    {currentExercise.showAutograder && (
                                        <section className="bg-background hairline rounded-xl p-8 space-y-6">
                                            <div className="flex items-center gap-3">
                                                <Award className="w-6 h-6 text-primary" />
                                                <h3 className="text-h3 font-serif font-bold text-text">Output Verification</h3>
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-text font-medium">Expected Result:</p>
                                                <div className="bg-dark-bg text-white p-4 rounded-lg font-mono text-sm italic">
                                                    {currentExercise.expectedOutput}
                                                </div>
                                                <p className="text-text font-medium pt-2">Paste your output here:</p>
                                                <textarea
                                                    value={autograderInput}
                                                    onChange={(e) => setAutograderInput(e.target.value)}
                                                    className="w-full h-32 p-6 bg-surface hairline rounded-lg outline-none font-mono text-sm"
                                                    placeholder="Enter exact output..."
                                                />
                                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                                                    <button
                                                        onClick={handleCheckOutput}
                                                        className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-colors shrink-0"
                                                    >
                                                        Run Verification
                                                    </button>
                                                    {autograderFeedback && (
                                                        <div className={`p-4 rounded-lg flex items-center gap-3 ${
                                                            autograderFeedback.type === 'success'
                                                                ? 'bg-sage/10 border border-sage/20 text-sage'
                                                                : 'bg-error/10 border border-error/20 text-error'
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
                                                <PlayCircle className="w-6 h-6 text-primary" />
                                                <h3 className="text-h3 font-serif font-bold text-text">Knowledge Check</h3>
                                            </div>

                                            <div className="space-y-6">
                                                {currentExercise.quiz.map((q: any, qIndex: number) => (
                                                    <div key={qIndex} className="bg-surface hairline rounded-xl p-8 space-y-6">
                                                        <p className="text-lg font-bold text-text">{q.question}</p>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {q.options.map((option: any, oIndex: number) => {
                                                                const isSelected = quizAnswers[qIndex] === option.value;
                                                                const isCorrect = option.value === q.correctAnswer;
                                                                let style = "bg-surface border-border hover:bg-alt-bg text-text-secondary rounded-lg";
                                                                if (quizSubmitted) {
                                                                    if (isCorrect) style = "bg-sage/10 border-sage text-sage rounded-lg";
                                                                    else if (isSelected) style = "bg-error/10 border-error text-error rounded-lg";
                                                                    else style = "bg-surface border-border text-text-secondary/50 rounded-lg";
                                                                } else if (isSelected) {
                                                                    style = "bg-primary/5 border-primary text-primary rounded-lg";
                                                                }

                                                                return (
                                                                    <button
                                                                        key={oIndex}
                                                                        onClick={() => !quizSubmitted && handleQuizOptionChange(qIndex, option.value)}
                                                                        disabled={quizSubmitted}
                                                                        className={`p-6 rounded-lg border-2 text-left font-medium transition-colors flex justify-between items-center ${style}`}
                                                                    >
                                                                        {option.label}
                                                                        {quizSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-sage" />}
                                                                        {quizSubmitted && isSelected && !isCorrect && <AlertCircle className="w-5 h-5 text-error" />}
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
                                                    className="px-12 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed mx-auto block"
                                                >
                                                    Submit Assessment
                                                </button>
                                            ) : (
                                                <div className="bg-background hairline rounded-xl p-10 text-center space-y-6">
                                                    <div className="text-h1 font-serif font-bold text-primary">
                                                        {quizScore?.score} / {quizScore?.total}
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-xl font-bold text-text">Quiz Finalized!</p>
                                                        <p className="text-text-secondary">You&apos;ve completed the knowledge check for this section.</p>
                                                    </div>
                                                    <button
                                                        onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); setQuizScore(null); }}
                                                        className="text-primary font-semibold hover:underline"
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
                                className={`py-3 px-8 rounded-lg font-bold transition-colors flex items-center gap-2 ${
                                    currentExerciseIndex === 0
                                        ? 'text-gray-300 bg-alt-bg cursor-not-allowed'
                                        : 'bg-surface border-border text-text-secondary hover:bg-alt-bg'
                                }`}
                            >
                                <ChevronLeft className={`w-5 h-5 ${currentExerciseIndex === 0 ? '' : 'text-primary'}`} />
                                Previous
                            </button>

                            <button
                                onClick={() => setCurrentExerciseIndex(prev => Math.min(lessonData.length - 1, prev + 1))}
                                disabled={currentExerciseIndex === lessonData.length - 1}
                                className={`py-3 px-10 rounded-lg font-bold transition-colors flex items-center gap-2 ${
                                    currentExerciseIndex === lessonData.length - 1
                                        ? 'text-gray-300 bg-alt-bg cursor-not-allowed'
                                        : 'bg-primary hover:bg-primary-hover text-white'
                                }`}
                            >
                                {currentExerciseIndex === lessonData.length - 1 ? 'Last Lesson reached' : 'Continue'}
                                {currentExerciseIndex < lessonData.length - 1 && <ChevronRight className="w-5 h-5" />}
                            </button>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}

// Simple Helper for Alert
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
