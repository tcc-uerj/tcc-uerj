import { HttpStatus, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createNestApplication, createTestingModule, shutdownServices } from '../helpers/server';
import * as request from 'supertest';
import { CreateUserPayload } from '@wire-in';

// TODO: REFAZER OS TESTES PARA REMOVER OS DESCRIBERS EXTRAS E MUDAR PARA ITS
describe('User Route', () => {
    let app: INestApplication;
    let database: PrismaClient;

    beforeAll(async () => {
        const moduleRef = await createTestingModule();

        app = await createNestApplication(moduleRef);
        database = moduleRef.get<PrismaClient>(PrismaClient);
    });

    afterAll(async () => {
        await shutdownServices(app, database);
    });

    const baseUrl = '/api/v1/user';

    describe('POST /', () => {
        const body: CreateUserPayload = {
            email: 'johndoe@nobody.com',
            password: 'strongPassword1',
            name: 'John Doe',
        };

        it('should return 400 when email is in wrong format', async () => {
            const response = await request(app.getHttpServer())
                .post(baseUrl)
                .send({ ...body, email: 'johndoe' });

            expect(response.status).toBe(HttpStatus.BAD_REQUEST);
            expect(response.body.message[0]).toStrictEqual('johndoe não é um email válido');
        });
    });

    describe('POST /', () => {
        const body: CreateUserPayload = {
            email: 'johndoe@nobody.com',
            password: 'strongPassword1',
            name: 'John Doe',
        };

        it('should return 400 when password is not strong enough', async () => {
            const response = await request(app.getHttpServer())
                .post(baseUrl)
                .send({ ...body, password: 'test' });

            expect(response.status).toBe(HttpStatus.BAD_REQUEST);
            expect(response.body.message[0]).toStrictEqual('password is not strong enough');
        });
    });

    describe('POST /', () => {
        const body: CreateUserPayload = {
            email: 'johndoe@nobody.com',
            password: 'strongPassword1',
            name: 'john doe',
        };

        // it('should return 400 when name is not a string', async () => {
        //     const response = await request(app.getHttpServer())
        //         .post(baseUrl)
        //         .send({ ...body, name: 1111 });

        //     expect(response.status).toBe(HttpStatus.BAD_REQUEST);
        //     expect(response.body.message[0]).toStrictEqual('1 não é uma string');
        // });

        it('should return 201 when everything is correct', async () => {
            const response = await request(app.getHttpServer()).post(baseUrl).send(body);

            const expectedResponse = {
                id: expect.any(Number),
                email: 'johndoe@nobody.com',
                password: expect.any(String),
                name: 'John Doe',
                level: 1,
                points: 0,
            };
            expect(response.status).toBe(HttpStatus.CREATED);
            expect(response.body).toStrictEqual(expectedResponse);
        });
    });
});
