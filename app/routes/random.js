import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    var comics = [];
    var url = 'https://xkcd-forum-api.herokuapp.com/random';
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
