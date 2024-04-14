import { ApiProperty } from '@nestjs/swagger';
import { sign } from 'jsonwebtoken';
import { UserResponse } from './User';

export class TokenResponse {
    @ApiProperty({ example: UserResponse })
    user: UserResponse;

    @ApiProperty({ example: sign({ fake: 'token' }, 'fake') })
    token: string;
}
