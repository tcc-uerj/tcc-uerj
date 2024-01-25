import { BaseOption } from '@model';
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export const IsText = (option: BaseOption) => {
    const { example } = option;

    return applyDecorators(
        IsString({
            message: ({ value }) => `${value} não é uma string`,
        }),
        IsNotEmpty({
            message: ({ property }) => `${property} não pode ser vazio`,
        }),
        MinLength(3, {
            message: ({ property }) => `${property} precisa ter no mínimo 3 caracteres`,
        }),
        ApiProperty({ example }),
    );
};
