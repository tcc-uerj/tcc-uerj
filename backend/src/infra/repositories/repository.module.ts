import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.module';
import { LessonRepositoryModule } from './lesson/lesson.module';
import { UserLessonLinkRepositoryModule } from './user-lesson-link/user-lesson-link.module';
import { AchievementRepositoryModule } from './achievement/achievement.module';
import { UserAchievementRepositoryModule } from './user-achievement/user-achievement.module';
import { ChallengeRepositoryModule } from './challenge/challenge.module';
import { UserChallengeRepositoryModule } from './user-challenge/user-challenge.module';
import { UserLessonRepositoryModule } from './user-lesson/user-lesson.module';
import { HangmanRepositoryModule } from './hangman/hangman.module';

@Module({
    imports: [
        UserRepositoryModule,
        LessonRepositoryModule,
        UserLessonLinkRepositoryModule,
        AchievementRepositoryModule,
        UserAchievementRepositoryModule,
        ChallengeRepositoryModule,
        UserChallengeRepositoryModule,
        UserLessonRepositoryModule,
        HangmanRepositoryModule,
    ],
    exports: [
        UserRepositoryModule,
        LessonRepositoryModule,
        UserLessonLinkRepositoryModule,
        AchievementRepositoryModule,
        UserAchievementRepositoryModule,
        ChallengeRepositoryModule,
        UserChallengeRepositoryModule,
        UserLessonRepositoryModule,
        HangmanRepositoryModule,
    ],
})
export class RepositoryModule {}
