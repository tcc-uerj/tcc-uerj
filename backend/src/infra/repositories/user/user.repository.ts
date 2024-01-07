import { BaseRepository } from '@base';
import { Prisma, User } from '@prisma/client';

export class UserRepository extends BaseRepository<User> {
    public async findByEmail(email: string) {
        return super.findOne<Prisma.UserFindFirstArgs>({
            where: { email },
        });
    }
}
