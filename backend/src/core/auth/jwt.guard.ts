import { ExecutionContext, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(
        @Inject(AuthService)
        private authService: AuthService,
    ) {
        super();
    }

    public canActivate(context: ExecutionContext) {
        const http = context.switchToHttp();
        const request = http.getRequest();
        const { authorization } = request.headers;

        this.authService.validateToken(authorization);
        return super.canActivate(context);
    }
}
