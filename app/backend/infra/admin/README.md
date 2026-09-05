# Authoring lesson content

Lesson content lives in Postgres (`lessons` / `lesson_blocks` / `exercises`),
not in files — see the migration that moved it there. This is the tool for
adding or editing it: one YAML file per lesson, compiled and upserted with

```bash
pip install -r api/requirements.txt -r infra/admin/requirements.txt   # one-time setup

python infra/admin/compile_lesson.py path/to/lesson.yaml            # dry run — validates, writes nothing
DATABASE_URL=postgresql+psycopg2://... \
  python infra/admin/compile_lesson.py path/to/lesson.yaml --apply    # writes to Postgres
```

Start from `infra/admin/example_lesson.yaml`. There's no separate admin
login — same trust boundary as `infra/backfill_lessons.py`: having
`DATABASE_URL` for the real database *is* the authorization. Don't point
`--apply` at production without knowing that's what you're doing.

Re-running with the same `slug` replaces that lesson's content (and the
exercises its `exercise_ref` steps own) — editing a lesson is "edit the
YAML, run `--apply` again," the same idempotent-by-slug behavior the bulk
migration used.

## File shape

```yaml
slug: python-1          # unique — this is the update key
title: "Week 1: Hello World"
track: python            # scratch | scratch2 | python | python2 | java | java2
order_index: 0            # position within the track's lesson list

steps:
  - title: Say hello       # shown in the site's step sidebar
    body: |                 # Markdown — see below
      ## Exercise 1: Say hello
      ...
    exercise:                # optional — adds the code runner + autograder
      starter_code: |
        # starter code the student sees
      expected_output: "hello, world"   # omit for an ungraded exercise
    quiz:                     # optional — adds a "Quick check" after this step
      - question: "..."
        options:
          - { label: "...", value: a }
          - { label: "...", value: b }
        correct: a
```

`exercise.language` is inferred from `track` (`java`/`java2` → java,
everything else → python); `kind`/`template` are auto-detected the same way
the old lesson export was (a Java starter with no `public class` of its own
runs inside the engine's `Main`/`main()` shell; anything else is submitted
as-is) — only set them explicitly if that heuristic guesses wrong.

## Markdown body syntax

Only this subset renders — anything else is either an error or passed
through as a plain paragraph, so check the dry-run output after writing a
step:

| Write this | Get |
|---|---|
| `## Heading` | heading (`#`/`##` both map to the same top level inside a step — the page's own title is never repeated) |
| plain text | paragraph, with inline `**bold**`, `*italic*`, `` `code` ``, `[text](url)` |
| `- item` / `1. item` | bullet / numbered list |
| ` ```python ... ``` ` | code block |
| `> [!tip] Title` (`info`\|`tip`\|`warning`\|`success`\|`danger`) | callout |
| `![alt](src "caption")` | image |
| `!embed[youtube](url)` (`youtube`\|`scratch`\|`iframe`) | embed |
| pipe table | table |

A callout's `> ` lines can themselves hold paragraphs, lists, code, or an
image — nothing deeper (no callout inside a callout).

## Why YAML+Markdown instead of a web form

There's no admin auth in this app yet — building one just to gate a content
form would be a bigger lift than the actual problem (turning JSON blocks
into something a person can read and write). This tool gets the same result
— content that isn't 46 hand-authored TypeScript files — without inventing
an auth system first. A real admin UI is a reasonable next step once there's
an actual account system to gate it behind.
