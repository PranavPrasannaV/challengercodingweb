import React from 'react';
import Image from 'next/image';
import { Target, Heart, Award, Users } from 'lucide-react';

const values = [
  { icon: Heart, label: 'Passion', desc: 'Driven by love for teaching' },
  { icon: Users, label: 'Community', desc: 'Building a supportive network' },
  { icon: Award, label: 'Excellence', desc: 'High-quality curriculum' },
  { icon: Target, label: 'Impact', desc: 'Real-world skills' },
];

const team = [
  { name: 'Aadi Saraf', role: 'Co-Founder' },
  { name: 'Pranav Prasanna Venkatesh', role: 'VP of Education' },
  { name: 'Miheer Pandya', role: 'Webmaster' },
];

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-bg py-24 text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <h1 className="text-h1 font-serif font-bold text-white">
            About Us
          </h1>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Empowering the Next Generation of Coders
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="accent-line-left" />
            <h2 className="text-h2 font-serif font-bold text-text">
              Democratizing Tech Education
            </h2>
            <p className="text-body text-text-secondary leading-relaxed">
              At Challenger Coding, our mission is to empower students of all ages to embrace coding and technology,
              equipping them with the skills they need to succeed in an increasingly digital world.
              We believe that coding is not just for computer scientists, but a valuable skill for everyone.
              By offering accessible and engaging tutorials, we aim to make coding fun and approachable for all.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((item, i) => (
              <div
                key={i}
                className="bg-surface hairline rounded-lg p-6 hover:bg-alt-bg transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <div className="font-bold text-text">{item.label}</div>
                <div className="text-small text-text-secondary">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-surface hairline rounded-lg flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/3 h-96 relative bg-alt-bg">
              <Image
                src="/jaden.jpg"
                alt="Jaden Tang"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 p-10 md:p-14 space-y-6">
              <div>
                <h2 className="text-h2 font-serif font-bold text-text mb-2">
                  Meet the Founder
                </h2>
                <p className="text-primary font-medium">Jaden Tang</p>
              </div>
              <div className="space-y-4 text-body text-text-secondary leading-relaxed">
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

      {/* Leadership Section */}
      <section className="bg-background pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <h2 className="text-h2 font-serif font-bold text-text">
            Meet Our Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-surface hairline rounded-lg p-8 text-center hover:bg-alt-bg transition-colors"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-h3 font-bold text-text mt-4">{member.name}</h3>
                <p className="text-small text-primary font-medium uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
