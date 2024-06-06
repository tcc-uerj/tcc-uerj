import { ApiProperty } from '@nestjs/swagger';
import { SubjectType } from '../model/Enum';

export class HangmanResponse {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: SubjectType.CLEAN_CODE })
    subject: SubjectType;

    @ApiProperty({ example: 20 })
    points: number;

    @ApiProperty({ example: 'Resposta' })
    answer: string;

    @ApiProperty({ example: 'Dica para acertar a resposta' })
    hint: string;
}
