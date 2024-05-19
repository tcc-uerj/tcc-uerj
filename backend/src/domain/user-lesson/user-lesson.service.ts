import { AchievementType, LessonType, SubjectType } from '@model';
import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAchievement, UserLesson } from '@prisma/client';
import { AchievementRepository } from '@repositories/achievement/achievement.repository';
import { LessonRepository } from '@repositories/lesson/lesson.repository';
import { UserAchievementRepository } from '@repositories/user-achievement/user-achievement.repository';
import { UserLessonRepository } from '@repositories/user-lesson/user-lesson.repository';
import { UserLessonPayload } from '@wire-in';

@Injectable()
export class UserLessonService {
    constructor(
        @Inject(UserLessonRepository)
        private userLessonRepository: UserLessonRepository,

        @Inject(AchievementRepository)
        private achievementRepository: AchievementRepository,

        @Inject(LessonRepository)
        private lessonRepository: LessonRepository,

        @Inject(UserAchievementRepository)
        private userAchievementRepository: UserAchievementRepository,
    ) {}

    public async findAll(userId: number) {
        return this.userLessonRepository.listLessonsByUser(userId);
    }

    public async create(userId: number, lessonId: number) {
        const userLesson = await this.userLessonRepository.findLessonsByUserId(userId, lessonId);

        if (userLesson) {
            throw new ConflictException('Este curso já está cadastrado para este usuário');
        }

        const newUserLesson = {
            userId,
            lessonId,
            challengeCompleted: false,
        } as UserLesson;

        return this.userLessonRepository.create(newUserLesson);
    }

    public async update(id: number, body: UserLessonPayload) {
        const userLesson = await this.findById(id);

        if (body.challengeCompleted) {
            await this.createUserAchievement(userLesson);
        }

        return this.userLessonRepository.update(id, { ...userLesson, ...body });
    }

    private async createUserAchievement(userLesson: UserLesson) {
        const lesson = await this.lessonRepository.findById(userLesson.lessonId);
        const lessonAchievementType =
            lesson.subject === SubjectType.CLEAN_CODE
                ? AchievementType.LESSON_CLEAN_CODE
                : AchievementType.LESSON_DESIGN_PATTERN;

        const achievement = await this.achievementRepository.findByType(lessonAchievementType);
        const userAchievement = await this.userAchievementRepository.findAchievementByUserId(
            userLesson.userId,
            achievement.id,
        );

        if (!userAchievement) {
            const newUserAchievement = {
                userId: userLesson.userId,
                achievementId: achievement.id,
            } as UserAchievement;

            await this.userAchievementRepository.create(newUserAchievement);
        }
    }

    public async findById(id: number) {
        const userLesson = this.userLessonRepository.findById(id);

        if (!userLesson) {
            throw new UnauthorizedException(
                'Este id não pertence a nenhum vinculo de usuário e curso',
            );
        }

        return userLesson;
    }
}
