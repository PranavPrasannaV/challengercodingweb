"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TutorialSidebar from "@/components/TutorialSidebar";
import { allCourses, pythonWeeks as pythonWeeksList } from "@/lib/courses";
import { pythonWeeks } from "@/lib/lessons/pythonLessons";

interface PageProps { params: Promise<{ id: string }>; }

export default function PythonWeekPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const weekId = parseInt(resolvedParams.id);
    const router = useRouter();
    const [currentExercise, setCurrentExercise] = useState(0);

    const week = pythonWeeks[weekId];
    const weekInfo = pythonWeeksList.find(w => w.id === weekId);

    useEffect(() => { if (!week) router.push("/tutorials/python"); }, [week, router]);
    if (!week || !weekInfo) return null;

    const exercises = week.exercises;

    return (
        <>
            <Navbar />
            <div style={{ height: "80px", background: "linear-gradient(135deg, var(--primary), var(--primary-dark))", marginTop: "80px" }}></div>
            <TutorialSidebar courses={allCourses} />

            <div className="tutorial-container">
                <aside className="tutorial-sidebar">
                    <h3 style={{ marginBottom: "1rem", color: "var(--primary)" }}>{weekInfo.title}</h3>
                    <div className="exercise-list">
                        {exercises.map((exercise, index) => (
                            <div key={index} className={`exercise-item ${currentExercise === index ? "active" : ""}`} onClick={() => setCurrentExercise(index)}>
                                <span>{exercise.title}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <button onClick={() => router.push("/tutorials/python")} style={{ width: "100%", padding: "0.75rem", background: "var(--primary)", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                            ← Back to Python
                        </button>
                    </div>
                </aside>

                <main className="tutorial-main">
                    <div className="tutorial-section" dangerouslySetInnerHTML={{ __html: exercises[currentExercise].content }} />
                </main>
            </div>
            <Footer />
        </>
    );
}
