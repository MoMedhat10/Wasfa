import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  // Mirror production: the app calls /api on its own origin (Vercel rewrites it to Render),
  // so the refresh-token cookie stays first-party in both environments.
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
