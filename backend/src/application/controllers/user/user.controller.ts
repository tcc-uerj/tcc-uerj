import { CustomController, CustomRoute } from '@core';
import { UserService } from '@domain/user/user.service';
import { Body, HttpStatus, Inject } from '@nestjs/common';
import { CreateUserPayload, LoginUserPayload } from '@wire-in';
import { TokenResponse, UserLessonReponse } from '@wire-out';
import { AuthService } from '@core';
import { UserLessonService } from '@domain/user-lesson/user-lesson.service';
import { UserId } from '@middlewares/UserId.decorator';

@CustomController('User Controller')
export class UserController {
    constructor(
        @Inject(UserService)
        private userService: UserService,

        @Inject(UserLessonService)
        private userLessonService: UserLessonService,

        @Inject(AuthService)
        private authService: AuthService,
    ) {}

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota cria um novo usuário',
        body: CreateUserPayload,
        response: TokenResponse,
    })
    public async create(@Body() body: CreateUserPayload) {
        const user = await this.userService.create(body);
        return this.authService.generateToken(user);
    }

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota faz o login de um usuário',
        body: LoginUserPayload,
        response: TokenResponse,
        route: 'login',
        code: HttpStatus.OK,
    })
    public async login(@Body() body: LoginUserPayload) {
        const user = await this.userService.login(body);
        return this.authService.generateToken(user);
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista as aulas que o usuário já fez',
        response: UserLessonReponse,
    })
    public async findLessonsById(@UserId() id: number) {
        return this.userLessonService.findAll(id);
    }
}
