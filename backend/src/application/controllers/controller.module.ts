import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { DomainModule } from '@domain/domain.module';

@Module({
    imports: [DomainModule],
    controllers: [UserController],
})
export class ControllerModule {}
