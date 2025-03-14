export const mfConfig = {
  name: "content",
  exposes: {
    "./Boards": "./src/screens/Boards.tsx",
    "./Styles": "./src/index.css",
  },
  shared: ["react", "react-dom", "tailwindcss", "react-router-dom"],
};
