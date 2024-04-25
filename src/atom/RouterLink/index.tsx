import Link from "next/link";
import React from "react";

interface RouterLinkProps {
    href: string,
    name: string,
    className?: string
}

const RouterLink: React.FC<RouterLinkProps> = ({href, name, className}) => {
    return(
        <Link href={href} className={className}>{name}</Link>
    )
}

export default RouterLink;