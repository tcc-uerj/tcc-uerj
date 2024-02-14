import { Level, SubjectType } from '@model';
import { Inject, Injectable } from '@nestjs/common';
import { ChallengeRepository } from '@repositories/challenge/challenge.repository';

@Injectable()
export class ChallengeService {
    constructor(
        @Inject(ChallengeRepository)
        private challengeRepository: ChallengeRepository,
    ) {}

    public async findAll() {
        return this.challengeRepository.findAll();
    }

    public async findBySubject(subject: SubjectType, level: Level) {
        return this.challengeRepository.findBySubjectAndLevel(subject, level);
    }
}
