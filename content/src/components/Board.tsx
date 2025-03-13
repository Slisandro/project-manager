import React from "react";
import Board from "../interfaces/board";

const BoardCard: React.FC<{ board: Board }> = ({ board }) => (
  <div className="bg-[#1E293B] cursor-pointer border border-[#334155] p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out m-2 w-64">
    <h2 className="font-bold text-xl text-[#F8FAFC] hover:text-[#ff343f]">
      {board.name}
    </h2>
    <p className="text-[#94A3B8] text-lg mt-1">{board.description}</p>
  </div>
);

export default BoardCard;
