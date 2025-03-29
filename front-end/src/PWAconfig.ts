import type { VitePWAOptions } from "vite-plugin-pwa";

const pwaConfig:Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  manifest: {
    name: "DAYLIGHT",
    short_name: "daylight",
    theme_color: "#ffffff",
    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    icons: [
      {
        src: "pwa/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};


export default pwaConfig;