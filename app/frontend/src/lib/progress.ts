/**
 * Which lessons a student has marked finished.
 *
 * Local to the browser, deliberately: the site promises that no account is
 * needed, and a progress mark is not worth breaking that. It is written in one
 * place only — the "Finish" button at the end of a lesson — because clicking
 * through the steps is not the same as finishing the work.
 *
 * Everything here is safe to call during a static export, where there is no
 * window, and safe in Safari private mode, where setItem throws.
 */
const KEY = 'cc.progress';

export type Progress = Record<string, string[]>;

export function readProgress(): Progress {
    if (typeof window === 'undefined') return {};
    try {
        const raw = window.localStorage.getItem(KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        return parsed && typeof parsed === 'object' ? (parsed as Progress) : {};
    } catch {
        return {};
    }
}

export function markDone(courseId: string, lessonId: string) {
    if (typeof window === 'undefined') return;
    try {
        const all = readProgress();
        const done = new Set(all[courseId] ?? []);
        done.add(lessonId);
        all[courseId] = [...done];
        window.localStorage.setItem(KEY, JSON.stringify(all));
    } catch {
        /* private mode, quota, disabled storage — a lost mark must not break navigation */
    }
}

export function doneIn(courseId: string): string[] {
    return readProgress()[courseId] ?? [];
}
