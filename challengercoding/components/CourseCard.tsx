"use client";

import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
}

export default function CourseCard({ title, description, href, icon }: CourseCardProps) {
    return (
        <Link href={href} className="block h-full">
            <Card className="h-full flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {icon || <div className="w-6 h-6 rounded-full bg-primary" />}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </div>

                <div className="flex items-center gap-2 text-primary text-sm font-medium mt-6 group-hover:gap-3 transition-all">
                    Start Learning <ArrowRight className="w-4 h-4" />
                </div>
            </Card>
        </Link>
    );
}
