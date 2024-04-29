import axios from "axios";

import { IDataProps } from "../types/dataTypes";

export const getUserData = async (): Promise<IDataProps> => {
  try {
    const response = await axios.get<IDataProps>(
      "http://localhost:3004/usuario"
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Os dados de usuario não foram localizados" /* + error.message */
    );
  }
};

export const updateUserData = async (
  userData: IDataProps
): Promise<IDataProps> => {
  try {
    const response = await axios.put<IDataProps>(
      "http://localhost:3004/usuario",
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualizar os dados");
  }
};
