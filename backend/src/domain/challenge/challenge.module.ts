import { Module } from '@nestjs/common';
import { RepositoryModule } from '@repositories/repository.module';
import { ChallengeService } from './challenge.service';

@Module({
    imports: [RepositoryModule],
    providers: [ChallengeService],
    exports: [ChallengeService],
})
export class ChallengeServiceModule {}
