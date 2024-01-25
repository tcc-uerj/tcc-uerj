import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    private extractToken(authorization: string) {
        if (!authorization) {
            throw new UnauthorizedException('Bearer authorization does not exists');
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
                    throw new UnauthorizedException('Token has expired');
                case 'JsnWebTokenError':
                    throw new UnauthorizedException('Token is invalid');
                default:
                    throw err;
            }
        }
    }
}
