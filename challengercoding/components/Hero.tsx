"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroProps {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    centered?: boolean;
}

export default function Hero({ title, subtitle, children, centered = true }: HeroProps) {
    // If no props are passed, render the default Home Hero (or handle this differently in Home page)
    // Since I hardcoded Home Hero in previous step, I should check if I broke usage in other pages.
    // The other pages pass title/subtitle.

    // If title is passed, render simple page header
    if (title) {
        return (
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[70%] bg-primary/10 blur-[120px] rounded-full" />
                </div>
                <div className={cn("container mx-auto px-6 relative z-10", centered && "text-center")}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{title}</h1>
                        {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
                        {children && <div className="mt-8">{children}</div>}
                    </motion.div>
                </div>
            </div>
        );
    }

    // Default Home Hero Content
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[100px] rounded-full animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {children}
            </div>
        </div>
    );
}
