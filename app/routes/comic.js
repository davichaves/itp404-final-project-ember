import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    var comics = [];
    var comicID = params.comic_id;
    var url = 'https://xkcd-forum-api.herokuapp.com/comics/' + comicID;
    var myPromise = new RSVP.Promise(function(resolve) {
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
