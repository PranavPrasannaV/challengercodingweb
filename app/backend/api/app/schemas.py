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


class StepBlockContent(BaseModel):
    """Marks the start of a lesson step. lesson_blocks is a flat, ordered
    list with no other notion of step boundaries — the frontend regroups the
    block stream into steps by splitting on these (see
    challengercoding-next/src/lib/lessons.ts)."""

    title: str


class HeadingBlockContent(BaseModel):
    level: int  # 2 | 3 | 4
    text: str


class ParagraphBlockContent(BaseModel):
    # Small inline-markdown subset: **bold**, *italic*, `code`, [text](url).
    # Never raw HTML — the frontend renders this without dangerouslySetInnerHTML.
    text: str


class ListBlockContent(BaseModel):
    style: str  # "bullet" | "number"
    items: list[str]


class CodeBlockContent(BaseModel):
    code: str
    language: Optional[str] = None


class CalloutBodyBlock(BaseModel):
    # One of ParagraphBlockContent | ListBlockContent | CodeBlockContent |
    # ImageBlockContent — not a discriminated union here because callout
    # bodies are constructed straight from the lesson-content export, which
    # already validates shape; keeping this loose avoids a second copy of
    # the same four models nested a level down.
    type: str
    model_config = {"extra": "allow"}


class CalloutBlockContent(BaseModel):
    tone: str  # "info" | "tip" | "warning" | "success" | "danger"
    title: Optional[str] = None
    body: list[CalloutBodyBlock]


class TableBlockContent(BaseModel):
    headers: list[str]
    rows: list[list[str]]


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
    caption: Optional[str] = None


class EmbedBlockContent(BaseModel):
    kind: str  # "youtube" | "scratch" | "iframe"
    src: str


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
    # "heading" | "paragraph" | "list" | "code" | "callout" | "table" |
    # "image" | "embed" | "quiz" | "exercise_ref"
    block_type: str
    version: int
    # Shape depends on block_type; typed per-block above rather than as one
    # BaseModel so a caller can't accidentally read the wrong fields.
    content: (
        StepBlockContent
        | HeadingBlockContent
        | ParagraphBlockContent
        | ListBlockContent
        | CodeBlockContent
        | CalloutBlockContent
        | TableBlockContent
        | QuizBlockContent
        | ExerciseRefBlockContent
        | ImageBlockContent
        | EmbedBlockContent
    )


class LessonOut(BaseModel):
    id: str
    slug: str
    title: str
    track: str
    order_index: int
    current_version: int
    blocks: list[LessonBlockOut]
