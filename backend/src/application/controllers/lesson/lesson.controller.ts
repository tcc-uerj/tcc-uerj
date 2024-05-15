import { CustomController, CustomRoute } from '@core';
import { LessonService } from '@domain/lesson/lesson.service';
import { SubjectType } from '@model';
import { Inject, Param, ParseEnumPipe } from '@nestjs/common';
import { LessonResponse } from '@wire-out';

@CustomController('Lessons Controller')
export class LessonController {
    constructor(
        @Inject(LessonService)
        private lessonService: LessonService,
    ) {}

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista todas as aulas',
        response: [LessonResponse],
        route: '/',
    })
    public async findAll() {
        return this.lessonService.findAll();
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota busca as informações de uma aula',
        response: LessonResponse,
        route: '/:lessonId',
    })
    public async findById(@Param('lessonId') lessonId: number) {
        return this.lessonService.findById(lessonId);
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista todas as aulas com o respectivo SubjectType',
        response: LessonResponse,
        route: '/:subject/subject',
    })
    public async findBySubject(
        @Param('subject', new ParseEnumPipe(SubjectType)) subject: SubjectType,
    ) {
        return this.lessonService.findBySubject(subject);
    }
}
