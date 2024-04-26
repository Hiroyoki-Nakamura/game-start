import React from "react";
import { IInputProps } from "./type";

const Input: React.FC<IInputProps> = ({
  type,
  className,
  placeholder,
  name,
  classNameLabel,
  readOnly
}) => {
  return (
    <label className={classNameLabel} htmlFor={name}>
      {name}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        id={name}
        readOnly={readOnly}
      ></input>
    </label>
  );
};

export default Input;
