import { ApiProperty } from '@nestjs/swagger';
import { Level, QuestionType, SubjectType } from '../model/Enum';

export class ChallengeGapGame {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 2 })
    challengeQuestionId: number;

    // TODO: Verificar como vai ficar o tipo deste campo (Tipo BLOB no banco)
    @ApiProperty({ example: 'código da alternativa.' })
    quiz: string;

    @ApiProperty({ example: true })
    isCorrectAnswer: boolean;
}

export class ChallengeQuiz {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 2 })
    challengeQuestionId: number;

    @ApiProperty({ example: 'frase que será mostrada no desafio' })
    content: string;
}

export class ChallengeQuestionResponse {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 2 })
    challengeId: number;

    @ApiProperty({ example: 'Title' })
    statementTitle: string;

    // TODO: Verificar como vai ficar o tipo deste campo (Tipo BLOB no banco)
    // Este campo ficará vazio quando o tipo for GAP_GAME
    @ApiProperty({ example: 'código do enunciado.', nullable: true })
    statementCode: string;

    @ApiProperty({ example: QuestionType.QUIZ })
    type: QuestionType;

    @ApiProperty({ type: [ChallengeQuiz] })
    challengeQuiz: ChallengeQuiz[];

    @ApiProperty({ type: [ChallengeGapGame] })
    challengeGapGame: ChallengeGapGame[];
}

export class ChallengeResponse {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: Level.LEVEL_1 })
    level: Level;

    @ApiProperty({ example: SubjectType.CLEAN_CODE })
    subject: SubjectType;

    @ApiProperty({ example: 20 })
    points: number;

    @ApiProperty({ type: [ChallengeQuestionResponse] })
    challengeQuestion: ChallengeQuestionResponse[];
}
