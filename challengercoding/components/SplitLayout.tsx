import { Sidebar } from "@/components/Sidebar";

export default function SplitLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground overflow-x-hidden">
            {/* Left 固定 Side (Navigation & Brand) */}
            <div className="w-full md:w-[25%] lg:w-[20%] md:h-screen md:fixed top-0 left-0 border-r border-border bg-background z-20">
                <Sidebar />
            </div>

            {/* Right Scrollable Content */}
            <div className="w-full md:w-[75%] lg:w-[80%] md:ml-[25%] lg:ml-[20%] relative">
                {children}
            </div>
        </div>
    );
}
