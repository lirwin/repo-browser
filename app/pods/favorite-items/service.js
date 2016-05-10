import Ember from 'ember'
const {Service} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import {contains} from '../../helpers/contains'

export default Service.extend({
  _items: null,

  @readOnly
  @computed('_items.[]')
  items (items) {
    return items
  },

  init () {
    this._super(...arguments)
    this._items = this._items || []
  },

  addItem (item) {
    const items = this.get('_items')

    if (contains([items, item])) {
      return
    }

    items.addObject(item)
  },

  addItems (items) {
    items.forEach((item) => {
      this.addItem(item)
    })
  },

  removeItem (item) {
    this.get('_items').removeObject(item)
  },

  removeItems (item) {
    this.get('_items').removeObjects(item)
  }
})
