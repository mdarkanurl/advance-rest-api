import { Request, Response, NextFunction } from 'express';

export const requireUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    if(!user) {
        res.sendStatus(403);
        return;
    }

    return next();
}