export type BaseOption = {
    optional?: boolean;
    example: any;
};

export type IsEnumOption = BaseOption & {
    enum: object;
};
