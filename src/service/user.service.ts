import { InferSchemaType } from 'mongoose';
import User, { UserDocument } from '../models/user.model';

export async function createUser(input: InferSchemaType<UserDocument>) {
    try {
        await User.create(input);
        return;
    } catch (error: any) {
        throw new Error(error);
    }
}