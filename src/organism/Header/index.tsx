"use client";

import React, { useState, useEffect } from "react";
import Button from "../../atom/Button";
import Logo from "../..//atom/Logo";
import ContainerColumnLinks from "../../molecule/ContainerColumnLinks";
import ContainerLinks from "../../molecule/ContainerLinks";

const Header: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);

      if (window.innerWidth > 768) {
        setIsShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="bg-black flex justify-between items-center px-4 py-2 mb-10 border-b-2 border-red-500 relative">
      <Logo />
      {!isLargeScreen && (
        <Button
          name="Menu"
          onClick={toggleMenu}
          className="text-white bg-red-500 focus:outline-none lg:hidden"
        />
      )}
      {(isLargeScreen || isShowMenu) && (
        <div
          className={
            isLargeScreen
              ? "lg:flex lg:space-x-4 md:flex md:space-x-4"
              : "absolute top-full right-0 bg-black mt-2 py-2 border-2 border-red-500 p-2 rounded"
          }
        >
          {isLargeScreen ? <ContainerLinks /> : <ContainerColumnLinks />}
        </div>
      )}
    </div>
  );
};

export default Header;
