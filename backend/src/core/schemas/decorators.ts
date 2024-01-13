import { Type } from '@nestjs/common';

export type ApiType = string | Function | Type<unknown> | [Function];

export type RouteOption = {
    summary: string;
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    route?: string | '';
    code?: number | 200;
    body?: ApiType;
    response?: ApiType;
    isAuth?: boolean;
};
