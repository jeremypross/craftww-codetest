const db = require('../config/db');

const Post = {};

Post.findAll = () => {
  return db.manyOrNone(`
    SELECT *
    FROM posts;`
  )
}

Post.create = (post, id) => {
  console.log('POST in model', post)
  return db.none(`
    INSERT INTO posts
    (title, image_url, author, user_id)
    VALUES
    ($1, $2, $3, $4);`,
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
      posts.author,
      posts.user_id
    FROM posts
    INNER JOIN users
    ON posts.user_id = users.id
    WHERE user_id = $1`,
    [user_id]
  );
}

Post.destroy = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1`,
    [id]
    );
}

module.exports = Post;
