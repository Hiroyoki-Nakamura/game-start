"use client";

import React, { useState } from "react";

import Input from "../../atom/Input";
import Button from "../../atom/Button";

import useBackNavigation from "../../../hooks/useBackNavigation";
import useEditForm from "../../../hooks/useEditForm";
import useEditFormSubmit from "../../../hooks/useDataEditSubmit";
import useEditHistory from "../../../hooks/useEditHistory";

import { useHistory } from "../../../context/HistoryProvider";

import { IDataProps } from "../../../types/dataTypes";

const UserEditForm: React.FC = () => {
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
      `Edited user: ${pendingChanges.email} ${pendingChanges.senha} ${pendingChanges.nomeUsuario}`
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
                id={"email"}
                classNameLabel="text-white flex flex-col"
                type={"email"}
                placeholder={"email@email.com"}
                name={"E-mail:"}
                value={pendingChanges.email}
                onChange={(event) =>
                  handleInputChange("email", event.target.value)
                }
                className="text-black w-full rounded-md p-2"
              />
            </div>
            <div>
              <Input
                id={"confirmarEmail"}
                classNameLabel="text-white flex flex-col"
                type={"email"}
                placeholder={"email@email.com"}
                name={"Confirme o E-mail:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-4 gap-8">
            <div className="mr-2">
              <Input
                id={"senha"}
                classNameLabel="text-white flex flex-col"
                type={"password"}
                placeholder={"Senha"}
                name={"Senha:"}
                value={editData.senha || ""}
                onChange={(event) =>
                  setEditData({
                    ...editData,
                    senha: event.currentTarget?.value,
                  })
                }
                className="text-black w-full rounded-md p-2"
              />
            </div>
            <div>
              <Input
                id={"confirmarSenha"}
                classNameLabel="text-white flex flex-col"
                type={"password"}
                placeholder={"Senha"}
                name={"Confirme a senha:"}
                className="text-black w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-4 gap-8">
            <div className="mr-2">
              <Input
                id={"nomeUsuario"}
                classNameLabel="text-white flex flex-col"
                type={"text"}
                placeholder={"User Name"}
                name={"Usuário:"}
                value={pendingChanges.nomeUsuario}
                onChange={(event) =>
                  handleInputChange("nomeUsuario", event.target.value)
                }
                className="text-black w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              name={"Confirmar"}
              type={"submit"}
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

export default UserEditForm;
