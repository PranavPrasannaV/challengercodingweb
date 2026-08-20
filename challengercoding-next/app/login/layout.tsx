import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign in",
    description:
        "Sign in to Challenger Coding to keep track of which lessons you have finished.",
    alternates: { canonical: "/login/" },
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
