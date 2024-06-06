import { Module } from '@nestjs/common';
import { RepositoryModule } from '@repositories/repository.module';
import { HangmanService } from './hangman.service';

@Module({
    imports: [RepositoryModule],
    providers: [HangmanService],
    exports: [HangmanService],
})
export class HangmanServiceModule {}
