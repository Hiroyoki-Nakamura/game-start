import { useState } from "react";
import { updateUserData } from "../services/userServices";

import { IDataProps } from "../types/dataTypes";

const useEditFormSubmit = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: IDataProps) => {
    try {
      await updateUserData(data);
      console.log("Dados atualizados com sucesso!");
    } catch (error) {
      setError("Erro ao atualizar os dados");
      console.error("Erro ao atualizar os dados", error);
    }
  };

  return { handleSubmit, error };
};

export default useEditFormSubmit;
