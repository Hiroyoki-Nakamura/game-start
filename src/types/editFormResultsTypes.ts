import { IDataProps } from "./dataTypes";

export interface IEditFormResults {
  editData: IDataProps;
  setEditData: (data: IDataProps) => void;
  updateData: (data: IDataProps) => Promise<void>;
  error: string | null;
}
