
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

export default function Page({ params }: { params: { courseId: string; lessonId: string } }) {
    return <NotesViewerClient params={params} />;
}
