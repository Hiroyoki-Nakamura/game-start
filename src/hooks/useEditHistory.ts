import { useEffect, useRef } from "react";

import { useHistory } from "../context/HistoryProvider";

import { IDataProps } from "../types/dataTypes";


const useEditHistory = (userData: IDataProps) => {
  const { addToUserEditHistory } = useHistory();
  const prevUserData = useRef<IDataProps | null>(null);

  useEffect(() => {
    if (userData !== undefined && prevUserData.current !== userData) {
      const {
        nome,
        sobrenome,
        telefone,
        celular,
        numero,
        endereco,
        cep,
        email,
        nomeUsuario,
      } = userData;
      const historyMessage = `Edited user: ${nome} ${sobrenome} ${telefone} ${celular} ${numero} ${endereco} ${cep} ${email} ${nomeUsuario}`;
      addToUserEditHistory(historyMessage);
      prevUserData.current = userData;

      console.log(
        "Mensagem adicionada ao histórico de edições de usuário:",
        historyMessage
      );
    }
  }, [userData, addToUserEditHistory]);
};

export default useEditHistory;
