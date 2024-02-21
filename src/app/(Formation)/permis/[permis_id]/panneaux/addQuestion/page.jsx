"use client";

import { useFieldArray, useForm } from "react-hook-form";
// import { PlusIcon, XmarkIcon} from "@heroicons/react";
import AnswerFields from "./nestedField";
import { FlagIcon, PhoneXMarkIcon, PlusIcon } from "@heroicons/react/24/outline";


export const defaultAnswer = {
    text: {
        ar: "الجواب",
        fr: "reponse",
    },
    isCorrect: false,
};

export const defaultQuestion = {
    text: "question",
    answers: [defaultAnswer, defaultAnswer],
};

const defaultValues = {
    view: "", // img or Video
    sound: "", // Sound File
    questions: [defaultQuestion],
};

function HomePage() {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        reset,
        setValue,
    } = useForm({ defaultValues });

    const {
        fields: questionsFields,
        append: appendQuestionField,
        remove: removeQuestionField,
        prepend: prependQuestionField,
    } = useFieldArray({
        control,
        name: "questions",
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (

        <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="justify-center items-center w-full" >

                <div className="p-4 sm:p-7 flex flex-col bg-gray-100 rounded-2xl shadow-lg ">
                    <div className="text-center">
                        <h1 className="block text-3xl font-bold text-primary-600 ">nouvelle question</h1>
                    </div>
                    <div className="mt-5">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block font-bold"  >
                                    <span className="sr-only">Choisir une image</span>
                                    <input type="file"  {...register("view")} className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-700 file:disabled:opacity-50 file:disabled:pointer-events-none" />
                                </label>
                            </div>
                            <div>
                                <div className="relative">
                                    <input type="text" id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-900 focus:ring-blue-900 disabled:opacity-50 disabled:pointer-events-none 
                                focus:pt-6
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-6
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6 
                                autofill:pb-2" placeholder="explanation" />
                                                                <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500">explanation</label>
                                </div>

                            </div>



                            <div>

                                <div className="relative">
                                    <input type="text" id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2" placeholder="explanation" />
                                    <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                                            peer-focus:text-xs
                                            peer-focus:-translate-y-1.5
                                            peer-focus:text-gray-500
                                            peer-[:not(:placeholder-shown)]:text-xs
                                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                            peer-[:not(:placeholder-shown)]:text-gray-500">التفسير</label>
                                </div>
                            </div>

                            <div>

                                <div className="relative">
                                    {questionsFields.map((question, i) => (
                                        <>
                                      
                                            <div key={i}>
                                            
                                            <input type="text" {...register(`questions.${i}.text`)} 

                                                className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2" 

                                            />
                                                        
                                                <button
                                                 className=" flex items-center justify-end py-3 mt-4 px-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                                                    type="button"
                                                    onClick={() => removeQuestionField(i)}
                                                >
                                                    remove
                                                </button>
                                            </div>
                                            <AnswerFields
                                                questionIndex={i}
                                                control={control}
                                                register={register}
                                            />
                                        </>
                                    ))}
                                    <button
                                        className=" flex items-center justify-end py-3 px-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                                        type="button"
                                        onClick={() => {
                                            appendQuestionField(defaultQuestion);
                                        }}
                                    >
                                        <p>Add New Question</p>
                                        {/* <PlusIcon className="size-4" /> */}
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



        </form>
    );
}

export default HomePage;
