import mongoose from "mongoose";
import config from '../../config/default';
import logger from './logger';

export async function connect() {
    try {
        await mongoose.connect(config.MONGO_URL);
        logger.info('Database connected');
    } catch (error: any) {
        logger.error(error.message);
        logger.error('Database not connected');
        process.exit(1);
    }
}