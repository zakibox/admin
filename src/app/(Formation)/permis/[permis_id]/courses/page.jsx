'use client'

import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CoursesPage({ params }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/courses/5");
            console.log(response.data)
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
                <h1 className="mb-2 text-3xl font-bold text-slate-900">Gerer les courses</h1>
                <Link href={`/permis/${params.permis_id}/courses/addCourse`}>
                    <button
                        className="p-3 md:px-6 inline-flex items-center gap-x-2 text-sm md:text-base font-semibold rounded-lg border border-transparent bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <PlusIcon className="w-4 h-4" strokeWidth={2.5} />
                        <span className="hidden md:inline-block">Ajouter une course</span>
                    </button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden bg-white border shadow-sm border-slate-200 rounded-xl">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                img
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                title
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                content
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                            numero de questions
                                        </span>
                                    </th>

                                    <th className="px-6 py-3 text-end"></th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-200">
                                {courses.data && Object.values(courses.data).map(course => (
                                    <tr key={course.id}>
                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3"></div>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <div className="grow">
                                                        <span className="text-sm md:text-base text-slate-600">
                                                            {course.img}
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
                                                    {course.questions_num}
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
                                                            <a className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" href="#">
                                                                show
                                                            </a>
                                                            <a className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" href={`/permis/${params.permisid}/courses/handleQuestion`}>
                                                                gerer les questions
                                                            </a>
                                                            <a className="flex items-center font-bold gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" href="#">
                                                                edit
                                                            </a>
                                                        </div>
                                                        <div className="py-2 first:pt-0 last:pb-0">
                                                            <a className="flex items-center gap-x-3 py-2 px-3 font-bold rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500" href="#">
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

                        {/* <!-- Footer --> */}
                        <div className="grid gap-3 px-6 py-4 border-t border-slate-200 md:flex md:justify-between md:items-center">
                            <div>
                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                                        {courses.length}
                                    </span>{" "}
                                    results
                                </p>
                            </div>

                            <div>
                                <div className="inline-flex gap-x-2">
                                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium bg-white border rounded-lg shadow-sm md:text-base text-slate-800 border-slate-200 gap-x-2 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none focus:ring-2 focus:ring-primary-500">
                                        <ChevronLeftIcon className="w-3 h-3" />
                                        Prev
                                    </button>

                                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium bg-white border rounded-lg shadow-sm md:text-base text-slate-800 border-slate-200 gap-x-2 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none focus:ring-2 focus:ring-primary-500">
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
