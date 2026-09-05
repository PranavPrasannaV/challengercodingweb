import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create an account",
    description:
        "Create a free Challenger Coding account to save your progress through the Scratch, Python and Java courses.",
    alternates: { canonical: "/signup/" },
};

export default function SignupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
