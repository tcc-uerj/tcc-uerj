import { CustomController } from '@core';
import { LessonService } from '@domain/lesson/lesson.service';
import { SubjectType } from '@model';
import { Get, Inject, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { LessonResponse } from '@wire-out';

@CustomController('Lesson Controller')
export class LessonController {
    constructor(
        @Inject(LessonService)
        private lessonService: LessonService,
    ) {}

    @Get('/')
    @ApiOkResponse({ type: LessonResponse, isArray: true })
    @ApiOperation({ summary: 'Esta rota lista todas as aulas' })
    public async findAll() {
        return this.lessonService.findAll();
    }

    @Get('/:lessonId')
    @ApiOkResponse({ type: LessonResponse })
    @ApiOperation({ summary: 'Esta rota retorna a aula com id passado' })
    public async findById(@Param('lessonId') lessonId: number) {
        return this.lessonService.findById(lessonId);
    }

    @Get('/:subject')
    @ApiOkResponse({ type: LessonResponse })
    @ApiOperation({ summary: 'Esta rota lista todas as aulas com o respectivo SubjectType' })
    public async findBySubject(@Param('subject') subject: SubjectType) {
        return this.lessonService.findBySubject(subject);
    }
}
