import Ember from 'ember'
const {Route} = Ember

export default Route.extend({
  model () {
    const organizations = [
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

    const favorites = organizations.slice(1, 2)

    return {
      favorites,
      organizations
    }
  },

  actions: {
    favoriteOrganization (organization) {
      console.info('Favorite', organization)
    },

    itemSelected (item) {
      console.info('Selected', item)
    }
  }
})
