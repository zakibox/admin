import { useFieldArray } from "react-hook-form";
// import { PlusIcon, XmarkIcon } from "@heroicons/react";
import { defaultAnswer } from "./page";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

function AnswerFields({ questionIndex, control, register }) {
    const t = useTranslations('education.questions.edit')
    const {
        fields: answersFields,
        append: appendAnswerField,
        remove: removeAnswerField,
        // prepend: prependAnswerField,
    } = useFieldArray({
        control,
        name: `sub_questions_list.${questionIndex}.answers`,
    });
    const canRemoveAnswer = answersFields.length > 2;
    return (
        <>
            {answersFields.map((answers, i) => (
                <div className="flex gap-4 mt-4">
                    <label>{t('answer')}</label>
                    <input type="text"   {...register(
                        `data.sub_questions_list.${questionIndex}.answers.${i}.text.fr`)} className="p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2"
                    />
                    <label>{t('answerAr')}</label>
                    <input type="text"    {...register(
                        `data.sub_questions_list.${questionIndex}.answers.${i}.text.ar`)} className="p-4 block border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2"

                    />
                    <input type="checkbox" {...register(`data.sub_questions_list.${questionIndex}.answers.${i}.isCorrect`)} className="shrink-0 mt-0.5 border-gray-200 rounded text-primary-600 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none "
                        id="name"
                    />



                    {canRemoveAnswer && (
                        <button
                            className="flex items-center justify-end py-3 px-3 gap-x-2 text-sm font-bold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700"
                            onClick={() => removeAnswerField(questionIndex, i)}
                            type="button"
                        >
                            <XMarkIcon className="size-5" />
                        </button>
                    )}
                </div>
            ))}
            <div className="flex justify-end">
                <button
                    onClick={() => appendAnswerField(defaultAnswer)}
                    type="button"
                    className=" flex items-center justify-end py-3 px-4 mt-4 mb-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"

                >
                    <p>{t('new answer')}</p>
                    <PlusIcon className="size-4" />
                </button>
            </div>
        </>
    );
}

export default AnswerFields;
