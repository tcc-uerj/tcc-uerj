import { ILessonLink } from "@/interfaces/ILessonLink";
import { ILesson } from "@/interfaces/ILesson";
import { IChallenge } from "@/interfaces/IChallenge";

export interface IGetCourseBySubjectResponse {
    data: IGetCourseBySubjectDataResponse;
}

export interface IGetCourseBySubjectDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}