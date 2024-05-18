import { CustomController, CustomRoute } from '@core';
import { UserService } from '@domain/user/user.service';
import { Body, HttpStatus, Inject, Param } from '@nestjs/common';
import {
    CreateUserPayload,
    LoginUserPayload,
    UpdateUserPayload,
    UserLessonPayload,
} from '@wire-in';
import {
    AchievementResponse,
    ChallengeResponse,
    TokenResponse,
    UserLessonLinkReponse,
    UserLessonResponse,
    UserResponse,
} from '@wire-out';
import { AuthService } from '@core';
import { UserLessonLinkService } from '@domain/user-lesson-link/user-lesson-link.service';
import { UserId } from '@middlewares/UserId.decorator';
import { UserAchievementService } from '@domain/user-achievement/user-achievement.service';
import { UserChallengeService } from '@domain/user-challenge/user-challenge.service';
import { UserLessonService } from '@domain/user-lesson/user-lesson.service';

@CustomController('Users Controller')
export class UserController {
    constructor(
        @Inject(UserService)
        private userService: UserService,

        @Inject(UserLessonLinkService)
        private userLessonLinkService: UserLessonLinkService,

        @Inject(UserAchievementService)
        private userAchievementService: UserAchievementService,

        @Inject(UserChallengeService)
        private userChallengeService: UserChallengeService,

        @Inject(UserLessonService)
        private userLessonService: UserLessonService,

        @Inject(AuthService)
        private authService: AuthService,
    ) {}

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota busca as informações de um usuário.',
        response: UserResponse,
        isAuth: true,
    })
    public async findById(@UserId() id: number) {
        return this.userService.findById(id);
    }

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota cria um novo usuário',
        body: CreateUserPayload,
        response: TokenResponse,
    })
    public async create(@Body() body: CreateUserPayload) {
        const user = await this.userService.create(body);
        const { token } = this.authService.generateToken(user);
        return { user, token };
    }

    @CustomRoute({
        method: 'PATCH',
        summary: 'Esta rota edita um usuário',
        body: UpdateUserPayload,
        response: UserResponse,
        isAuth: true,
        code: HttpStatus.OK,
    })
    public async update(@UserId() id: number, @Body() body: UpdateUserPayload) {
        return await this.userService.update(id, body);
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
        const { token } = this.authService.generateToken(user);
        return { user, token };
    }

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota vincula uma aula a um usuário.',
        route: '/:lessonLinkId/lesson-link',
        isAuth: true,
    })
    public async createLessonLink(
        @UserId() userId: number,
        @Param('lessonLinkId') lessonLinkId: number,
    ) {
        await this.userService.findById(userId);
        return this.userLessonLinkService.create(userId, lessonLinkId);
    }

    // TODO: MUDAR OS TESTES PARA FICAR DE ACORDO COM A NOVA TABELA
    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista as aulas que o usuário já fez',
        route: '/lessons-links',
        response: [UserLessonLinkReponse],
        isAuth: true,
    })
    public async findLessonsLinksById(@UserId() id: number) {
        await this.userService.findById(id);
        return this.userLessonLinkService.findAll(id);
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista os cursos de um usuário.',
        route: '/lesson',
        response: [UserLessonResponse],
        isAuth: true,
    })
    public async findLessonById(@UserId() userId: number) {
        await this.userService.findById(userId);
        return this.userLessonService.findAll(userId);
    }

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota vincula um curso a um usuário.',
        route: '/:lessonId/lesson',
        isAuth: true,
    })
    public async createLesson(@UserId() userId: number, @Param('lessonId') lessonId: number) {
        await this.userService.findById(userId);
        return this.userLessonService.create(userId, lessonId);
    }

    @CustomRoute({
        method: 'PATCH',
        summary: 'Esta rota edita o vinculo de um curso de um usuário.',
        body: UserLessonPayload,
        response: UserLessonResponse,
        route: '/:userLessonId/lesson',
        isAuth: true,
        code: HttpStatus.OK,
    })
    public async updateLesson(
        @Param('userLessonId') userLessonId: number,
        @Body() body: UserLessonPayload,
    ) {
        return await this.userLessonService.update(userLessonId, body);
    }

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota adiciona uma conquista a um usuário.',
        route: '/:achievementId/achievement',
        isAuth: true,
    })
    public async createAchievement(
        @UserId() userId: number,
        @Param('achievementId') achievementId: number,
    ) {
        await this.userService.findById(userId);
        await this.userAchievementService.create(userId, achievementId);
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista as conquistas que o usuário possui',
        route: '/achievements',
        response: AchievementResponse,
        isAuth: true,
    })
    public async findAchievementsById(@UserId() id: number) {
        await this.userService.findById(id);
        return this.userAchievementService.findAll(id);
    }

    @CustomRoute({
        method: 'POST',
        summary: 'Esta rota relaciona um desafio a um usuário.',
        route: '/:challengeId/challenge',
        isAuth: true,
    })
    public async createChallenge(
        @UserId() userId: number,
        @Param('challengeId') challengeId: number,
    ) {
        await this.userService.findById(userId);
        await this.userChallengeService.create(userId, challengeId);
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota lista os desafios feitos por um usuário',
        route: '/challenges',
        response: ChallengeResponse,
        isAuth: true,
    })
    public async findChallengesById(@UserId() id: number) {
        await this.userService.findById(id);
        return this.userChallengeService.findAll(id);
    }

    @CustomRoute({
        method: 'GET',
        summary: 'Esta rota busca o ranking de usuários.',
        response: [UserResponse],
        route: '/ranking',
        isAuth: true,
    })
    public async ranking() {
        return this.userService.getRanking();
    }
}
