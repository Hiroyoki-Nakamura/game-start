import { useState, useEffect } from "react";
import { getUserData } from "../services/userServices";
import { IDataProps } from "../types/dataTypes";

const useData = () => {
  const [userData, setUserData] = useState<IDataProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        setError("Erro ao obter os dados do usuário");
      }
    };

    fetchUserData();
  }, []);

  return { userData, error };
};

export default useData;
