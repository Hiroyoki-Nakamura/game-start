"use client";

import React, { useRef } from "react";

import Card from "../../atom/Card";
import Button from "../../atom/Button";

import { ISimpleProps } from "../../../types/types";

const Carousel: React.FC<{ className: string; cardsData: ISimpleProps[] }> = ({
  className,
  cardsData,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={className}>
      <div
        className="flex overflow-x-auto space-x-4 p-40 justify-center bg-white"
        ref={carouselRef}
      >
        {cardsData.map((card, index) => (
          <div key={index} className="flex-none bg-white">
            <Card {...card} />
          </div>
        ))}
      </div>
      <Button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-200 px-2 py-1 rounded"
        onClick={scrollLeft}
        name="<"
      />
      <Button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-200 px-2 py-1 rounded"
        onClick={scrollRight}
        name=">"
      />
    </div>
  );
};

export default Carousel;
