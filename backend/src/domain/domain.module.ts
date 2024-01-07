import { Module } from '@nestjs/common';
import { UserServiceModule } from './user/user.module';

@Module({
    imports: [UserServiceModule],
    exports: [UserServiceModule],
})
export class DomainModule {}
