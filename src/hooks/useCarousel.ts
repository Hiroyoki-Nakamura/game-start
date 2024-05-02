import { useEffect, useState } from "react";

import { ICardProps } from "../types/cardTypes";

const useCarolsel = (images: ICardProps[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    console.log("Índice atual:", currentIndex);
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return { currentIndex, nextImage, prevImage };
};

export default useCarolsel;
