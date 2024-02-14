import { CustomController, CustomRoute } from '@core';
import { ChallengeService } from '@domain/challenge/challenge.service';
import { Level, SubjectType } from '@model';
import { Inject, Param, ParseEnumPipe } from '@nestjs/common';
import { ChallengeResponse } from '@wire-out';

@CustomController('Challenges Controller')
export class ChallengeController {
    constructor(
        @Inject(ChallengeService)
        private challengeService: ChallengeService,
    ) {}

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista todos os desafios',
        response: [ChallengeResponse],
        route: '/',
    })
    public async findAll() {
        return this.challengeService.findAll();
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista todos os desafios com o respectivo SubjectType e Level',
        response: [ChallengeResponse],
        route: '/:subject/subject/:level/level',
    })
    public async findBySubject(
        @Param('subject', new ParseEnumPipe(SubjectType)) subject: SubjectType,
        @Param('level', new ParseEnumPipe(Level)) level: Level,
    ) {
        return this.challengeService.findBySubject(subject, level);
    }
}
