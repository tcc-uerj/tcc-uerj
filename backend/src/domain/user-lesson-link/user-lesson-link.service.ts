import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UserLessonLink } from '@prisma/client';

import { UserLessonLinkRepository } from '@repositories/user-lesson-link/user-lesson-link.repository';

@Injectable()
export class UserLessonLinkService {
    constructor(
        @Inject(UserLessonLinkRepository)
        private userLessonLinkRepository: UserLessonLinkRepository,
    ) {}

    public async findAll(userId: number) {
        return this.userLessonLinkRepository.listLessonsLinksByUser(userId);
    }

    public async create(userId: number, lessonLinkId: number) {
        const userLessonLink = await this.userLessonLinkRepository.findLessonsLinksByUserId(
            userId,
            lessonLinkId,
        );

        if (userLessonLink) {
            throw new ConflictException('Esta aula já está cadastrada para este usuário');
        }

        const newUserLessonLink = {
            userId,
            lessonLinkId,
            completedAt: new Date(),
        } as UserLessonLink;
        return this.userLessonLinkRepository.create(newUserLessonLink);
    }
}
