import { CustomController, CustomRoute } from '@core';
import { UserService } from '@domain/user/user.service';
import { Body, HttpStatus, Inject, Param } from '@nestjs/common';
import { CreateUserPayload, LoginUserPayload } from '@wire-in';
import {
    AchievementResponse,
    ChallengeResponse,
    TokenResponse,
    UserLessonLinkReponse,
} from '@wire-out';
import { AuthService } from '@core';
import { UserLessonLinkService } from '@domain/user-lesson-link/user-lesson-link.service';
import { UserId } from '@middlewares/UserId.decorator';
import { UserAchievementService } from '@domain/user-achievement/user-achievement.service';
import { UserChallengeService } from '@domain/user-challenge/user-challenge.service';

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
        method: 'POST',
        summary: 'Esta rota adiciona uma conquista a um usuário.',
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
}
