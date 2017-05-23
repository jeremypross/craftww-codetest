const router = require('express').Router();

router.use('/users', require('./controllers/users'));

// router.user('/posts', require('./controllers/posts'));

// router.get('/', (req, res) => res.redirect('/posts'));


module.exports = router;
