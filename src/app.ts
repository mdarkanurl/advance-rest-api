import express from 'express';
import dotenv from 'dotenv';

import { connect } from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, async () => {
    logger.info(`App is running at http://localhost:${process.env.PORT}`);
    await connect();
    routes(app);
});