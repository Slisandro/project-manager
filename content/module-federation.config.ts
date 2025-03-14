export const mfConfig = {
  name: "content",
  exposes: {
    "./BoardScreen": "./src/screens/BoardScreen.tsx",
    "./Styles": "./src/index.css",
  },
  shared: ["react", "react-dom", "tailwindcss", "react-router-dom"],
};
