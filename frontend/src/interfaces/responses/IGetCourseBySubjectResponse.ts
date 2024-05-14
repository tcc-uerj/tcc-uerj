import ILessonLink from "@/interfaces/ILessonLink";
import IChallenge from "@/interfaces/IChallenge";
import ILesson from "@/interfaces/ILesson";

export interface IGetCourseBySubjectResponse {
    data: IGetCourseBySubjectDataResponse;
}

export interface IGetCourseBySubjectDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}