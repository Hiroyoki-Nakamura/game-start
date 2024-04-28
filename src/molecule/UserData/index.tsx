import React, { useEffect, useState } from "react";
import axios from "axios";

import Input from "../../atom/Input";

const UserData: React.FC = () => {
  const [userData, setUserData] = useState({
    email: "",
    nomeUsuario: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/usuario");
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao trazer os dados", error);
      }
    };

    fetchUserData();
  }, []);

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
              value={userData.email}
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
              value={userData.nomeUsuario}
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
