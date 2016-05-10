import Ember from 'ember'
const {Helper} = Ember
import {contains} from './contains'

export function favoriteIconFor (params) {
  return contains(params) ? 'star' : 'star-o'
}

export default Helper.helper(favoriteIconFor)
