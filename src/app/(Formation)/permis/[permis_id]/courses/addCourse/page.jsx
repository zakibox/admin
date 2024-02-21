'use client'

import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

// const schema = z.object({
//   img: z.string(),
//   title: z.string().min(1),
//   العنوان: z.string().min(1),
//   questions_num: z.number().min(1),
//   content: z.string().min(1),
//   المحتوى: z.string().min(1),
// });
function addCourse({params}) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    // resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8000/api/courses", data);
      // Redirect to the list of courses page after successful submission
      window.location.href = `/permis/${permis_id}/courses`;
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };
  return (

    <div>
      <form  onSubmit={handleSubmit(onSubmit)}>
     
        <div className="justify-center items-center" >

          <div className="p-4 sm:p-7 flex flex-col bg-gray-100 rounded-2xl shadow-lg ">
            <div className="text-center">
              <h1 className="block text-3xl font-bold text-primary-600 ">nouveau course</h1>
            </div>
            <div className="mt-5">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block font-bold"  >
                    <span className="sr-only">Choisir une image</span>
                    <input type="file" {...register("img")} className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-700 file:disabled:opacity-50 file:disabled:pointer-events-none" />
                  </label>
                </div>
                {errors.img && (<p className="text-red-500">img is required</p>)}
                <div>
                  <div className="relative">
                    <input type="text"   {...register("title")}  className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" 
            
                 />
                  {errors.title && (<p className="text-red-500">Title is required</p>)}
                    <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500">titre</label>
                  </div>

                </div>



                <div>

                  <div className="relative">
                    <input type="text"  {...register("العنوان")} id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" placeholder="العنوان" />
                 {errors.العنوان && (<p className="text-red-500">العنوان is required</p>)}
                    <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500">العنوان</label>
                  </div>
                </div>

                <div>

                  <div className="relative">
                    <input type="text"   {...register("questions_num")} id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" placeholder="numero de questions" />
                 {errors.questions_num && (<p className="text-red-500">questions_num is required</p>)}
                    <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500">numero de questions</label>
                  </div>
                
                  <div className="relative py-4">
                    <FroalaEditor  {...register("content")}
                      config={{
                        heightMin: 100,
                        placeholderText: 'ajouter du contenue',
                      
                      }}

                    />
                     {errors.content && (<p className="text-red-500">content is required</p>)}
                    </div>
                    <div className="relative ">
                    <FroalaEditor  {...register("المحتوى")}
                      config={{
                        heightMin: 100,
                        placeholderText: 'المحتوى بالعربية',
                      
                      }}

                    />
                     {errors.المحتوى && (<p className="text-red-500">المحتوى is required</p>)}
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
         </div>


  )
}

export default addCourse
