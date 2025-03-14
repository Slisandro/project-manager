import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  const [selected, setSelected] = useState("home");

  return (
    <Router>
      <Navbar />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
