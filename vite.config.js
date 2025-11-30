import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/goit-neo-react-hw-module1/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
