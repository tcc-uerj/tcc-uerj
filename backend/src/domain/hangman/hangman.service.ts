import { Inject, Injectable } from '@nestjs/common';
import { HangmanQuestionsRepository } from '@repositories/hangman/hangman.repositoy';

@Injectable()
export class HangmanService {
    constructor(
        @Inject(HangmanQuestionsRepository)
        private hangmanQuestionsRepository: HangmanQuestionsRepository,
    ) {}

    public async findAll() {
        return this.hangmanQuestionsRepository.findAll();
    }
}
