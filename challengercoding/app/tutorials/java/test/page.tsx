import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function JavaTest() {
    return (
        <>
            <Navbar />
            <Hero title="Java Practice Test" subtitle="Test your Java programming knowledge" />
            <div style={{ maxWidth: "800px", margin: "4rem auto", padding: "2rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "var(--primary)", marginBottom: "2rem" }}>Coming Soon!</h2>
                <p>The Java practice test is currently under development. Check back soon to test your skills!</p>
                <a href="/tutorials/java" style={{ display: "inline-block", marginTop: "2rem", padding: "1rem 2rem", background: "var(--primary)", color: "white", textDecoration: "none", borderRadius: "8px" }}>
                    Back to Java Tutorials
                </a>
            </div>
            <Footer />
        </>
    );
}
