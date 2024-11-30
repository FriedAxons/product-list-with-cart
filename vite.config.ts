import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/product-list-with-cart/",
  resolve: {
    alias: {
      "@": "/src", // Alias for src folder (optional but useful for imports)
    },
  },
  build: {
    outDir: "dist",
  },
});
