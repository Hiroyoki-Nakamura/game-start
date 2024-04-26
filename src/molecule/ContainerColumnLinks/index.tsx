import React from "react";
import RouterLink from "../../atom/RouterLink";

const ContainerColumnLinks: React.FC = () => {
  return (
    <div className="flex flex-col">
      <RouterLink
        href={"/"}
        name={"Home"}
        className="text-white hover:text-red-500 focus:text-red-500 border-b border-gray-300"
      />
      <RouterLink
        href={"/user"}
        name={"Usuário"}
        className="text-white hover:text-red-500 focus:text-red-500 border-b border-gray-300"
      />
      <RouterLink
        href={"/activityHistory"}
        name={"Histórico"}
        className="text-white hover:text-red-500 focus:text-red-500 border-b border-gray-300"
      />
    </div>
  );
};

export default ContainerColumnLinks;
