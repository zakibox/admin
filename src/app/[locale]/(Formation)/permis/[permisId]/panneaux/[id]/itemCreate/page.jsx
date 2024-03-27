"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { PlusIcon } from "@heroicons/react/24/outline";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase";


export const defaultItem = {
    panneaux_id: "",
    img: "",
    audio: "",
    explanation: {
        fr: "",
        ar: "",
    },
    description: {
        fr: "",
        ar: "",
    },
    questions_num: "",
    permis_list: "",
};

const defaultValues = {
    items: [defaultItem]
}
  

function createPage({ params: { permisId, locale, id } }) {
    const t = useTranslations('panneaux.questions.create')
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        reset,
        setValue,
    } = useForm({});

    const {
        fields: itemsFields,
        append: appendQuestionField,
        remove: removeQuestionField,
    } = useFieldArray({
        control,
        name: "items",
    });
    const [imageUpload, setImageUpload] = useState(null);
    const [img, setImg] = useState("");
    const onSubmit = async (data) => {
        try {
            if (imageUpload) {
                const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
                await uploadBytes(imageRef, imageUpload);
                const url = await getDownloadURL(imageRef);
                console.log(url)
                setImg(url);
                alert("Image uploaded successfully");

              
            data.items.forEach((item, i) => {
                item.img = url;
            });
            }
            
            await axios.post('http://127.0.0.1:8000/api/panneauxItems', data.data);
            // Redirect to the list of courses page after successful submission
            console.log(data.data)
            window.location.href = `/${locale}/permis/${permisId}/panneaux/${id}`;
        } catch (error) {
            console.error('Error adding panneaux:', error);
        }
    };
    return (

        <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center items-center w-full">
                <div className="w-3/4">
                    <div className="p-4 sm:p-7 flex flex-col bg-gray-100 rounded-2xl shadow-lg ">
                        <div className="text-center">
                            <h1 className="block text-3xl font-bold text-primary-600 "> create item</h1>
                        </div>
                        <div className="mt-5">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <div className="relative">

                                        {itemsFields.map((question, i) => (
                                            <>

                                                <div key={i}>
                                                    <div>
                                                        <div className="relative">
                                                            <input type="hidden"   {...register(`data.${i}.panneaux_id`)} defaultValue={id} id="hs-hero-signup-form-floating-input-company-name" className="  peer  w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-900 focus:ring-blue-900 disabled:opacity-50 disabled:pointer-events-none 
                                                                focus:pt-6
                                                                focus:pb-2
                                                                [&:not(:placeholder-shown)]:pt-6
                                                                [&:not(:placeholder-shown)]:pb-2
                                                                autofill:pt-6 
                                                                autofill:pb-2" placeholder="explanation" />

                                                        </div>

                                                    </div>
                                                    <div>
                                                        <div className="relative">
                                                            <div>
                                                                <label className=" font-bold mt-4 inline-flex justify-center items-center "  >

                                                                    <span className="sr-only"> ajouter img</span>
                                                                    <input type="file" {...register(`data.${i}.img`)} onChange={(event) => {
                                                                        setImageUpload(event.target.files[0]);
                                                                    }} className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-700 file:disabled:opacity-50 file:disabled:pointer-events-none" />

                                                                </label>

                                                            </div>
                                                            {img && <img src={img} alt="Uploaded" className="w-20 h-20" />}
                                                        </div>

                                                    </div>
                                                    <label className="block mt-4 font-semibold">audio</label>
                                                    <input type="text" {...register(`data.${i}.audio`)}

                                                        className="peer p-4 block w-full  border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2"

                                                    />
                                                    <div className="relative">
                                                        <label className="block mt-4 font-semibold">explanation</label>
                                                        <input type="text" {...register(`data.${i}.explanation.fr`)}

                                                            className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                           focus:pt-6
                                                                        focus:pb-2
                                                                        [&:not(:placeholder-shown)]:pt-6
                                                                        [&:not(:placeholder-shown)]:pb-2
                                                                        autofill:pt-6 autofill:pb-2"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block mt-4 font-semibold">explanation ar</label>
                                                        <input type="text" {...register(`data.${i}.explanation.ar`)}

                                                            className="peer p-4  block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                           focus:pt-6
                                                                        focus:pb-2
                                                                        [&:not(:placeholder-shown)]:pt-6
                                                                        [&:not(:placeholder-shown)]:pb-2
                                                                        autofill:pt-6 autofill:pb-2"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block mt-4 font-semibold">description</label>
                                                        <input type="text" {...register(`data.${i}.description.fr`)}

                                                            className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                           focus:pt-6
                                                                        focus:pb-2
                                                                        [&:not(:placeholder-shown)]:pt-6
                                                                        [&:not(:placeholder-shown)]:pb-2
                                                                        autofill:pt-6 autofill:pb-2"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block mt-4 font-semibold">description ar</label>
                                                        <input type="text" {...register(`data.${i}.description.ar`)}

                                                            className="peer p-4  block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                           focus:pt-6
                                                                        focus:pb-2
                                                                        [&:not(:placeholder-shown)]:pt-6
                                                                        [&:not(:placeholder-shown)]:pb-2
                                                                        autofill:pt-6 autofill:pb-2"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block mt-4 font-semibold">questionsNum</label>
                                                        <input type="text" {...register(`data.${i}.questions_num`)}

                                                            className="peer p-4  block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                           focus:pt-6
                                                                        focus:pb-2
                                                                        [&:not(:placeholder-shown)]:pt-6
                                                                        [&:not(:placeholder-shown)]:pb-2
                                                                        autofill:pt-6 autofill:pb-2"
                                                        />
                                                    </div>
                                                    <div className="relative mt-4">
                                                        <label className="block font-semibold">Permis List</label>
                                                        <input
                                                            type="text"
                                                            {...register(`data.${i}.permis-list`)}
                                                            className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                                            placeholder="Enter numbers separated by commas"
                                                        />
                                                    </div>

                                                    <button
                                                        className=" ml-auto text-right flex items-center justify-end py-3 mt-4 px-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                                                        type="button"
                                                        onClick={() => removeQuestionField(i)}
                                                    >
                                                        {t('remove')}
                                                    </button>


                                                </div>
                                            </>
                                        ))}

                                        <button
                                            className="  inline-flex items-end  mt-4 justify-end py-3 px-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                                            type="button"
                                            onClick={() => {
                                                appendQuestionField(defaultItem);
                                            }}
                                        >
                                            <p>add new item</p>
                                            <PlusIcon className="size-4" />
                                        </button>




                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none">submit</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </form>
    );
}

export default createPage;
