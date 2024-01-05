import { BaseRepository } from '@infra/base';
import { User } from '@prisma/client';

export class UserRepository extends BaseRepository<User> {}
