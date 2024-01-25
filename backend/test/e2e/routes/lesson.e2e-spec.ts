import { PrismaClient } from '@prisma/client';
import { createNestApplication, createTestingModule, shutdownServices } from '../helpers/server';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LessonResponse } from '@wire-out';
import { SubjectType } from '@model';

describe('Lesson Route', () => {
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

    const baseUrl = '/api/v1/lesson';

    const expectedLesson: LessonResponse = {
        id: expect.any(Number),
        content: expect.any(String),
        subject: expect.any(String),
        lessonLinks: [],
    };

    describe('GET /', () => {
        it('should return 200 when everything is correct', async () => {
            const url = `${baseUrl}/${SubjectType.CLEAN_CODE}`;
            const response = await request(app.getHttpServer()).get(url);

            expect(response.status).toBe(HttpStatus.OK);
            expect(response.body).toEqual([expectedLesson]);
        });
    });

    describe('GET /:subject', () => {
        it('should throw an error when param is not SubjectType', async () => {
            const url = `${baseUrl}/1`;
            const response = await request(app.getHttpServer()).get(url);

            expect(response.status).toBe(HttpStatus.BAD_REQUEST);
            expect(response.body.message).toStrictEqual(
                'Validation failed (enum string is expected)',
            );
        });

        it('should return 200 when everything is correct', async () => {
            const url = `${baseUrl}/${SubjectType.CLEAN_CODE}`;
            const response = await request(app.getHttpServer()).get(url);

            expect(response.status).toBe(HttpStatus.OK);
            expect(response.body).toEqual([expectedLesson]);
        });
    });
});
