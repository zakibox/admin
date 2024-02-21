import { useFieldArray } from "react-hook-form";
// import { PlusIcon, XmarkIcon } from "@heroicons/react";
import { defaultAnswer } from "./page";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

function AnswerFields({ questionIndex, control, register }) {
    const {
        fields: answersFields,
        append: appendAnswerField,
        remove: removeAnswerField,
        // prepend: prependAnswerField,
    } = useFieldArray({
        control,
        name: `questions.${questionIndex}.answers`,
    });
    const canRemoveAnswer = answersFields.length > 2;
    return (
        <>
            {answersFields.map((answers, i) => (
                <div className="flex gap-4 mt-4">
                     <input type="text"   {...register(
                            `questions.${questionIndex}.answers.${i}.text.ar`)} className="p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2"
                        />
                 
                     <input type="text"    {...register(
                            `questions.${questionIndex}.answers.${i}.text.fr`)}  className="p-4 block border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2"
                     
                        />
                                  
                                  {canRemoveAnswer && (
                        <button
                            className="flex items-center justify-end py-3 px-4 gap-x-2 text-sm font-bold rounded-lg border border-transparent bg-primary-600 text-black hover:bg-primary-700"
                            onClick={() => removeAnswerField(questionIndex, i)}
                            type="button"
                        >
                             <XMarkIcon className="size-4" /> 
                        </button>
                    )}
                </div>
            ))}
            <div className="flex justify-end">
                <button
                    onClick={() => appendAnswerField(defaultAnswer)}
                    type="button"
                    className="flex items-center justify-end gap-4 p-2  text-sm font-bold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 "
                   
                >
                    <p>Add New Answer</p>
                    <PlusIcon className="size-4" />
                </button>
            </div>
        </>
    );
}

export default AnswerFields;