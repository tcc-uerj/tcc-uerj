import { ControllerModule } from '@controllers/controller.module';
import {
    INestApplication,
    ValidationPipe,
    ValidationPipeOptions,
    VersioningType,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { resetTables } from './database';

const validationPipeOptions: ValidationPipeOptions = {
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true,
    forbidUnknownValues: false,
};

export const createTestingModule = async () => {
    return Test.createTestingModule({ imports: [ControllerModule] }).compile();
};

export const createNestApplication = async (testingModule: TestingModule) => {
    const app = testingModule.createNestApplication();

    await app
        .useGlobalPipes(new ValidationPipe(validationPipeOptions))
        .enableVersioning({ type: VersioningType.URI, defaultVersion: '1' })
        .setGlobalPrefix('api')
        .init();

    return app;
};

export const shutdownServices = async (app: INestApplication, database: PrismaClient) => {
    resetTables(database);
    app.close();
};
