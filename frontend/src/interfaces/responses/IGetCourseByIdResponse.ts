import { ILessonLink } from "@/interfaces/ILessonLink";
import { ILesson } from "@/interfaces/ILesson";
import { IChallenge } from "@/interfaces/IChallenge";

export interface IGetCourseByIdResponse {
    data: IGetCourseByIdDataResponse;
}

export interface IGetCourseByIdDataResponse extends ILesson {
    LessonLink: ILessonLink[];
    challenge: IChallenge;
}