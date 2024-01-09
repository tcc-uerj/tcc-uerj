import { ControllerModule } from '@controllers/controller.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [ControllerModule],
})
export class AppModule {}
