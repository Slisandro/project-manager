import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import useDragAndDrop from "../hooks/useDropAndDrag";
import Droppable from "./Droppable";
import Card from "./Card";
import Task from "../interfaces/task";

const board1 = {
  id: "board-1",
  title: "Desarrollo Web",
  description: "Tablero para organizar tareas del equipo de desarrollo.",
  tables: [
    {
      id: "table-1",
      title: "Por Hacer",
      color: "#171e2b",
      borderColor: "#28344a",
      tasks: [
        {
          id: "task-1",
          title: "Definir requisitos",
          description: "Listar las funcionalidades esenciales del proyecto.",
        },
      ],
    },
    {
      id: "table-2",
      title: "En Progreso",
      color: "#231f2c",
      borderColor: "#4c4756",
      tasks: [
        {
          id: "task-2",
          title: "Diseñar UI",
          description: "Crear prototipos de la interfaz de usuario.",
        },
      ],
    },
    {
      id: "table-3",
      title: "Bloqueadas",
      color: "#311616",
      borderColor: "#5a2d2d",
      tasks: [
        {
          id: "task-3",
          title: "Esperando aprobación",
          description: "Esperar la validación del cliente sobre el diseño.",
        },
      ],
    },
    {
      id: "table-4",
      title: "Finalizadas",
      color: "#1e2d2f",
      borderColor: "#3a4a4d",
      tasks: [
        {
          id: "task-4",
          title: "Configurar repositorio",
          description: "Crear repositorio y configurar control de versiones.",
        },
      ],
    },
    {
      id: "table-5",
      title: "Canceladas",
      color: "#1a1a1a",
      borderColor: "#333333",
      tasks: [
        {
          id: "task-5",
          title: "Revisión de tecnología",
          description: "Evaluar herramientas, se decidió descartar una opción.",
        },
      ],
    },
  ],
};

export default function App() {
  const {
    items,
    activeTask,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    setItems,
  } = useDragAndDrop([board1]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addTask = (tableId: string) => {
    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: "Nueva tarea",
      description: "Descripción de la nueva tarea",
    };

    setItems((prevBoards) =>
      prevBoards.map((board) => ({
        ...board,
        tables: board.tables.map((table) =>
          table.id === tableId
            ? { ...table, tasks: [...table.tasks, newTask] }
            : table
        ),
      }))
    );
  };

  return (
    <div className="flex gap-4 min-h-screen p-8">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {items.flatMap((board) =>
          board.tables.map((table) => (
            <Droppable key={table.id} {...table} addTask={addTask} />
          ))
        )}
        <DragOverlay>
          {activeTask ? <Card {...activeTask} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
