const Post = require('../../models/Post');
const Reddit = require('../../services/Reddit');

const controller = {};

controller.index = (req, res) => {
  Post
    .findAll()
    .then((data) => {
      res.render('posts/index', { data: data })
    })
    .catch((err) => console.log('ERROR:', err));
}

controller.search = (req, res) => {
  Reddit
    .getPosts()
    .then(r => r.json())
    .then((data) => {
      res.render('posts/index', { data: data })
    })
    .catch((err) => console.log('ERROR', err));
}

controller.create = (req, res) => {
  Post
    .create(req.body.post)
    .then((data) => {
      res.redirect('/posts')
    })
    .catch((err) => console.log('ERROR', err));
}

controller.favorite = (req, res) => {
  Post
    .addFavorite(req.body.post.id, req.session.user.id)
    .then(() => res.redirect('/posts'))
    .catch((err) => console.log('ERROR', err));
}

controller.delete = (req, res) => {
  Post
    .delete(req.params.id, req.session,user.id)
    .then(() => {
      res.redirect(`/users/${req.session.user.id}/posts`)
    })
    .catch((err) => console.log('ERROR', err));
}

module.exports = controller;
