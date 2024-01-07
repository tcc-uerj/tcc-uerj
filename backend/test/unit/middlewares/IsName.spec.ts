import { IsText } from '@middlewares/IsName.decorator';
import { validate } from 'class-validator';

describe('IsText()', () => {
    class TestClass {
        @IsText({ example: '' })
        text: string;
    }

    const testObj = new TestClass();

    it('should fail when given text is empty', async () => {
        testObj.text = '';

        const errors = await validate(testObj);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isNotEmpty).toStrictEqual('text não pode ser vazio');
    });

    it('should fail when given text is not a string', async () => {
        (testObj as any).text = 1;

        const errors = await validate(testObj);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isString).toStrictEqual('1 não é uma string');
    });

    it('should fail when given text with length lower than 3', async () => {
        testObj.text = 'ze';

        const errors = await validate(testObj);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.minLength).toStrictEqual('text precisa ter no mínimo 3 caracteres');
    });

    it('should validate when given text is a valid one', async () => {
        testObj.text = 'John Doe';

        const errors = await validate(testObj);

        expect(errors).toHaveLength(0);
    });
});
