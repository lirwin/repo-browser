import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'favorites-list',
  'Integration: FavoritesListComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{favorites-list}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
