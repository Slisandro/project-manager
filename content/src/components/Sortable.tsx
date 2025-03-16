import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Task from "../interfaces/task";
import Card from "./Card";

export default function Sortable(props: Task) {
  const { id } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1, // Opacidad reducida mientras se arrastra
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <Card {...props} {...listeners} {...attributes} />
    </div>
  );
}
