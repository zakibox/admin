'use client'
import axios from "axios";
import { useEffect,useState } from "react";


export default function EducationQuestionShowPage({params}) {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    // Fetch data for the specific item with the given education ID and question ID
    axios.get(`http://127.0.0.1:8000/api/questions/${params.questionId}`)
      .then(response => {
        // Assuming response.data contains the data for the item
        console.log(response.data);
        setQuestion(response.data);
        // setLoading(false);
  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [params.questionId]);

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
                                        audio
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
                                        sub_questions_list
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
                    {question.explanation}
                </span>
            </div>
        </td>
        <td className="whitespace-nowrap">
            <div className="px-6 py-3 text-center">
                {question.sub_questions_list.map(subQuestion => (
                    <div key={subQuestion.question}>
                        <p>{subQuestion.question}</p>
                        <ul>
                            {subQuestion.answers.map(answer => (
                                <li key={answer.text}>
                                    {answer.text} - {answer.isCorrect ? "Correct" : "Incorrect"}
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