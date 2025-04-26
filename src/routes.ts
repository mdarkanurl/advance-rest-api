import { Express, Request, Response } from 'express';

import { createUserHandlr } from './controller/user.controller';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createUserSeesionHandler, getUserSessionsHandler } from './controller/seesion.controller';
import { createSessionSchema } from './schema/session.schema';
import { requireUser } from './middleware/require';

function routes(app: Express) {
    app.get('/', (req: Request, res: Response) => {
        res
           .status(200)
           .send('Hello is it working. It\'s really awsome!');
    });

    app.post('/api/users',
        validateResource(createUserSchema),
        createUserHandlr);


    app.post('/api/sessions',
        validateResource(createSessionSchema),
        createUserSeesionHandler);

    app.get('/api/sessions',
        requireUser,
        getUserSessionsHandler
    )
}

export default routes;