import { ConflictException, Inject } from '@nestjs/common';
import { UserAchievement } from '@prisma/client';
import { UserAchievementRepository } from '@repositories/user-achievement/user-achievement.repository';

export class UserAchievementService {
    constructor(
        @Inject(UserAchievementRepository)
        private userAchievementRepository: UserAchievementRepository,
    ) {}

    public async findAll(userId: number) {
        return this.userAchievementRepository.listAchievementByUser(userId);
    }

    public async create(userId: number, achievementId: number) {
        const userAchievement = await this.userAchievementRepository.findAchievementByUserId(
            userId,
            achievementId,
        );

        if (userAchievement) {
            throw new ConflictException('Esta conquista já está cadastra para este usuário');
        }

        const newUserAchievement = { userId, achievementId } as UserAchievement;
        return this.userAchievementRepository.create(newUserAchievement);
    }

    public async findOne(userId: number, achievementId: number) {
        return this.userAchievementRepository.findAchievementByUserId(userId, achievementId);
    }
}
