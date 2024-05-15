import { BaseRepository } from '@core';
import { Prisma, UserLesson } from '@prisma/client';

export class UserLessonRepository extends BaseRepository<UserLesson> {
    protected get select(): { select: Prisma.UserLessonSelect } {
        const select: Prisma.UserLessonSelect = {
            id: true,
            userId: true,
            lessonId: true,
            challengeCompleted: true,
        };

        return { select };
    }

    public async listLessonsByUser(userId: number) {
        return super.find<Prisma.UserLessonFindFirstArgs>({
            ...this.select,
            where: { userId },
        });
    }

    public async findLessonsByUserId(userId: number, lessonId: number) {
        return super.findOne<Prisma.UserLessonFindFirstArgs>({
            where: { userId, lessonId },
        });
    }
}
