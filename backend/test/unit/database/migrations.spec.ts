import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

describe('Migrations', () => {
    let database: PrismaClient;
    const removeDatabase = () => {
        execSync('rm -rf ./src/infra/database/dev/dev.db');
        execSync('rm -rf ./src/infra/database/dev/dev.db-journal');
    };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [PrismaClient],
        }).compile();

        database = moduleRef.get<PrismaClient>(PrismaClient);

        removeDatabase();
        execSync('npx prisma generate --schema src/infra/database/dev/dev.prisma');
    });

    afterAll(() => removeDatabase());

    describe('Table migration', () => {
        it('should return 0 when migration not applied', async () => {
            const tables = await database.$queryRaw`
                select name from sqlite_master
                where type = 'table'
            `;

            expect(tables).toHaveLength(0);
        });

        it('should return the table amount when migration is successful', async () => {
            execSync('npx prisma migrate deploy --schema src/infra/database/dev/dev.prisma');

            const tables = await database.$queryRaw`
                select name from sqlite_master
                where type = 'table' and not
                name = '_prisma_migrations' and not
                name = 'sqlite_sequence'
            `;

            expect(tables).toHaveLength(4);
        });
    });
});
