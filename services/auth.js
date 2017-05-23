const AuthService = {};

AuthService.restrict = (req, res, next) => {
  if (req.session.isAuthenticated) {
    // next() is a callback that tells express to move on from Authservice.restrict and go to controller method
    next();
  } else {
    res.redirect('/users/login');
  }
}

module.exports = AuthService;
