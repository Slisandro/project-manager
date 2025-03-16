import React from "react";
import ButtonCreate from "../components/ButtonCreate";
import ListBoards from "../components/ListBoards";

function BoardsScreen() {
  return (
    <div className="relative ml-64 text-3xl mx-auto h-screen w-full bg-[#10110d] flex flex-col pl-6">
      <main className="flex-1">
        <ListBoards />
      </main>
      <ButtonCreate />
    </div>
  );
}

export default BoardsScreen;
