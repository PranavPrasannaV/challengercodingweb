
import { courses } from '@/src/data/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    PlayCircle,
    BookOpen,
    Clock,
    BarChart
} from 'lucide-react';


export async function generateStaticParams() {
    return courses.map((course) => ({
        courseId: course.id,
    }));
}

export default async function TutorialHub({ params }: { params: Promise<{ courseId: string }> }) {
    const { courseId } = await params;
    const course = courses.find((c) => c.id === courseId);

    if (!course) {
        notFound();
    }

    return (
        <div className="space-y-12">
            {/* Course Header */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white p-8 md:p-12 shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 max-w-3xl">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold mb-4 border border-white/10 uppercase tracking-widest">
                        Course Overview
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4">{course.title}</h1>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">{course.description}</p>

                    <div className="flex flex-wrap gap-6 mt-8 text-sm font-medium text-blue-100">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            <span>{course.lessons.length} Lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>Self-Paced</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BarChart className="w-5 h-5" />
                            <span>Beginner Friendly</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lessons Grid */}
            <div>
                <h2 className="text-2xl font-bold text-secondary mb-8 pl-2 border-l-4 border-accent">Curriculum</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {course.lessons.map((lesson, index) => (
                        <div key={lesson.id} className="group bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="font-bold text-lg">{index + 1}</span>
                                </div>
                                {lesson.notesLink && (
                                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md">
                                        Notes Available
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {lesson.title}
                            </h3>

                            <div className="mt-auto space-y-3 pt-6">
                                <Link href={lesson.link} className="block w-full">
                                    <button className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl hover:bg-primary-dark transition-all font-semibold shadow-lg shadow-primary/20 group-hover:shadow-primary/40">
                                        <PlayCircle className="w-5 h-5" />
                                        Start Tutorial
                                    </button>
                                </Link>

                                {lesson.notesLink && (
                                    <Link href={lesson.notesLink} className="block w-full">
                                        <button className="w-full flex items-center justify-center gap-2 bg-white text-secondary border border-border px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            <BookOpen className="w-5 h-5 text-accent" />
                                            Reading & Notes
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
