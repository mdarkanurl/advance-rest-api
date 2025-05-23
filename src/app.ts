import express from 'express';
import dotenv from 'dotenv';
import config from 'config';

import { connect } from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import { deserializeUser } from './middleware/deserializeUser';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(deserializeUser);

app.listen(config.get('PORT'), async () => {
    logger.info(`App is running at http://localhost:${config.get('PORT')}`);
    await connect();
    routes(app);
});