import { BaseRepository } from '@base';
import { SubjectType } from '@model';
import { Lesson, Prisma } from '@prisma/client';

export class LessonRepository extends BaseRepository<Lesson> {
    public async findBySubject(subject: SubjectType) {
        return super.find<Prisma.LessonFindFirstArgs>({
            where: { subject },
        });
    }
}
