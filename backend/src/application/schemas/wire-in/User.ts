import { IsText } from '@middlewares/IsName.decorator';
import { IsPassword } from '@middlewares/IsPassword.decorator';
import { IsValidEmail } from '@middlewares/IsValidEmail.decorator';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from 'class-validator';

export class CreateUserPayload {
    @IsValidEmail({ example: 'johndoe@nobody.com' })
    email: string;

    @IsPassword({ example: 'strongPassword1' })
    password: string;

    @IsText({ example: 'John Doe' })
    name: string;
}
