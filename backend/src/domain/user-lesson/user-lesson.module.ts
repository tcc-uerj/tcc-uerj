import { Module } from '@nestjs/common';
import { RepositoryModule } from '@repositories/repository.module';
import { UserLessonService } from './user-lesson.service';

@Module({
    imports: [RepositoryModule],
    providers: [UserLessonService],
    exports: [UserLessonService],
})
export class UserLessonServiceModule {}
