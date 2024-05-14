import { IGetAllUserLessonsResponse } from "@/interfaces/responses/IGetAllUserLessonsResponse";
import { BACKEND_BASE_URL } from "@/lib/consts";
import { api } from "@/services/api";

export async function getAllUserLessons(): Promise<IGetAllUserLessonsResponse> {
    return await api.get(`${BACKEND_BASE_URL}/users/lesson`);
}