import React from "react";
import { useRouter } from "next/navigation";

function useBackNavigation() {
  const router = useRouter();

  const handleBackPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.back();
  };

  return handleBackPage;
}

export default useBackNavigation;
