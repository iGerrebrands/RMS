const routes = require('express').Router();
const api = require('./api');
const user = require('./user');

routes.use('/', api);
routes.use('/user', user);

module.exports = routes;