const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.index);

router.get('/', controller.search);

router.post('/', controller.create);

// router.post('/favorites', controller.favorite);

router.delete('/:id', controller.destroy);

module.exports = router;
