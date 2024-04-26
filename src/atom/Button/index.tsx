import React from "react";
import { IButtonProps } from "./type";

const Button: React.FC<IButtonProps> = ({ name, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  );
};

export default Button;
