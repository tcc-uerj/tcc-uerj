import { CustomController, CustomRoute } from '@core';
import { UserService } from '@domain/user/user.service';
import { Body, Inject } from '@nestjs/common';
import { CreateUserPayload } from '@wire-in';
import { UserResponse } from '@wire-out';
import { AuthService } from '@core';

@CustomController('User Controller')
export class UserController {
    constructor(
        @Inject(UserService)
        private userService: UserService,

        @Inject(AuthService)
        private authService: AuthService,
    ) {}

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota cria um novo usuário',
        body: CreateUserPayload,
        response: UserResponse,
    })
    public async create(@Body() body: CreateUserPayload) {
        const user = await this.userService.create(body);
        return this.authService.generateToken(user);
    }
}
