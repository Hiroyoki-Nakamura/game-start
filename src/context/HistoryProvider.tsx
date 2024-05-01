"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

export interface PageHistoryEntry {
  id: number;
  page: string;
}

export interface UserEditHistoryEntry {
  id: number;
  timestamp: string;
  changes: {
    nome?: string;
    sobrenome?: string;
    telefone?: string;
    celular?: string;
    cep?: string;
    endereco?: string;
    numero?: string;
    email?: string;
    nomeUsuario?: string;
  };
}

interface HistoryContextValue {
  pageHistory: PageHistoryEntry[];
  addToPageHistory: (page: string) => void;
  userEditHistory: UserEditHistoryEntry[];
  addToUserEditHistory: (edit: string) => void;
}

interface HistoryProviderProps {
  children: ReactNode;
}

const HistoryContext = createContext<HistoryContextValue | undefined>(
  undefined
);

export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useHistory deve ser usado dentro de um HistoryProvider");
  }
  return context;
};

export const HistoryProvider: React.FC<HistoryProviderProps> = ({
  children,
}) => {
  const [pageHistory, setPageHistory] = useState<PageHistoryEntry[]>([]);
  const [userEditHistory, setUserEditHistory] = useState<
    UserEditHistoryEntry[]
  >([]);

  const fetchPageHistory = async () => {
    try {
      const response = await axios.get<PageHistoryEntry[]>(
        "http://localhost:3004/pageHistory"
      );
      setPageHistory(response.data || []);
    } catch (error) {
      console.error("Erro ao carregar o histórico de páginas:", error);
    }
  };

  const fetchUserEditHistory = async () => {
    try {
      const response = await axios.get<UserEditHistoryEntry[]>(
        "http://localhost:3004/userEditHistory"
      );
      setUserEditHistory(response.data || []);
    } catch (error) {
      console.error(
        "Erro ao carregar o histórico de edições de usuário:",
        error
      );
    }
  };

  const addPageToHistory = async (page: string) => {
    try {
      await axios.post("http://localhost:3004/pageHistory", { page });
      setPageHistory((prevHistory) => [
        ...prevHistory,
        { id: prevHistory.length + 1, page },
      ]);
    } catch (error) {
      console.error("Erro ao adicionar página ao histórico:", error);
    }
  };

  const addUserEditToHistory = async (edit: string) => {
    try {
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
          id: userEditHistory.length + 1,
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

        setUserEditHistory((prevEditHistory) => [...prevEditHistory, newEdit]);
      } else {
        console.error(
          "Erro ao adicionar edição de usuário ao histórico: Formato inválido"
        );
      }
    } catch (error) {
      console.error("Erro ao adicionar edição de usuário ao histórico:", error);
    }
  };

  useEffect(() => {
    fetchPageHistory();
    fetchUserEditHistory();
  }, []);

  return (
    <HistoryContext.Provider
      value={{
        pageHistory,
        addToPageHistory: addPageToHistory,
        userEditHistory,
        addToUserEditHistory: addUserEditToHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
