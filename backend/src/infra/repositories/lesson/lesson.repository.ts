import { BaseRepository } from '@core';
import { SubjectType } from '@model';
import { Lesson, Prisma } from '@prisma/client';

export class LessonRepository extends BaseRepository<Lesson> {
    private select: Prisma.LessonSelect = {
        id: true,
        content: true,
        lessonLinks: true,
        subject: true,
    };

    public async findBySubject(subject: SubjectType) {
        return super.find<Prisma.LessonFindFirstArgs>({
            select: this.select,
            where: { subject },
        });
    }

    public async findAll() {
        return super.find<Prisma.LessonFindFirstArgs>({
            select: this.select,
        });
    }
}
