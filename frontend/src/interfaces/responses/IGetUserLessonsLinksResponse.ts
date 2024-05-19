import ILessonLink from "@/interfaces/ILessonLink";

export interface IGetUserLessonsLinksResponse {
    data: IGetUserLessonLinksDataResponse[];
}

export interface IGetUserLessonLinksDataResponse {
    userId: number;
    lessonLink: ILessonLink;
    completedAt?: Date;
}