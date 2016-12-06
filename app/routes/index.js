import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function() {
    var comics = [{},{},{},{},{},{},{},{},{}];
    var url = 'https://xkcd-forum-api.herokuapp.com/random';
    var myPromise = new RSVP.Promise(function(resolve) {
      comics.forEach(function(element, index, theArray) {
        Ember.$.getJSON(url).then(function(result){
          theArray[index] = result;
        });
      });
      resolve(comics);
    }).then(function (myComics) {
      return myComics;
    });
    return myPromise;
  }
});
