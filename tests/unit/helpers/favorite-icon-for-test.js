import {expect} from 'chai'
import {describe, it} from 'mocha'
import {favoriteIconFor} from 'repo-browser/helpers/favorite-icon-for'

describe('FavoriteIconForHelper', function () {
  it('returns expected value when items contain item', function () {
    const items = [1, 2]
    const item = 1
    const result = favoriteIconFor([items, item])
    expect(result).to.be.equal('star')
  })

  it('returns expected value when items does not contain item', function () {
    const items = [1, 2]
    const item = 3
    const result = favoriteIconFor([items, item])
    expect(result).to.be.equal('star-o')
  })
})
