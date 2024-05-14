import { BaseRepository } from '@core';
import { SubjectType } from '@model';
import { Lesson, Prisma } from '@prisma/client';

export class LessonRepository extends BaseRepository<Lesson> {
    protected get select(): { select: Prisma.LessonSelect } {
        const select: Prisma.LessonSelect = {
            challenge: {
                select: {
                    id: true,
                    level: true,
                    points: true,
                    subject: true,
                    challengeQuestions: {
                        select: {
                            id: true,
                            challengeId: true,
                            statementCode: true,
                            statementTitle: true,
                            type: true,
                            questionOptions: true,
                        },
                    },
                },
            },
            content: true,
            id: true,
            description: true,
            subject: true,
            imageUrl: true,
            lessonLinks: true,
        };

        return { select };
    }

    public async findBySubject(subject: SubjectType) {
        return super.findOne<Prisma.LessonFindFirstArgs>({
            ...this.select,
            where: { subject },
        });
    }
}
