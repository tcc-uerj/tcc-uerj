import { Module } from '@nestjs/common';
import { RepositoryModule } from '@repositories/repository.module';
import { UserChallengeService } from './user-challenge.service';

@Module({
    imports: [RepositoryModule],
    providers: [UserChallengeService],
    exports: [UserChallengeService],
})
export class UserChallengeServiceModule {}
