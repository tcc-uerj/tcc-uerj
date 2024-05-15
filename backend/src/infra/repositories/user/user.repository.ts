import { BaseRepository } from '@core';
import { Prisma, User } from '@prisma/client';

export class UserRepository extends BaseRepository<User> {
    public async findByEmail(email: string) {
        return super.findOne<Prisma.UserFindFirstArgs>({
            where: { email },
        });
    }

    public async getRanking() {
        return super.find<Prisma.UserFindFirstArgs>({
            orderBy: { points: 'desc' },
            take: 10,
        });
    }
}
