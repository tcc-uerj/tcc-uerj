import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PrismaClient } from '@prisma/client';

@Module({
    providers: [UserRepository, PrismaClient],
    exports: [UserRepository],
})
export class UserRepositoryModule {}
