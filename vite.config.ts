import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {},
  server: {
    host: "0.0.0.0", // Accept connections from any IP (for local network testing)
    allowedHosts: [
      "https://1c7f22a45830.ngrok-free.app/",
      "127.0.0.1",
      "localhost",
    ], // <-- Allowed hosts here
    port: 5173, // optional, default is 5173
  },
});
