import { AchievementType } from '@model';
import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserAchievement } from '@prisma/client';
import { AchievementRepository } from '@repositories/achievement/achievement.repository';
import { UserAchievementRepository } from '@repositories/user-achievement/user-achievement.repository';
import { UserRepository } from '@repositories/user/user.repository';
import { CreateUserPayload, LoginUserPayload, UpdateUserPayload } from '@wire-in';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(
        @Inject(UserRepository)
        private userRepository: UserRepository,

        @Inject(AchievementRepository)
        private achievementRepository: AchievementRepository,

        @Inject(UserAchievementRepository)
        private userAchievementRepository: UserAchievementRepository,
    ) {}

    public async create(body: CreateUserPayload) {
        const userExists = await this.userRepository.findByEmail(body.email);
        if (userExists) {
            throw new ConflictException('Este email já foi cadastrado.');
        }

        const password = await bcrypt.hash(body.password, 8);

        const newUser = { ...body, password } as unknown as User;

        return this.userRepository.create(newUser);
    }

    public async update(id: number, body: UpdateUserPayload) {
        const { password } = await this.userRepository.findById(id);

        this.updateGameAchievement(id, body);

        return this.userRepository.update(id, { id, password, ...body });
    }

    public async login(body: LoginUserPayload) {
        const user = await this.userRepository.findByEmail(body.email);

        if (!user) {
            throw new UnauthorizedException('Email ou senha inválidos.');
        }

        const isCorrectPassword = await bcrypt.compare(body.password, user.password);

        if (!isCorrectPassword) {
            throw new UnauthorizedException('Email ou senha inválidos.');
        }

        return user;
    }

    public async findById(id: number) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new UnauthorizedException('Este id não pertence a nenhum usuário');
        }

        return user;
    }

    public async updateGameAchievement(id: number, body: UpdateUserPayload) {
        const achievements = [
            AchievementType.GAMES_COMPLETED_100,
            AchievementType.GAMES_COMPLETED_50,
            AchievementType.GAMES_COMPLETED_10,
        ];

        for (const achievementType of achievements) {
            const achievement = await this.findAchievementByType(achievementType);
            const userAchievement = await this.findUserAchievement(id, achievement.id);

            if (!userAchievement && body.gamesCount >= this.getAchievementGoal(achievementType)) {
                await this.createUserAchievement(id, achievement.id);
            }
        }
    }

    private getAchievementGoal(achievementType: AchievementType) {
        switch (achievementType) {
            case AchievementType.GAMES_COMPLETED_10:
                return 10;
            case AchievementType.GAMES_COMPLETED_50:
                return 50;
            default:
                return 100;
        }
    }

    private async findAchievementByType(type: AchievementType) {
        return this.achievementRepository.findByType(type);
    }

    private async findUserAchievement(userId: number, achievementId: number) {
        return this.userAchievementRepository.findAchievementByUserId(userId, achievementId);
    }

    private async createUserAchievement(userId: number, achievementId: number) {
        const userAchievement = await this.userAchievementRepository.findAchievementByUserId(
            userId,
            achievementId,
        );

        if (userAchievement) {
            throw new ConflictException('Esta conquista já está cadastra para este usuário');
        }

        const newUserAchievement = { userId, achievementId } as UserAchievement;
        await this.userAchievementRepository.create(newUserAchievement);
    }

    public async getRanking() {
        return this.userRepository.getRanking();
    }
}
