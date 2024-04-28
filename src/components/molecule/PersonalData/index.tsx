import React from "react";

import Input from "../../atom/Input";

import useData from "@/hooks/useData";

const PersonalData: React.FC = () => {
  const { userData } = useData();

  return (
    <>
      <div className="mb-2">
        <div className="mb-2 grid grid-cols-2 gap-4">
          <div className="mr-2">
            <Input
              id={"nome"}
              classNameLabel="text-white flex flex-col"
              type={"text"}
              name={"Nome:"}
              value={userData ? userData.nome : ""}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <Input
              id={"sobrenome"}
              classNameLabel="text-white flex flex-col"
              type={"text"}
              name={"Sobrenome:"}
              value={userData ? userData.sobrenome : ""}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-4 gap-8">
          <div className="mr-2">
            <Input
              id={"telefone"}
              classNameLabel="text-white flex flex-col"
              type={"tel"}
              value={userData ? userData.telefone : ""}
              name={"Telefone:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <Input
              id={"celular"}
              classNameLabel="text-white flex flex-col"
              type={"tel"}
              value={userData ? userData.celular : ""}
              name={"Cel/Whatsapp:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-4 gap-5">
          <div className="mr-4">
            <Input
              id={"cep"}
              classNameLabel="text-white flex flex-col"
              type={"number"}
              value={userData ? userData.cep : ""}
              name={"CEP:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-2 ">
          <div className="mr-4 col-10">
            <Input
              id={"endereco"}
              classNameLabel="text-white flex flex-col"
              type={"text"}
              value={userData ? userData.endereco : ""}
              name={"Endereço:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
          <div className="ml-2">
            <Input
              id={"numero"}
              classNameLabel="text-white flex flex-col"
              type={"number"}
              value={userData ? userData.numero : ""}
              name={"Nº:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
