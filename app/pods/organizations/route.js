import Ember from 'ember'
const {inject, Route, RSVP} = Ember
import config from '../../config/environment'
const {github} = config

export default Route.extend({
  ajax: inject.service(),
  favoriteItems: inject.service(),

  model () {
    const remoteOrganizations = RSVP.all([
      this.get('ajax').request(`https://api.github.com/users/emberjs?access_token=${github.publicAccessToken}`)
    ])

    return RSVP.hash({
      favorites: this.get('favoriteItems'),
      localOrganizations: [
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
      ],
      remoteOrganizations
    })
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
