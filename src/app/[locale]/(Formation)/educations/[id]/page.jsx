
import axios from "axios";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";
export default async function EducationRoutiereShowPage({ params: { id, locale } }) {



    const Education = await fetchEducation(id);
    const t = await getTranslations('education.show')
    return (
        <>


            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
                <h1 className="mb-2 text-3xl font-bold text-slate-900">{t('h1')}</h1>
                <Link href={`/${locale}/educations`}>
                    <button className="px-3 py-3 rounded-full bg-primary-600 text-primary-100">
                        <ChevronLeftIcon
                            className="w-6 h-6"
                            strokeWidth="2.5"
                        />

                    </button>
                </Link>


            </div>
            <div className="overflow-x-auto">
                <div className="p-1.5 mt-40 min-w-full inline-block align-middle">
                    <div className="overflow-hidden bg-white border shadow-sm border-slate-200 rounded-xl">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                {t('img')}
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
                                                {t('content')}
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
                                {Education && Object.values(Education).map(education => (
                                    <tr key={education.id}>
                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <div className="grow">
                                                        <span className="text-sm md:text-base text-slate-600">
                                                            {education.img && <img src={education.img} alt="Education Image" className="h-16 w-16" />}
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
                                                            {education.title[locale]}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {education.content[locale]}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3 text-center">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {education.questions_num}
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

        </>

    )
}
async function fetchEducation(id) {
    const res = await axios.get(`http://127.0.0.1:8000/api/educationRoutieres/${id}`);
    return res.data;
}