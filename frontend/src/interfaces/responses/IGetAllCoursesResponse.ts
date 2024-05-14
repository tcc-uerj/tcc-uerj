import IChallenge from "@/interfaces//IChallenge";
import ILesson from "@/interfaces/ILesson";
import ILessonLink from "@/interfaces/ILessonLink";

export interface IGetAllCoursesResponse {
    data: IGetAllCoursesDataResponse[];
}

export interface IGetAllCoursesDataResponse extends ILesson {
    lessonLinks: ILessonLink[];
    challenge: IChallenge;
}