import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/src/site";
import { courses } from "@/src/data/courses";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-paper">
      <div className="wrap section-sm">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4 space-y-4">
            <div className="[&_span]:text-paper">
              <Logo as="text" />
            </div>
            <p className="text-small text-paper/70 measure-tight">
              Free Scratch, Python and Java classes for K&#8211;12 students, taught by
              high schoolers in Sammamish, Washington. Started {SITE.founded}.
            </p>
          </div>

          <div className="md:col-span-4">
            <h2 className="eyebrow text-sand">Courses</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-small">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={course.link}
                    className="text-paper/70 hover:text-paper transition-colors"
                  >
                    {course.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="eyebrow text-sand">Contact</h2>
            <ul className="mt-4 space-y-2 text-small text-paper/70">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-paper transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link href="/resources" className="hover:text-paper transition-colors">
                  Practice sites and documentation
                </Link>
              </li>
              <li>
                <Link href="/compiler" className="hover:text-paper transition-colors">
                  Playground
                </Link>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-3 text-small text-paper/55">
          <p>
            Taught by students since {SITE.founded}. &copy;{" "}
            {new Date().getFullYear()} {SITE.name}.
          </p>
          <Link href="/privacy" className="hover:text-paper transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
