import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TutorialSidebar from "@/components/TutorialSidebar";
import { allCourses, scratch2Lessons } from "@/lib/courses";

export default function Scratch2Tutorials() {
    return (
        <>
            <Navbar />
            <Hero title="Advanced Scratch Programming" subtitle="Take your Scratch skills to the next level with advanced concepts!" />
            <TutorialSidebar courses={allCourses} />

            <div style={{ maxWidth: "1200px", margin: "4rem auto", padding: "0 1rem" }}>
                <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "var(--primary)" }}>Advanced Lessons</h2>
                <div className="course-container" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                    {scratch2Lessons.map((lesson) => (
                        <div key={lesson.id} className="tutorial-item">
                            <Image src="/scratch.png" alt="Scratch Icon" width={50} height={50} />
                            <div className="lesson-title">{lesson.title}</div>
                            <div className="lesson-buttons">
                                <Link href={`/tutorials/scratch2/lesson/${lesson.id}`}><button>Start Lesson</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
