import { Module } from '@nestjs/common';
import { HangmanQuestionsRepository } from './hangman.repositoy';
import { PrismaClient } from '@prisma/client';

@Module({
    providers: [HangmanQuestionsRepository, PrismaClient],
    exports: [HangmanQuestionsRepository],
})
export class HangmanRepositoryModule {}
