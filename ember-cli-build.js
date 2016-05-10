/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      ignore: [
        'bower_components/**/*.js',
        'node_modules/**/*.js'
      ],
      optional: ['es7.decorators']
    },
    'ember-cli-mocha': {
      useLintTree: false
    }
  })

  return app.toTree()
}
