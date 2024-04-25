'use client'

import Button from "@/atom/Button";
import Logo from "@/atom/Logo";
import RouterLink from "@/atom/RouterLink";
import React, { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black flex justify-between items-center px-4 py-2 border-b-2 border-white relative">
            <Logo />

            <Button
                name="Menu"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white bg-red-500 focus:outline-none lg:hidden"
            />
            {isOpen && (
                <div className="absolute top-full right-0 bg-white mt-2 py-2">
                    <RouterLink
                        href={'/'}
                        name={'Home'}
                        className="text-black hover:text-red-500 focus:text-red-500"
                    />
                    <RouterLink
                        href={'/user'}
                        name={'Usuário'}
                        className="text-black hover:text-red-500 focus:text-red-500"
                    />
                    <RouterLink
                        href={'/activityHistory'}
                        name={'Histórico'}
                        className="text-black hover:text-red-500 focus:text-red-500"
                    />
                </div>
            )}
            <div className="hidden lg:flex space-x-4">
                <RouterLink href={'/'} name={"Home"} className="text-white hover:text-red-500 focus:text-red-500" />
                <RouterLink
                    href={'/user'}
                    name={"Usuário"}
                    className="text-white hover:text-red-500 focus:text-red-500"
                />
                <RouterLink
                    href={'/activityHistory'}
                    name={"Histórico"}
                    className="text-white hover:text-red-500 focus:text-red-500"
                />
            </div>
        </div>
    );
};

export default Header;