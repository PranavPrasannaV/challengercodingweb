"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Can use Next.js Image for optimization, but standard img is fine for strict migration

export default function Home() {
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    // Determine user count logic - checking localStorage as per original script
    const count = localStorage.getItem('userCount') || '0';
    setUserCount(parseInt(count, 10));

    // Initialize Lucide icons
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  // Carousel Logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Based on index.html content

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="hero">
        <h1>Welcome to <span style={{ color: '#FFC107' }}>Challenger Coding!</span></h1>
        <p>Code with Confidence.</p>
        <p>Interactive tutorials, projects, and real learning – all in one place.</p>
        <div className="hero-button">
          <button onClick={() => window.location.href = '/signup'}>Start Learning Today, For Free!</button>
        </div>
      </div>

      <div className="impact-section">
        <div className="impact-box">
          <i data-lucide="users"></i>
          <h3>1000+</h3>
          <p>Students Taught</p>
        </div>
        <div className="impact-box">
          <i data-lucide="hourglass"></i>
          <h3>50+</h3>
          <p>Hours of Course Content</p>
        </div>
        <div className="impact-box">
          <i data-lucide="school"></i>
          <h3>6</h3>
          <p>Unique Courses</p>
        </div>
      </div>

      <div className="main-content">
        <div className="mission-statement full-width">
          <strong>Our Mission</strong>
          <p>At Challenger Coding, we empower students of all ages to embrace coding, equipping them with skills for a digital world.</p>
          <p>Coding is valuable for everyone, and we make it accessible and fun through interactive tutorials.</p>
        </div>
      </div>

      <div className="carousel">
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="carousel-item">
            <Image src="/assets/lesson preview.png" alt="Hands-on Coding Exercise" width={800} height={400} />
            <div className="carousel-description">
              <h3>Video Tutorials</h3>
              <p>Quality video tutorials to learn and enhance your understanding.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="/assets/autograder.png" alt="Expert Instructors" width={800} height={400} />
            <div className="carousel-description">
              <h3>Autograder</h3>
              <p>Built in autograder and code compiler provides instant feedback.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="/assets/sample exercise.png" alt="Interactive Lesson Preview" width={800} height={400} />
            <div className="carousel-description">
              <h3>Interactive Lessons</h3>
              <p>Engage with our interactive coding lessons and exercises designed for all skill levels.</p>
            </div>
          </div>
        </div>
        <div className="carousel-nav">
          <button className="prev" onClick={prevSlide}>&lt;</button>
          <button className="next" onClick={nextSlide}>&gt;</button>
        </div>
        <div className="carousel-indicators">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className={`carousel-indicator ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            ></div>
          ))}
        </div>
      </div>

      <section className="course-offerings">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Course Offerings</h2>
        <div className="course-container">
          <div className="course-button">
            <div className="course-title">Scratch Programming</div>
            <div className="course-description">An introductory course on visual programming for beginners.</div>
          </div>
          <div className="course-button">
            <div className="course-title">Python Programming</div>
            <div className="course-description">Learn the basics of Python programming with hands-on projects.</div>
          </div>
          <div className="course-button">
            <div className="course-title">Java Programming</div>
            <div className="course-description">Get started with Java, one of the most popular programming languages.</div>
          </div>
          <div className="course-button">
            <div className="course-title">Scratch Programming 2</div>
            <div className="course-description">Advanced Scratch concepts for building interactive projects.</div>
          </div>
          <div className="course-button">
            <div className="course-title">Python Programming 2</div>
            <div className="course-description">Intermediate Python programming, including data structures and more.</div>
          </div>
          <div className="course-button">
            <div className="course-title">Java Programming 2</div>
            <div className="course-description">Deep dive into Java with object-oriented programming and algorithms.</div>
          </div>
        </div>
      </section>

      <div className="testimonials-carousel">
        <div className="testimonials-content">
          <div className="testimonial-item">
            <p>&quot;My child has learned so much through Challenger Coding. The patience and creativity of the instructors are unmatched!&quot;</p>
            <span>- Current Parent</span>
          </div>
          <div className="testimonial-item">
            <p>&quot;Jaden was very easygoing and patient. The study materials were simple and self-explanatory!&quot;</p>
            <span>- Current Parent</span>
          </div>
          <div className="testimonial-item">
            <p>&quot;Jaden is an amazing instructor, he brings such good energy and positivity. The kids really appreciate that!&quot;</p>
            <span>- Current Parent</span>
          </div>
        </div>
      </div>

      <div className="center-button">
        <button onClick={() => window.location.href = '/signup'}>Interested? Sign up to learn NOW, FOR FREE!</button>
      </div>

      {/* Script logic for userCount passed to UI */}
      {/* <div style={{display: 'none'}} id="userCount">{userCount}</div> */}
    </main>
  );
}
