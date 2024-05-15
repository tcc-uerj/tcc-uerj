import { SubjectType } from '@model';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
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

    public async findById(id: number) {
        const lesson = await this.lessonRepository.findById(id);

        if (!lesson) {
            throw new UnauthorizedException('Este id não pertence a nenhuma aula.');
        }

        return lesson;
    }

    public async findBySubject(subject: SubjectType) {
        return this.lessonRepository.findBySubject(subject);
    }
}
