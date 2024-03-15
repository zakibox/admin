import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export function RouteNestedItem({ route, isActive, locale }) {
    return (
        <li className="hs-accordion" id={`${route.text}-accordion`}>
            <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-primary-500 hs-accordion-active:hover:bg-transparent text-sm  md:text-base text-slate-700 rounded-lg hover:bg-slate-100 "
            >
                {route.icon}
                {route.text}
                <ChevronUpIcon className="hidden w-3 h-3 hs-accordion-active:block ms-auto" />
                <ChevronDownIcon className="block w-3 h-3 hs-accordion-active:hidden ms-auto" />
            </button>
            <div
                id={`${route.text}-accordion-child`}
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
                <ul className="pt-2 ps-2">
                    {route.items.map((nest, y) => (
                        <li key={y}>
                          <Link
                                className="flex items-center aria-[current=page]:text-primary-500 aria-[current=page]:bg-slate-100 gap-x-3.5 py-2 px-2.5 text-sm  md:text-base text-slate-700 rounded-lg hover:bg-slate-100 "
                                href={`/${locale}${nest.to}`}
                            >
                                {nest.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}
