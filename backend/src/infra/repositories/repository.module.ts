import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.module';
import { LessonRepositoryModule } from './lesson/lesson.module';
import { UserLessonRepositoryModule } from './user-lesson/user-lesson.module';

@Module({
    imports: [UserRepositoryModule, LessonRepositoryModule, UserLessonRepositoryModule],
    exports: [UserRepositoryModule, LessonRepositoryModule, UserLessonRepositoryModule],
})
export class RepositoryModule {}
