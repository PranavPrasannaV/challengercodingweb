import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <main>
            <div className="hero">
                <h1>About Us</h1>
                <p>Empowering the Next Generation of Coders</p>
            </div>

            <div className="about-us-container">
                <div className="header-section">
                    <h1>Our Mission</h1>
                    <p>
                        At Challenger Coding, our mission is to empower students of all ages to embrace coding and technology, equipping them with the skills they need to succeed in an increasingly digital world. We believe that coding is not just for computer scientists, but a valuable skill for everyone. By offering accessible and engaging tutorials, we aim to make coding fun and approachable for all.
                    </p>
                </div>

                <div className="founder-section">
                    <h2>Meet the Founder</h2>
                    <div className="founder-bio">
                        <Image src="/assets/jaden.jpg" alt="Jaden Tang" width={300} height={300} className="founder-image" />
                        <div>
                            <p>
                                Jaden founded Challenger Coding in the summer of 2023 after observing the lack of tailored, engaging coding resources for young learners. With a deep passion for technology, Jaden started his coding journey in 3rd grade with Scratch and has since learned multiple programming languages, earning the Microsoft Intro to Java Programming certification, scoring a 5 on the AP Computer Science A exam, and conducted AI research.
                            </p>
                            <br />
                            <p>
                                With extensive tutoring experience, Jaden is dedicated to breaking down barriers of educational access and hopes to inspire the next generation of coders. Outside of Challenger Coding, Jaden loves playing soccer, piano, and hanging out with friends and family.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="instructors-section">
                <h2>Meet Our Leadership:</h2>
                <div className="instructor-grid">
                    {/* VP of Education */}
                    <div className="instructor-box">
                        <h3>VP of Education</h3>
                        <p>Aadi Saraf</p>
                    </div>

                    {/* VP of Outreach */}
                    <div className="instructor-box">
                        <h3>VP of Outreach</h3>
                        <p>Ananya Denduluri</p>
                    </div>

                    {/* Webmaster */}
                    <div className="instructor-box">
                        <h3>Webmaster</h3>
                        <p>Miheer Pandya</p>
                    </div>

                    {/* Secretary */}
                    <div className="instructor-box">
                        <h3>Secretary</h3>
                        <p>Brinda Aniga</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
