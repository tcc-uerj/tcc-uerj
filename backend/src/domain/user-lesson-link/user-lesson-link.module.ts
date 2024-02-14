import { Module } from '@nestjs/common';
import { RepositoryModule } from '@repositories/repository.module';
import { UserLessonLinkService } from './user-lesson-link.service';

@Module({
    imports: [RepositoryModule],
    providers: [UserLessonLinkService],
    exports: [UserLessonLinkService],
})
export class UserLessonLinkServiceModule {}
