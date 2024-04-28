import { useRouter } from "next/navigation";

const useBackNavigation = () => {
  const router = useRouter();

  const handleBackPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.back();
  };

  return handleBackPage;
};

export default useBackNavigation;
