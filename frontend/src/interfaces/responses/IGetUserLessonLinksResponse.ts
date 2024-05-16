import ILessonLink from "@/interfaces/ILessonLink";

export interface IGetUserLessonLinksResponse {
    data: IGetUserLessonLinksDataResponse[];
}

export interface IGetUserLessonLinksDataResponse {
    userId: number;
    lessonLink: ILessonLink;
    completedAt?: Date;
}