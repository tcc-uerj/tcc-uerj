import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserChallengeRepository } from './user-challenge.repository';

@Module({
    providers: [UserChallengeRepository, PrismaClient],
    exports: [UserChallengeRepository],
})
export class UserChallengeRepositoryModule {}
