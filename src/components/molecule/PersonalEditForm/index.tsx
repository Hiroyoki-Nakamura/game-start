"use client";

import React, { useState } from "react";

import Input from "../../atom/Input";
import Button from "../../atom/Button";

import useBackNavigation from "../../../hooks/useBackNavigation";
import useEditForm from "../../../hooks/useEditForm";
import useEditFormSubmit from "@/hooks/useDataEditSubmit";

import useEditHistory from "../../../hooks/useEditHistory";

import { IDataProps } from "@/types/dataTypes";
import { useHistory } from "@/context/HistoryProvider";

const PersonalEditForm: React.FC = () => {
  const handleBackPage = useBackNavigation();
  const { editData, setEditData } = useEditForm();
  const { handleSubmit } = useEditFormSubmit();
  const { addToUserEditHistory } = useHistory();
  useEditHistory(editData);

  const [pendingChanges, setPendingChanges] = useState<IDataProps>(editData);

  const handleInputChange = (field: string, value: string) => {
    setPendingChanges((prevChanges) => ({
      ...prevChanges,
      [field]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToUserEditHistory(
      `Edited user: ${pendingChanges.nome} ${pendingChanges.sobrenome} ${pendingChanges.telefone} ${pendingChanges.celular} ${pendingChanges.cep} ${pendingChanges.endereco} ${pendingChanges.numero} ${pendingChanges.email} ${pendingChanges.nomeUsuario}`
    );
    setEditData(pendingChanges);
    handleSubmit(pendingChanges);
  };

  return (
    <>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="mb-2">
          <div className="mb-2 grid grid-cols-2 gap-4">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                id="nome"
                type={"text"}
                placeholder={"First Name"}
                value={pendingChanges.nome}
                onChange={(event) =>
                  handleInputChange("nome", event.target.value)
                }
                name={"Nome:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
            <div>
              <Input
                classNameLabel="text-white flex flex-col"
                id="sobrenome"
                type={"text"}
                placeholder={"Last Name"}
                value={pendingChanges.sobrenome}
                onChange={(event) =>
                  handleInputChange("sobrenome", event.target.value)
                }
                name={"Sobrenome:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-4 gap-8">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                id={"telefone"}
                type={"tel"}
                placeholder={"(11) 1111-1111"}
                value={pendingChanges.telefone}
                onChange={(event) =>
                  handleInputChange("telefone", event.target.value)
                }
                name={"Telefone:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
            <div>
              <Input
                classNameLabel="text-white flex flex-col"
                id={"celular"}
                type={"tel"}
                placeholder={"(11) 11111-1111"}
                value={pendingChanges.celular}
                onChange={(event) =>
                  handleInputChange("celular", event.target.value)
                }
                name={"Celular:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-4 gap-5">
            <div className="mr-4">
              <Input
                classNameLabel="text-white flex flex-col"
                id={"cep"}
                type={"text"}
                placeholder={"00000-000"}
                value={pendingChanges.cep}
                onChange={(event) =>
                  handleInputChange("cep", event.target.value)
                }
                name={"CEP:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-2 ">
            <div className="mr-4 col-10">
              <Input
                classNameLabel="text-white flex flex-col"
                id={"endereco"}
                type={"text"}
                placeholder={"Address"}
                value={pendingChanges.endereco}
                onChange={(event) =>
                  handleInputChange("endereco", event.target.value)
                }
                name={"Endereco:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
            <div className="flex items-center">
              <Input
                id={"endereco"}
                classNameLabel="text-white flex flex-col mr-5"
                type={"checkbox"}
                name={"Sem nº"}
                className="text-white rounded-md mb-6"
              />
              <Input
                id={"numero"}
                classNameLabel="text-white flex flex-col"
                type={"number"}
                placeholder={"Number"}
                value={pendingChanges.numero}
                onChange={(event) =>
                  handleInputChange("numero", event.target.value)
                }
                name={"Nº:"}
                className="text-white w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type={"submit"}
              name={"Salvar"}
              className="text-white bg-green-500 hover:bg-green-400 mt-2 rounded p-2 mr-2"
            />
            <Button
              name={"Voltar"}
              className="text-white bg-gray-400 hover:bg-red-500 rounded mt-2 p-2"
              onClick={handleBackPage}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalEditForm;
