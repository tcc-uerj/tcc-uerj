import { ConflictException, Inject } from '@nestjs/common';
import { UserChallenge } from '@prisma/client';
import { UserChallengeRepository } from '@repositories/user-challenge/user-challenge.repository';

export class UserChallengeService {
    constructor(
        @Inject(UserChallengeRepository)
        private userChallengeRepository: UserChallengeRepository,
    ) {}

    public async findAll(userId: number) {
        return this.userChallengeRepository.listChallengeByUser(userId);
    }

    public async create(userId: number, challengeId: number) {
        const userChallenge = await this.userChallengeRepository.findChallengeByUserId(
            userId,
            challengeId,
        );

        if (userChallenge) {
            throw new ConflictException('Este desafio já está cadastrado para este usuário');
        }

        const newUserChallenge = {
            userId,
            challengeId,
            completedAt: new Date(),
        } as UserChallenge;
        return this.userChallengeRepository.create(newUserChallenge);
    }
}
