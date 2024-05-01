import { useEffect, useRef } from "react";
import { IDataProps } from "../types/dataTypes";
import { useHistory } from "../context/HistoryProvider";

const useEditHistory = (userData: IDataProps) => {
  const { addToUserEditHistory } = useHistory();
  const prevUserData = useRef<IDataProps | null>(null);

  useEffect(() => {
    if (userData && prevUserData.current !== userData) {
      const { nome, sobrenome, telefone, celular, numero, endereco, cep } =
        userData;
      const historyMessage = `Edited user: ${nome} ${sobrenome} ${telefone} ${celular} ${numero} ${endereco} ${cep}`;
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
