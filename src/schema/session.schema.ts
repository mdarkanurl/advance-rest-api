import { object, string } from 'zod';

export const createSessionSchema = object({
    body: object({
        email: string({
            required_error: 'email is required'
        }).email('Invalid email'),
        password: string({
            required_error: 'password is required'
        }).min(8, 'Password must be minimum 8 chars')
    })
});