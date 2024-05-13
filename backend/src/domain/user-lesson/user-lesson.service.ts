import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UserLesson } from '@prisma/client';
import { UserLessonRepository } from '@repositories/user-lesson/user-lesson.repository';

@Injectable()
export class UserLessonService {
    constructor(
        @Inject(UserLessonRepository)
        private userLessonRepository: UserLessonRepository,
    ) {}

    public async findAll(userId: number) {
        return this.userLessonRepository.listLessonsByUser(userId);
    }

    public async create(userId: number, lessonId: number) {
        const userLesson = await this.userLessonRepository.findLessonsByUserId(userId, lessonId);

        if (userLesson) {
            throw new ConflictException('Este curso já está cadastrado para este usuário');
        }

        const newUserLesson = {
            userId,
            lessonId,
            challengeCompleted: false,
        } as UserLesson;

        return this.userLessonRepository.create(newUserLesson);
    }
}
