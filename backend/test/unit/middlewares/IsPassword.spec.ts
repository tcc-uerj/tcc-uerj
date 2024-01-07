import { IsPassword } from '@middlewares/IsPassword.decorator';
import { validate } from 'class-validator';

describe('IsPassword()', () => {
    class TestClass {
        @IsPassword({ example: '' })
        password: string;
    }

    const testObj = new TestClass();

    it('should fail when given password with length lower than 5', async () => {
        testObj.password = 'test';

        const errors = await validate(testObj);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isStrongPassword).toStrictEqual('password is not strong enough');
    });

    it('should fail when given password without uppercase', async () => {
        testObj.password = 'strongpassword1';

        const errors = await validate(testObj);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isStrongPassword).toStrictEqual('password is not strong enough');
    });

    it('should fail when given password without number', async () => {
        testObj.password = 'strongPassword';

        const errors = await validate(testObj);
        const { constraints } = errors[0];

        expect(errors.length).toBeGreaterThan(0);
        expect(constraints.isStrongPassword).toStrictEqual('password is not strong enough');
    });

    it('should validate when given password is a valid one', async () => {
        testObj.password = 'strongPassword1';

        const errors = await validate(testObj);

        expect(errors).toHaveLength(0);
    });
});
