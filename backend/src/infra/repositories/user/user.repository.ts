import { BaseRepository } from '@core';
import { Prisma, User } from '@prisma/client';

export class UserRepository extends BaseRepository<User> {
    protected get select(): { select: Prisma.UserSelect } {
        const select: Prisma.UserSelect = {
            id: true,
            email: true,
            name: true,
            points: true,
            level: true,
            gamesCount: true,
        };

        return { select };
    }

    public async findByEmail(email: string) {
        return super.findOne<Prisma.UserFindFirstArgs>({
            ...this.select,
            where: { email },
        });
    }

    public async getRanking() {
        return super.find<Prisma.UserFindFirstArgs>({
            select: { id: true, name: true, points: true },
            orderBy: { points: 'desc' },
            take: 10,
        });
    }
}
