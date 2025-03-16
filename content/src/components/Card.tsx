import React, { CSSProperties } from "react";
import Task from "../interfaces/task";

interface Props extends Task {
  styleContainer?: CSSProperties;
}

export function Card({ title, description, styleContainer, ...props }: Props) {
  return (
    <div
      className="relative w-full bg-[#151515] border-[#332f38] border-1 flex flex-col gap-1 px-2 py-3"
      style={styleContainer}
    >
      <button
        className="absolute top-1 right-1 p-2 bg-gray-100 hover:bg-gray-300 rounded cursor-grab active:cursor-grabbing transition-colors"
        {...props}
      >
        <svg viewBox="0 0 20 20" width="12" className="fill-[#ffffff]">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </button>
      <p className="text-xs text-[#dfdbe5] w-3/4">{title}</p>
      <p className="text-xs text-[#8b8b8b]">{description}</p>
    </div>
  );
}

export default Card;
