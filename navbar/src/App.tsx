import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";

const BoardCard = ({ board }: { board: { name: string, description: string, id: number } }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition m-2 w-60">
    <h2 className="font-bold text-lg">{board.name}</h2>
    <p className="text-gray-500">{board.description}</p>
  </div>
);

const App = () => {
  const [selected, setSelected] = useState("home");

  return (
    <Router>
      <div className="flex">
        <Navbar
          // boards={boards}
        />
        <div className="flex-1 ml-64 p-6">
          <h1 className="text-2xl font-bold mb-4">
            {selected === "home" ? "Mis Tableros" : selected}
          </h1>
          {/* {selected === "home" && (
            <div className="flex flex-wrap">
              {boards.map((board) => (
                <BoardCard key={board.id} board={board} />
              ))}
            </div>
          )}

          <button
            className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            onClick={() => setSelected("Crear nuevo tablero")}
          >
            ➕
          </button> */}
        </div>
      </div>
    </Router>
  )
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);