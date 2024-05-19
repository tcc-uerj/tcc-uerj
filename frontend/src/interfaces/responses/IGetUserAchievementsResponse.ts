import { IAchievement } from "@/interfaces/IAchievement";

export interface IGetUserAchievementsResponse {
    data: IGetUserAchievementsDataResponse[];
}

export interface IGetUserAchievementsDataResponse {
    achievement: IAchievement;
}