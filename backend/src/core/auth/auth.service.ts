import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    // TODO: CRIAR UM TESTE UNITÁRIO PARA A VALIDAÇÃO DO AUTH TOKEN
    private extractToken(authorization: string) {
        if (!authorization) {
            throw new UnauthorizedException('Não foi encontrado um Bearer token no header');
        }

        const httpHeaders: string[] = authorization.split(' ');
        const token = httpHeaders[1];

        return token;
    }

    public generateToken({ id }) {
        const payload = { id };
        const token = this.jwtService.sign(payload);

        return { token };
    }

    public validateToken(authorization: string) {
        try {
            const secret = process.env.JWT_SECRET || 'secret';
            const token = this.extractToken(authorization);

            return this.jwtService.verify(token, { secret });
        } catch (err) {
            const { name } = err;

            switch (name) {
                case 'TokenExpiredError':
                    throw new UnauthorizedException('Token está expirado');
                case 'JsnWebTokenError':
                    throw new UnauthorizedException('O token enviado não está no formato JWT');
                default:
                    throw err;
            }
        }
    }
}
