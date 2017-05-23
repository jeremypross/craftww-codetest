const router     = require('express').Router();
const controller = require('./controller');

// router.get('/', controller.index);

router.get('/new', controller.new);

router.get('/login', controller.login);

router.get('/dashboard', controller.authorizeToken);

router.post('/login', controller.process_login);

router.post('/', controller.create);

module.exports = router;
