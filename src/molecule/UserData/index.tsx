import React from "react";
import Input from "@/atom/Input";
import Button from "@/atom/Button";

const UserData: React.FC = () => {
  return (
    <>
      <div className="mb-2">
        <div className="mb-2 grid grid-cols-2 gap-4">
          <div className="mr-2">
            <Input
              classNameLabel="text-white flex flex-col"
              type={"email"}
              placeholder={"email@email.com"}
              name={"E-mail:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <Input
              classNameLabel="text-white flex flex-col"
              type={"email"}
              placeholder={"email@email.com"}
              name={"Confirme o E-mail:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-4 gap-8">
          <div className="mr-2">
            <Input
              classNameLabel="text-white flex flex-col"
              type={"text"}
              placeholder={"User Name"}
              name={"Usuário:"}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
