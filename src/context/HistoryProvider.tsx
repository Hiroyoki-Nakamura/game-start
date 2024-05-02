"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import {
  fetchPageHistory,
  fetchUserEditHistory,
  addPageToHistory,
  addUserEditToHistory,
} from "../services/historyServices";

import { PageHistoryEntry, UserEditHistoryEntry } from "../types/historyTypes";

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
  const [userEditHistory, setUserEditHistory] = useState<UserEditHistoryEntry[]>([]);

  useEffect(() => {
    fetchPageHistory()
      .then(setPageHistory)
      .catch((error) =>
        console.error("Erro ao carregar o histórico de páginas:", error)
      );
    fetchUserEditHistory()
      .then(setUserEditHistory)
      .catch((error) =>
        console.error(
          "Erro ao carregar o histórico de edições de usuário:",
          error
        )
      );
  }, []);

  const addToPageHistory = async (page: string) => {
    try {
      await addPageToHistory(page);
      setPageHistory((prevHistory) => [
        ...prevHistory,
        { id: prevHistory.length + 1, page },
      ]);
    } catch (error) {
      console.error("Erro ao adicionar página ao histórico:", error);
    }
  };

  const addToUserEditHistory = async (edit: string) => {
    try {
      await addUserEditToHistory(edit);
    } catch (error) {
      console.error("Erro ao adicionar edição de usuário ao histórico:", error);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        pageHistory,
        addToPageHistory,
        userEditHistory,
        addToUserEditHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
