import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserLessonLinkRepository } from './user-lesson-link.repository';

@Module({
    providers: [UserLessonLinkRepository, PrismaClient],
    exports: [UserLessonLinkRepository],
})
export class UserLessonLinkRepositoryModule {}
