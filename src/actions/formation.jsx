"use server";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (formData) => {
    
    await axios.delete( `http://127.0.0.1:8000/api/educationRoutieres/${formData.get("id")}`
   
    );

    revalidatePath("/");
}