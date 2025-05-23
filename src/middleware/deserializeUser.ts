import { NextFunction, Request, Response } from 'express';
import { get } from 'lodash';
import { verifyJwt } from '../utils/jwt.utils';

export const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {

    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

    if(!accessToken) {
        // console.log('Hello')
        return next();
    }

    const { decoded, expired } = await verifyJwt(accessToken);
    
    if(decoded) {
        res.locals.user = decoded;
        return next();
    }

    return next();
}