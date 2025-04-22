import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon.png", "icons/*.png"],
      manifest: {
        // Full name of the app displayed in the install prompt or splash screen
        name: "Zomato Food Delivery",

        // Short version used where space is limited (like app icon labels)
        short_name: "Zomato",

        // Description shown in the install prompt or OS UI
        description: "A Zomato-style PWA for food ordering & delivery",

        // URL to launch when the app is opened (acts like home page)
        start_url: "/",

        // Display mode of the app:
        // 'standalone' makes it look like a native app without browser UI
        display: "standalone",

        // Background color shown while the app is loading (splash screen)
        background_color: "#ffffff",

        // Theme color of the address bar and browser UI
        theme_color: "#f43f5e", // tailwind's rose-500

        // Orientation of the app (portrait only)
        orientation: "portrait",

        icons: [
          {
            src: "android/android-launchericon-48-48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-72-72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-96-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-144-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "ios/180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "ios/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "ios/256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "ios/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "ios/1024.png",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "windows11/Square150x150Logo.scale-200.png",
            sizes: "300x300",
            type: "image/png",
          },
          {
            src: "windows11/Wide310x150Logo.scale-200.png",
            sizes: "620x300",
            type: "image/png",
          },
          {
            src: "windows11/LargeTile.scale-200.png",
            sizes: "620x620",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-256.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
          {
            urlPattern: /^https:\/\/your-api\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 300, // 5 mins
              },
            },
          },
        ],
      },
    }),
  ],
});

// This configuration file sets up a Vite project with React and PWA support.

// Cache First | Serve from cache, fallback to network | Static assets like icons, CSS
// Network First | Try network first, fallback to cache | Dynamic content like API responses
// Stale While Revalidate | Serve from cache & fetch in background to update cache | Blog posts, home feed, dashboards
