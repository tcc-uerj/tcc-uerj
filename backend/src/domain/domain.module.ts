import { Module } from '@nestjs/common';
import { UserServiceModule } from './user/user.module';
import { LessonServiceModule } from './lesson/lesson.module';
import { UserLessonLinkServiceModule } from './user-lesson-link/user-lesson-link.module';
import { UserAchievementServiceModule } from './user-achievement/user-achievement.module';
import { ChallengeServiceModule } from './challenge/challenge.module';
import { UserChallengeServiceModule } from './user-challenge/user-challenge.module';

@Module({
    imports: [
        UserServiceModule,
        LessonServiceModule,
        UserLessonLinkServiceModule,
        UserAchievementServiceModule,
        ChallengeServiceModule,
        UserChallengeServiceModule,
    ],
    exports: [
        UserServiceModule,
        LessonServiceModule,
        UserLessonLinkServiceModule,
        UserAchievementServiceModule,
        ChallengeServiceModule,
        UserChallengeServiceModule,
    ],
})
export class DomainModule {}
