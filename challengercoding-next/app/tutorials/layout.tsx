export default function TutorialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // The sidebar-and-floating-button shell that used to live here was app
    // furniture on a reading site. Navigation is now the catalog, the
    // breadcrumb, and the next/previous links on each lesson.
    return <>{children}</>;
}
