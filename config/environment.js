const _ = require('lodash')

module.exports = function (environment) {
  var ENV = {
    APP: {},
    baseURL: '/',
    EmberENV: {
      FEATURES: {}
    },
    environment,
    github: {
      publicAccessToken: process.env.GITHUB_PUBLIC_ACCESS_TOKEN
    },
    locationType: 'auto',
    modulePrefix: 'repo-browser',
    podModulePrefix: 'repo-browser/pods'
  }

  switch (environment) {
    case 'development':
      break

    case 'production':
      break

    case 'test':
      _.assign(ENV, {
        baseURL: '/',
        locationType: 'none'
      })

      _.assign(ENV.APP, {
        LOG_ACTIVE_GENERATION: false,
        LOG_VIEW_LOOKUPS: false,
        rootElement: '#ember-testing'
      })

      break
  }

  return ENV
}
