"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { courses } from '@/src/data/courses';
// Import lesson data
import { scratchLesson1 } from '@/src/data/lessons/scratch/lesson1';
import { javaLesson1 } from '@/src/data/lessons/java/lesson1';
import { pythonLesson1 } from '@/src/data/lessons/python/lesson1';

// Map for lesson data
const lessonMap: Record<string, any> = {
    'scratch-1': scratchLesson1, // Scratch Course ID is 'scratch', Lesson ID is '1'
    'java-1': javaLesson1,       // Java Course ID is 'java', Lesson ID is '1'
    'python-1': pythonLesson1    // Python Course ID is 'python', Lesson ID is '1'
    // Add other lessons here as they are migrated
};

export default function LessonViewerClient({ params }: { params: { courseId: string; lessonId: string } }) {
    const router = useRouter();
    const { courseId, lessonId } = params;

    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [lessonData, setLessonData] = useState<any[] | null>(null);

    // States for interactive elements
    const [autograderInput, setAutograderInput] = useState('');
    const [autograderFeedback, setAutograderFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizScore, setQuizScore] = useState<{ score: number; total: number } | null>(null);

    useEffect(() => {
        // Find the lesson data based on course and lesson ID
        const key = `${courseId}-${lessonId}`;
        if (lessonMap[key]) {
            setLessonData(lessonMap[key]);
        } else {
            console.warn(`Lesson data not found for ${key}`);
        }
    }, [courseId, lessonId]);

    // Reset interactive states when exercise changes
    useEffect(() => {
        setAutograderInput('');
        setAutograderFeedback(null);
        setQuizAnswers({});
        setQuizSubmitted(false);
        setQuizScore(null);
    }, [currentExerciseIndex]);

    if (!lessonData) {
        return (
            <div className="p-8 text-center min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Lesson Not Found or Under Construction</h1>
                <p>We are working on migrating this lesson.</p>
                <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Go Back
                </button>
            </div>
        );
    }

    const currentExercise = lessonData[currentExerciseIndex];

    // Autograder Logic
    const handleCheckOutput = () => {
        if (!currentExercise.expectedOutput) return;

        const userOutput = autograderInput.trim();
        const expectedOutput = currentExercise.expectedOutput.trim();

        if (userOutput === expectedOutput) {
            setAutograderFeedback({ message: "Success! Your output matches the expected result.", type: 'success' });
        } else {
            setAutograderFeedback({
                message: `Not quite there yet.\n\nExpected output:\n${expectedOutput}\n\nYour output:\n${userOutput}`,
                type: 'error'
            });
        }
    };

    // Quiz Logic
    const handleQuizOptionChange = (questionIndex: number, value: string) => {
        setQuizAnswers(prev => ({ ...prev, [questionIndex]: value }));
    };

    const handleSubmitQuiz = () => {
        if (!currentExercise.quiz) return;

        let correctCount = 0;
        currentExercise.quiz.forEach((q: any, index: number) => {
            if (quizAnswers[index] === q.correctAnswer) {
                correctCount++;
            }
        });

        setQuizScore({ score: correctCount, total: currentExercise.quiz.length });
        setQuizSubmitted(true);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#F0F4F8] p-4 lg:p-8 gap-6 max-w-[1600px] mx-auto">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-72 bg-white rounded-xl shadow-md border border-gray-200 p-4 h-fit lg:sticky lg:top-[120px] max-h-[80vh] overflow-y-auto">
                <h3 className="font-bold text-gray-700 mb-4 px-2 uppercase text-sm tracking-wider">Table of Contents</h3>
                <div className="flex flex-col gap-2">
                    {lessonData.map((exercise, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentExerciseIndex(index)}
                            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 border text-sm font-medium ${currentExerciseIndex === index
                                ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm'
                                : 'bg-white hover:bg-gray-50 text-gray-600 border-transparent hover:border-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${currentExerciseIndex === index ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-500'}`}>
                                    {index + 1}
                                </span>
                                <span>{exercise.title}</span>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={() => router.push(`/tutorials/${courseId}`)}
                        className="w-full mt-6 p-3 rounded-lg border border-gray-200 bg-white hover:bg-red-50 text-gray-600 hover:text-red-600 font-medium text-sm transition-colors text-left flex items-center gap-2 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Course
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-5xl">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 lg:p-10 min-h-[500px]">
                    {/* Render HTML content */}
                    <div
                        className="prose max-w-none mb-8"
                        dangerouslySetInnerHTML={{ __html: currentExercise.content }}
                    />


                    {/* Initial Code Display (if any) */}
                    {currentExercise.initialCode && (
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-700 mb-2">Starter Code:</h4>
                            <pre className="bg-gray-100 p-4 rounded-lg border border-gray-200 overflow-x-auto text-sm font-mono relative group">
                                <code>{currentExercise.initialCode}</code>
                                <button
                                    onClick={() => navigator.clipboard.writeText(currentExercise.initialCode)}
                                    className="absolute top-2 right-2 px-2 py-1 bg-white border border-gray-300 rounded text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                                >
                                    Copy
                                </button>
                            </pre>
                        </div>
                    )}

                    {/* Compiler Section */}
                    {currentExercise.showCompiler && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="text-blue-600">&lt;/&gt;</span> Code Editor
                            </h3>
                            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                                <iframe
                                    src="https://www.jdoodle.com/embed/v0/"
                                    title="Online Compiler"
                                    className="w-full h-[500px]"
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Autograder Section */}
                    {currentExercise.showAutograder && (
                        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span>✅</span> Autograder
                            </h3>
                            <p className="text-gray-600 mb-2">Paste the output from your code above to check if it matches the expected result.</p>
                            <textarea
                                value={autograderInput}
                                onChange={(e) => setAutograderInput(e.target.value)}
                                placeholder="Paste your code output here..."
                                className="w-full h-32 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
                            />
                            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <button
                                    onClick={handleCheckOutput}
                                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                                >
                                    Check Output
                                </button>
                                {autograderFeedback && (
                                    <div className={`p-3 rounded-lg text-sm whitespace-pre-wrap ${autograderFeedback.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                                        {autograderFeedback.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Quiz Section */}
                    {currentExercise.quiz && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span>📝</span> Knowledge Check
                            </h3>
                            <div className="space-y-6">
                                {currentExercise.quiz.map((q: any, qIndex: number) => (
                                    <div key={qIndex} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                        <p className="font-semibold text-gray-800 mb-4 text-lg">{q.question}</p>
                                        <div className="space-y-3">
                                            {q.options.map((option: any, oIndex: number) => (
                                                <label key={oIndex} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${quizSubmitted
                                                    ? option.value === q.correctAnswer
                                                        ? 'bg-green-100 border-green-300'
                                                        : quizAnswers[qIndex] === option.value
                                                            ? 'bg-red-100 border-red-300'
                                                            : 'bg-white border-gray-200 opacity-60'
                                                    : 'bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                                                    }`}>
                                                    <input
                                                        type="radio"
                                                        name={`question-${qIndex}`}
                                                        value={option.value}
                                                        checked={quizAnswers[qIndex] === option.value}
                                                        onChange={() => !quizSubmitted && handleQuizOptionChange(qIndex, option.value)}
                                                        disabled={quizSubmitted}
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-gray-700">{option.label}</span>
                                                    {quizSubmitted && option.value === q.correctAnswer && (
                                                        <span className="ml-auto text-green-600 text-sm font-bold">Correct Answer</span>
                                                    )}
                                                    {quizSubmitted && quizAnswers[qIndex] === option.value && option.value !== q.correctAnswer && (
                                                        <span className="ml-auto text-red-600 text-sm font-bold">Your Answer</span>
                                                    )}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {!quizSubmitted ? (
                                <button
                                    onClick={handleSubmitQuiz}
                                    disabled={Object.keys(quizAnswers).length !== currentExercise.quiz.length}
                                    className={`mt-6 px-8 py-3 rounded-lg font-bold text-white shadow-md transition-all ${Object.keys(quizAnswers).length === currentExercise.quiz.length
                                        ? 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1'
                                        : 'bg-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    Submit Quiz
                                </button>
                            ) : (
                                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                                    <h4 className="text-2xl font-bold text-blue-800 mb-2">Quiz Results</h4>
                                    <p className="text-xl text-blue-600">
                                        You scored {quizScore?.score} out of {quizScore?.total}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setQuizSubmitted(false);
                                            setQuizAnswers({});
                                            setQuizScore(null);
                                        }}
                                        className="mt-4 px-6 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        Retake Quiz
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        onClick={() => {
                            setCurrentExerciseIndex(prev => Math.max(0, prev - 1));
                            window.scrollTo(0, 0);
                        }}
                        disabled={currentExerciseIndex === 0}
                        className={`px-6 py-3 rounded-xl font-semibold shadow-sm transition-all flex items-center gap-2 ${currentExerciseIndex === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 border border-gray-200'
                            }`}
                    >
                        <span>←</span> Previous
                    </button>

                    <button
                        onClick={() => {
                            setCurrentExerciseIndex(prev => Math.min(lessonData.length - 1, prev + 1));
                            window.scrollTo(0, 0);
                        }}
                        disabled={currentExerciseIndex === lessonData.length - 1}
                        className={`px-6 py-3 rounded-xl font-semibold shadow-sm transition-all flex items-center gap-2 ${currentExerciseIndex === lessonData.length - 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                            }`}
                    >
                        Next <span>→</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
