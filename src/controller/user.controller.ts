import { Request, Response } from 'express';
import { omit } from 'lodash';

import logger from '../utils/logger';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';

export const createUserHandlr = async (
    req: Request<{}, {}, CreateUserInput['body']>,
    res: Response) => {
    try {
        const user = await createUser(req.body);

        res.status(201).send(omit(user.toJSON(),'password'));
        return;
    } catch (error: any) {
        logger.error(error.message);
        res.status(409).send(error.message);
    }
}