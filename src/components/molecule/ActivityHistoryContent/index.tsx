"use client";

import React, { useState } from "react";

import Content from "../../../components/atom/Content";
import Button from "../../../components/atom/Button";

import { UserEditHistoryEntry } from "../../../types/historyTypes";

interface ActivityHistoryContentProps {
  pageHistory: string[];
  userEditHistory: UserEditHistoryEntry[];
}

const ActivityHistoryContent: React.FC<ActivityHistoryContentProps> = ({
  pageHistory,
  userEditHistory,
}) => {
  const [showPageHistory, setShowPageHistory] = useState(false);
  const [showUserEditHistory, setShowUserEditHistory] = useState(false);
  return (
    <>
      <div className="text-white">
        <Content className="p-4 border-solid border-red-500 border-2">
          <Button
            name="Histórico de Navegação"
            className="text-white w-full border-solid border-2 border-red-500"
            onClick={() => setShowPageHistory(!showPageHistory)}
          />
          {showPageHistory && (
            <Content className="p-4 border-solid border-red-500 border-2">
              <ul>
                {pageHistory.map((page, index) => (
                  <li key={index}>
                    <div className="mb-2 border-b">
                      <p className="text-white">Pagina Visitada:</p>
                      <p className="text-red-500">{page}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Content>
          )}
        </Content>
        <Content className="p-4 border-solid border-red-500 border-2">
          <Button
            name="Histórico de Alteração de Dados do Usuário"
            className="text-white w-full border-solid border-2 border-red-500"
            onClick={() => setShowUserEditHistory(!showUserEditHistory)}
          />
          {showUserEditHistory && (
            <Content className="p-4 border-solid border-red-500 border-2">
              <ul>
                {userEditHistory.map((edit, index) => (
                  <li key={index}>
                    <p className="text-white">Data e Hora da atualização:</p>
                    <p className="text-red-500">{edit.timestamp}</p>
                    <div className="mb-2 border-b">
                      {Object.entries(edit.changes).map(
                        ([key, value]) =>
                          value !== "undefined" && (
                            <React.Fragment key={key}>
                              <p className="text-white">
                                {key[0].toUpperCase() + key.slice(1)}:
                              </p>{" "}
                              <p className="text-red-500">{value}</p>
                            </React.Fragment>
                          )
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Content>
          )}
        </Content>
      </div>
    </>
  );
};

export default ActivityHistoryContent;
