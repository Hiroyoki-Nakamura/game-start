import { useState, useEffect } from "react";

interface HeaderState {
  isShowMenu: boolean;
  isLargeScreen: boolean;
}

export const useNavHeader = (): [HeaderState, () => void] => {
  const [state, setState] = useState({ isShowMenu: false, isLargeScreen: false });

  useEffect(() => {
    const handleResize = () => {
      setState((prevState) => ({
        ...prevState,
        isLargeScreen: window.innerWidth > 768,
        isShowMenu: window.innerWidth <= 768 ? prevState.isShowMenu : false
      }));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setState((prevState) => ({ ...prevState, isShowMenu: !prevState.isShowMenu }));
  };

  return [state, toggleMenu];
};