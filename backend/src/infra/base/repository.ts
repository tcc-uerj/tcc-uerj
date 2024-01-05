import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export abstract class BaseRepository<TEntity> {
    constructor(
        @Inject(PrismaClient)
        private database: PrismaClient,
    ) {}

    private get entityName() {
        const entityName = this.constructor.name.replace('Repository', '');
        return entityName.replace(entityName[0], entityName[0].toLowerCase());
    }

    protected async find<TFilter>(option: TFilter): Promise<TEntity[]> {
        return this.database[this.entityName].findMany({ ...option });
    }

    protected async findOne<TFilter>(option: TFilter): Promise<TEntity> {
        return this.database[this.entityName].findFirst({ ...option });
    }

    public async create(data: TEntity): Promise<TEntity> {
        return this.database[this.entityName].create({ data });
    }

    public async update(id: number, data: TEntity): Promise<TEntity> {
        return this.database[this.entityName].update({
            data,
            where: { id },
        });
    }

    public async findById(id: number): Promise<TEntity> {
        return this.database[this.entityName].findFirst({ where: { id } });
    }

    public async findAll(): Promise<TEntity[]> {
        return this.database[this.entityName].findMany();
    }

    public async delete(id: number): Promise<TEntity> {
        return this.database[this.entityName].delete({ where: { id } });
    }

    public async count(): Promise<number> {
        return this.database[this.entityName].count();
    }
}
