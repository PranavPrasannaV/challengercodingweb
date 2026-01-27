"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseLink {
    name: string;
    href: string;
}

interface TutorialSidebarProps {
    courses: CourseLink[];
}

export default function TutorialSidebar({ courses }: TutorialSidebarProps) {
    // Now simpler since global sidebar handles main nav. This is just for "switching courses"
    // kept minimal.
    return (
        <div className="w-full border-b border-border p-4 bg-background sticky top-0 z-30 flex items-center gap-4 overflow-x-auto">
            <span className="font-mono text-xs uppercase text-muted-foreground shrink-0">Active Module:</span>
            <div className="flex gap-4">
                {courses.map((course, i) => (
                    <Link key={i} href={course.href} className="text-sm whitespace-nowrap hover:text-white text-muted-foreground transition-colors">
                        {course.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
