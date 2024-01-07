import { UserService } from '@domain/user/user.service';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserPayload } from '@wire-in';
import { UserResponse } from 'src/application/schemas/wire-out/User';

@ApiTags('User Controller')
@Controller('/user')
export class UserController {
    constructor(
        @Inject(UserService)
        private userService: UserService,
    ) {}

    @Post()
    @ApiBody({ type: CreateUserPayload })
    @ApiCreatedResponse({ type: UserResponse })
    @ApiOperation({ summary: 'Esta rota cria um novo usurário' })
    public async create(@Body() body: CreateUserPayload) {
        return this.userService.create(body);
    }
}
