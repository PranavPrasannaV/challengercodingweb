from typing import Optional

from pydantic import BaseModel


class ExerciseOut(BaseModel):
    id: str
    title: str
    description: Optional[str] = None
    kind: str
    language: str
    starter_code: str
    # Only populated when reveal_expected is True — never send hidden answer keys,
    # and the server-side `template` field is never returned at all.
    expected_output: Optional[str] = None

    class Config:
        from_attributes = True


class RunCreate(BaseModel):
    language: str
    code: str
    user_id: str
    exercise_id: Optional[str] = None


class RunCreateOut(BaseModel):
    run_id: str


class RunOut(BaseModel):
    id: str
    exercise_id: Optional[str] = None
    user_id: str
    language: str
    status: str
    stdout: Optional[str] = None
    stderr: Optional[str] = None
    exit_code: Optional[int] = None
    passed: Optional[bool] = None
    runtime_ms: Optional[int] = None
    created_at: Optional[str] = None

    class Config:
        from_attributes = True


class RunSummary(BaseModel):
    id: str
    user_id: str
    language: str
    status: str
    passed: Optional[bool] = None
    runtime_ms: Optional[int] = None
    created_at: Optional[str] = None

    class Config:
        from_attributes = True


# --- Lesson content -------------------------------------------------------
#
# Mirrors the ExerciseOut hiding rule above: an exercise_ref block resolves to
# ExerciseRefBlockContent, which never carries `template` and only carries
# `expected_output` when the exercise has reveal_expected=True.


class LessonSummary(BaseModel):
    """One row of the /lessons manifest — enough for a course nav/list page."""

    id: str
    slug: str
    title: str
    track: str
    order_index: int

    class Config:
        from_attributes = True


class ProseBlockContent(BaseModel):
    html: str
    # The old stepper UI's per-step sidebar label (e.g. "Say hello"). Optional
    # because not every prose block starts a step — only carried through so a
    # frontend can rebuild that nav without a separate "steps" concept here.
    step_title: Optional[str] = None


class QuizChoice(BaseModel):
    label: str
    value: str


class QuizBlockContent(BaseModel):
    question: str
    choices: list[QuizChoice]
    answer_idx: int


class ImageBlockContent(BaseModel):
    src: str
    alt: str = ""


class ExerciseRefBlockContent(BaseModel):
    exercise_id: str
    title: str
    language: str
    starter_code: str
    # Only populated when the referenced exercise has reveal_expected=True —
    # same rule as ExerciseOut.expected_output.
    expected_output: Optional[str] = None


class LessonBlockOut(BaseModel):
    id: str
    position: int
    block_type: str  # "prose" | "quiz" | "exercise_ref" | "image"
    version: int
    # Shape depends on block_type; typed per-block above rather than as one
    # BaseModel so a caller can't accidentally read the wrong fields.
    content: ProseBlockContent | QuizBlockContent | ExerciseRefBlockContent | ImageBlockContent


class LessonOut(BaseModel):
    id: str
    slug: str
    title: str
    track: str
    order_index: int
    current_version: int
    blocks: list[LessonBlockOut]
