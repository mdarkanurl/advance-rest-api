import { Request, Response } from 'express';
import { createSession, findSessions, validatePassword } from '../service/session.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';

export const createUserSeesionHandler = async (req: Request, res: Response) => {
    const user = await validatePassword(req.body);

    if(!user) {
        res.status(401).send('Invalid email or password');
        return;
    }

    const session = await createSession(user.userId, req.get('user-agent') || '');

    const accessToken = await signJwt(
        { ...user, session: session },
        { expiresIn: config.get('accessTokenTtL') }
    );

    const refreshToken = await signJwt(
        { ...user, session: session },
        { expiresIn: config.get('refreshTokenTtL') }
    );

    res.send({ accessToken, refreshToken });
    return;
}

export async function getUserSessionsHandler(req: Request, res: Response) {
    const userId = res.locals.user._id;
    const session = await findSessions({ user: userId, valid: true });
    res.send(session);
    return;
}