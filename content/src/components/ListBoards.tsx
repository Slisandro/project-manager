import Board from "../interfaces/board";

interface BoardCardProps {
  board: Board;
}

const boards: Board[] = [
  {
    id: "1",
    title: "Proyecto A",
    description: "Planificación inicial",
    tables: [],
  },
  {
    id: "2",
    title: "Proyecto B",
    description: "Marketing y diseño",
    tables: [],
  },
];

const ListBoards: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#F8FAFC]">Mis Tableros</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.length > 0 ? (
          boards.map((board) => <BoardCard key={board.id} board={board} />)
        ) : (
          <p className="text-[#94A3B8] text-lg">No hay tableros disponibles</p>
        )}
      </div>
    </div>
  );
};

const BoardCard: React.FC<BoardCardProps> = ({ board }) => {
  return (
    <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#374151]">
      <h2 className="text-xl font-semibold text-[#F8FAFC] mb-2">
        {board.title}
      </h2>
      <p className="text-[#94A3B8] text-sm">{board.description}</p>
    </div>
  );
};

export default ListBoards;
