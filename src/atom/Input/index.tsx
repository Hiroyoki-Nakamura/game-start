import React from "react";

import { IInputProps } from "./type";

const Input: React.FC<IInputProps> = ({
  type,
  className,
  placeholder,
  name,
  classNameLabel,
  value,
  defaultValue,
  onChange,
  readOnly,
}) => {
  return (
    <label className={classNameLabel} htmlFor={name}>
      {name}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </label>
  );
};

export default Input;
