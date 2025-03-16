export const mfConfig = {
  name: "container",
  exposes: {},
  remotes: {
    navbar: "navbar@" + process.env.REACT_APP_NAVBAR + "navbar.js",
    content: "content@" + process.env.REACT_APP_CONTENT + "content.js",
  },
  shared: ["react", "react-dom", "tailwindcss", "react-router-dom"],
};
