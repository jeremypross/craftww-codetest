const fetch = require('node-fetch');

let Reddit = {};

Reddit.getPosts = () => {
  return fetch(`https://www.reddit.com/r/OldSchoolCool/new.json?jsonp`)
}

module.exports = Reddit;
