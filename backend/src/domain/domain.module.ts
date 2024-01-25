import { Module } from '@nestjs/common';
import { UserServiceModule } from './user/user.module';
import { LessonServiceModule } from './lesson/lesson.module';
import { UserLessonServiceModule } from './user-lesson/user-lesson.module';

@Module({
    imports: [UserServiceModule, LessonServiceModule, UserLessonServiceModule],
    exports: [UserServiceModule, LessonServiceModule, UserLessonServiceModule],
})
export class DomainModule {}
