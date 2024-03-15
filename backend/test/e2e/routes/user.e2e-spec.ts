import { HttpStatus, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createNestApplication, createTestingModule, shutdownServices } from '../helpers/server';
import * as request from 'supertest';
import { CreateUserPayload, LoginUserPayload } from '@wire-in';
import { faker, ur } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
import { AchievementResponse, UserAchievementResponse } from '@wire-out';

describe('User Route', () => {
    let app: INestApplication;
    let database: PrismaClient;
    let token: string;

    beforeAll(async () => {
        const moduleRef = await createTestingModule();

        app = await createNestApplication(moduleRef);
        database = moduleRef.get<PrismaClient>(PrismaClient);
    });

    afterAll(async () => {
        await shutdownServices(app, database);
    });

    const { internet, person } = faker;

    const baseUrl = '/api/v1/users';
    const email = internet.email();
    const password = internet.password({ length: 5, prefix: '5' });

    //TODO: Corrigir teste
    describe('POST /', () => {
        const body: CreateUserPayload = {
            email,
            password,
            name: person.fullName(),
        };

        it('should return 201 when everything is correct', async () => {
            const response = await request(app.getHttpServer()).post(baseUrl).send(body);
            const expectedResponse = { token: expect.any(String) };

            console.log('response.body login: ', response.body);
            expect(response.status).toBe(HttpStatus.CREATED);
            expect(response.body).toMatchObject(expectedResponse);

            token = response.body.token;
        });

        it('should return 409 when user already exists', async () => {
            const response = await request(app.getHttpServer()).post(baseUrl).send(body);

            expect(response.status).toBe(HttpStatus.CONFLICT);
            expect(response.body.message).toStrictEqual('Este email já foi cadastrado.');
        });
    });

    describe('POST /login', () => {
        const url = `${baseUrl}/login`;

        it('should return 200 when login is valid', async () => {
            const body: LoginUserPayload = { email, password };
            const response = await request(app.getHttpServer()).post(url).send(body);

            expect(response.status).toBe(HttpStatus.OK);
            expect(response.body).toMatchObject({ token: expect.any(String) });
        });

        it('should return 401 when email is not valid', async () => {
            const body: LoginUserPayload = { email: internet.email(), password };
            const response = await request(app.getHttpServer()).post(url).send(body);

            expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
            expect(response.body.message).toStrictEqual('Email ou senha inválidos.');
        });

        it('should return 401 when password is not valid', async () => {
            const body: LoginUserPayload = { email, password: internet.password() };
            const response = await request(app.getHttpServer()).post(url).send(body);

            expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
            expect(response.body.message).toStrictEqual('Email ou senha inválidos.');
        });
    });

    // FIXME: REFATORAR ESTE TESTE PARA A TABELA USER_LESSON_LINK
    // describe('GET /lessons', () => {
    //     const url = `${baseUrl}/lessons`;

    //     it('should return 401 when user id does not exists', async () => {
    //         const fakeToken = sign({ id: 0 }, 'secret');
    //         const response = await request(app.getHttpServer())
    //             .get(url)
    //             .auth(fakeToken, { type: 'bearer' });

    //         expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
    //         expect(response.body.message).toStrictEqual(
    //             'O token enviado não contém informações válidas',
    //         );
    //     });

    //     it('should return 200 when user id exists', async () => {
    //         const response = await request(app.getHttpServer())
    //             .get(url)
    //             .auth(token, { type: 'bearer' });

    //         const expectedResponse: UserLessonReponse = {
    //             completedAt: expect.any(Date),
    //             lessonId: expect.any(Number),
    //             userId: expect.any(Number),
    //         };

    //         expect(response.status).toBe(HttpStatus.OK);
    //         expect(response.body).toStrictEqual([expectedResponse]);
    //     });
    // });

    describe('POST /:achievementId/achievement', () => {
        const url = `${baseUrl}/1/achievement`;

        it('should create a new user achievement', async () => {
            const response = await request(app.getHttpServer())
                .post(url)
                .auth(token, { type: 'bearer' });

            expect(response.status).toBe(HttpStatus.CREATED);
            expect(response.body).toMatchObject({});
        });
    });

    describe('GET /achievements', () => {
        const url = `${baseUrl}/achievements`;

        it('should return 401 when user id does not exists', async () => {
            const fakeToken = sign({ id: 0 }, 'secret');
            const response = await request(app.getHttpServer())
                .get(url)
                .auth(fakeToken, { type: 'bearer' });

            expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
            expect(response.body.message).toStrictEqual(
                'O token enviado não contém informações válidas',
            );
        });

        it('should return 200 when user id exists', async () => {
            const response = await request(app.getHttpServer())
                .get(url)
                .auth(token, { type: 'bearer' });

            const expectedResponse: UserAchievementResponse = {
                achievement: {
                    id: expect.any(Number),
                    type: expect.any(String),
                },
            };

            expect(response.status).toBe(HttpStatus.OK);
            expect(response.body).toStrictEqual([expectedResponse]);
        });
    });
});
