import React, { useState, useEffect } from "react";
import axios from "axios";

import Input from "../../atom/Input";

const PersonalData: React.FC = () => {
  const [userData, setUserData] = useState({
    nome: "",
    sobrenome: "",
    telefone: "",
    celular: "",
    cep: "",
    endereco: "",
    numero: "",
  });

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/usuario`);
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao trazer os dados", error);
      }
    };

    fetchPersonalData();
  }, []);

  console.log(userData);

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
              value={userData.nome}
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
              value={userData.sobrenome}
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
              value={userData.telefone}
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
              value={userData.celular}
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
              value={userData.cep}
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
              value={userData.endereco}
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
              value={userData.numero}
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
