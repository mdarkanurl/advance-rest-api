import { Express, Request, Response } from 'express';

import { createUserHandlr } from './controller/user.controller';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';

function routes(app: Express) {
    app.get('/', (req: Request, res: Response) => {
        res
           .status(200)
           .send('Hello is it working. It\'s really awsome!');
    });

    app.post('/api/users',
        validateResource(createUserSchema),
        createUserHandlr)
}

export default routes;