"use client";

import React, { useState } from "react";
import axios from "axios";

import Input from "../../atom/Input";
import Button from "../../atom/Button";

import useBackNavigation from "../../hooks/useBackNavigation";

import { IUserProps } from "../../types/userTypes";

const PersonalEditForm: React.FC = () => {
  const handleBackPage = useBackNavigation();

  const [userData, setUserData] = useState<IUserProps>({
    nome: "",
    sobrenome: "",
    telefone: "",
    celular: "",
    numero: "",
    cep: "",
    endereco: "",
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3004/usuario`, userData);
      console.log("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados", error);
    }
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-2">
          <div className="mb-2 grid grid-cols-2 gap-4">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                id="nome"
                type={"text"}
                placeholder={"First Name"}
                value={userData.nome}
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    nome: event.currentTarget?.value,
                  })
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
                value={userData.sobrenome}
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    sobrenome: event.currentTarget?.value,
                  })
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
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    telefone: event.currentTarget?.value,
                  })
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
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    celular: event.currentTarget?.value,
                  })
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
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    cep: event.currentTarget?.value,
                  })
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
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    endereco: event.currentTarget?.value,
                  })
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
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    numero: event.currentTarget?.value,
                  })
                }
                name={"Nº:"}
                className="text-white w-full rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type={"submit"}
              name={"Confirmar"}
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
