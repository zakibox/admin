import Link from "next/link";
import { Logo } from "../../Elements";
import { RouteItem } from "./RouteItem";
import { RouteNestedItem } from "./RouteNestedItem";

import {
    HomeIcon,
    AcademicCapIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";


const links = [
    {
        text: "Dashboard",
        to: "/",
        icon: <HomeIcon className="w-5 h-5" />,
    },
    {
        text: "Formation",
        icon: <AcademicCapIcon className="w-5 h-5" />,
        items: [
            {
                text: "Courses",
                to: "/permis/1/courses",
            },
            {
                text: "Panneaux",
                to: "/permis/1/panneaux",
            },
            {
                text: "Education Routiere",
                to: "/educations",
            },
        ],
    },
    {
        text: "Admins",
        to: "/admins",
        icon: <UserGroupIcon className="w-5 h-5" />,
    },
];

export function SideBar() {
    return (
        <div
            id="application-sidebar"
            className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all  duration-300 transform hidden fixed hrefp-0 start-0 top-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 "
        >
            <div className="px-6">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <nav
                className="flex flex-col flex-wrap w-full p-6 hs-accordion-group"
                data-hs-accordion-always-open
            >
                <ul className="space-y-1.5">
                    {links.map((link, i) =>
                        link.items ? (
                            <RouteNestedItem route={link} key={i} />
                        ) : (
                            <RouteItem route={link} key={i} />
                        )
                    )}

                </ul>
            </nav>
        </div>
    );
}
