"""
Converts one step's Markdown prose into the same LessonContentBlock shapes
the frontend renders (challengercoding-next/src/data/lessons/blocks.ts) —
heading/paragraph/list/code/callout/table/image/embed. Deliberately a small,
known subset rather than a general Markdown engine: an admin writing lesson
content should never discover a Markdown feature that produces something the
site can't render.

Inline formatting (**bold**, *italic*, `code`, [text](url)) is passed through
untouched in paragraph/list-item/table-cell text — the frontend's
renderInline() in app/components/lesson-blocks.tsx already speaks exactly
this subset, so there is nothing to translate.

Supported block syntax:
    # / ## / ### / ####   -> heading (mapped to levels 2-4, see _heading_level)
    plain text             -> paragraph
    - item / * item        -> bullet list
    1. item                -> numbered list
    ```[lang]\\ncode\\n```   -> code block
    > [!tone] Title         -> callout (tone: info|tip|warning|success|danger)
    > continuation lines
    ![alt](src "caption")  -> image
    !embed[kind](src)       -> embed (kind: youtube|scratch|iframe)
    | a | b |               -> table (standard pipe-table syntax)
"""
import re

CALLOUT_TONES = {"info", "tip", "warning", "success", "danger"}


def _heading_level(hashes: str) -> int:
    # `#` and `##` both read as the top level inside a step (the page's own
    # <h1> is the lesson concept, never repeated in body content) — deeper
    # nesting maps down from there, capped at 4 to match the schema.
    return min(max(len(hashes), 2), 4)


def _flush_paragraph(buf: list[str], out: list[dict]) -> None:
    text = " ".join(line.strip() for line in buf if line.strip())
    if text:
        out.append({"type": "paragraph", "text": text})
    buf.clear()


def markdown_to_blocks(md: str) -> list[dict]:
    lines = md.replace("\r\n", "\n").split("\n")
    out: list[dict] = []
    para_buf: list[str] = []
    i = 0
    n = len(lines)

    while i < n:
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            _flush_paragraph(para_buf, out)
            i += 1
            continue

        heading_match = re.match(r"^(#{1,4})\s+(.*)$", stripped)
        if heading_match:
            _flush_paragraph(para_buf, out)
            out.append({"type": "heading", "level": _heading_level(heading_match.group(1)), "text": heading_match.group(2).strip()})
            i += 1
            continue

        fence_match = re.match(r"^```(\w*)\s*$", stripped)
        if fence_match:
            _flush_paragraph(para_buf, out)
            language = fence_match.group(1) or None
            code_lines: list[str] = []
            i += 1
            while i < n and lines[i].strip() != "```":
                code_lines.append(lines[i])
                i += 1
            i += 1  # skip closing fence
            block: dict = {"type": "code", "code": "\n".join(code_lines).rstrip("\n")}
            if language:
                block["language"] = language
            out.append(block)
            continue

        list_match = re.match(r"^([-*]|\d+\.)\s+(.*)$", stripped)
        if list_match:
            _flush_paragraph(para_buf, out)
            style = "number" if list_match.group(1)[0].isdigit() else "bullet"
            items = [list_match.group(2).strip()]
            i += 1
            while i < n:
                m = re.match(r"^([-*]|\d+\.)\s+(.*)$", lines[i].strip())
                if not m or not lines[i].strip():
                    break
                items.append(m.group(2).strip())
                i += 1
            out.append({"type": "list", "style": style, "items": items})
            continue

        callout_match = re.match(r"^>\s*\[!(\w+)\]\s*(.*)$", stripped)
        if callout_match:
            _flush_paragraph(para_buf, out)
            tone = callout_match.group(1).lower()
            if tone not in CALLOUT_TONES:
                raise ValueError(f"unknown callout tone \"{tone}\" — must be one of {sorted(CALLOUT_TONES)}")
            title = callout_match.group(2).strip() or None
            body_lines: list[str] = []
            i += 1
            while i < n and lines[i].strip().startswith(">"):
                body_lines.append(re.sub(r"^>\s?", "", lines[i].strip()))
                i += 1
            body_blocks = [b for b in markdown_to_blocks("\n".join(body_lines)) if b["type"] in ("paragraph", "list", "code", "image")]
            callout: dict = {"type": "callout", "tone": tone, "body": body_blocks}
            if title:
                callout["title"] = title
            out.append(callout)
            continue

        embed_match = re.match(r"^!embed\[(\w+)\]\(([^)]+)\)$", stripped)
        if embed_match:
            _flush_paragraph(para_buf, out)
            kind = embed_match.group(1)
            if kind not in ("youtube", "scratch", "iframe"):
                raise ValueError(f'unknown embed kind "{kind}" — must be youtube, scratch, or iframe')
            out.append({"type": "embed", "kind": kind, "src": embed_match.group(2)})
            i += 1
            continue

        image_match = re.match(r'^!\[([^\]]*)\]\(([^)"]+)(?:\s+"([^"]*)")?\)$', stripped)
        if image_match:
            _flush_paragraph(para_buf, out)
            image: dict = {"type": "image", "src": image_match.group(2), "alt": image_match.group(1)}
            if image_match.group(3):
                image["caption"] = image_match.group(3)
            out.append(image)
            i += 1
            continue

        if stripped.startswith("|") and i + 1 < n and re.match(r"^\|[\s:|-]+\|$", lines[i + 1].strip()):
            _flush_paragraph(para_buf, out)
            headers = [c.strip() for c in stripped.strip("|").split("|")]
            i += 2  # header row + separator row
            rows: list[list[str]] = []
            while i < n and lines[i].strip().startswith("|"):
                rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")])
                i += 1
            out.append({"type": "table", "headers": headers, "rows": rows})
            continue

        para_buf.append(line)
        i += 1

    _flush_paragraph(para_buf, out)
    return out
