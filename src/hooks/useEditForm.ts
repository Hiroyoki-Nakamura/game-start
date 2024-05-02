import { useState, useEffect } from "react";

import { updateUserData, getUserData } from "../services/userServices";

import { IDataProps } from "../types/dataTypes";

const useEditForm = () => {
  const [editData, setEditData] = useState<IDataProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setEditData(data);
      } catch (error: any) {
        console.error(error.message);
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

  return { editData, setEditData, error, updateData };
};

export default useEditForm;
