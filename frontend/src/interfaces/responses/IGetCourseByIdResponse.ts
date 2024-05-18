import IChallenge from "@/interfaces/IChallenge";
import ILesson from "@/interfaces/ILesson";
import ILessonLink from "@/interfaces/ILessonLink";
import IChallengeQuestion from "../IChallengeQuestion";

export interface IGetCourseByIdResponse {
    data: IGetCourseByIdDataResponse;
}

export interface IGetCourseByIdDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challengeQuestion: IChallengeQuestion;
}