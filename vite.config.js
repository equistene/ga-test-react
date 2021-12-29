import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://equistene.github.io/ga-test-react/",
  plugins: [react()],
});
