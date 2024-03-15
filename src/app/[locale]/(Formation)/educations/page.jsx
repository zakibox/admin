
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import deleteTodo from "../../../../actions/formation"
import { getTranslations } from "next-intl/server";


export default async function EducationRoutierePage({ params: { locale } }) {

  
    if (locale != "fr" && locale != 'ar') {
        throw new Error(" route not found")
    }

    const educations = await fetchEducations();
    console.log(educations)
    // Check for errors
    if (educations.errors) {
        throw Error("Error fetching educations");
    }


    // function handleDelete(id) {
    //     try {
    //         axios.delete(`http://127.0.0.1:8000/api/educationRoutieres/${id}`);
    //         // After successful deletion, you might want to update the UI by refetching the education items
    //         console.log("Education item deleted successfully");
    //         window.location.href = `/${locale}/educations`;
    //         // You can also update the educations state if necessary
    //     } catch (error) {
    //         console.error("Error deleting education item:", error);
    //     }
    // }
// intl translation attribute
const t= await getTranslations('education.Index');
// to strip html tags from the data i get from backend 
const stripHtmlTags = (html) => {
    return html.replace(/(<([^>]+)>)/ig, '');
};
    return (
        <>

            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">

                <h1 className="mb-2 text-3xl font-bold text-slate-900">{t('gerer')}</h1>
                <Link href={`/${locale}/educations/create`}>
                    <button
                        className="p-3 md:px-6 inline-flex items-center gap-x-2 text-sm md:text-base font-semibold rounded-lg border border-transparent bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 disabled:pointer-events-none  " data-hs-overlay="#hs-scroll-inside-body-modal"
                        href="#"
                    >
                        <PlusIcon className="w-4 h-4" strokeWidth={2.5} />
                        <span className="hidden md:inline-block">
                            {t('button')}
                        </span>
                    </button>
                </Link>

            </div>

            <div className="overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden bg-white border shadow-sm border-slate-200 rounded-xl ">
                        <table className="min-w-full divide-y divide-slate-200 ">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start"
                                    >
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800 ">
                                                {t('img')}
                                            </span>
                                        </div>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start"
                                    >
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800 ">
                                                {t('title')}
                                            </span>
                                        </div>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start"
                                    >
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800 ">
                                                {t('content')}
                                            </span>
                                        </div>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start"
                                    >
                                        <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800 ">
                                            {t('questionsNum')}
                                        </span>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-end"
                                    ></th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-200">
                                {Object.values(educations.data) && (educations.data).map(education => (
                                    <tr key={education.id}>
                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <div className="grow">
                                                        <span className="text-sm md:text-base text-slate-600">
                                                            {education.img && <img src={education.img} alt="Education Image" className="h-auto w-auto rounded-xl" />}

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
                                            <div className="px-6 py-3  ">
                                                <span className="text-sm md:text-base text-slate-600 ">
                                                {stripHtmlTags(education.content[locale])}
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
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-1.5">
                                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                    <button type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-600 transition-all text-sm">

                                                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                    </button>
                                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2">
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <Link href={`/${locale}/educations/${education.id}`}>
                                                                <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                                                   {t('plus.show')}
                                                                </p>
                                                            </Link>
                                                            <Link href={`/${locale}/educations/${education.id}/questions`}>

                                                                <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                                                {t('plus.questions')}
                                                                </p>
                                                            </Link>
                                                            <Link href={`/${locale}/educations/${education.id}/edit`}>
                                                                <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                                                {t('plus.edit')}
                                                                </p>
                                                            </Link>

                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <form action={deleteTodo}>
                                                                <input type="hidden" name="id" value={education.id} />
                                                                <button className="p-3 transition-colors duration-200 bg-indigo-100 rounded-full hover:bg-red-500 hover:text-white">
                                                                    <TrashIcon className="size-4" strokeWidth={2} />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <!-- End Table --> */}

                        {/* <!-- Footer --> */}
                        <div className="grid gap-3 px-6 py-4 border-t border-slate-200 md:flex md:justify-between md:items-center ">
                            <div>
                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                                        1
                                    </span>{" "}
                                    results
                                </p>
                            </div>

                            <div>
                                <div className="inline-flex gap-x-2">
                                    <button
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium bg-white border rounded-lg shadow-sm md:text-base text-slate-800 border-slate-200 gap-x-2 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        <ChevronLeftIcon className="w-3 h-3" />
                                        Prev
                                    </button>

                                    <button
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium bg-white border rounded-lg shadow-sm md:text-base text-slate-800 border-slate-200 gap-x-2 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Next
                                        <ChevronRightIcon className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Footer --> */}
                    </div>
                </div>
            </div>
        </>
    );
}

async function fetchEducations() {
    const res = await axios.get("http://127.0.0.1:8000/api/educationRoutieres");
    return res.data;
    // req to api
}


