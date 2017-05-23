const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

const User = require('../../models/User');
const Post = require('../../models/Post');

const controller = {};

controller.new = (req, res) => {
  // render views/users/new.ejs
  res.render('users/new');
}

controller.create = (req, res) => {
  User
    .create(req.body.user)
    .then(() => res.redirect('/users/login'))
    .catch((err) => console.log('ERROR', err));
};

controller.login = (req, res) => {
  const error = {};
  if (req.query.error) error.message = 'Incorrect Login Credentials!';
  // send user back to login page
    res.render('users/login', { message: error.message });
}

controller.process_login = (req, res) => {
  User
    .findByEmail(req.body.user.email)
    .then((user) => {
      // if user exists
      if (user) {
        // returns boolean
        const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          // start session
          req.session.isAuthenticated = true;
          // delete hashed password
          delete user.password_digest;
          // store user info
          req.session.user = user;
          // redirect to user's show page
          res.redirect(`/users/${user.id}/posts`)
        } else {
          // else send user back to login view
          res.redirect('/users/login?error=true');
        }
      } else {
        res.redirect('/users/login?error=true')
      }
    });
}

controller.show = (req, res) => {
  Post
    // find posts associated with user id
    .findAll()
    // render data in show
    .then((data) =>
      res.render('users/show', { posts: data }))
    .catch(err => console.log('ERROR:', err));
}

controller.destroy = (req, res) => {
  User
    .destroy(req.params.id)
    .then(() => {
      res
      .sendStatus(200)
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    });
};

module.exports = controller;
