"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TutorialSidebar from "@/components/TutorialSidebar";
import { allCourses, scratchLessons as scratchLessonsList } from "@/lib/courses";
import { scratchLessons } from "@/lib/lessons/scratchLessons";

interface PageProps { params: Promise<{ id: string }>; }

export default function ScratchLessonPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const lessonId = parseInt(resolvedParams.id);
    const router = useRouter();
    const [currentExercise, setCurrentExercise] = useState(0);

    const lesson = scratchLessons[lessonId];
    const lessonInfo = scratchLessonsList.find(l => l.id === lessonId);

    useEffect(() => { if (!lesson) router.push("/tutorials/scratch"); }, [lesson, router]);
    if (!lesson || !lessonInfo) return null;

    const exercises = lesson.exercises;

    return (
        <>
            <Navbar />
            <div style={{ height: "80px", background: "linear-gradient(135deg, var(--primary), var(--primary-dark))", marginTop: "80px" }}></div>
            <TutorialSidebar courses={allCourses} />

            <div className="tutorial-container">
                <aside className="tutorial-sidebar">
                    <h3 style={{ marginBottom: "1rem", color: "var(--primary)" }}>{lessonInfo.title}</h3>
                    <div className="exercise-list">
                        {exercises.map((exercise, index) => (
                            <div key={index} className={`exercise-item ${currentExercise === index ? "active" : ""}`} onClick={() => setCurrentExercise(index)}>
                                <span>{exercise.title}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <button onClick={() => router.push("/tutorials/scratch")} style={{ width: "100%", padding: "0.75rem", background: "var(--primary)", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                            ← Back to Scratch
                        </button>
                    </div>
                </aside>

                <main className="tutorial-main">
                    <div className="tutorial-section" dangerouslySetInnerHTML={{ __html: exercises[currentExercise].content }} />
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                        <button onClick={() => setCurrentExercise(Math.max(0, currentExercise - 1))} disabled={currentExercise === 0}
                            style={{ padding: "0.75rem 1.5rem", background: currentExercise === 0 ? "#ccc" : "var(--primary)", color: "white", border: "none", borderRadius: "8px", cursor: currentExercise === 0 ? "not-allowed" : "pointer" }}>
                            ← Previous
                        </button>
                        <button onClick={() => setCurrentExercise(Math.min(exercises.length - 1, currentExercise + 1))} disabled={currentExercise === exercises.length - 1}
                            style={{ padding: "0.75rem 1.5rem", background: currentExercise === exercises.length - 1 ? "#ccc" : "var(--primary)", color: "white", border: "none", borderRadius: "8px", cursor: currentExercise === exercises.length - 1 ? "not-allowed" : "pointer" }}>
                            Next →
                        </button>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
