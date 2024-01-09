import { IsEnumOption, SubjectType } from '@model';
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

const getEnumValues = (enumValue: object) => {
    const values = Object.values(enumValue);
    return values.join(', ');
};

export const IsEnumType = (option: IsEnumOption) => {
    const { example } = option;
    const enumValues = getEnumValues(option.enum);

    return applyDecorators(
        IsString({
            message: ({ value }) => `${value} não é uma string`,
        }),
        IsNotEmpty({
            message: ({ property }) => `${property} não pode ser vazio`,
        }),
        IsEnum(option.enum, {
            message: ({ value }) => `${value} não é um enum, os valores devem ser ${enumValues}`,
        }),
        ApiProperty({ example }),
    );
};
