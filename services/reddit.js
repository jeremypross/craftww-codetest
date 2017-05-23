const fetch = require('node-fetch');

let Reddit = {};

Reddit.getPosts = () => {
  return fetch(`https://www.reddit.com/r/OldSchoolCool/top/.json`)
}

module.exports = Reddit;
