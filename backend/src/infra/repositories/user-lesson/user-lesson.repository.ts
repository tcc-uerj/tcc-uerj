import { BaseRepository } from '@core';
import { Prisma, UserLesson } from '@prisma/client';

export class UserLessonRepository extends BaseRepository<UserLesson> {
    public async findLessonsByUser(userId: number) {
        return super.findOne<Prisma.UserLessonFindFirstArgs>({
            where: { userId },
        });
    }
}
