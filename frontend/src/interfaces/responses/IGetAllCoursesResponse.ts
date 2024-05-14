import { ILessonLink } from "@/interfaces/ILessonLink";
import { ILesson } from "@/interfaces/ILesson";
import { IChallenge } from "@/interfaces/IChallenge";

export interface IGetAllCoursesResponse {
    data: IGetAllCoursesDataResponse[];
}

export interface IGetAllCoursesDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}