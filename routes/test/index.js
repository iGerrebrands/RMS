const test = require('express').Router();
const getAll = require('./getAll');
const getOne = require('./getOne');

test.get('/', getAll);
test.get('/:id', getOne);

module.exports = test;