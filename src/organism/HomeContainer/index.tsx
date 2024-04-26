import React from "react";

import Carousel from "../../molecule/Carousel";

const HomeBody: React.FC = () => {
  return (
    <div className="p-4 border-solid border-red-500 border-2">
      <Carousel className={""} cardsData={[]} />
    </div>
  );
};

export default HomeBody;
