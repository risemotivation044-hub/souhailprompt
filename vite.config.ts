import { defineConfig } from "vite";

export default defineConfig({
  // Relative asset URLs so the same dist/ works at a domain root and under a
  // sub-path (e.g. GitHub Pages: /souhailprompt/).
  base: "./",
});
