import { SubjectType } from '@model';
import { Inject, Injectable } from '@nestjs/common';
import { LessonRepository } from '@repositories/lesson/lesson.repository';

@Injectable()
export class LessonService {
    constructor(
        @Inject(LessonRepository)
        private lessonRepository: LessonRepository,
    ) {}

    public async findAll() {
        return this.lessonRepository.findAll();
    }

    public async findBySubject(subject: SubjectType) {
        return this.lessonRepository.findBySubject(subject);
    }
}
