import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBoardHook from "../hooks/useBoard";
import { DndContext } from "@dnd-kit/core";
import BoardComponent from "../components/Board";

function Board() {
  const { id } = useParams();

  const { board, loading } = useBoardHook(id);

  useEffect(() => {}, [board, loading]);

  if (loading) return "Loading...";

  return (
    <section className="relative h-screen flex-1 bg-[#10110d] ml-64">
      <DndContext>
        <BoardComponent />
      </DndContext>
    </section>
  );
}

export default Board;
