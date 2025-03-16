import { useState } from "react";
import Link from "./Link";

export default function ListBoards() {
  const [boards, setBoards] = useState<
    {
      id: number;
      name: string;
      description: string;
    }[]
  >([
    { id: 1, name: "Proyecto A", description: "Planificación inicial" },
    { id: 2, name: "Proyecto B", description: "Marketing y diseño" },
  ]);

  return (
    <>
      <li className="p-4 text-gray-400 uppercase text-sm cursor-default">
        📋 &nbsp; Tableros
      </li>
      <li className="pl-6 pr-4 py-2 hover:bg-gray-800 cursor-pointer">
        <Link to={"/b/" + boards[0].id} content={boards[0].name} />
      </li>
      <li className="pl-6 pr-4 py-2 hover:bg-gray-800 cursor-pointer">
        <Link to={"/b/" + boards[1].id} content={boards[1].name} />
      </li>
    </>
  );
}
