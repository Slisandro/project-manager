export const mfConfig = {
  name: "navbar",
  exposes: {
    "./Navbar": "./src/components/Navbar",
    "./Styles": "./src/index.css"
  },
  shared: ["react", "react-dom", "tailwindcss", "react-router-dom"],
};
