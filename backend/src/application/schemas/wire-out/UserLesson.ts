import { ApiProperty } from '@nestjs/swagger';

export class UserLessonReponse {
    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: 2 })
    lessonId: number;

    @ApiProperty({ example: new Date() })
    completedAt: Date;
}
