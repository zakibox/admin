import Link from "next/link";

export function RouteItem({ route }) {
    return (
        <li>
            <Link
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm md:text-base aria-[current=page]:text-primary-500 aria-[current=page]:bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-100 "
                href={route.to}
            >
                {route.icon}
                {route.text}
            </Link>
        </li>
    );
}
