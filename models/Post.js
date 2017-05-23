const db = require('../config/db');

const Post = {};

Post.findAll = () => {
  return db.manyOrNone(`
    SELECT *
    FROM beers;`
  )
}

Post.create = (post, id) => {
  return db.none(`
    INSERT INTO posts
    (title, image_url, author, user_id)
    VALUES
    ($1, $2, $3);`,
    [post.title, post.image_url, post.author, id]
  );
}

Post.addFavorite = (id, userId) => {
  return db.none(`
    INSERT INTO posts
    (id, user_id)
    VALUES ($1, $2)`,
    [id, userId]
  );
}

Post.findById = (user_id) => {
  return db.manyOrNone(`
    SELECT
      posts.id,
      posts.title,
      posts.image_url,
      posts.author
    FROM posts
    INNER JOIN users
    ON posts.user_id = users.id
    WHERE users.id = $1`,
    [user_id]
  );
}

Post.delete = (post, user) => {
  return db.none(`
    DELETE FROM posts
    WHERE user_id = $1
    AND id = $2`,
    [user, post]
    );
}

module.exports = Post;
