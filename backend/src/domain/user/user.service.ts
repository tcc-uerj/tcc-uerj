import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '@repositories/user/user.repository';
import { CreateUserPayload } from '@wire-in';
import * as bcrypt from 'bcryptjs';
import { LoginUserPayload } from 'src/application/schemas/wire-in/Login';

@Injectable()
export class UserService {
    constructor(
        @Inject(UserRepository)
        private userRepository: UserRepository,
    ) {}

    // TODO: TROCAR RESPOSTA POR TOKEN
    public async create(body: CreateUserPayload) {
        const userExists = await this.userRepository.findByEmail(body.email);
        if (userExists) {
            throw new ConflictException('Este email já foi cadastrado.');
        }

        const password = bcrypt.hash(body.password, 8);

        const newUser = { ...body, password } as unknown as User;

        return this.userRepository.create(newUser);
    }

    // TODO: TROCAR RESPOSTA POR TOKEN
    public async login(body: LoginUserPayload) {
        const user = await this.userRepository.findByEmail(body.email);

        if (!user) {
            throw new NotFoundException('Email ou senha inválidos.');
        }

        const isCorrectPassword = bcrypt.compare(body.password, user.password);

        if (!isCorrectPassword) {
            throw new NotFoundException('Email ou senha inválidos.');
        }

        return user;
    }
}
