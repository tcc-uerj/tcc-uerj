import { IsText } from '@middlewares/IsText.decorator';
import { IsPassword } from '@middlewares/IsPassword.decorator';
import { IsValidEmail } from '@middlewares/IsValidEmail.decorator';

export class CreateUserPayload {
    @IsValidEmail({ example: 'johndoe@nobody.com' })
    email: string;

    @IsPassword({ example: 'strongPassword1' })
    password: string;

    @IsText({ example: 'John Doe' })
    name: string;
}
