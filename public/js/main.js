$(document).ready(() => {
  console.log('js is linked');

  const searchResults  = $('#search-results-template').html();
  const searchTemplate = Handlebars.compile(searchResults);
  const search = $('.search');

  const findSubReddits = () => {

    $.ajax({
      type: 'GET',
      url: `https://www.reddit.com/r/OldSchoolCool/top/.json`,
      dataType: 'json'
    })
      // render view with the json object through handlebars
    .then((data) => {
      console.log(data);
      $('#search-results').html(searchTemplate(data));
    })
    .catch(err => console.log('ERROR:', err));
  };
  findSubReddits();
  // search.on('submit', findSubReddits);

});
