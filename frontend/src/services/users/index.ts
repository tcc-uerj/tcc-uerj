import IUser from "@/interfaces/IUser";
import {IGetAllUserLessonsResponse} from "@/interfaces/responses/IGetAllUserLessonsResponse";
import {IGetRankingResponse} from "@/interfaces/responses/IGetRankingResponse";
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
