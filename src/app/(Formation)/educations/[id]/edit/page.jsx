'use client'
import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect , useState} from "react";
import { storage } from "../firebase";
import { uploadBytes, ref , getDownloadURL} from "firebase/storage";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const EditEducation = ({ params }) => {
  const schema = z.object({
    data: z.object({
      title: z.object({
        fr: z.string().min(1),
        ar: z.string().min(1),
      }),
      questions_num: z.string().min(1),
      content: z.object({
        fr: z.any(),
        ar: z.any(),
      }),
    }),
  });

  const { register, handleSubmit, setValue ,errors} = useForm(
    {
       resolver: zodResolver(schema),
    }
  );
  const [initialData, setInitialData] = useState({});
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data for the specific item with the given ID
    axios.get(`http://127.0.0.1:8000/api/educationRoutieres/${params.id}`)
      .then(response => {
        // Assuming response.data contains the data for the item
        console.log(response.data)
        setInitialData(response.data);
        // setLoading(false);
  
      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });
  }, [params.id]);
  
  const [imageUpload, setImageUpload] = useState(null);
  const [img, setImg] = useState(""); 


  const onSubmit = async (data) => {
    try {
      if (imageUpload) {
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        await uploadBytes(imageRef, imageUpload);
        const url = await getDownloadURL(imageRef);
        setImg(url);
        // alert("Image uploaded successfully");
        
        // Add the image URL to your form data or do other actions with it
        data.data.img = url;
      }
     
      await axios.put(`http://127.0.0.1:8000/api/educationRoutieres/${params.id}`, data.data);
      // Redirect to the list of courses page after successful submission

      window.location.href = "/educations";
    } catch (error) {
      console.error('Error updating education:', error);
    }
  };
  
  return (
    <div>
    <form   onSubmit={handleSubmit(onSubmit)}>
   
      <div className="justify-center items-center" >

        <div className="p-4 sm:p-7 flex flex-col bg-gray-100 rounded-2xl shadow-lg ">
          <div className="text-center">
            <h1 className="block text-3xl font-bold text-primary-600 ">mise a jour education</h1>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-bold"  >
                  <span className="sr-only">Choisir une image</span>
                  <input type="file" {...register("data.img")}  onChange={(event) => { setImageUpload(event.target.files[0]);}}  className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-700 file:disabled:opacity-50 file:disabled:pointer-events-none" />
                </label>
              </div>
              {initialData?.data?.img && <img src={initialData?.data?.img} alt="Uploaded" />}
              {errors?.initialData?.data?.img && (<p className="text-red-500">img is required</p>)}
              <div>
                <div className="relative">
                  <input type="text" {...register("data.title.fr")}   defaultValue= {initialData?.data?.title } id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-900 focus:ring-blue-900 disabled:opacity-50 disabled:pointer-events-none 
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6 
              autofill:pb-2" placeholder="titre" />
                  <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-500
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500">titre</label>
                </div>
                {errors?.data?.title?.fr && (<p className="text-red-500">titre is required</p>)}
              </div>



              <div>

                <div className="relative">
                  <input type="text" {...register("data.title.ar")} defaultValue={initialData?.data?.title.ar} id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="contenue" />
                  <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-500
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500">العنوان</label>
                </div>
              </div>
              {errors?.data?.title?.ar && (<p className="text-red-500">العنوان is required</p>)}
              <div>

                <div className="relative">
                  <input type="text"  {...register("data.questions_num")} defaultValue={initialData?.data?.questionsNum} id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Preline" />
                  <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-500
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500">numero de questions</label>
                </div>
                {errors?.data?.questions_num && (<p className="text-red-500">numero de questions is required</p>)}
                <div className="relative py-4">
                  <FroalaEditor  model={initialData?.data?.content} 
                    onModelChange={(e) => setValue("data.content.fr", e)}
                    config={{
                      heightMin: 100,
                      placeholderText: 'ajouter du contenue',
                    
                    }}

                  />
                 {errors?.data?.content?.fr && (<p className="text-red-500">content is required</p>)}
                  </div>
                  <div className="relative ">
                  <FroalaEditor  model={''}
                    onModelChange={(e) => setValue("data.content.ar", e)}
                    config={{
                      heightMin: 100,
                      placeholderText: 'المحتوى بالعربية',
                    
                    }}

                  />
                  
                  </div>
                  {errors?.data?.content?.ar && (<p className="text-red-500">img is required</p>)}
              

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
     
  );
};

export default EditEducation;
