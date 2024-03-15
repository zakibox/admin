
import axios from "axios";
import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { getTranslations } from "next-intl/server";


export default async function PanneauxDetailsPage({ params: { permisId, id, locale } }) {

    // const [panneaux, setPanneaux] = useState([]);

    // useEffect(() => {
    //     // Fetch data for the specific item with the given ID
    //     axios.get(`http://127.0.0.1:8000/api/${permisId}/panneaux/${id}`)
    //         .then(response => {
    //             // Assuming response.data contains the data for the item

    //             setPanneaux(response.data);
    //             // setLoading(false);

    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, [params.id]);
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
            <div className="flex flex-wrap -mx-4 lg:-mx-8">
                {panneaux && Object.values(panneaux).map(panel => (
                    panel.items.map(item => (
                        <div key={item?.id} className="px-4 mt-4 lg:px-8 sm:w-full md:w-1/2 lg:w-1/3">
                            <div className="flex flex-col bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg mix-blend-hue hover:shadow-primary-500 ">
                                <img className="w-auto h-auto rounded-t-xl" src={item?.img} alt="Image Description" />
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {item?.audio}
                                    </h3>
                                    <p className="mt-1 text-gray-500">
                                        {item?.explanation[locale]}
                                    </p>
                                    <p className="mt-1 text-gray-500">
                                        <strong>{t('panneauxItems.permis')}:</strong> {item?.permis_list}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>


        </>

    )
}
async function fetchPanneaux(permisId, id) {
    const res = await axios.get(`http://127.0.0.1:8000/api/${permisId}/panneaux/${id}`)
    return res.data;
}