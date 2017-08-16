import express from 'express';
import routes from './src/routes';
import Config from './config.json';
import mongoose from 'mongoose';
import Promise from 'promise';
import bodyParser from 'body-parser';
import ErrorHandler from './src/ErrorHandler';

mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', routes);

app.use(ErrorHandler);

mongoose.connect(`mongodb://${Config.DATABASE_IP}:${Config.DATABASE_PORT}/${Config.PROJECT_NAME}`, {
        useMongoClient: true
    })
    .then(() => {
        console.log(`Database Connected on Port: ${Config.DATABASE_PORT}`);

        app.listen(Config.APPLICATION_PORT, () => {
            console.log(`RESTful API started at port ${Config.APPLICATION_PORT}`);
        });
    })
    .catch((err) => console.log(err));




