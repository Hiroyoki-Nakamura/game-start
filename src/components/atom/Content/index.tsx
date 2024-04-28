import React from "react";

import { ISimpleProps } from "../../../types/types";

const Content: React.FC<ISimpleProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Content;
