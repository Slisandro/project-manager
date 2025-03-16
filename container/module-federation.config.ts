export const mfConfig = {
  name: "container",
  exposes: {},
  remotes: {
    navbar: "navbar@https://szhp6l-3001.csb.app/navbar.js",
    content: "content@https://szhp6l-3002.csb.app/content.js",
  },
  shared: ["react", "react-dom", "tailwindcss", "react-router-dom"],
};
