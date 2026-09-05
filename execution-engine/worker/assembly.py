"""
Turns a run's student code (+ optional exercise template) into a concrete
source file on disk, and resolves what to actually execute.

This is the one place that knows about {{code}} substitution and Java's
filename-must-match-public-class-name rule.
"""
import re
from dataclasses import dataclass
from typing import Optional

# Used when a run has no exercise_id (a bare scratch cell) — free_run-style,
# direct execution, no hidden driver.
DEFAULT_TEMPLATES = {
    "python": "{{code}}",
    "java": (
        "public class Main {\n"
        "    public static void main(String[] args) throws Exception {\n"
        "{{code}}\n"
        "    }\n"
        "}\n"
    ),
}

JAVA_CLASS_NAME_RE = re.compile(r"public\s+(?:final\s+|abstract\s+)?class\s+(\w+)")
JAVA_ANY_CLASS_WITH_MAIN_RE = re.compile(
    r"class\s+(\w+)[^{]*\{(?:[^{}]|\{[^{}]*\})*?public\s+static\s+void\s+main"
)
VALID_JAVA_IDENTIFIER_RE = re.compile(r"^[A-Za-z_]\w*$")


@dataclass
class AssembledJob:
    source: str
    language: str
    filename: str  # e.g. "main.py" or "Solution.java"
    entry: Optional[str] = None  # Java entry class name; unused for Python


def assemble_source(language: str, template: Optional[str], code: str) -> str:
    template = template or DEFAULT_TEMPLATES[language]
    return template.replace("{{code}}", code)


def resolve_java_entry(source: str) -> str:
    """
    Figure out the public/entry class name for a write_class submission (or
    any Java source without a pinned Main). Falls back to "Main" + a scan for
    whichever class declares main() if no public class is found.
    Never trusts the parsed name directly as a filename without validating it.
    """
    match = JAVA_CLASS_NAME_RE.search(source)
    if match:
        name = match.group(1)
        if VALID_JAVA_IDENTIFIER_RE.match(name):
            return name

    match = JAVA_ANY_CLASS_WITH_MAIN_RE.search(source)
    if match:
        name = match.group(1)
        if VALID_JAVA_IDENTIFIER_RE.match(name):
            return name

    return "Main"


def build_job(language: str, template: Optional[str], code: str, kind: str) -> AssembledJob:
    if language == "java" and kind != "write_class" and JAVA_CLASS_NAME_RE.search(code):
        # No exercise context (a bare /cell submission, or a caller that
        # hasn't wired exercise_id through yet — see CodeRunner in the
        # frontend), but the submitted code is already a complete standalone
        # program with its own public class. Wrapping it in the
        # free_run/fill_function Main shell would nest that class declaration
        # inside main() and fail to compile ("illegal start of expression"),
        # so treat it like write_class instead: pass the code through
        # unwrapped and resolve its own class name. Mirrors the same
        # heuristic export-lessons.mts's exerciseShapeFor() uses at export
        # time, applied here as a runtime safety net.
        kind = "write_class"
        template = "{{code}}"

    source = assemble_source(language, template, code)

    if language == "python":
        return AssembledJob(source=source, language=language, filename="main.py")

    if language == "java":
        if kind == "write_class":
            entry = resolve_java_entry(source)
        else:
            # free_run / fill_function templates pin the class to Main —
            # deterministic, the student never names a class.
            entry = "Main"
        return AssembledJob(source=source, language=language, filename=f"{entry}.java", entry=entry)

    raise ValueError(f"unsupported language: {language}")
