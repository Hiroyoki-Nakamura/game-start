import axios from "axios";
import { PageHistoryEntry, UserEditHistoryEntry } from "../types/historyTypes";

export const fetchPageHistory = async () => {
  const response = await axios.get<PageHistoryEntry[]>(
    "http://localhost:3004/pageHistory"
  );
  return response.data || [];
};

export const fetchUserEditHistory = async () => {
  const response = await axios.get<UserEditHistoryEntry[]>(
    "http://localhost:3004/userEditHistory"
  );
  return response.data || [];
};

export const addPageToHistory = async (page: string) => {
  await axios.post("http://localhost:3004/pageHistory", { page });
};

export const addUserEditToHistory = async (edit: string) => {
  const fields = edit.split(" ");

  if (fields.length >= 9) {
    const nome = fields[2];
    const sobrenome = fields[3];
    const telefone = fields[4];
    const celular = fields[5];
    const cep = fields[6];
    const endereco = fields[7];
    const numero = fields[8];
    const email = fields[9];
    const nomeUsuario = fields[10];

    const newEdit: UserEditHistoryEntry = {
      id: 0,
      timestamp: new Date().toISOString(),
      changes: {
        nome,
        sobrenome,
        telefone,
        celular,
        cep,
        endereco,
        numero,
        email,
        nomeUsuario,
      },
    };

    await axios.post("http://localhost:3004/userEditHistory", newEdit);
  } else {
    console.error(
      "Erro ao adicionar edição de usuário ao histórico: Formato inválido"
    );
  }
};
