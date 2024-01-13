import { ApiBody } from '@nestjs/swagger';
import { ApiType } from '../schemas/decorators';

export const OptionalApiBody = (body?: ApiType) => {
    if (!body) {
        return () => {};
    }

    return ApiBody({ type: body });
};
