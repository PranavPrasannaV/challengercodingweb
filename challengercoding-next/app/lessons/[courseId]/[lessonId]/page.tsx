
import LessonViewerClient from './LessonViewerClient';

export async function generateStaticParams() {
    const lessonKeys = ['scratch-1', 'java-1', 'python-1'];
    return lessonKeys.map(key => {
        const [courseId, lessonId] = key.split('-');
        return { courseId, lessonId };
    });
}

export default function Page({ params }: { params: { courseId: string; lessonId: string } }) {
    return <LessonViewerClient params={params} />;
}
