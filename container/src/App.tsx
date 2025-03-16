import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./index.css";
import "navbar/Styles";
import "content/Styles";

// @ts-expect-error
import Navbar from "navbar/Navbar";
// @ts-expect-error
import Boards from "content/Boards";
// @ts-expect-error
import Board from "content/Board";
// @ts-expect-error
import NotFound from "content/NotFound";

const App = () => (
  <main className="max-h-screen min-w-screen flex">
    <Router>
      <Navbar />
      <Routes>
        <Route Component={Boards} path="/" />
        <Route Component={Board} path="/b/:id" />
        <Route Component={NotFound} path="*" />
      </Routes>
    </Router>
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
