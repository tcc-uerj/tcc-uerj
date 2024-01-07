import { IsEmail } from 'class-validator';

export class LoginUserPayload {
    @IsEmail()
    email: string;

    password: string;
}
