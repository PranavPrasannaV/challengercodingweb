
import { pythonNotes } from '@/src/data/notes/python';
import { javaNotes } from '@/src/data/notes/java';
import { SubLesson } from '@/src/data/notes/types';
import NotesViewerClient from './NotesViewerClient';

const notesMap: Record<string, Record<string, SubLesson[]>> = {
    'python': pythonNotes,
    'java': javaNotes,
};

export async function generateStaticParams() {
    const params = [];
    for (const courseId in notesMap) {
        const courseNotes = notesMap[courseId];
        for (const lessonId in courseNotes) {
            params.push({ courseId, lessonId });
        }
    }
    return params;
}

export default async function Page({ params }: { params: Promise<{ courseId: string; lessonId: string }> }) {
    const { courseId, lessonId } = await params;
    return <NotesViewerClient params={{ courseId, lessonId }} />;
}
