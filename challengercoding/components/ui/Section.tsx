"use client";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

export const Section = ({ className, container = true, children, ...props }: SectionProps) => {
    return (
        <section className={cn("py-16 md:py-24 relative overflow-hidden", className)} {...props}>
            {container ? (
                <div className="container mx-auto px-6 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};
