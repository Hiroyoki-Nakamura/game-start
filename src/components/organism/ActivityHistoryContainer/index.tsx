"use client";

import React from "react";

import Container from "../../../components/atom/Container";
import ActivityHistoryContent from "../../../components/molecule/ActivityHistoryContent";

import { useHistory } from "../../../context/HistoryProvider";

import { UserEditHistoryEntry } from "../../../types/historyTypes";

const ActivityHistoryContainer: React.FC = () => {
  const { pageHistory, userEditHistory } = useHistory();

  const formattedUserEditHistory: UserEditHistoryEntry[] = userEditHistory.map(
    (entry) => ({
      id: entry.id,
      timestamp: entry.timestamp,
      changes: {
        nome: entry.changes?.nome || "",
        sobrenome: entry.changes?.sobrenome || "",
        telefone: entry.changes?.telefone || "",
        celular: entry.changes?.celular || "",
        cep: entry.changes?.cep || "",
        endereco: entry.changes?.endereco || "",
        numero: entry.changes?.numero || "",
        email: entry.changes?.email || "",
        nomeUsuario: entry.changes?.nomeUsuario || "",
      },
    })
  );

  return (
    <Container className="p-4 border-solid border-red-500 border-2">
      <ActivityHistoryContent
        pageHistory={pageHistory.map((entry) => entry.page)}
        userEditHistory={formattedUserEditHistory}
      />
    </Container>
  );
};

export default ActivityHistoryContainer;
