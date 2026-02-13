"use client";

import React from 'react';

export default function Compiler() {
    return (
        <main>
            <div className="hero">
                <h1>Online Compiler</h1>
                <p>Use this online compiler to run code in various programming languages. Select your language and start coding!</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-6xl mx-auto my-8 text-center">
                {/* Embedded JDoodle Compiler */}
                <iframe
                    src="https://www.jdoodle.com/embed/v0/"
                    title="JDoodle Compiler"
                    className="w-full h-[500px] border-none rounded-lg mt-4"
                ></iframe>
            </div>
        </main>
    );
}
