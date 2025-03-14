import BoardCard from "./Board";
import Board from "../interfaces/board";

const selected = "home";

const boards: Board[] = [
  { id: 1, name: "Proyecto A", description: "Planificación inicial" },
  { id: 2, name: "Proyecto B", description: "Marketing y diseño" },
];

const ListBoards: React.FC = () => {
  return (
    <div className="flex-1 p-6 bg-[#1F2937] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#F8FAFC]">
        {selected === "home" ? "Mis Tableros" : selected}
      </h1>
      {selected === "home" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boards.length > 0 ? (
            boards.map((board) => <BoardCard key={board.id} board={board} />)
          ) : (
            <p className="text-[#94A3B8] text-lg">
              No hay tableros disponibles
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ListBoards;
