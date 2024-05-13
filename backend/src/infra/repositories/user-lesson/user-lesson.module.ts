import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserLessonRepository } from './user-lesson.repository';

@Module({
    providers: [UserLessonRepository, PrismaClient],
    exports: [UserLessonRepository],
})
export class UserLessonRepositoryModule {}
