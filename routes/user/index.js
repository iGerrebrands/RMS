const router = require('express').Router();
const getAll = require('./getAll');
const getOne = require('./getOne');

router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;