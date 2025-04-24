import { Request, Response } from 'express';

import logger from '../utils/logger';

export const createUserHandlr = async (req: Request, res: Response) => {
    try {
        // const user = await 
    } catch (error: any) {
        logger.error(error.message);
        res.status(409).send(error.message);
    }
}