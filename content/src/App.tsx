import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import ButtonCreate from "./components/ButtonCreate";
import ListBoards from "./components/ListBoards";
import Board from "./screens/Board";
import NotFound from "./screens/NotFound";

const App = () => (
  <div className="relative text-3xl mx-auto w-screen min-h-screen bg-[#10110d] flex flex-col">
    <main className="flex-1">
      <Router>
        <Routes>
          <Route Component={ListBoards} path="/" />
          <Route Component={Board} path="/b/:id" />
          <Route Component={NotFound} path="*" />
        </Routes>
      </Router>
    </main>
    <ButtonCreate />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
