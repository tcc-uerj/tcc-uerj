import { IGetAllCoursesResponse } from "@/interfaces/responses/IGetAllCoursesResponse";
import { IGetCourseByIdResponse } from "@/interfaces/responses/IGetCourseByIdResponse";
import { IGetCourseBySubjectResponse } from "@/interfaces/responses/IGetCourseBySubjectResponse";
import { BACKEND_BASE_URL } from "@/lib/consts";
import { api } from "@/services/api";

export async function getAllCourses(): Promise<IGetAllCoursesResponse> {
    return await api.get(`${BACKEND_BASE_URL}/lessons`);
}

export async function getCourseById(lessonId: number): Promise<IGetCourseByIdResponse> {
    return await api.get(`${BACKEND_BASE_URL}/lessons/${lessonId}`);
}

export async function getCourseBySubject(subject: string): Promise<IGetCourseBySubjectResponse> {
    return await api.get(`${BACKEND_BASE_URL}/lessons/${subject}/subject`);
}