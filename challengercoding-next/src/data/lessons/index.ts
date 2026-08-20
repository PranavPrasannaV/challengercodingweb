import { scratchLesson1 } from './scratch/lesson1';
import { scratchLesson2 } from './scratch/lesson2';
import { scratchLesson3 } from './scratch/lesson3';
import { scratchLesson4 } from './scratch/lesson4';
import { scratchLesson5 } from './scratch/lesson5';
import { scratchLesson6 } from './scratch/lesson6';
import { scratchLesson7 } from './scratch/lesson7';
import { scratchLesson8 } from './scratch/lesson8';

import { scratch2Lesson1 } from './scratch2/lesson1';
import { scratch2Lesson2 } from './scratch2/lesson2';
import { scratch2Lesson3 } from './scratch2/lesson3';
import { scratch2Lesson4 } from './scratch2/lesson4';
import { scratch2Lesson5 } from './scratch2/lesson5';
import { scratch2Lesson6 } from './scratch2/lesson6';

import { pythonLesson1 } from './python/lesson1';
import { pythonLesson2 } from './python/lesson2';
import { pythonLesson3 } from './python/lesson3';
import { pythonLesson4 } from './python/lesson4';
import { pythonLesson5 } from './python/lesson5';
import { pythonLesson6 } from './python/lesson6';
import { pythonLesson7 } from './python/lesson7';
import { pythonTest } from './python/test';

import { python2Lesson1 } from './python2/lesson1';
import { python2Lesson2 } from './python2/lesson2';
import { python2Lesson3 } from './python2/lesson3';
import { python2Lesson4 } from './python2/lesson4';
import { python2Lesson5 } from './python2/lesson5';
import { python2Lesson6 } from './python2/lesson6';
import { python2Lesson7 } from './python2/lesson7';
import { python2Test } from './python2/test';

import { javaLesson1 } from './java/lesson1';
import { javaLesson2 } from './java/lesson2';
import { javaLesson3 } from './java/lesson3';
import { javaLesson4 } from './java/lesson4';
import { javaLesson5 } from './java/lesson5';
import { javaLesson6 } from './java/lesson6';
import { javaLesson7 } from './java/lesson7';
import { javaTest } from './java/test';

import { java2Lesson1 } from './java2/lesson1';
import { java2Lesson2 } from './java2/lesson2';
import { java2Lesson3 } from './java2/lesson3';
import { java2Lesson4 } from './java2/lesson4';
import { java2Lesson5 } from './java2/lesson5';
import { java2Lesson6 } from './java2/lesson6';
import { java2Lesson7 } from './java2/lesson7';
import { java2Test } from './java2/test';

/**
 * Two final tests were authored as a bare object — `{ quiz, codingExercises }`
 * and `{ quiz, freeResponse }` — while every other lesson is an array of steps.
 * That mismatch is why /lessons/python/test and /lessons/python2/test used to
 * render nothing. Expand them into steps here rather than reshaping the source:
 * the multiple-choice section becomes step one, and the coding exercises follow
 * as steps of their own (they already carry the right shape).
 */
const asSteps = (lesson: any) => {
    if (Array.isArray(lesson)) return lesson;
    const { quiz, codingExercises, freeResponse, ...rest } = lesson ?? {};
    const steps = [];
    if (quiz?.length) steps.push({ title: 'Multiple choice', content: '', quiz, ...rest });
    steps.push(...(codingExercises ?? []), ...(freeResponse ?? []));
    return steps.length ? steps : [lesson];
};

export const lessonRegistry: Record<string, any> = {
    'scratch-1': scratchLesson1,
    'scratch-2': scratchLesson2,
    'scratch-3': scratchLesson3,
    'scratch-4': scratchLesson4,
    'scratch-5': scratchLesson5,
    'scratch-6': scratchLesson6,
    'scratch-7': scratchLesson7,
    'scratch-8': scratchLesson8,

    'scratch2-1': scratch2Lesson1,
    'scratch2-2': scratch2Lesson2,
    'scratch2-3': scratch2Lesson3,
    'scratch2-4': scratch2Lesson4,
    'scratch2-5': scratch2Lesson5,
    'scratch2-6': scratch2Lesson6,

    'python-1': pythonLesson1,
    'python-2': pythonLesson2,
    'python-3': pythonLesson3,
    'python-4': pythonLesson4,
    'python-5': pythonLesson5,
    'python-6': pythonLesson6,
    'python-7': pythonLesson7,
    'python-test': asSteps(pythonTest),

    'python2-1': python2Lesson1,
    'python2-2': python2Lesson2,
    'python2-3': python2Lesson3,
    'python2-4': python2Lesson4,
    'python2-5': python2Lesson5,
    'python2-6': python2Lesson6,
    'python2-7': python2Lesson7,
    'python2-test': asSteps(python2Test),

    'java-1': javaLesson1,
    'java-2': javaLesson2,
    'java-3': javaLesson3,
    'java-4': javaLesson4,
    'java-5': javaLesson5,
    'java-6': javaLesson6,
    'java-7': javaLesson7,
    'java-test': javaTest,

    'java2-1': java2Lesson1,
    'java2-2': java2Lesson2,
    'java2-3': java2Lesson3,
    'java2-4': java2Lesson4,
    'java2-5': java2Lesson5,
    'java2-6': java2Lesson6,
    'java2-7': java2Lesson7,
    'java2-test': java2Test,
};
