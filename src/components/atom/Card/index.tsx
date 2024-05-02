import React from "react";

import { ICardProps } from "../../../types/cardTypes";

const Card: React.FC<ICardProps> = ({
  image,
  title,
  className,
  description,
  classNameContainer,
}) => {
  return (
    <div className={classNameContainer}>
      <img src={image} className={className} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
