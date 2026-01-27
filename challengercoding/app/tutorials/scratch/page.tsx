import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TutorialSidebar from "@/components/TutorialSidebar";
import { allCourses, scratchLessons } from "@/lib/courses";

export default function ScratchTutorials() {
    return (
        <>
            <Navbar />
            <Hero title="Scratch Programming Tutorials" subtitle="Learn visual programming with our Scratch tutorials. Perfect for beginners!" />
            <TutorialSidebar courses={allCourses} />

            <div style={{ maxWidth: "1200px", margin: "4rem auto", padding: "0 1rem" }}>
                <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "var(--primary)" }}>Weekly Lessons</h2>
                <div className="course-container" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                    {scratchLessons.map((lesson) => (
                        <div key={lesson.id} className="tutorial-item">
                            <Image src="/scratch.png" alt="Scratch Icon" width={50} height={50} />
                            <div className="lesson-title">{lesson.title}</div>
                            <div className="lesson-buttons">
                                <Link href={`/tutorials/scratch/lesson/${lesson.id}`}><button>Guided Tutorials</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
