import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Table from "../interfaces/table";
import Sortable from "./Sortable";

interface Props extends Table {
  addTask: (s: string) => void;
}

export default function Droppable({
  id,
  title,
  color,
  borderColor,
  tasks,
  addTask,
}: Props) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={tasks}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        style={{ backgroundColor: color, borderColor: borderColor }}
        className={"relative rounded-md p-4 border-1 w-50 gap-2 flex flex-col"}
      >
        <h2 className="text-[#dfdbe5] text-sm">{title}</h2>
        {tasks.map((task) => (
          <Sortable key={task.id} {...task} />
        ))}

        <button
          onClick={() => addTask(id)}
          className="absolute top-4 right-4 bg-transparent rounded-sm px-2 text-sm border-none text-white cursor-pointer"
        >
          +
        </button>
      </div>
    </SortableContext>
  );
}
