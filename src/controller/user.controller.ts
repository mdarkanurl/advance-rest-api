import { Request, Response } from 'express';

import logger from '../utils/logger';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';

export const createUserHandlr = async (
    req: Request<{}, {}, CreateUserInput['body']>,
    res: Response) => {
    try {
        console.log('Is it hit here', req.body);
        await createUser(req.body);

        res.status(201).send('User has created');
        return;
    } catch (error: any) {
        logger.error(error.message);
        res.status(409).send(error.message);
    }
}