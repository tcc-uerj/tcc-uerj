import { IUserLesson } from "@/interfaces/IUserLesson";

export interface IGetAllUserLessonsResponse {
    data: IGetAllUserLessonsDataResponse[];
}

export interface IGetAllUserLessonsDataResponse extends IUserLesson {}