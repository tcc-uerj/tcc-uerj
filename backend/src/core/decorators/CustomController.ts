import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const sanitizeTagName = (tagName: string) => {
    const tags = tagName.split(' ');
    const route = tags[0].toLocaleLowerCase();

    return route;
};

export const CustomController = (tagName: string) => {
    const route = sanitizeTagName(tagName);
    return applyDecorators(ApiTags(tagName), Controller(route));
};
