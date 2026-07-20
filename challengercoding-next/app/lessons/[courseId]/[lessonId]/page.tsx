import { courses } from '@/src/data/courses';
import LessonViewerClient from './LessonViewerClient';

export async function generateStaticParams() {
    const params: { courseId: string; lessonId: string }[] = [];
    for (const course of courses) {
        for (const lesson of course.lessons) {
            if (lesson.type === 'guided') {
                params.push({ courseId: course.id, lessonId: lesson.id });
            }
        }
    }
    return params;
}

export default function Page({ params }: { params: { courseId: string; lessonId: string } }) {
    return <LessonViewerClient params={params} />;
}
