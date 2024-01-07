import { BaseOption } from '@model';
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsStrongPassword } from 'class-validator';

export const IsPassword = (option: BaseOption) => {
    const { example } = option;

    return applyDecorators(
        IsStrongPassword({
            minLength: 5,
            minSymbols: 0,
        }),
        ApiProperty({ example }),
    );
};
