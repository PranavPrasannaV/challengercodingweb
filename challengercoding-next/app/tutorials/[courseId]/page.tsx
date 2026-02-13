
import { courses } from '@/src/data/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
    return courses.map((course) => ({
        courseId: course.id,
    }));
}

export default function TutorialHub({ params }: { params: { courseId: string } }) {
    const course = courses.find((c) => c.id === params.courseId);

    if (!course) {
        notFound();
    }

    // Generate distinct background gradients based on course ID for visual variety, or stick to one.
    // The original site used the same hero gradient.

    return (
        <div>
            <div className="hero rounded-xl mb-8">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
            </div>

            <div className="course-container">
                {course.lessons.map((lesson) => (
                    <div key={lesson.id} className="tutorial-item p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center border border-gray-100">
                        <Image src={course.image} alt={`${course.title} Icon`} width={64} height={64} className="w-16 h-16 mb-4 object-contain" />
                        <div className="lesson-title font-bold text-lg text-gray-800 mb-2">{lesson.title}</div>

                        <div className="lesson-buttons mt-4 flex flex-col gap-2 w-full max-w-[200px]">
                            <Link href={lesson.link} className="w-full">
                                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                                    Guided Tutorial
                                </button>
                            </Link>

                            {lesson.notesLink && (
                                <Link href={lesson.notesLink} className="w-full">
                                    <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors font-medium">
                                        Lesson &amp; Notes
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
