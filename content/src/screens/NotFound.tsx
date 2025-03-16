import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <button
        className="border-1 border-[#FFFFFF] px-8 py-4 rounded-md"
        onClick={() => navigate("/")}
      >
        Inicio
      </button>
    </div>
  );
}

export default NotFound;
