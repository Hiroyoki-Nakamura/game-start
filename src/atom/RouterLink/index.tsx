import Link from "next/link";
import React from "react";

interface RouterLinkProps {
    href: string;
    children: React.ReactNode;
}

const RouterLink: React.FC<RouterLinkProps> = ({href, children}) => {
    return(
        <Link href={href}><span>{children}</span></Link>
    )
}

export default RouterLink;