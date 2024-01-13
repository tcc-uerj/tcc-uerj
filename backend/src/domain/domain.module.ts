import { Module } from '@nestjs/common';
import { UserServiceModule } from './user/user.module';
import { LessonServiceModule } from './lesson/lesson.module';

@Module({
    imports: [UserServiceModule, LessonServiceModule],
    exports: [UserServiceModule, LessonServiceModule],
})
export class DomainModule {}
