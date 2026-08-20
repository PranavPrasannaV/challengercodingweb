/**
 * Single source of truth for facts about the organization.
 *
 * Anything here shows up in metadata, structured data, llms.txt and the
 * footer, so it must stay factual. Do not add a claim you cannot point to.
 */
export const SITE = {
  name: "Challenger Coding",
  url: "https://challengercoding.org",
  domain: "challengercoding.org",
  description:
    "Challenger Coding is a student-run nonprofit that teaches free Scratch, Python, and Java classes. Its 46 lessons are open to anyone, with no account and no cost.",
  shortDescription: "Free coding classes, taught by students, open to everyone.",
  email: "aadi.saraf@outlook.com",
  linkedin: "https://www.linkedin.com/in/jaden-tang-0924b6279/",
  enrollUrl: "https://forms.office.com/r/BnXvEhKGVs",
  locality: "Sammamish",
  region: "WA",
  founded: "2023",
  founders: ["Jaden Tang", "Aadi Saraf"],
  president: "Aadi Saraf",
} as const;

/**
 * Share card. A plain file in public/ rather than a generated route: the static
 * export deploys to GitHub Pages, which serves extensionless files as
 * application/octet-stream, and crawlers drop a preview whose image is not
 * served with an image content type.
 */
export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — ${SITE.shortDescription}`,
} as const;

/**
 * Course counts are derived from src/data/courses.ts.
 * studentsTaught and hoursOfContent are figures the organization confirms;
 * they are cumulative since 2023, not a current headcount.
 */
export const STATS = {
  courses: 6,
  lessons: 46,
  lessonsWithNotes: 14,
  languages: 3,
  studentsTaught: "3,000+",
  hoursOfContent: "50+",
} as const;
