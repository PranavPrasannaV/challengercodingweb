import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your progress",
    description:
        "Pick up where you left off across the Scratch, Python and Java courses.",
    alternates: { canonical: "/learn/" },
};

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
