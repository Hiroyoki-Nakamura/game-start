import React from "react";
import RouterLink from "@/atom/RouterLink";

const ContainerLinks: React.FC = () => {
  return (
    <>
      <RouterLink
        href={"/"}
        name={"Home"}
        className="text-white hover:text-red-500 focus:text-red-500"
      />
      <RouterLink
        href={"/user"}
        name={"Usuário"}
        className="text-white hover:text-red-500 focus:text-red-500"
      />
      <RouterLink
        href={"/activityHistory"}
        name={"Histórico"}
        className="text-white hover:text-red-500 focus:text-red-500"
      />
    </>
  );
};

export default ContainerLinks;
