const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.index);

router.post('/', controller.create);

router.post('/favorites', controller.favorite);

router.delete('/favorites/:id', controller.delete);

module.exports = router;
