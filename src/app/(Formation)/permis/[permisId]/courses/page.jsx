'use client'

import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";


export default async function coursePage({ params }) {

    const courses = await fetchCourses(params.permisId);
    const permit = await fetchPermit();
    
 

    



    function handleDelete(id) {
        try {
            axios.delete(`http://127.0.0.1:8000/api/courses/${id}`);
            // After successful deletion, you might want to update the UI by refetching the education items
            console.log("course item deleted successfully");
            window.location.href = `/permis/${params.permisId}/courses`;
            // You can also update the educations state if necessary
        } catch (error) {
            console.error("Error deleting course item:", error);
        }
    }
    return (
        <>

            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">


                <h1 className="mb-2 text-3xl font-bold text-slate-900">Gerer les cours</h1>
                <Link href={`courses/create`}>
                    <button
                        className="p-3 md:px-6 inline-flex items-center gap-x-2 text-sm md:text-base font-semibold rounded-lg border border-transparent bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 disabled:pointer-events-none  " data-hs-overlay="#hs-scroll-inside-body-modal"
                        href="#"
                    >
                        <PlusIcon className="w-4 h-4" strokeWidth={2.5} />
                        <span className="hidden md:inline-block">
                            ajouter course
                        </span>
                    </button>
                </Link>


            </div>
            <div class="hs-dropdown relative inline-flex">
                <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
                    choix de permis
                    <svg class="hs-dropdown-open:rotate-180 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                <div 
                value={params.permisId || ""} class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-basic">
                {permit.data && (permit.data).map(permis => (
                    <a  key={permis.id} value={permis.id} class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href={`/permis/${permis.id}/courses`}>
                        {permis.name}
                    </a>
                ))}
                   
                   
                </div>
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
                                                img
                                            </span>
                                        </div>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start"
                                    >
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800 ">
                                                title
                                            </span>
                                        </div>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start"
                                    >
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800 ">
                                                content
                                            </span>
                                        </div>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-start"
                                    >
                                        <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800 ">
                                            numero de questions
                                        </span>
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-end"
                                    ></th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-200">
                                {courses.data && (courses.data).map(course => (
                                    <tr key={course.id}>
                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <div className="grow">
                                                        <span className="text-sm md:text-base text-slate-600">
                                                            {course.img && <img src={course.img} alt="Education Image" className="h-16 w-auto" />}

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
                                                            {course.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {course.content}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3 text-center">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {course.questionsNum}
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
                                                            <Link href={`/permis/${params.permisId}/courses/${course.id}`}>
                                                                <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                                                    show
                                                                </p>
                                                            </Link>
                                                            <Link href={`/permis/${params.permisId}/courses/${course.id}/questions`}>

                                                                <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                                                    gerer les questions
                                                                </p>
                                                            </Link>
                                                            <Link href={`/permis/${params.permisId}/courses/${course.id}/edit`}>
                                                                <p className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" >
                                                                    edit
                                                                </p>
                                                            </Link>

                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a  onClick={() => handleDelete(course.id)} className="flex items-center gap-x-3 py-2 px-3 font-bold rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" href="#" >
                                                                Delete
                                                            </a>
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
async function fetchCourses(id) {
    const res = await axios.get(`http://127.0.0.1:8000/api/permis/${id}/courses`);
    return res.data;
}
async function fetchPermit() {
    const res = await axios.get(`http://127.0.0.1:8000/api/permis`);
    return res.data;
}


