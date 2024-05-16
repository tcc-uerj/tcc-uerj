import {QuestionType} from "@/enums/QuestionType";
import IQuestionOptions from "@/interfaces/IQuestionQuiz";

export default interface IChallengeQuestion {
    id: number;
    challengeId: number;
    statementTitle?: string;
    statementCode?: string;
    type: QuestionType;
    questionOptions: IQuestionOptions[];
}
