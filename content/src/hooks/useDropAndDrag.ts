import { useState } from "react";
import { DragStartEvent, DragOverEvent, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Board from "../interfaces/board";
import Task from "../interfaces/task";
import Table from "../interfaces/table";

export default function useDragAndDrop(initialBoards: Board[]) {
  const [items, setItems] = useState<Board[]>(initialBoards);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const findContainer = (id: string | number): Table | undefined => {
    for (const board of items) {
      for (const table of board.tables) {
        if (table.tasks.some((task) => task.id === id)) {
          return table;
        }
      }
    }
    return undefined;
  };

  const findTask = (id: string | number): Task | undefined => {
    for (const board of items) {
      for (const table of board.tables) {
        const task = table.tasks.find((task) => task.id === id);
        if (task) return task;
      }
    }
    return undefined;
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;
    const task = findTask(id);
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!active || !over || !activeTask) return;

    const { id: overId } = over;
    const overTable = findContainer(overId);
    const activeTable = findContainer(activeTask.id);

    if (!activeTable || !overTable || activeTable.id === overTable.id) {
      return;
    }

    setItems((prevBoards) =>
      prevBoards.map((board) => ({
        ...board,
        tables: board.tables.map((table) => {
          if (table.id === activeTable.id) {
            return {
              ...table,
              tasks: table.tasks.filter((task) => task.id !== activeTask.id),
            };
          }
          if (table.id === overTable.id) {
            return {
              ...table,
              tasks: [...table.tasks, activeTask],
            };
          }
          return table;
        }),
      }))
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || !activeTask) return;

    const { id: overId } = over;
    const overTable = findContainer(overId);
    const activeTable = findContainer(activeTask.id);

    if (!activeTable || !overTable || activeTable.id !== overTable.id) {
      return;
    }

    setItems((prevBoards) =>
      prevBoards.map((board) => ({
        ...board,
        tables: board.tables.map((table) => {
          if (table.id === overTable.id) {
            const oldIndex = table.tasks.findIndex(
              (task) => task.id === activeTask.id
            );
            const newIndex = table.tasks.findIndex(
              (task) => task.id === overId
            );

            return {
              ...table,
              tasks: arrayMove(table.tasks, oldIndex, newIndex),
            };
          }
          return table;
        }),
      }))
    );

    setActiveTask(null);
  };

  return {
    items,
    setItems,
    activeTask,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
}
