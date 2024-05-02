import React, { useState } from "react";

import { useHistory } from "../context/HistoryProvider";

import useEditForm from "../hooks/useEditForm";
import useEditFormSubmit from "..//hooks/useDataEditSubmit";
import useEditHistory from "../hooks/useEditHistory";

import { IDataProps } from "../types/dataTypes";

const useUpdate = () => {
  const { editData, setEditData } = useEditForm();
  const { handleSubmit } = useEditFormSubmit();
  const { addToUserEditHistory } = useHistory();
  useEditHistory(editData);

  const [pendingChanges, setPendingChanges] = useState<IDataProps>(() => ({
    nome: editData?.nome || "",
    sobrenome: editData?.sobrenome || "",
    telefone: editData?.telefone || "",
    celular: editData?.celular || "",
    numero: editData?.numero || "",
    cep: editData?.cep || "",
    endereco: editData?.endereco || "",
    email: editData?.email || "",
    nomeUsuario: editData?.nomeUsuario || "",
  }));

  const handleInputChange = (field: keyof IDataProps, value: string) => {
    setPendingChanges((prevChanges) => ({
      ...prevChanges,
      [field]: value !== "" ? value : prevChanges[field],
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const historyMessage = `Edited user: ${pendingChanges.email} ${pendingChanges.nomeUsuario}`;
    addToUserEditHistory(historyMessage);

    const updatedData: IDataProps = {};

    Object.keys(pendingChanges).forEach((key) => {
      if (pendingChanges[key as keyof IDataProps] !== "") {
        updatedData[key as keyof IDataProps] =
          pendingChanges[key as keyof IDataProps];
      } else {
        updatedData[key as keyof IDataProps] =
          editData[key as keyof IDataProps];
      }
    });

    setEditData(updatedData);
    handleSubmit(updatedData);
  };

  return { pendingChanges, handleInputChange, onSubmit };
};

export default useUpdate;
