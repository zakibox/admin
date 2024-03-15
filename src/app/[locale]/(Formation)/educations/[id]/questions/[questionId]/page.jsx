
import axios from "axios";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";

export default async function EducationQuestionShowPage({params: {questionId, locale, id}}) {
const question = await fetchQuestions(questionId);
const t = await getTranslations('education.questions')
  return (
    <>
      <Link href={`/${locale}/educations/${id}/questions`}>
     <button className="px-3 py-3 rounded-full bg-primary-600 text-primary-100">               
                            <ChevronLeftIcon
                                className="w-6 h-6"
                                strokeWidth="2.5"
                            />
                       
             </button>
     </Link>
       <div className="overflow-x-auto">
        <div className="p-1.5 mt-40 min-w-full inline-block align-middle">
            <div className="overflow-hidden bg-white border shadow-sm border-slate-200 rounded-xl">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                        {t('show.audio')}
                                    </span>
                                </div>
                            </th>

                            <th className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                        {t('show.explanation')}
                                    </span>
                                </div>
                            </th>

                            <th className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold tracking-wide uppercase md:text-base text-slate-800">
                                        {t('show.sub_questions_list')}
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                    {question && Object.values(question).map(question => (
    <tr key={question.id}>
        <td className="whitespace-nowrap">
            <div className="px-6 py-3">
                <span className="text-sm md:text-base text-slate-600">
                    {question.audio}
                </span>
            </div>
        </td>
        <td className="whitespace-nowrap">
            <div className="px-6 py-3">
                <span className="text-sm md:text-base text-slate-600">
                    {question.explanation[locale]}
                </span>
            </div>
        </td>
        <td className="whitespace-nowrap">
            <div className="px-6 py-3 text-center">
                {question.sub_questions_list.map(subQuestion => (
                    <div key={subQuestion.question}>
                        <p>{subQuestion.question[locale]}</p>
                        <ul className="text-sm md:text-base text-slate-600">
                            {subQuestion.answers.map(answer => (
                                <li className="text-sm md:text-base text-slate-600" key={answer.text}>
                                    {answer.text[locale]} - {answer.isCorrect ? "Correct" : "Incorrect"}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </td>
        <td className="h-px w-px whitespace-nowrap">
            {/* Dropdown menu code */}
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
async function fetchQuestions(id) {
    const res = await axios.get(`http://127.0.0.1:8000/api/questions/${id}`);
    return res.data;
}