"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const deleteEducation = async (formData) => {
    console.log('from server action')
    const locale = formData.get('locale');
    const id = formData.get('id');
    
    await axios.delete(`http://127.0.0.1:8000/api/educationRoutieres/${id}`);

    revalidatePath(`/${locale}/educations`);
}

export const deleteQuestion = async (formData) => {
    console.log('from server action')
    const locale = formData.get('locale');
    const questionid = formData.get('questionid');
    const id = formData.get('id');
    await axios.delete(`http://127.0.0.1:8000/api/${id}/education/questions/${questionid}`);
    revalidatePath(`/${locale}/educations/${id}/questions`);
    
}
export const deleteCourse = async (formData) => {
    console.log('from server action')
    const locale = formData.get('locale');
    const id = formData.get('id');
    const permisId = formData.get('permisId')
    
    await axios.delete(`http://127.0.0.1:8000/api/courses/${id}`);

    revalidatePath(`/${locale}/permis/${permisId}/courses`);
}
export const deleteCourseQuestion = async (formData) => {
    console.log('from server action')
    const locale = formData.get('locale');
    const questionid = formData.get('questionid');
    const id = formData.get('id');
    const permisId = formData.get('permisId')
    await axios.delete(`http://127.0.0.1:8000/api/${id}/course/questions/${questionid}`);
    revalidatePath(`/${locale}/permis/${permisId}/courses/${id}/questions`);
   
}

export const deletePanneaux = async (formData) => {
    console.log('from server action')
    const locale = formData.get('locale');
    const id = formData.get('id');
    const permisId = formData.get('permisId');
    
    await axios.delete(`http://127.0.0.1:8000/api/panneaux/${id}`);

    revalidatePath(`/${locale}/permis/${permisId}/panneaux`);
}
export const deletePanneauxQuestion = async (formData) => {
    console.log('from server action')
    const locale = formData.get('locale');
    const questionid = formData.get('questionid');
    const id = formData.get('id');
    const permisId = formData.get('permisId');
    await axios.delete(`http://127.0.0.1:8000/api/${id}/panneaux/questions/${questionid}`);
    revalidatePath(`/${locale}/permis/${permisId}/panneaux/${id}/questions`); 
}
export const deleteItem = async (formData) => {
    console.log('from server action')
    const locale = formData.get('locale');
    const id = formData.get('id');
    const permisId = formData.get('permisId');
    const panneauxid = formData.get('panneauxid');
    await axios.delete(`http://127.0.0.1:8000/api/panneauxItems/${id}`);

    revalidatePath(`/${locale}/permis/${permisId}/panneaux/${panneauxid}`);
}