"use client";

import React, { useRef, useEffect, useState } from "react";
import Card from "../../atom/Card";
import Button from "../../atom/Button";
import { ICardProps } from "../../../types/cardTypes";

import useCarousel from "../../../hooks/useCarousel";

const Carousel: React.FC<{ className: string; images: ICardProps[] }> = ({
  className,
  images,
}) => {
  const { currentIndex, nextImage, prevImage } = useCarousel(images);
  const currentImage = images[currentIndex];

  return (
    <div className={className}>
      <div className="h-96 rounded-lg md:h-96">
        {images.map((card, index) => (
          <div key={index}>
            <Card
              image={currentImage.image}
              classNameContainer="w-full object-cover h-full"
              className="w-full h-96 text-white rounded-xl"
            />
          </div>
        ))}
      </div>
      <Button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-200 px-2 py-1 rounded"
        onClick={prevImage}
        name="<"
      />
      <Button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-200 px-2 py-1 rounded"
        onClick={nextImage}
        name=">"
      />
    </div>
  );
};

export default Carousel;
