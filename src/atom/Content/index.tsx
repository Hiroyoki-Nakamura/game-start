import React from "react";
import { IContentProps } from "./type";

const Content: React.FC<IContentProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Content;
