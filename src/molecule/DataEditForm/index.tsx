import React from "react";
import Input from "../../atom/Input";
import Button from "@/atom/Button";

const DataEditForm: React.FC = () => {
  return (
    <>
      <form className="w-full">
        <div className="mb-2">
          <div className="mb-2 grid grid-cols-2 gap-4">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"text"}
                placeholder={"First Name"}
                name={"Nome"}
                className="text-white w-full"
              />
            </div>
            <div>
              <Input
                classNameLabel="text-white flex flex-col"
                type={"text"}
                placeholder={"Last Name"}
                name={"Sobrenome"}
                className="text-white w-full"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-4 gap-8">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"tel"}
                placeholder={"(11) 1111-1111"}
                name={"Telefone"}
                className=" text-white"
              />
            </div>
            <div>
              <Input
                classNameLabel="text-white flex flex-col"
                type={"tel"}
                placeholder={"(11) 11111-1111"}
                name={"Cel/Whatsapp"}
                className=" text-white"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-4 gap-5">
            <div className="mr-4">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"number"}
                placeholder={"00000-000"}
                name={"CEP"}
                className=" text-white"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-4 ">
            <div className="mr-4">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"text"}
                placeholder={"Address"}
                name={"Endereço"}
                className=" text-white"
              />
            </div>
            <div className="flex items-center">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"checkbox"}
                name={"Sem nº"}
                className=" text-white"
              />
            </div>
            <div className="flex items-center">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"number"}
                placeholder={"Number"}
                name={"Nº"}
                className=" text-white"
              />
            </div>
          </div>
          <Button
            name={"Confirmar"}
            className="text-white bg-green-500 hover:bg-green-400 mt-2"
          />
          <Button
            name={"Voltar"}
            className="text-white bg-gray-400 hover:bg-red-500"
          />
        </div>
      </form>
    </>
  );
};

export default DataEditForm;
