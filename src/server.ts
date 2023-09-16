import app from './app';
import { Config } from './config';

const startServer = () => {
    const PORT = Config.PORT;

    try {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log('Error starting server: ', error);
        process.exit(1);
    }
};

startServer();
