import { useRouter } from "next/navigation";


export function useUserEdit() {
    const router = useRouter();
    const handleUserPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        router.push("/user/userEdit");
      };
    
      return handleUserPage;
};

export function usePersonalEdit() {
    const router = useRouter();
    const handlePersonalPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        router.push("/user/personalEdit");
    }

    return handlePersonalPage;
};