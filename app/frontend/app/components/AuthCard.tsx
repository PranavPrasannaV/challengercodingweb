import Link from "next/link";

/** The two auth pages share one shell, so they cannot drift apart. */
export default function AuthCard({
  title,
  children,
  footer,
}: {
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <main id="main" className="wrap section flex justify-center">
      <div className="w-full max-w-sm">
        <div className="card p-8">
          <h1 className="text-h2 font-serif text-ink">{title}</h1>
          {children}
        </div>

        <p className="text-small text-ink-muted text-center mt-6">{footer}</p>

        <p className="text-small text-ink-meta text-center mt-8">
          <Link href="/tutorials" className="link-quiet">
            Every lesson is readable without an account
          </Link>
        </p>
      </div>
    </main>
  );
}
