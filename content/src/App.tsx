import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import ButtonCreate from "./components/ButtonCreate";
import ListBoards from "./components/ListBoards";

const App = () => (
  <Router>
    <div className="relative text-3xl mx-auto w-screen min-h-screen bg-[#1F2937] flex flex-col">
      <main className="flex-1">
        <ListBoards />
      </main>
      <ButtonCreate />
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
