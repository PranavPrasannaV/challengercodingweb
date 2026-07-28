import React from 'react';
import Image from 'next/image';
import { Target, Heart, Award, Users } from 'lucide-react';

const values = [
  { icon: Heart, label: 'Passion', desc: 'Driven by love for teaching' },
  { icon: Users, label: 'Community', desc: 'Building a supportive network' },
  { icon: Award, label: 'Excellence', desc: 'High-quality curriculum' },
  { icon: Target, label: 'Impact', desc: 'Real-world skills' },
];

const president = {
  name: 'Aadi Saraf',
  role: 'Co-Founder and Current President',
  initials: 'AS',
  desc: 'Leads Challenger Coding\'s curriculum, strategic expansion, and partnerships, helping grow our impact while maintaining a high-quality learning experience.',
};

const team = [
  {
    name: 'Pranav Prasanna Venkatesh',
    role: 'Vice President',
    initials: 'PV',
    desc: 'Supports leadership across every program and helps coordinate our instructional initiatives.',
  },
  {
    name: 'Jeswanth Battula',
    role: 'Public Relations',
    initials: 'JB',
    desc: 'Manages outreach and communications, building partnerships with schools, families, and sponsors.',
  },
  {
    name: 'Miheer Pandya',
    role: 'Webmaster',
    initials: 'MP',
    desc: 'Maintains the website and the digital platforms that deliver our lessons and resources.',
  },
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
            <div className="md:w-1/3 min-h-[400px] relative bg-alt-bg">
              <Image
                src="/jaden.jpg"
                alt="Jaden Tang"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
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
              <div className="pt-6 border-t border-border flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary text-small font-serif font-bold tracking-wide">
                  AS
                </div>
                <div className="space-y-0.5">
                  <p className="text-small text-primary font-semibold uppercase tracking-[0.15em]">
                    Co-Founder and Current President
                  </p>
                  <p className="text-small text-text font-semibold">Aadi Saraf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-alt-bg py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-5">
            <h2 className="text-h2 font-serif font-bold text-text">
              Meet Our Leadership
            </h2>
            <div className="accent-line mx-auto" />
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              The students who plan our curriculum, run our outreach, and keep Challenger Coding
              running week to week.
            </p>
          </div>

          {/* President — featured */}
          <div className="bg-surface hairline rounded-lg p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left hover:border-primary/40 transition-colors">
            <div className="shrink-0 w-28 h-28 rounded-full bg-primary ring-4 ring-gold/30 flex items-center justify-center text-white text-3xl font-serif font-bold tracking-wide">
              {president.initials}
            </div>
            <div className="space-y-3">
              <div className="inline-block text-small text-primary font-semibold uppercase tracking-[0.15em] border border-primary/25 rounded-full px-3 py-1">
                {president.role}
              </div>
              <h3 className="text-h2 font-serif font-bold text-text">{president.name}</h3>
              <p className="text-body text-text-secondary leading-relaxed">{president.desc}</p>
            </div>
          </div>

          {/* Officers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-surface hairline rounded-lg p-8 text-center flex flex-col items-center hover:border-primary/40 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary text-xl font-serif font-bold tracking-wide">
                  {member.initials}
                </div>
                <h3 className="text-h3 font-serif font-bold text-text mt-5">{member.name}</h3>
                <p className="text-small text-primary font-semibold uppercase tracking-[0.15em] mt-2">
                  {member.role}
                </p>
                <div className="accent-line mx-auto my-5" />
                <p className="text-small text-text-secondary leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
