"""
MVP graded comparison is stdout-based (string match per match_mode), which is
naturally language-agnostic — a Python program and a Java program that print
the same text grade the same way.

# TODO: structured-value checks — if a graded cell ever needs to compare a
# produced value rather than printed text, have each language harness print
# `__RESULT__ <canonical-json>` and compare that instead, so e.g. a Python
# list and a Java List can compare equal.
"""


def compare_output(stdout: str, expected: str, match_mode: str) -> bool:
    if match_mode == "exact":
        return stdout == expected
    if match_mode == "trimmed":
        return stdout.strip() == expected.strip()
    if match_mode == "contains":
        return expected in stdout
    raise ValueError(f"unknown match_mode: {match_mode}")
