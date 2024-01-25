import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserLessonRepository } from '@repositories/user-lesson/user-lesson.repository';
import { UserRepository } from '@repositories/user/user.repository';
import { CreateUserPayload, LoginUserPayload } from '@wire-in';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(
        @Inject(UserRepository)
        private userRepository: UserRepository,

        @Inject(UserLessonRepository)
        private userLessonRepository: UserLessonRepository,
    ) {}

    public async create(body: CreateUserPayload) {
        const userExists = await this.userRepository.findByEmail(body.email);
        if (userExists) {
            throw new ConflictException('Este email já foi cadastrado.');
        }

        const password = await bcrypt.hash(body.password, 8);

        const newUser = { ...body, password } as unknown as User;

        return this.userRepository.create(newUser);
    }

    public async login(body: LoginUserPayload) {
        const user = await this.userRepository.findByEmail(body.email);

        if (!user) {
            throw new UnauthorizedException('Email ou senha inválidos.');
        }

        const isCorrectPassword = await bcrypt.compare(body.password, user.password);

        if (!isCorrectPassword) {
            throw new UnauthorizedException('Email ou senha inválidos.');
        }

        return user;
    }

    public async getUserLessons(userId: number) {
        return this.userLessonRepository.findLessonsByUser(userId);
    }
}
