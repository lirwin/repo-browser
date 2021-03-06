import Ember from 'ember'
const {assign, run} = Ember
import Application from '../../app'
import config from '../../config/environment'
const {APP} = config

export default function startApp (attrs) {
  let application

  let attributes = assign({}, APP)
  attributes = assign(attributes, attrs) // use defaults, but you can override;

  run(() => {
    application = Application.create(attributes)
    application.setupForTesting()
    application.injectTestHelpers()
  })

  return application
}
