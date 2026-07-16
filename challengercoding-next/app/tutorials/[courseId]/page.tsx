

import { courses } from '@/src/data/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
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
            <div className="bg-primary rounded-xl p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded text-xs font-semibold mb-4 uppercase tracking-widest">
                        Course Overview
                    </div>
                    <h1 className="text-h1 font-serif font-bold text-white mb-4">{course.title}</h1>
                    <p className="text-body text-white/80 leading-relaxed max-w-2xl">{course.description}</p>

                    <div className="flex flex-wrap gap-6 mt-8 text-small text-white/70">
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
                <h2 className="text-h2 font-serif font-bold text-text mb-8 border-l-4 border-gold pl-4">Curriculum</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {course.lessons.map((lesson, index) => (
                        <div key={lesson.id} className="group bg-surface hairline rounded-lg p-6 flex flex-col h-full transition-colors hover:bg-alt-bg">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span>{index + 1}</span>
                                </div>
                                {lesson.notesLink && (
                                    <div className="px-2 py-0.5 bg-sage/10 text-sage text-xs font-semibold rounded">
                                        Notes Available
                                    </div>
                                )}
                            </div>

                            <h3 className="text-h3 font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {lesson.title}
                            </h3>

                            <div className="mt-auto space-y-3 pt-6">
                                <Link
                                    href={lesson.link}
                                    className="w-full bg-primary hover:bg-primary-hover text-white rounded-lg py-3 font-semibold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <PlayCircle className="w-5 h-5" />
                                    Start Tutorial
                                </Link>

                                {lesson.notesLink && (
                                    <Link
                                        href={lesson.notesLink}
                                        className="w-full hairline bg-surface text-text hover:bg-alt-bg rounded-lg py-3 font-medium transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <BookOpen className="w-5 h-5 text-gold" />
                                        Reading & Notes
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
