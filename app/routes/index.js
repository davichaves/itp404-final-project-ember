import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function() {
    var comics = [];
    var url = 'https://xkcd-forum-api.herokuapp.com/random';
    var myPromise = new RSVP.Promise(function(resolve) {
      for (var i = 0; i < 9; i++) {
        Ember.$.getJSON(url).then(function(result){
          comics.pushObject(result);
        });
      }
      resolve(comics);
    }).then(function (myComics) {
      return myComics;
    });
    return myPromise;
  }
});
