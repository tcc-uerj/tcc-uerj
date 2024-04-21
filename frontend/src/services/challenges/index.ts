import {BACKEND_BASE_URL} from "@/lib/consts";
import {api} from "@/services/api";
import {ChallengeSchema} from "@/schemas";
import {z} from "zod";

export async function getChallenges() {
    return await api.get<z.infer<typeof ChallengeSchema>>(`${BACKEND_BASE_URL}/challenges`);
}
