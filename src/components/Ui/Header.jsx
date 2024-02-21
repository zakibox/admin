import Link from "next/link";
import { Logo } from "../Elements";
import { Bars3Icon } from "@heroicons/react/24/outline";

export function Header() {
    return (
        <header className="sticky top-0 inset-x-0 flex px-4 justify-between items-center lg:justify-end z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64">
            <button
                type="button"
                className="transition-colors duration-200 text-slate-900 lg:hidden hover:text-primary-500"
                data-hs-overlay="#application-sidebar"
                aria-controls="application-sidebar"
                aria-label="Toggle navigation"
            >
                <span className="sr-only">Toggle Navigation</span>
                <Bars3Icon className="w-8 h-8" />
            </button>

            <div className="me-5 lg:me-0 lg:hidden">
                <Link href="/">
                    <Logo />
                </Link>
            </div>

            <div className="hs-dropdown relative inline-flex ">
                <button
                    id="hs-dropdown-with-header"
                    type="button"
                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                >
                    <img
                        className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white "
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                    />
                </button>
                <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 "
                    aria-labelledby="hs-dropdown-with-header"
                >
                    <div className="px-5 py-3 -m-2 bg-gray-100 rounded-t-lg ">
                        <p className="text-sm text-gray-500 ">
                            Signed in as
                        </p>
                        <p className="text-sm font-medium text-gray-800 ">
                            james@site.com
                        </p>
                    </div>
                    <div className="py-2 mt-2 first:pt-0 last:pb-0">
                        <a
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                            href="#"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                            </svg>
                            Newsletter
                        </a>
                        <a
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                            href="#"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                <path d="M3 6h18" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            Purchases
                        </a>
                        <a
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                            href="#"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                <path d="M12 12v9" />
                                <path d="m8 17 4 4 4-4" />
                            </svg>
                            Downloads
                        </a>
                        <a
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                            href="#"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Team Account
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
