const express = require('express');
const app = express();
const routes = require('./routes');
const MongoClient = require('mongodb').MongoClient;
const Database = require('./database');
const Config = require('./config.json');

app.use('/api', routes);

MongoClient.connect(`mongodb://${Config.DATABASE_IP}:${Config.DATABASE_PORT}/${Config.PROJECT_NAME}`, (err, database) => {
    if(err) return console.log(err);
    Database.setDatabase(database);
    console.log(`Database connected at port ${Config.DATABASE_PORT}`);
    Database.setupDatabase(() => {
        app.listen(Config.APPLICATION_PORT, () => {
            console.log(`RESTful API started at port ${Config.APPLICATION_PORT}`);
        });
    });
});

