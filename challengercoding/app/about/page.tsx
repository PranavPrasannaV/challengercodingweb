"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <section className="container-padded py-24">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Democratizing <br /> computer science education.
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
                        We believe that technical leverage is the most powerful tool for social mobility.
                        Our mission is to provide high-quality, free coding education to everyone in the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-border pt-16">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Founder</h3>
                        <div className="bg-secondary aspect-square rounded-2xl mb-6 relative overflow-hidden">
                            <Image src="/jaden.jpg" alt="Jaden Tang" fill className="object-cover" />
                        </div>
                        <h4 className="text-xl font-bold">Jaden Tang</h4>
                        <p className="text-muted-foreground mt-2 leading-relaxed">
                            Founded Challenger Coding in 2023. Microsoft Certified Professional in Java.
                            Passionate about educational equity and artificial intelligence systems.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Leadership Team</h3>
                        <ul className="space-y-6">
                            <TeamMember name="Aadi Saraf" role="VP of Education" />
                            <TeamMember name="Ananya Denduluri" role="VP of Outreach" />
                            <TeamMember name="Miheer Pandya" role="Webmaster" />
                            <TeamMember name="Brinda Aniga" role="Secretary" />
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function TeamMember({ name, role }: { name: string, role: string }) {
    return (
        <li className="flex items-center justify-between border-b border-border pb-4">
            <span className="font-medium">{name}</span>
            <span className="text-muted-foreground text-sm">{role}</span>
        </li>
    );
}
