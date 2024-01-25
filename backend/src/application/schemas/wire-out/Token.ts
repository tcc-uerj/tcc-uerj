import { ApiProperty } from '@nestjs/swagger';
import { sign } from 'jsonwebtoken';

export class TokenResponse {
    @ApiProperty({ example: sign({ fake: 'token' }, 'fake') })
    token: string;
}
