"use client";

import React from 'react';

export default function Resources() {
    return (
        <main>
            <div className="hero">
                <h1>Links and Other Resources</h1>
                <p>Additional resources to enhance your coding knowledge and skills:</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-6xl mx-auto my-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#1976D2] mb-4">Coding Practice Platforms</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><a href="https://codingbat.com/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">CodingBat</a> - Practice coding with immediate feedback in Python and Java.</li>
                        <li><a href="https://leetcode.com/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">LeetCode</a> - Practice problems for coding interviews and technical assessments.</li>
                        <li><a href="https://www.hackerrank.com/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">HackerRank</a> - Practice coding, data structures, algorithms, and more.</li>
                        <li><a href="https://www.codewars.com/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Codewars</a> - Challenge yourself with katas to improve your coding skills.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#1976D2] mb-4">Learning Resources</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><a href="https://www.udemy.com/courses/development/programming-languages/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Udemy Programming Courses</a> - Comprehensive courses on various programming languages.</li>
                        <li><a href="https://www.edx.org/learn/computer-programming" target="_blank" className="text-[#2196F3] font-semibold hover:underline">edX Computer Programming</a> - University-level courses in computer programming.</li>
                        <li><a href="https://www.codecademy.com" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Codecademy</a> - Interactive courses to learn programming from scratch.</li>
                        <li><a href="https://www.w3schools.com/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">W3Schools</a> - Tutorials and references on web development and coding languages.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#1976D2] mb-4">Documentation & Installation Guides</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><a href="https://code.visualstudio.com/docs/setup/setup-overview" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Installing Visual Studio Code</a> - Step-by-step guide to download and install VSCode.</li>
                        <li><a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Installing Java JDK</a> - Download and installation guide for Java Development Kit (JDK).</li>
                        <li><a href="https://www.python.org/downloads/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Installing Python</a> - Official guide for downloading and installing Python.</li>
                        <li><a href="https://docs.oracle.com/javase/8/docs/api/" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Java SE 8 Documentation</a> - Official Java SE 8 API documentation.</li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="text-[#2196F3] font-semibold hover:underline">HTML Documentation</a> - Comprehensive guide to HTML by MDN.</li>
                        <li><a href="https://docs.python.org/3/library/index.html" target="_blank" className="text-[#2196F3] font-semibold hover:underline">Python Standard Library</a> - Detailed documentation on Python's standard library.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
