import React from "react";

import { IButtonProps } from "../../../types/buttonTypes";

const Button: React.FC<IButtonProps> = ({ name, onClick, className, type }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {name}
    </button>
  );
};

export default Button;
