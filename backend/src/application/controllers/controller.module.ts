import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { DomainModule } from '@domain/domain.module';
import { LessonController } from './lesson/lesson.controller';
import { AuthModule } from '@core';
import { ChallengeController } from './challenge/challenge.controller';
import { HangmanController } from './hangman/hangman.controller';

@Module({
    imports: [DomainModule, AuthModule],
    controllers: [UserController, LessonController, ChallengeController, HangmanController],
})
export class ControllerModule {}
