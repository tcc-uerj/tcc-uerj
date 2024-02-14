import {
    Delete,
    Get,
    HttpCode,
    Patch,
    Post,
    Put,
    UseGuards,
    UsePipes,
    applyDecorators,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RouteOption } from '../schemas/decorators';
import { OptionalApiBody } from '../helpers/decorators';
import { CaptalizePipe } from '@pipes/Captalize.pipe';

const baseMethod = {
    GET: {
        type: Get,
        statusCode: 200,
    },
    POST: {
        type: Post,
        statusCode: 201,
    },
    PATCH: {
        type: Patch,
        statusCode: 204,
    },
    PUT: {
        type: Put,
        statusCode: 204,
    },
    DELETE: {
        type: Delete,
        statusCode: 204,
    },
};

const BearerAuth = (isAuth: boolean) => {
    if (!isAuth) {
        return [() => {}];
    }

    return [ApiBearerAuth(), UseGuards(JwtAuthGuard)];
};

export const CustomRoute = (option: RouteOption) => {
    const { method, summary, body, response } = option;
    const route = option.route || '';
    const defaultStatusCode = baseMethod[method].statusCode;
    const code = option.code || defaultStatusCode;

    return applyDecorators(
        UsePipes(new CaptalizePipe()),
        baseMethod[method].type(route),
        HttpCode(code),
        ApiOperation({ summary }),
        OptionalApiBody(body),
        ApiResponse({ type: response, status: code }),
        ...BearerAuth(option.isAuth),
    );
};
