import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.module';

@Module({
    imports: [UserRepositoryModule],
    exports: [UserRepositoryModule],
})
export class RepositoryModule {}
