import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// 🛑 Removed lovable-tagger
// import { componentTagger } from "lovable-tagger";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // ✅ Only React plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
