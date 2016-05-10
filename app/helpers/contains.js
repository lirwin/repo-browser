import Ember from 'ember'
const {Helper} = Ember

export function contains ([items, item]) {
  return items.contains(item)
}

export default Helper.helper(contains)
