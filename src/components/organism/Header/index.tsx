"use client";

import React from "react";

import Button from "../../atom/Button";
import Logo from "../../atom/Logo";
import ContainerColumnLinks from "../../molecule/ContainerColumnLinks";
import ContainerLinks from "../../molecule/ContainerLinks";

import { useNavHeader } from "../../../hooks/useResponsiveHeader";

const Header: React.FC = () => {
  const [{ isShowMenu, isLargeScreen }, toggleMenu] = useNavHeader();

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
