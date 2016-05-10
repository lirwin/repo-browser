import Ember from 'ember'
const {inject, Route} = Ember

export default Route.extend({
  favoriteItems: inject.service(),

  model () {
    return {
      favorites: this.get('favoriteItems'),
      organizations: [
        {
          iconUrl: 'https://api.adorable.io/avatars/285/hello%40ciena.com',
          id: 1,
          name: 'Org 1'
        },
        {
          iconUrl: 'https://api.adorable.io/avatars/285/another%40ciena.com',
          id: 2,
          name: 'Org 2'
        }
      ]
    }
  },

  actions: {
    favoriteOrganization (organization) {
      this.get('favoriteItems').addItem(organization)
    },

    itemSelected (item) {
      console.info('Selected', item)
    }
  }
})
