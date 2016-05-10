import Ember from 'ember'
const {Helper} = Ember

export function contains ([items, item]) {
  return items.findBy('id', item.id) !== undefined
}

export default Helper.helper(contains)
