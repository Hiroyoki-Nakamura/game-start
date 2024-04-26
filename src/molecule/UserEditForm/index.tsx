import React from "react";
import Input from "../../atom/Input";
import Button from "@/atom/Button";

const UserEditForm: React.FC = () => {
  return (
    <>
      <form className="w-full">
        <div className="mb-2">
          <div className="mb-2 grid grid-cols-2 gap-4">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"email"}
                placeholder={"email@email.com"}
                name={"E-mail"}
                className="text-white"
              />
            </div>
            <div>
              <Input
                classNameLabel="text-white flex flex-col"
                type={"email"}
                placeholder={"email@email.com"}
                name={"Confirme o E-mail"}
                className="text-white"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-2 gap-4">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"password"}
                placeholder={"Senha"}
                name={"Senha"}
                className=" text-white"
              />
            </div>
            <div>
              <Input
                classNameLabel="text-white flex flex-col"
                type={"password"}
                placeholder={"Senha"}
                name={"Confirme a senha"}
                className=" text-white"
              />
            </div>
          </div>
          <div className="mb-2 grid grid-cols-2 gap-4">
            <div className="mr-2">
              <Input
                classNameLabel="text-white flex flex-col"
                type={"text"}
                placeholder={"User Name"}
                name={"Usuário"}
                className=" text-white"
              />
            </div>
          </div>

          <Button
            name={"Confirmar"}
            className="text-white bg-green-500 hover:bg-green-400"
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

export default UserEditForm;
