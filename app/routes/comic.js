import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var comics = [];
    var comicID = params.comic_id;
    var url = 'https://xkcd-forum-api.herokuapp.com/comics/' + comicID;
    var myPromise = new Promise(function(resolve, reject) {
      Ember.$.getJSON(url).then(function(result){
        comics.pushObject(result);
      });
      resolve(comics);
    }).then(function (myComics) {
      return myComics;
    });
    return myPromise;
  }
});
