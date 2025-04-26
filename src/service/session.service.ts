import { FilterQuery } from "mongoose";
import Session, { SessionDocument } from "../models/session.model"
import User from "../models/user.model";

export const createSession = async (userId: string | unknown, userAgent: string) => {
    const session = await Session.create({ user: userId, userAgent });

    if(!session) {
        return false;
    }

    return {
        sessionId: session._id
    };
}

export async function validatePassword({ email, password }: {email: string, password: string}) {
    const user = await User.findOne({ email });

    if(!user || !user.comparePassword) return false;

    const isPasswordvalid = await user.comparePassword(password);

    if(!isPasswordvalid) {
        return false;
    }

    return {
        userId: user._id
    };
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    return await Session.find(query).lean();
}