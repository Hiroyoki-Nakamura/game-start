import React from "react";

import RouterLink from "../../atom/RouterLink";

import { useHistory } from "../../../context/HistoryProvider";

const ContainerLinks: React.FC = () => {
  const { addToPageHistory } = useHistory();

  const handleLinkClick = (page: string) => {
    addToPageHistory(page);
  };

  return (
    <>
      <RouterLink
        href={"/"}
        name={"Home"}
        className="text-white hover:text-red-500 focus:text-red-500"
        onClick={() => handleLinkClick("/")}
      />
      <RouterLink
        href={"/user"}
        name={"Usuário"}
        className="text-white hover:text-red-500 focus:text-red-500"
        onClick={() => handleLinkClick("/user")}
      />
      <RouterLink
        href={"/activityHistory"}
        name={"Histórico"}
        className="text-white hover:text-red-500 focus:text-red-500"
        onClick={() => handleLinkClick("/activityHistory")}
      />
    </>
  );
};

export default ContainerLinks;
