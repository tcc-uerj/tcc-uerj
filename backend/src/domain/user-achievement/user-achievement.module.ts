import { Module } from '@nestjs/common';
import { RepositoryModule } from '@repositories/repository.module';
import { UserAchievementService } from './user-achievement.service';

@Module({
    imports: [RepositoryModule],
    providers: [UserAchievementService],
    exports: [UserAchievementService],
})
export class UserAchievementServiceModule {}
