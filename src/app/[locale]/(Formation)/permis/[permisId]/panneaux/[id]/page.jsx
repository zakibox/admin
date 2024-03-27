
import axios from "axios";
import Link from "next/link";

import { ChevronLeftIcon, EyeIcon, PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { deleteItem } from "../../../../../../../actions/formation";


export default async function PanneauxDetailsPage({ params: {permisId, id, locale } }) {


    const panneaux = await fetchPanneaux(permisId, id);
    const t = await getTranslations("panneaux.show")
    return (
        <>

            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
                <h1 className="mb-2 text-3xl font-bold text-slate-900">{t('h1')}</h1>
                <Link href={`/${locale}/permis/${permisId}/panneaux`}>
                    <button className="px-3 py-3 rounded-full bg-primary-600 text-primary-100">
                        <ChevronLeftIcon
                            className="w-6 h-6"
                            strokeWidth="2.5"
                        />

                    </button>
                </Link>
            </div>

            <div className="overflow-x-auto overflow-y-auto ml-0">
                <div className="p-1 mt-30 min-w-full inline-block align-middle">
                    <div className="overflow-hidden bg-white border shadow-sm border-slate-200 rounded-xl">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                id
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                {t('title')}
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                {t('description')}
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                            {t('questionsNum')}
                                        </span>
                                    </th>

                                    <th className="px-6 py-3 text-end"></th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-200">
                                {panneaux && Object.values(panneaux).map(panel => (
                                    <tr key={panel.id}>
                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <div className="grow">
                                                        <span className="text-sm md:text-base text-slate-600">
                                                            {panel.id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <div className="grow">
                                                        <span className="text-sm md:text-base text-slate-600">
                                                            {panel.title[locale]}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {panel.description[locale]}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3 text-center">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {panel.questionsNum}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/*  table panneaux items */}
            <Link href={`/${locale}/permis/${permisId}/panneaux/${id}/itemCreate`} >
                <button
                    className="p-3 mt-4 md:px-6 inline-flex items-center gap-x-2 text-sm md:text-base font-semibold rounded-lg border border-transparent bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 disabled:pointer-events-none  " data-hs-overlay="#hs-scroll-inside-body-modal"
                    href="#"
                >
                    <PlusIcon className="w-4 h-4" strokeWidth={2.5} />
                    <span className="hidden md:inline-block">
                        {t('panneauxItems.add item')}
                    </span>
                </button>
            </Link>
            {panneaux ? (
    <div className="flex flex-wrap -mx-4 lg:-mx-8">
        {Object.values(panneaux).map((panel) =>
            panel.items.map((item) => (
                <div key={item.id} className="px-4 mt-4 lg:px-8 sm:w-full md:w-1/2 lg:w-1/3">
                    <div className="flex flex-col bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg mix-blend-hue hover:shadow-primary-500 relative">
                        <img className="w-auto h-auto rounded-t-xl" src={item?.img} alt="Image Description" />
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800">{item?.audio}</h3>
                            <p className="mt-1 text-gray-500">{item?.explanation[locale]}</p>
                            <p className="mt-1 text-gray-500">
                                <strong>{t('panneauxItems.permis')}:</strong> {item?.permis_list}
                            </p>
                        </div>
                        <div className="hs-dropdown relative flex justify-end pb-4 pr-4 [--placement:bottom-right]">
                            <button type="button" className=" hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-600 transition-all text-sm">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                            </button>
                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2">
                                <div className="py-2 first:pt-0 last:pb-0">
                                    <Link href="#">
                                        <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                            {t('panneauxItems.show')}
                                        </p>
                                    </Link>
                                    <Link href={`/${locale}/permis/${permisId}/panneaux/${id}/${item.id}/itemEdit`}>
                                        <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                            {t('panneauxItems.edit')}
                                        </p>
                                    </Link>
                                </div>
                                <div className="py-2 first:pt-0 last:pb-0 ">
                                    {/* <form action={deleteItem}>
                                        <input type="hidden" name="id" value={item.id} />
                                        <input type="hidden" name="locale" value={locale} />
                                        <input type="hidden" name="permisId" value={permisId} />
                                        <input type="hidden" name="panneauxid" value={id} />
                                        <button className="flex items-center gap-x-3 py-2 px-3 font-bold rounded-lg text-sm text-primary-600 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500">
                                            delete
                                        </button>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>
) : (
    <p>Not found</p>
)}



        </>

    )
}
async function fetchPanneaux(permisId, id) {
    const res = await axios.get(`http://127.0.0.1:8000/api/${permisId}/panneaux/${id}`)
    return res.data;
}