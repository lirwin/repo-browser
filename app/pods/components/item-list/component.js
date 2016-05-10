import Ember from 'ember'
const {Component} = Ember
import {PropTypes} from 'ember-prop-types'

export default Component.extend({
  classNames: ['item-list'],
  tagName: 'ul',

  propTypes: {
    items: PropTypes.array
  },

  getDefaultProps () {
    return {
      items: []
    }
  }
})
