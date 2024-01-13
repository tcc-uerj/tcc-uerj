import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { DomainModule } from '@domain/domain.module';
import { LessonController } from './lesson/lesson.controller';
import { AuthModule } from '@core';

@Module({
    imports: [DomainModule, AuthModule],
    controllers: [UserController, LessonController],
})
export class ControllerModule {}
