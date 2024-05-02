import React from "react";

import Carousel from "../../molecule/Carousel";
import Container from "../../../components/atom/Container";

import { ICardProps } from "../../../types/cardTypes";

const HomeBody: React.FC = () => {
  const cardsCaroulselData: ICardProps[] = [
    {
      image:
        "https://sm.ign.com/t/ign_br/news/s/square-eni/square-enix-hoping-to-release-final-fantasy-7-remake-trilogy_qcmc.960.jpg"
    },
    {
      image:
        "https://psblog.com.br/wp-content/uploads/2024/04/Street-Fighter-6-Akuma-ganha-trailer-oficial-Confira-750x430.webp"
    },
  ];
  return (
    <Container className="p-2 border-solid border-2 border-red-500">
      <h2 className="text-white font-serif font-bold uppercase mb-4">
        Destaques da semana
      </h2>
      <div className="flex transition duration-75 translate-x-0 ease-in-out p-4 border-solid border-red-500 border-2 w-full">
        <Carousel
          images={cardsCaroulselData}
          className="w-full overflow-hidden"
        />
      </div>
      <div className="flex transform 0.5s ease-in-out p-4 border-solid border-red-500 border-2 w-full">
        <h2 className="text-white font-serif font-bold uppercase mt-10">
          Outras notícias
        </h2>
      </div>
    </Container>
  );
};

export default HomeBody;
