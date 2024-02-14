import { BaseRepository } from '@core';
import { Prisma, UserLessonLink } from '@prisma/client';

export class UserLessonLinkRepository extends BaseRepository<UserLessonLink> {
    private select: Prisma.UserLessonLinkSelect = {
        userId: false,
        lessonLink: true,
        completedAt: true,
    };

    public async listLessonsLinksByUser(userId: number) {
        return super.find<Prisma.UserLessonLinkFindFirstArgs>({
            select: this.select,
            where: { userId },
        });
    }

    public async findLessonsLinksByUserId(userId: number, lessonLinkId: number) {
        return super.findOne<Prisma.UserLessonLinkFindFirstArgs>({
            where: { userId, lessonLinkId },
        });
    }
}
