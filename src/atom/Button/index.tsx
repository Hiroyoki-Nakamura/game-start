import React, { ReactNode } from "react";

interface ButtonProps {
    name: string
    onClick: () => void;
    className: string
}

const Button: React.FC<ButtonProps> = ({name, onClick, className}) => {
    return(
        <button onClick={onClick} className={className}>{name}</button>
    )
}

export default Button;