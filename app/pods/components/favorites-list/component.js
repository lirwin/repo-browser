import Ember from 'ember'
const {Component, inject} = Ember
import computed, {readOnly} from 'ember-computed-decorators'

export default Component.extend({
  favoriteItems: inject.service(),

  @readOnly
  @computed('favoriteItems.items')
  favorites (items) {
    return items
  }
})
