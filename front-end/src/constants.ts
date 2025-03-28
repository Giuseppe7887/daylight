export const API_SERVER = "daylight-455111.lm.r.appspot.com";
export const API_PATH = "/api";

export const API_URL = `https://${API_SERVER}${API_PATH}`;

export const pwaConfig = {
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
