import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';
import helmet from 'helmet';
import {
    INestApplication,
    Logger,
    ValidationPipe,
    ValidationPipeOptions,
    VersioningType,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swaggerConfig = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('TCC UERJ')
        .setDescription('Swagger da api do TCC.')
        .setVersion('1')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api/docs', app, document);
};

const validationPipeOptions: ValidationPipeOptions = {
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true,
    forbidUnknownValues: false,
};

const serverConfig = (app: INestApplication) => {
    app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' })
        .setGlobalPrefix('api')
        .useGlobalPipes(new ValidationPipe(validationPipeOptions))
        .use(helmet())
        .enableCors();
};

const init = async () => {
    const port = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);

    serverConfig(app);
    swaggerConfig(app);

    await app.listen(port);

    const url = await app.getUrl();

    Logger.log(`swagger is running on ${url}/api/docs`, 'NestApplication');
};

init();
