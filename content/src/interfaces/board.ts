import Table from "./table";

export default interface Board {
  id: string;
  title: string;
  description: string;
  tables: Table[];
}
