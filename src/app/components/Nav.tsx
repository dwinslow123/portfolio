'use client';
import { constants } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();
    
    const links = [
        { name: "DW", href: constants.HOME_URL },
        { name: "Projects", href: constants.PROJECTS_URL },
        { name: "Thoughts", href: constants.POSTS_URL },
        { name: "About", href: constants.ABOUT_URL },
    ];

    return (
        <div className="relative flex tab-group items-center justify-center w-full p-4 sm:p-8 row-start-1">
            <div className="border-solid border-1 border-gray-200 w-full"></div>
            <ul className="flex p-0.5 text-center relative rounded-full border-solid border-2 border-gray-200" role="tablist" aria-orientation="horizontal">
                {links.map((link) => (
                    <li key={link.name} className="list-none pl-0.5 pr-0.5">
                        <Link
                            href={link.href}
                            className={`
                                tab-item
                                relative
                                inline-block
                                px-3
                                py-2
                                rounded-full
                                text-sm
                                font-medium
                                transition-all
                                ${
                                    pathname === link.href
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }
                            `}
                            role="tab"
                            aria-selected={pathname === link.href}
                            tabIndex={pathname === link.href ? 0 : -1}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="border-solid border-1 w-full border-gray-200"></div>
        </div>
        );
}

export default Nav;