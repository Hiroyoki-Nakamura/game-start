import React from "react";
import Link from "next/link";

import { IRouterLinkProps } from "../../../types/routerTypes";

const RouterLink: React.FC<IRouterLinkProps> = ({ href, name, className }) => {
  return (
    <Link href={href} className={className}>
      {name}
    </Link>
  );
};

export default RouterLink;
