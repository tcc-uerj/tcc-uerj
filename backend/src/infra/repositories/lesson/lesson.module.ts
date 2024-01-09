import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LessonRepository } from './lesson.repository';

@Module({
    providers: [LessonRepository, PrismaClient],
    exports: [LessonRepository],
})
export class LessonRepositoryModule {}
