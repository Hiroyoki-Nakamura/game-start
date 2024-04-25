import Logo from "@/atom/Logo";
import RouterLink from "@/atom/RouterLink";
import React from "react";

const Header: React.FC = () => {
    return(
        <div className=" bg-red-500 flex">
            <Logo />
            <RouterLink href={'/'} children={'Home'} ></RouterLink>
            <RouterLink href={'/user'} children={'Usuário'} ></RouterLink>
            <RouterLink href={'/activityHistory'} children={'Histórico'} ></RouterLink>
        </div>
    )
}

export default Header;