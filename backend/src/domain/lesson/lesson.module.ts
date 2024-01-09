import { Module } from '@nestjs/common';
import { RepositoryModule } from '@repositories/repository.module';
import { LessonService } from './lesson.service';

@Module({
    imports: [RepositoryModule],
    providers: [LessonService],
    exports: [LessonService],
})
export class LessonServiceModule {}
