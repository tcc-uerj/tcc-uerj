import { BaseRepository } from '@core';
import { SubjectType } from '@model';
import { Lesson, Prisma } from '@prisma/client';

export class LessonRepository extends BaseRepository<Lesson> {
    private select: Prisma.LessonSelect = {
        challenge: true,
        content: true,
        id: true,
        description: true,
        subject: true,
        imageUrl: true,
        LessonLink: true,
    };

    public async findBySubject(subject: SubjectType) {
        return super.find<Prisma.LessonFindFirstArgs>({
            select: this.select,
            where: { subject },
        });
    }
}
