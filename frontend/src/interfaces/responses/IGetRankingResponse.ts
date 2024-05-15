export interface IGetRankingResponse {
    data: IRankingUser[];
}

export interface IRankingUser {
    id: number;
    email: string;
    name: string;
    points: number;
    level: number;
    gamesCount: number;
}