import { Inject, Injectable } from '@nestjs/common';

import { UserLessonRepository } from '@repositories/user-lesson/user-lesson.repository';

@Injectable()
export class UserLessonService {
    constructor(
        @Inject(UserLessonRepository)
        private userLessonRepository: UserLessonRepository,
    ) {}

    public async findAll(userId: number) {
        return this.userLessonRepository.findLessonsByUser(userId);
    }
}
