import Task from "./task";

export default interface Table {
  id: string;
  title: string;
  color: string;
  borderColor: string;
  tasks: Task[];
}
