export const mfConfig = {
  name: "content",
  exposes: {
    "./Boards": "./src/screens/Boards.tsx",
    "./Board": "./src/screens/Board.tsx",
    "./NotFound": "./src/screens/NotFound.tsx",
    "./Styles": "./src/index.css",
  },
  shared: ["react", "react-dom", "tailwindcss", "react-router-dom"],
};
