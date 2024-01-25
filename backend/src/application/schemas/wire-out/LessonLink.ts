import { LessonType } from '@model';
import { ApiProperty } from '@nestjs/swagger';

export class LessonLinkResponse {
    @ApiProperty({ example: 'https://www.youtube.com/' })
    link: string;

    @ApiProperty({ example: 1 })
    lessonId: string;

    @ApiProperty({ example: 1 })
    order: number;

    @ApiProperty({ example: LessonType.VIDEO })
    type: LessonType;
}
