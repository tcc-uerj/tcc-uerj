import { IHangmanQuestions } from "../IHangmanQuestions";

export interface IGetHangmanQuestionsResponse {
    data: IGetHangmanQuestionsDataResponse[];
}

export interface IGetHangmanQuestionsDataResponse extends IHangmanQuestions {

}