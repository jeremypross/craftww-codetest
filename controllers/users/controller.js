const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

const User = require('../../models/User');

const controller = {};


// controller.index = (req, res) => {
//   User
//     .findAll()
//     .then((data) => {
//       res.json({ user: data })
//     })
//     .catch((err) => console.log('ERROR', err));
// }

controller.new = (req, res) => {
  // render views/users/new.ejs
  res.render('users/new');
}

controller.create = (req, res) => {
  User
    .create(req.body.user)
    .then(() => res.redirect('/users/new'))
    .catch((err) => console.log('ERROR', err));
};

controller.login = (req, res) => {
  const error = {};
  if (req.query.error) error.message = 'Incorrect Login Credentials!';
  // send user back to login page
    res.render('users/login', { message: error.message });
}

controller.authorizeToken = (req, res) => {
  jwt.verify(req.headers.authorization, 'taco cat', (err, decoded) => {
    if (err) {
      res
        .status(401)
        .json({ error: err.message });
    } else {
      res
        .status(200)
        console.log("TOKEN AUTHORIZED!!");
        // find saved items to dashboard here
    }
  })
}

controller.process_login = (req, res) => {
  User
    .findByEmail(req.body.user.email)
    .then((user) => {
      // if user exists in database
      if (user) {
        const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        // and password matches hashed passeword
        if (isAuthed) {
          // create web token
          const token = jwt.sign({
            email: user.email,
            user_id: user.id
          }, 'taco cat', { expiresIn: '7d' });
            // response includes token and user_id
            res.json({ token: {
                token: token,
                user_id: user.id,
                loggedIn: true
            }
          });
        } else {
          res.sendStatus(401)
        }
      } else {
        res.status(404)
        .json({ error: 'No user found!' });
      }
    });
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
