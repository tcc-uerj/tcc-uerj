import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserId = createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const { user } = context.switchToHttp().getRequest();
    return user.id;
});
