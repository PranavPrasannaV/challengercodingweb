"""lessons, lesson_blocks, lesson_exercise_refs

First real schema change: lesson content moves from static TS files into
Postgres, addressed alongside the existing exercises table (never
duplicating exercise data — exercise_ref blocks and lesson_exercise_refs
both hold only an exercise_id).

Revision ID: 0002
Revises: 0001
Create Date: 2026-09-03

"""
from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = "0002"
down_revision: Union[str, Sequence[str], None] = "0001"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "lessons",
        sa.Column("id", sa.UUID(as_uuid=False), nullable=False),
        sa.Column("slug", sa.String(), nullable=False),
        sa.Column("title", sa.Text(), nullable=False),
        sa.Column("track", sa.String(), nullable=False),
        sa.Column("order_index", sa.Integer(), nullable=False),
        sa.Column("current_version", sa.Integer(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("slug"),
    )
    op.create_index("ix_lessons_track_order", "lessons", ["track", "order_index"])

    op.create_table(
        "lesson_blocks",
        sa.Column("id", sa.UUID(as_uuid=False), nullable=False),
        sa.Column("lesson_id", sa.UUID(as_uuid=False), nullable=False),
        sa.Column("position", sa.Integer(), nullable=False),
        sa.Column("block_type", sa.String(), nullable=False),
        sa.Column("content", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("content_hash", sa.String(), nullable=False),
        sa.Column("version", sa.Integer(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(["lesson_id"], ["lessons.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(
        "ix_lesson_blocks_lesson_position",
        "lesson_blocks",
        ["lesson_id", "position"],
        unique=True,
    )
    op.create_index("ix_lesson_blocks_block_type", "lesson_blocks", ["block_type"])

    op.create_table(
        "lesson_exercise_refs",
        sa.Column("id", sa.UUID(as_uuid=False), nullable=False),
        sa.Column("lesson_id", sa.UUID(as_uuid=False), nullable=False),
        sa.Column("block_id", sa.UUID(as_uuid=False), nullable=False),
        sa.Column("exercise_id", sa.UUID(as_uuid=False), nullable=False),
        sa.ForeignKeyConstraint(["lesson_id"], ["lessons.id"]),
        sa.ForeignKeyConstraint(["block_id"], ["lesson_blocks.id"]),
        sa.ForeignKeyConstraint(["exercise_id"], ["exercises.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("block_id", name="uq_lesson_exercise_refs_block"),
    )
    op.create_index(
        "ix_lesson_exercise_refs_exercise", "lesson_exercise_refs", ["exercise_id"]
    )


def downgrade() -> None:
    op.drop_index("ix_lesson_exercise_refs_exercise", table_name="lesson_exercise_refs")
    op.drop_table("lesson_exercise_refs")
    op.drop_index("ix_lesson_blocks_block_type", table_name="lesson_blocks")
    op.drop_index("ix_lesson_blocks_lesson_position", table_name="lesson_blocks")
    op.drop_table("lesson_blocks")
    op.drop_index("ix_lessons_track_order", table_name="lessons")
    op.drop_table("lessons")
