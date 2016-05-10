import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'item-list',
  'Integration: ItemListComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{item-list}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
