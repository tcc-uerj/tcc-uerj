import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ChallengeRepository } from './challenge.repository';

@Module({
    providers: [ChallengeRepository, PrismaClient],
    exports: [ChallengeRepository],
})
export class ChallengeRepositoryModule {}
