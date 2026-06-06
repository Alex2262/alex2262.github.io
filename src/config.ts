/**
 * Central site configuration. Edit identity, contact, and navigation here —
 * components read from this so nothing is hard-coded in two places.
 */
export const SITE = {
  name: "Alexander Tian",
  description:
    "Alexander Tian — undergraduate at UC Berkeley interested in systems, ML infrastructure, algorithms, and hardware-aware optimization.",
  githubUrl: "https://github.com/Alex2262",
  githubLabel: "github.com/Alex2262",
  // Email is shown obfuscated (no mailto:) to avoid scraping.
  emailDisplay: "alexander.tian [at] berkeley.edu",
};

/** Top navigation. Add a page here and it appears in the header everywhere. */
export const NAV = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/writing", label: "writing" },
  { href: "/interests", label: "interests" },
  { href: "/resume", label: "resume" },
];
