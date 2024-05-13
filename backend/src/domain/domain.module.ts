import { Module } from '@nestjs/common';
import { UserServiceModule } from './user/user.module';
import { LessonServiceModule } from './lesson/lesson.module';
import { UserLessonLinkServiceModule } from './user-lesson-link/user-lesson-link.module';
import { UserAchievementServiceModule } from './user-achievement/user-achievement.module';
import { ChallengeServiceModule } from './challenge/challenge.module';
import { UserChallengeServiceModule } from './user-challenge/user-challenge.module';
import { UserLessonServiceModule } from './user-lesson/user-lesson.module';

@Module({
    imports: [
        UserServiceModule,
        LessonServiceModule,
        UserLessonLinkServiceModule,
        UserAchievementServiceModule,
        ChallengeServiceModule,
        UserChallengeServiceModule,
        UserLessonServiceModule,
    ],
    exports: [
        UserServiceModule,
        LessonServiceModule,
        UserLessonLinkServiceModule,
        UserAchievementServiceModule,
        ChallengeServiceModule,
        UserChallengeServiceModule,
        UserLessonServiceModule,
    ],
})
export class DomainModule {}
