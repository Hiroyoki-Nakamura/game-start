import React from "react";

import { ISimpleProps } from "../../../types/types";

const Container: React.FC<ISimpleProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Container;
