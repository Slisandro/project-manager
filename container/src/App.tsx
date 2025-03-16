import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "navbar/Styles";
import "content/Styles";

// @ts-expect-error
import Navbar from "navbar/Navbar";
// @ts-expect-error
import Boards from "content/Boards";

const App = () => (
  <main className="h-screen min-w-screen">
    <Router>
      <Navbar />
      <div className="ml-60">
        <Boards />
      </div>
    </Router>
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
