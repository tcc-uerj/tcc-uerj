import { ExecutionContext, UnauthorizedException, createParamDecorator } from '@nestjs/common';

export const UserId = createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const { id } = request.user;

    if (!id) {
        throw new UnauthorizedException('O token enviado não contém informações válidas');
    }

    return id;
});
