import React from "react";
import Link from "next/link";

import { IRouterLinkProps } from "../../../types/routerTypes";

const RouterLink: React.FC<IRouterLinkProps> = ({
  href,
  name,
  className,
  onClick,
}) => {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {name}
    </Link>
  );
};

export default RouterLink;
