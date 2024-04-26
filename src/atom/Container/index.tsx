import React from "react";
import { IContainerProps } from "./type";

const Container: React.FC<IContainerProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Container;
