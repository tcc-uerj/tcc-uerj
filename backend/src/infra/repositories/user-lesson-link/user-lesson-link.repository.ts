import { BaseRepository } from '@core';
import { Prisma, UserLessonLink } from '@prisma/client';

export class UserLessonLinkRepository extends BaseRepository<UserLessonLink> {
    protected get select(): { select: Prisma.UserLessonLinkSelect } {
        const select: Prisma.UserLessonLinkSelect = {
            userId: false,
            lessonLink: true,
            completedAt: true,
        };

        return { select };
    }

    public async listLessonsLinksByUser(userId: number) {
        return super.find<Prisma.UserLessonLinkFindFirstArgs>({
            ...this.select,
            where: { userId },
        });
    }

    public async findLessonsLinksByUserId(userId: number, lessonLinkId: number) {
        return super.findOne<Prisma.UserLessonLinkFindFirstArgs>({
            where: { userId, lessonLinkId },
        });
    }
}
