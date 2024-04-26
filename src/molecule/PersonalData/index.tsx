import React from "react";

import Input from "../../atom/Input";

const PersonalData: React.FC = () => {
  return (
    <>
      <div className="mb-2">
        <div className="mb-2 grid grid-cols-2 gap-4">
          <div className="mr-2">
            <Input
              classNameLabel="text-white flex flex-col"
              type={"text"}
              placeholder={"First Name"}
              name={"Nome:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <Input
              classNameLabel="text-white flex flex-col"
              type={"text"}
              placeholder={"Last Name"}
              name={"Sobrenome:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-4 gap-8">
          <div className="mr-2">
            <Input
              classNameLabel="text-white flex flex-col"
              type={"tel"}
              placeholder={"(11) 1111-1111"}
              name={"Telefone:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <Input
              classNameLabel="text-white flex flex-col"
              type={"tel"}
              placeholder={"(11) 11111-1111"}
              name={"Cel/Whatsapp:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-4 gap-5">
          <div className="mr-4">
            <Input
              classNameLabel="text-white flex flex-col"
              type={"number"}
              placeholder={"00000-000"}
              name={"CEP:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-2 ">
          <div className="mr-4 col-10">
            <Input
              classNameLabel="text-white flex flex-col"
              type={"text"}
              placeholder={"Address"}
              name={"Endereço:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
          <div className="ml-2">
            <Input
              classNameLabel="text-white flex flex-col"
              type={"number"}
              placeholder={"Number"}
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
