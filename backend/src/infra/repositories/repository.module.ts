import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.module';
import { LessonRepositoryModule } from './lesson/lesson.module';
import { UserLessonLinkRepositoryModule } from './user-lesson-link/user-lesson-link.module';
import { AchievementRepositoryModule } from './achievement/achievement.module';
import { UserAchievementRepositoryModule } from './user-achievement/user-achievement.module';
import { ChallengeRepositoryModule } from './challenge/challenge.module';
import { UserChallengeRepositoryModule } from './user-challenge/user-challenge.module';

@Module({
    imports: [
        UserRepositoryModule,
        LessonRepositoryModule,
        UserLessonLinkRepositoryModule,
        AchievementRepositoryModule,
        UserAchievementRepositoryModule,
        ChallengeRepositoryModule,
        UserChallengeRepositoryModule,
    ],
    exports: [
        UserRepositoryModule,
        LessonRepositoryModule,
        UserLessonLinkRepositoryModule,
        AchievementRepositoryModule,
        UserAchievementRepositoryModule,
        ChallengeRepositoryModule,
        UserChallengeRepositoryModule,
    ],
})
export class RepositoryModule {}
