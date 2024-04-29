import React from "react";

import Input from "../../atom/Input";

import useData from "../../../hooks/useData";

const UserData: React.FC = () => {
  const { userData } = useData();

  return (
    <>
      <div className="mb-2">
        <div className="mb-2 grid grid-cols-2 gap-4">
          <div className="mr-2">
            <Input
              id={"email"}
              classNameLabel="text-white flex flex-col"
              type={"email"}
              name={"E-mail:"}
              value={userData ? userData.email : ""}
              className="text-white w-full rounded-md bg-black focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="mb-2 grid grid-cols-4 gap-8">
          <div className="mr-2">
            <Input
              id={"nomeUsuario"}
              classNameLabel="text-white flex flex-col"
              type={"text"}
              name={"Usuário:"}
              value={userData ? userData.nomeUsuario : ""}
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
