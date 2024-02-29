'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect,useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";


export default function CourseDetailsPage({params}) {

  const [course, setCourse] = useState([]);

  useEffect(() => {
    // Fetch data for the specific item with the given ID
    axios.get(`http://127.0.0.1:8000/api/courses/${params.id}`)
      .then(response => {
        // Assuming response.data contains the data for the item
        
        setCourse(response.data);
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
                        {course && Object.values(course).map(course => (
                            <tr key={course.id}>
                               
                                <td className="whitespace-nowrap">
                                    <div className="px-6 py-3">
                                        <div className="flex items-center gap-x-2">
                                            <div className="grow">
                                                <span className="text-sm md:text-base text-slate-600">
                                                {course.img && <img src={course.img} alt="course Image" className="h-16 w-16" />}
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
                                        <span className="text-sm md:text-base text-slate-600 justify-center">
                                            {course.questionsNum}
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