import { IsValidEmail } from '@middlewares/IsValidEmail.decorator';
import { validate } from 'class-validator';

describe('IsValidEmail()', () => {
    class TestClass {
        @IsValidEmail({ example: '' })
        email: string;
    }

    const testObj = new TestClass();

    it('should fail when given email is not a valid one', async () => {
        testObj.email = 'invalidEmail';

        const errors = await validate(testObj);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isEmail).toStrictEqual('invalidEmail não é um email válido');
    });

    it('should validate when given email is a valid one', async () => {
        testObj.email = 'johndoe@nobody.com';

        const errors = await validate(testObj);

        expect(errors).toHaveLength(0);
    });
});
