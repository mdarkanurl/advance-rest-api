import { InferSchemaType } from 'mongoose';
import User, { UserDocument } from '../models/user.model';

export async function createUser(input: InferSchemaType<UserDocument>) {
    try {
        const user = await User.create(input);
        return user;
    } catch (error: any) {
        throw new Error(error);
    }
}