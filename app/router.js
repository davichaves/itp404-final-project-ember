import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('comic', { path: '/:comic_id' });
  this.route('about');
  this.route('random');
});

export default Router;
