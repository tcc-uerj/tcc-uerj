import { BaseRepository } from '@core';
import { SubjectType } from '@model';
import { Lesson, Prisma } from '@prisma/client';

export class LessonRepository extends BaseRepository<Lesson> {
    private select: Prisma.LessonSelect = {
        id: true,
        content: true,
        lessonContentLinks: true,
        subject: true,
    };

    public async findById(id: number) {
        return super.findOne<Prisma.LessonFindFirstArgs>({
            select: this.select,
            where: { id },
        });
    }

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
