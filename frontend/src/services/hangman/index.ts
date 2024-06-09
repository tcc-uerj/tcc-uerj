import { IGetHangmanQuestionsResponse } from "@/interfaces/responses/IGetHangmanQuestions";
import {BACKEND_BASE_URL} from "@/lib/consts";
import {api} from "@/services/api";

export async function getHangmanQuestions(): Promise<IGetHangmanQuestionsResponse> {
    return await api.get(`${BACKEND_BASE_URL}/hangman`);
}
