'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";


export default function PanneauxDetailsPage({ params }) {

    const [panneaux, setPanneaux] = useState([]);

    useEffect(() => {
        // Fetch data for the specific item with the given ID
        axios.get(`http://127.0.0.1:8000/api/${params.permisId}/panneaux/${params.id}`)
            .then(response => {
                // Assuming response.data contains the data for the item

                setPanneaux(response.data);
                // setLoading(false);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [params.id]);

    return (
        <>
        

          
            <div className="overflow-x-auto">
                <div className="p-1.5 mt-40 min-w-full inline-block align-middle">
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
                                                title
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                description
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
                                                            {panel.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {panel.description}
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
            <div className="overflow-x-auto mt-4">
                <div className="p-1.5 mt-40 min-w-full inline-block align-middle">
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
                                                explanation
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                                audio
                                            </span>
                                        </div>
                                    </th>

                                    <th className="px-6 py-3 text-start">
                                        <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                            permis_list
                                        </span>
                                    </th>

                                    <th className="px-6 py-3 text-end"></th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-200">
                                {panneaux.items && Object.values(panneaux.items).map(item => (
                                    <tr key={item.id}>
                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <div className="flex items-center gap-x-2">
                                                    <div className="grow">
                                                        <span className="text-sm md:text-base text-slate-600">
                                                            {item.img}
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
                                                            {item.explanation}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {panel.audio}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <div className="px-6 py-3 text-center">
                                                <span className="text-sm md:text-base text-slate-600">
                                                    {panel.permis_list}
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