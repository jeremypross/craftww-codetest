const router      = require('express').Router();
const AuthService = require('../../services/auth');
const controller  = require('./controller');

router.get('/new', controller.new);

router.get('/login', controller.login);

router.get(
  '/:id/posts',
  AuthService.restrict,
  controller.show
);

router.post('/login', controller.process_login);

router.post('/', controller.create);

module.exports = router;
