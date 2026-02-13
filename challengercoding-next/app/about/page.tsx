
import React from 'react';
import Image from 'next/image';
import { Target, Heart, Award, Users } from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-secondary to-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10" />
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                        Empowering the Next Generation of Coders
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm">
                            <Target className="w-4 h-4" />
                            Our Mission
                        </div>
                        <h2 className="text-4xl font-bold text-secondary font-poppins">
                            Democratizing Tech Education
                        </h2>
                        <p className="text-lg text-text-light leading-relaxed">
                            At Challenger Coding, our mission is to empower students of all ages to embrace coding and technology,
                            equipping them with the skills they need to succeed in an increasingly digital world.
                            We believe that coding is not just for computer scientists, but a valuable skill for everyone.
                            By offering accessible and engaging tutorials, we aim to make coding fun and approachable for all.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 relative">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Heart, label: "Passion", desc: "Driven by love for teaching" },
                                { icon: Users, label: "Community", desc: "Building a supportive network" },
                                { icon: Award, label: "Excellence", desc: "High-quality curriculum" },
                                { icon: Target, label: "Impact", desc: "Real-world skills" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <item.icon className="w-8 h-8 text-primary mb-4" />
                                    <div className="font-bold text-secondary mb-1">{item.label}</div>
                                    <div className="text-sm text-text-light">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-100 flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative h-96 md:h-auto bg-blue-50">
                            <Image
                                src="/jaden.jpg"
                                alt="Jaden Tang"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:w-2/3 p-10 md:p-14 space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-secondary font-poppins mb-2">Meet the Founder</h2>
                                <p className="text-primary font-medium">Jaden Tang</p>
                            </div>
                            <div className="space-y-4 text-text-light leading-relaxed">
                                <p>
                                    Jaden founded Challenger Coding in the summer of 2023 after observing the lack of tailored,
                                    engaging coding resources for young learners. With a deep passion for technology, Jaden started
                                    his coding journey in 3rd grade with Scratch.
                                </p>
                                <p>
                                    He has since learned multiple programming languages, earning the Microsoft Intro to Java Programming
                                    certification, scoring a 5 on the AP Computer Science A exam, and conducting AI research.
                                </p>
                                <p>
                                    With extensive tutoring experience, Jaden is dedicated to breaking down barriers of educational
                                    access and hopes to inspire the next generation of coders. Outside of Challenger Coding, Jaden
                                    loves playing soccer, piano, and hanging out with friends and family.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto text-center space-y-16">
                    <h2 className="text-4xl font-bold text-secondary font-poppins">Meet Our Leadership</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Aadi Saraf", role: "Co-Founder" },
                            { name: "Pranav Prasanna Venkatesh", role: "VP of Education" },
                            { name: "Miheer Pandya", role: "Webmaster" },
                        ].map((member, i) => (
                            <div key={i} className="group p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
