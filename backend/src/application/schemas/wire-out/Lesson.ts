import { ApiProperty } from '@nestjs/swagger';
import { SubjectType } from '../model/Enum';

// TODO: ADICIONAR O CAMPO DO CHALLENGE_ID E LESSON_LINK
export class LessonResponse {
    @ApiProperty({ example: '' })
    content: string;

    @ApiProperty({ example: SubjectType.CLEAN_CODE })
    subject: SubjectType;
}
