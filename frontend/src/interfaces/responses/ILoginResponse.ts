import IUser from "@/interfaces/IUser";

export interface ILoginResponse extends ILoginSuccessResponse, ILoginFailedResponse {}

export interface ILoginSuccessResponse {
    user: IUser; 
    token: string;
}

export interface ILoginFailedResponse {
    message: string;
    error: string;
    statusCode: number;
}

