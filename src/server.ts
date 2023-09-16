import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    const PORT = Config.PORT;

    try {
        // throw new Error('Something Went Wrong');
        logger.debug('debug message', {});
        app.listen(PORT, () => {
            logger.info(`server is running on port ${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            logger.error('Error starting server: ', error.message);
            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
};

startServer();
