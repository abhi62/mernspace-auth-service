import express, { Request, Response, NextFunction } from 'express';
import logger from './config/logger';
import { HttpError } from 'http-errors';
// import createError, { HttpError } from 'http-errors';

const app = express();
app.get('/', async (req, res) => {
    // const error = createError(401, 'You are not allowed to access');
    // return next(error);
    res.send('welcome to auth service');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(error.message);
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: error.name,
                msg: error.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
