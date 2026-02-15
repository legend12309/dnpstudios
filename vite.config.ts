import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
=======
import { componentTagger } from "lovable-tagger";
>>>>>>> 41aa7448b710a6f83e8472e539e659acc74fa569

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> 41aa7448b710a6f83e8472e539e659acc74fa569
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
