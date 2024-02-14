import { IsText } from '@middlewares/IsText.decorator';
import { IsPassword } from '@middlewares/IsPassword.decorator';
import { IsValidEmail } from '@middlewares/IsValidEmail.decorator';
import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateUserPayload {
    @IsValidEmail({ example: 'johndoe@nobody.com' })
    email: string;

    @IsPassword({ example: 'strongPassword1' })
    password: string;

    @IsText({ example: 'John Doe' })
    name: string;
}

export class LoginUserPayload {
    @IsValidEmail({ example: faker.internet.email() })
    email: string;

    @ApiProperty({ example: faker.internet.password({ length: 5, prefix: '5' }) })
    password: string;
}

export class UserLessonLinkPayload {
    @IsNumber()
    userId: number;

    @IsNumber()
    lessonLinkId: number;
}
