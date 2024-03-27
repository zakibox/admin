"use client";

import { useFieldArray, useForm } from "react-hook-form";
import AnswerFields from "./NestedField";
import { PlusIcon } from "@heroicons/react/24/outline";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";



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

function editPage({ params: { locale, id, questionId } }) {
    const t = useTranslations('education.questions.edit')
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        reset,
        setValue,
    } = useForm({
        defaultValues: async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/questions/${questionId}`);
                console.log(response.data)
                return { ...response.data, 'data.questionable_id': id, 'data.questionable_type': 'App\\Models\\EducationRoutiere' };

            } catch (error) {
                console.error("Error fetching default values:", error);
                return {}; // Return empty object if error occurs
            }
        }
    });

    const {
        fields: questionsFields,
        append: appendQuestionField,
        remove: removeQuestionField,
        prepend: prependQuestionField,
    } = useFieldArray({
        control,
        name: "sub_questions_list",
    });

    const onSubmit = async (data) => {
        try {
            // Check if at least one answer is marked as correct for each question
            const isValid = data.data.sub_questions_list.every(question =>
                question.answers.some(answer => answer.isCorrect)
            );
            if (!isValid) {
                alert("At least one answer should be correct for each question");
                // You can also set an error state here to display an error message to the user
                return;
            }
            await axios.put(`http://127.0.0.1:8000/api/questions/${questionId}`, data.data);

            // Redirect to the list of courses page after successful submission
            console.log(data.data)
            window.location.href = `/${locale}/educations/${id}/questions`;
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };
    return (

        <form className="px-20 flex gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="justify-center items-center w-full" >

                <div className="p-4 sm:p-7 flex flex-col bg-gray-100 rounded-2xl shadow-lg ">
                    <div className="text-center">
                        <h1 className="block text-3xl font-bold text-primary-600 ">{t('h1')}</h1>
                    </div>
                    <div className="mt-5">
                        <div className="grid grid-cols-1 gap-4">

                            <div>
                                <div className="relative">
                                    <input type="text"   {...register("data.audio")} id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-900 focus:ring-blue-900 disabled:opacity-50 disabled:pointer-events-none 
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
                                    peer-[:not(:placeholder-shown)]:text-gray-500">{t('audio')}</label>
                                </div>

                            </div>

                            <div>
                                <div className="relative">
                                    <input type="text" {...register("data.explanation.fr")} id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-900 focus:ring-blue-900 disabled:opacity-50 disabled:pointer-events-none 
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
                                    peer-[:not(:placeholder-shown)]:text-gray-500">{t('explanation')}</label>
                                </div>

                            </div>



                            <div>

                                <div className="relative">
                                    <input type="text" {...register("data.explanation.ar")} id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
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
                                    <input type="hidden"    {...register("data.questionable_id")} id="hs-hero-signup-form-floating-input-company-name" className="  peer  w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-900 focus:ring-blue-900 disabled:opacity-50 disabled:pointer-events-none 
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
                                    <input type="hidden"    {...register("data.questionable_type")} id="hs-hero-signup-form-floating-input-company-name" className=" peer  w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-900 focus:ring-blue-900 disabled:opacity-50 disabled:pointer-events-none 
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
                                    {questionsFields.map((question, i) => (
                                        <>

                                            <div key={i}>
                                                <label>{t('question')}</label>
                                                <input type="text" {...register(`data.sub_questions_list.${i}.question.fr`)}

                                                    className="peer p-4 block w-full mb-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2"

                                                />
                                                <label>{t('questionAr')}</label>
                                                <input type="text" {...register(`data.sub_questions_list.${i}.question.ar`)}

                                                    className="peer p-4 block w-full mt-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
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
                                                    {t('remove')}
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
                                        <p>{t('new question')}</p>
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

export default editPage;
