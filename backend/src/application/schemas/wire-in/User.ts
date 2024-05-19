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

export class UpdateUserPayload {
    @IsValidEmail({ example: faker.internet.email() })
    email: string;

    @IsText({ example: 'John Doe' })
    name: string;

    @IsNumber()
    @ApiProperty({ example: 1 })
    points: number;

    @IsNumber()
    @ApiProperty({ example: 1 })
    level: number;

    @IsNumber()
    @ApiProperty({ example: 10 })
    gamesCount: number;
}

export class UserLessonPayload {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 2 })
    userId: number;

    @ApiProperty({ example: 3 })
    lessonId: number;

    @ApiProperty({ example: false })
    challengeCompleted: boolean;
}
