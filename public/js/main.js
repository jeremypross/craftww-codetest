$(document).ready(() => {
  console.log('js is linked');

  const searchResults  = $('#search-results-template').html();
  const searchTemplate = Handlebars.compile(searchResults);

  const findSubReddits = () => {
    $.ajax({
      type: 'GET',
      url: `https://www.reddit.com/r/OldSchoolCool/.json`
    })
    // render view with the json object through handlebars
    .then((data) => {
      console.log(data);
      $('#results').html(searchTemplate(data));
    })
    .catch(err => console.log('ERROR:', err));
  };

  findSubReddits();


});
