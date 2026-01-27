import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TutorialSidebar from "@/components/TutorialSidebar";
import { allCourses, javaLessons, javaWeeks } from "@/lib/courses";

export default function JavaTutorials() {
    return (
        <>
            <Navbar />
            <Hero title="Java Programming Tutorials" subtitle="Master the fundamentals of Java, one of the most popular programming languages." />
            <TutorialSidebar courses={allCourses} />

            <div style={{ maxWidth: "1200px", margin: "4rem auto", padding: "0 1rem" }}>
                <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "var(--primary)" }}>Video Lessons</h2>
                <div className="course-container" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginBottom: "4rem" }}>
                    {javaLessons.map((lesson) => (
                        <div key={lesson.id} className="tutorial-item">
                            <Image src="/java.png" alt="Java Icon" width={50} height={50} />
                            <div className="lesson-title">{lesson.title}</div>
                            <div className="lesson-buttons">
                                <Link href={`/tutorials/java/lesson/${lesson.id}`}><button>Guided Tutorials</button></Link>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "var(--primary)" }}>Weekly Exercises</h2>
                <div className="course-container" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginBottom: "4rem" }}>
                    {javaWeeks.map((week) => (
                        <div key={week.id} className="tutorial-item">
                            <Image src="/java.png" alt="Java Icon" width={50} height={50} />
                            <div className="lesson-title">{week.title}</div>
                            <div className="lesson-buttons">
                                <Link href={`/tutorials/java/week/${week.id}`}><button>Start Exercises</button></Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Link href="/tutorials/java/test">
                        <button style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "var(--accent)", color: "white", border: "none", borderRadius: "12px", cursor: "pointer" }}>
                            Take Practice Test
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}
