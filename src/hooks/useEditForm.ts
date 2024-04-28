import { useState, useEffect } from "react";
import { updateUserData, getUserData } from "../services/userServices";

import { IDataProps } from "../types/dataTypes";
import { IEditFormResults } from "../types/editFormResultsTypes";

const useEditForm = (): IEditFormResults => {
  const [editData, setEditData] = useState<IDataProps>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setEditData(data);
      } catch (error: any) {
        console.error(error.message);
        setError("Não foi possível encontrar od dados");
      }
    };

    fetchUserData();
  }, []);

  const updateData = async (data: IDataProps) => {
    try {
      await updateUserData(data);
    } catch (error) {
      throw new Error("Erro ao atualizar os dados");
    }
  };

  return { editData, updateData, setEditData, error };
};

export default useEditForm;
