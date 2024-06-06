import { CustomController, CustomRoute } from '@core';
import { HangmanService } from '@domain/hangman/hangman.service';
import { Inject } from '@nestjs/common';
import { HangmanResponse } from 'src/application/schemas/wire-out/Hangman';

@CustomController('Hangman Controller')
export class HangmanController {
    constructor(
        @Inject(HangmanService)
        private hangmanService: HangmanService,
    ) {}

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista todos os jogos de forca',
        response: [HangmanResponse],
        route: '/',
    })
    public async findAll() {
        return this.hangmanService.findAll();
    }
}
