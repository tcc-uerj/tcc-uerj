import { ControllerModule } from '@controllers/controller.module';
import { UserController } from '@controllers/user/user.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [ControllerModule],
})
export class AppModule {}
