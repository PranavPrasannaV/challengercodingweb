import uuid
from datetime import datetime, timezone

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Index,
    Integer,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.dialects.postgresql import JSONB, UUID
from sqlalchemy.orm import relationship

from shared.db import Base


def _uuid() -> str:
    return str(uuid.uuid4())


def _now() -> datetime:
    return datetime.now(timezone.utc)


class Exercise(Base):
    __tablename__ = "exercises"

    id = Column(UUID(as_uuid=False), primary_key=True, default=_uuid)
    title = Column(Text, nullable=False)
    description = Column(Text, nullable=True)  # markdown
    kind = Column(String, nullable=False)  # "free_run" | "fill_function" | "write_class"
    language = Column(String, nullable=False)  # "python" | "java"
    starter_code = Column(Text, nullable=False, default="")
    template = Column(Text, nullable=False)  # server-side only; contains "{{code}}"
    expected_output = Column(Text, nullable=True)  # null = ungraded
    match_mode = Column(String, nullable=False, default="trimmed")  # "exact" | "trimmed" | "contains"
    reveal_expected = Column(Boolean, nullable=False, default=False)
    created_at = Column(DateTime(timezone=True), default=_now)

    runs = relationship("Run", back_populates="exercise")


class Run(Base):
    __tablename__ = "runs"

    id = Column(UUID(as_uuid=False), primary_key=True, default=_uuid)
    exercise_id = Column(UUID(as_uuid=False), ForeignKey("exercises.id"), nullable=True)
    user_id = Column(Text, nullable=False)
    language = Column(String, nullable=False)
    code = Column(Text, nullable=False)
    status = Column(String, nullable=False, default="pending")  # pending|running|done|error
    stdout = Column(Text, nullable=True)
    stderr = Column(Text, nullable=True)
    exit_code = Column(Integer, nullable=True)
    passed = Column(Boolean, nullable=True)  # null for ungraded
    runtime_ms = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), default=_now)

    exercise = relationship("Exercise", back_populates="runs")


class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(UUID(as_uuid=False), primary_key=True, default=_uuid)
    slug = Column(String, nullable=False, unique=True)
    title = Column(Text, nullable=False)
    track = Column(String, nullable=False)  # "python" | "scratch" | "java"
    order_index = Column(Integer, nullable=False)
    current_version = Column(Integer, nullable=False, default=1)
    created_at = Column(DateTime(timezone=True), default=_now)

    blocks = relationship(
        "LessonBlock", back_populates="lesson", order_by="LessonBlock.position"
    )

    __table_args__ = (Index("ix_lessons_track_order", "track", "order_index"),)


class LessonBlock(Base):
    """
    One piece of a lesson (prose / quiz / exercise_ref / image), in display
    order. `content` is block-type-shaped jsonb; exercise_ref blocks hold only
    {"exercise_id": ...} — never a copy of exercise data, see LessonExerciseRef.

    `content_hash` is a sha256 of `content`, computed on write. Nothing reads
    it yet — it's here so block-level versioning/diffing (re-hash on import,
    compare against the stored hash to see what actually changed) doesn't
    require a second migration later.
    """

    __tablename__ = "lesson_blocks"

    id = Column(UUID(as_uuid=False), primary_key=True, default=_uuid)
    lesson_id = Column(UUID(as_uuid=False), ForeignKey("lessons.id"), nullable=False)
    position = Column(Integer, nullable=False)
    block_type = Column(String, nullable=False)  # "prose" | "quiz" | "exercise_ref" | "image"
    content = Column(JSONB, nullable=False)
    content_hash = Column(String, nullable=False)
    version = Column(Integer, nullable=False, default=1)
    created_at = Column(DateTime(timezone=True), default=_now)

    lesson = relationship("Lesson", back_populates="blocks")

    __table_args__ = (
        Index("ix_lesson_blocks_lesson_position", "lesson_id", "position", unique=True),
        Index("ix_lesson_blocks_block_type", "block_type"),
    )


class LessonExerciseRef(Base):
    """
    Normalized join between a lesson_blocks(exercise_ref) row and the
    exercises table it points to. Exists alongside the block's own
    {"exercise_id": ...} content so "which lessons reference exercise X" is
    an indexed FK lookup instead of a jsonb scan, and so a backfill can't
    silently write a block that references a nonexistent exercise.
    """

    __tablename__ = "lesson_exercise_refs"

    id = Column(UUID(as_uuid=False), primary_key=True, default=_uuid)
    lesson_id = Column(UUID(as_uuid=False), ForeignKey("lessons.id"), nullable=False)
    block_id = Column(UUID(as_uuid=False), ForeignKey("lesson_blocks.id"), nullable=False)
    exercise_id = Column(UUID(as_uuid=False), ForeignKey("exercises.id"), nullable=False)

    __table_args__ = (
        UniqueConstraint("block_id", name="uq_lesson_exercise_refs_block"),
        Index("ix_lesson_exercise_refs_exercise", "exercise_id"),
    )
