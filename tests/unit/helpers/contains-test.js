import {expect} from 'chai'
import {describe, it} from 'mocha'
import {contains} from 'repo-browser/helpers/contains'

describe('ContainsHelper', function () {
  it('returns true when items contains item', function () {
    const items = [1, 2]
    const item = 1
    const result = contains([items, item])
    expect(result).to.be.true
  })

  it('returns false when items does not contain item', function () {
    const items = [1, 2]
    const item = 3
    const result = contains([items, item])
    expect(result).to.be.false
  })
})
