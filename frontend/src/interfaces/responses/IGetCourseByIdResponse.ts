import IChallenge from "@/interfaces/IChallenge";
import ILesson from "@/interfaces/ILesson";
import ILessonLink from "@/interfaces/ILessonLink";

export interface IGetCourseByIdResponse {
    data: IGetCourseByIdDataResponse;
}

export interface IGetCourseByIdDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}