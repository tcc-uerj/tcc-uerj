import IUser from "@/interfaces/IUser";
import {IGetAllUserLessonsResponse} from "@/interfaces/responses/IGetAllUserLessonsResponse";
import {IGetRankingResponse} from "@/interfaces/responses/IGetRankingResponse";
import {IGetUserAchievementsResponse} from "@/interfaces/responses/IGetUserAchievementsResponse";
import {IGetUserLessonLinksResponse} from "@/interfaces/responses/IGetUserLessonLinksResponse";
import {IPatchUserResponse} from "@/interfaces/responses/IPatchUserResponse";
import {BACKEND_BASE_URL} from "@/lib/consts";
import {api} from "@/services/api";

export async function getAllUserLessons(): Promise<IGetAllUserLessonsResponse> {
    return await api.get(`${BACKEND_BASE_URL}/users/lesson`);
}

export async function getRanking(): Promise<IGetRankingResponse> {
    return await api.get(`${BACKEND_BASE_URL}/users/ranking`);
}

export async function updateUser(user: IUser): Promise<IPatchUserResponse> {
    return await api.patch(`${BACKEND_BASE_URL}/users`, user);
}

export async function getUserLessonLinks(): Promise<IGetUserLessonLinksResponse> {
    return await api.get(`${BACKEND_BASE_URL}/users/lessons-links`);
}

export async function insertUserLessonLink(lessonLinkId: number): Promise<void> {
    await api.post(`${BACKEND_BASE_URL}/users/${lessonLinkId}/lesson-link`);
}

export async function getUserAchievements(): Promise<IGetUserAchievementsResponse> {
    return await api.get(`${BACKEND_BASE_URL}/users/achievements`);
}

export async function associateUserLesson(lessonId: number) {
    return await api.post(`${BACKEND_BASE_URL}/users/${lessonId}/lesson`);
}
