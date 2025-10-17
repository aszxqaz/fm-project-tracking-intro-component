// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://aszxqaz.github.io",
  base: "/fm-project-tracking-intro-component",
  vite: {
    plugins: [tailwindcss()],
  },
});
