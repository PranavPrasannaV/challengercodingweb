"""
Seeds one exercise per (kind, language) combination — 6 exercises covering
free_run, fill_function, and write_class in both Python and Java. Safe to
re-run: it clears and re-inserts by a fixed slug so seeding twice doesn't
duplicate rows.
"""
import uuid

from shared.db import session_scope
from shared.models import Exercise

# Deterministic ids so re-running the seed script is idempotent.
NAMESPACE = uuid.UUID("12345678-1234-5678-1234-567812345678")


def sid(slug: str) -> str:
    return str(uuid.uuid5(NAMESPACE, slug))


EXERCISES = [
    dict(
        id=sid("free_run/python"),
        title="Hello, World! (Python)",
        description="Print `hello world` to see your first output.",
        kind="free_run",
        language="python",
        starter_code='print("hello world")',
        template="{{code}}",
        expected_output=None,
        match_mode="trimmed",
        reveal_expected=False,
    ),
    dict(
        id=sid("free_run/java"),
        title="Hello, World! (Java)",
        description="Print `hello world` to see your first output.",
        kind="free_run",
        language="java",
        starter_code='System.out.println("hello world");',
        template=(
            "public class Main {\n"
            "    public static void main(String[] args) throws Exception {\n"
            "{{code}}\n"
            "    }\n"
            "}\n"
        ),
        expected_output=None,
        match_mode="trimmed",
        reveal_expected=False,
    ),
    dict(
        id=sid("fill_function/python"),
        title="Add Two Numbers (Python)",
        description="Complete `add(a, b)` so it returns the sum of its two arguments.",
        kind="fill_function",
        language="python",
        starter_code="    # TODO: return the sum of a and b\n    return 0",
        template=(
            "def add(a, b):\n"
            "{{code}}\n"
            "\n"
            "print(add(2, 3))\n"
            "print(add(10, -4))\n"
        ),
        expected_output="5\n6",
        match_mode="trimmed",
        reveal_expected=False,
    ),
    dict(
        id=sid("fill_function/java"),
        title="Add Two Numbers (Java)",
        description="Complete `add(a, b)` so it returns the sum of its two arguments.",
        kind="fill_function",
        language="java",
        starter_code="        // TODO: return the sum of a and b\n        return 0;",
        template=(
            "public class Main {\n"
            "    static int add(int a, int b) {\n"
            "{{code}}\n"
            "    }\n"
            "    public static void main(String[] args) {\n"
            "        System.out.println(add(2, 3));\n"
            "        System.out.println(add(10, -4));\n"
            "    }\n"
            "}\n"
        ),
        expected_output="5\n6",
        match_mode="trimmed",
        reveal_expected=False,
    ),
    dict(
        id=sid("write_class/python"),
        title="Homework: Greeter (Python)",
        description="Write a `Greeter` class with a `greet()` method that prints `hello from Greeter`.",
        kind="write_class",
        language="python",
        starter_code=(
            "class Greeter:\n"
            "    def greet(self):\n"
            "        print(\"hello from Greeter\")\n"
            "\n"
            "Greeter().greet()\n"
        ),
        template="{{code}}",
        expected_output="hello from Greeter",
        match_mode="trimmed",
        reveal_expected=False,
    ),
    dict(
        id=sid("write_class/java"),
        title="Homework: Solution (Java)",
        description="Write a public class named `Solution` with a `main` method that prints `hello from Solution`.",
        kind="write_class",
        language="java",
        starter_code=(
            "public class Solution {\n"
            "    public static void main(String[] args) {\n"
            "        System.out.println(\"hello from Solution\");\n"
            "    }\n"
            "}\n"
        ),
        template="{{code}}",
        expected_output="hello from Solution",
        match_mode="trimmed",
        reveal_expected=False,
    ),
]


def main():
    with session_scope() as session:
        for row in EXERCISES:
            existing = session.get(Exercise, row["id"])
            if existing is not None:
                session.delete(existing)
                session.flush()
            session.add(Exercise(**row))
    print(f"seeded {len(EXERCISES)} exercises")


if __name__ == "__main__":
    main()
