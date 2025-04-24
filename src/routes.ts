import { Express, Request, Response } from 'express';

function routes(app: Express) {
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello is it working. It\'s really awsome!');
    });
}

export default routes;