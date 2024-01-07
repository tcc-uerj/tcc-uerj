import { BaseOption } from '@model';
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export const IsValidEmail = (option: BaseOption) => {
    const { example } = option;

    return applyDecorators(
        IsEmail(
            {},
            {
                message: ({ value }) => `${value} não é um email válido`,
            },
        ),
        ApiProperty({ example }),
    );
};
