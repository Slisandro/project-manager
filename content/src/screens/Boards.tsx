import React from "react";
import ListBoards from "../components/ListBoards";
import ButtonCreate from "../components/ButtonCreate";

function BoardsScreen() {
  return (
    <div className="relative text-3xl mx-auto w-screen min-h-screen bg-[#1F2937] flex flex-col">
      <main className="flex-1">
        <ListBoards />
      </main>
      <ButtonCreate />
    </div>
  );
}

export default BoardsScreen;
