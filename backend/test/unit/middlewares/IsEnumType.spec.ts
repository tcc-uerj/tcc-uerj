import { IsEnumType } from '@middlewares/IsEnumType.decorator';
import { LessonType, SubjectType } from '@model';
import { validate } from 'class-validator';

describe('IsEnumType()', () => {
    class TestClass1 {
        @IsEnumType({ example: '', enum: SubjectType })
        enum: SubjectType;
    }

    class TestClass2 {
        @IsEnumType({ example: '', enum: LessonType })
        enum: LessonType;
    }

    const testObj1 = new TestClass1();
    const testObj2 = new TestClass2();

    it('should fail when given value does not belongs to enum SubjectType', async () => {
        (testObj1.enum as string) = '1';

        const errors = await validate(testObj1);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isEnum).toStrictEqual(
            '1 não é um enum, os valores devem ser CLEAN_CODE, DESIGN_PATTERN',
        );
    });

    it('should validate when given value belongs to enum SubjectType', async () => {
        testObj1.enum = SubjectType.CLEAN_CODE;

        const errors = await validate(testObj1);

        expect(errors).toHaveLength(0);
    });

    it('should fail when given value does not belongs to enum LessonType', async () => {
        (testObj2.enum as string) = '1';

        const errors = await validate(testObj2);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isEnum).toStrictEqual(
            '1 não é um enum, os valores devem ser VIDEO, WRITTEN',
        );
    });

    it('should validate when given value belongs to enum LessonType', async () => {
        (testObj2.enum as string) = LessonType.VIDEO;

        const errors = await validate(testObj2);

        expect(errors).toHaveLength(0);
    });
});
