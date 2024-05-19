import {IGetAllChallengesResponse} from "@/interfaces/responses/IGetAllChallengesResponse";
import {BACKEND_BASE_URL} from "@/lib/consts";
import {api} from "@/services/api";

export async function getChallenges(): Promise<IGetAllChallengesResponse> {
    return await api.get(`${BACKEND_BASE_URL}/challenges`);
}
