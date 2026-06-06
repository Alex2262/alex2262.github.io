import { defineConfig } from "astro/config";

// Deploying to a user site repository (alex2262alexander.github.io) avoids
// base-path issues. If this is ever moved to a project repo, add e.g.
// `base: "/personal-site"` below and update internal links accordingly.
export default defineConfig({
  site: "https://alex2262.github.io",
  // The floating dev toolbar is a local-only dev aid (never shipped in the
  // production build); disable it so it doesn't show while running `npm run dev`.
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: false,
    },
  },
});
