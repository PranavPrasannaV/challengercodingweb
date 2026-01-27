import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function PythonTest() {
    return (
        <>
            <Navbar />
            <Hero title="Python Practice Test" subtitle="Test your Python programming knowledge" />
            <div style={{ maxWidth: "800px", margin: "4rem auto", padding: "2rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "var(--primary)", marginBottom: "2rem" }}>Coming Soon!</h2>
                <p>The Python practice test is currently under development. Check back soon to test your skills!</p>
                <a href="/tutorials/python" style={{ display: "inline-block", marginTop: "2rem", padding: "1rem 2rem", background: "var(--primary)", color: "white", textDecoration: "none", borderRadius: "8px" }}>
                    Back to Python Tutorials
                </a>
            </div>
            <Footer />
        </>
    );
}
