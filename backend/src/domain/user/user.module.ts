import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { RepositoryModule } from '@repositories/repository.module';

@Module({
    imports: [RepositoryModule],
    providers: [UserService],
    exports: [UserService],
})
export class UserServiceModule {}
