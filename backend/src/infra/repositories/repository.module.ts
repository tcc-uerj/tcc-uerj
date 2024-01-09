import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.module';
import { LessonRepositoryModule } from './lesson/lesson.module';

@Module({
    imports: [UserRepositoryModule, LessonRepositoryModule],
    exports: [UserRepositoryModule, LessonRepositoryModule],
})
export class RepositoryModule {}
