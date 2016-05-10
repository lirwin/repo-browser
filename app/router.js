import Ember from 'ember'
import config from './config/environment'
const {locationType} = config

const Router = Ember.Router.extend({
  location: locationType
})

Router.map(function () {
  this.route('organizations')
  this.route('favorites')
})

export default Router
