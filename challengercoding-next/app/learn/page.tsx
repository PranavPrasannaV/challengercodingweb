"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Learn() {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const loggedIn = localStorage.getItem('loggedIn');
        const user = localStorage.getItem('currentUser');

        if (!loggedIn || !user) {
            router.push('/login');
        } else {
            setCurrentUser(user);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentUser');
        router.push('/login');
    };

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <main>
            <div className="hero">
                <h1>Explore Our Courses</h1>
                <p id="welcomeMessage">Welcome, {currentUser}!</p>
                <p>Choose from our selection of beginner-friendly programming courses.</p>
            </div>

            <div className="course-container">
                {/* We will route these to /tutorials/[course] eventually */}
                <div className="course-button" onClick={() => router.push('/tutorials/scratch')}>
                    <div className="course-title">Scratch Programming</div>
                    <div className="course-description">An introductory course on visual programming for beginners.</div>
                </div>
                <div className="course-button" onClick={() => router.push('/tutorials/python')}>
                    <div className="course-title">Python Programming</div>
                    <div className="course-description">Learn the basics of Python programming with hands-on projects.</div>
                </div>
                <div className="course-button" onClick={() => router.push('/tutorials/java')}>
                    <div className="course-title">Java Programming</div>
                    <div className="course-description">Get started with Java, one of the most popular programming languages.</div>
                </div>
                <div className="course-button" onClick={() => router.push('/tutorials/scratch2')}>
                    <div className="course-title">Scratch Programming 2</div>
                    <div className="course-description">Advanced Scratch concepts for building interactive projects.</div>
                </div>
                <div className="course-button" onClick={() => router.push('/tutorials/python2')}>
                    <div className="course-title">Python Programming 2</div>
                    <div className="course-description">Intermediate Python programming, including data structures and more.</div>
                </div>
                <div className="course-button" onClick={() => router.push('/tutorials/java2')}>
                    <div className="course-title">Java Programming 2</div>
                    <div className="course-description">Deep dive into Java with object-oriented programming and algorithms.</div>
                </div>
            </div>

            <button
                id="logoutButton"
                onClick={handleLogout}
                style={{
                    display: 'block',
                    margin: '30px auto',
                    padding: '10px 20px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}
            >
                Log Out
            </button>
        </main>
    );
}
