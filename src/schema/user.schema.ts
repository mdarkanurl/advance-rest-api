import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required'
        }).min(3, 'First & last name required'),
        password: string({
            required_error: 'password is required'
        }).min(8, 'Password must be minimum 8 chars'),
        passwordConfirmation: string({
            required_error: 'passwordConfirmation is required'
        }),
        email: string({
            required_error: 'email is required'
        }).email('Invalid email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: 'Password & passwordConfirmation must be same',
        path: ['passwordConfirmation']
    })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;