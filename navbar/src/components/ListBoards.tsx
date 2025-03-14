import { NavLink } from "react-router-dom";
import Link from "./Link";

const boards: { id: number, name: string }[] | [] = [
    // { id: 1, name: "Proyecto A", description: "Planificación inicial" },
    // { id: 2, name: "Proyecto B", description: "Marketing y diseño" },
]

export default function ListBoards() {
    return (
        <>
            <li className="p-4 text-gray-400 uppercase text-sm cursor-default">📋 Tableros</li>
            {boards.length ? boards.map((board) => (
                <li
                    key={board.id}
                    className="pl-6 pr-4 py-2 hover:bg-gray-800 cursor-pointer"
                >
                    <Link to={"/boards/" + board.id} content={board.name} />
                </li>
            )) : <li className="opacity-25 pl-6 pr-4 py-2 cursor-default">No hay tableros aún</li>
            }
        </>
    )
}