import React from "react";
import { ICardProps } from "./type";

const Card: React.FC<ICardProps> = ({className, children}) => {
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default Card;