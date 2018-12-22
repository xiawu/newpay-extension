require('ses/dist/ses-shim')
const { SES } = global.SES

const { doInpageInjection, localRequire } = require('./inpage-core')

const falseGlobal = {
  addEventListener: window.addEventListener.bind(window),
}
const falseProcess = {
  env: process.env,
}
const endowments = {
  // since we're stringifying the exported method instead of loading the bundle,
  // we need to provide the localRequire -- this is prolly bad tho
  require: localRequire,
  window: falseGlobal,
  console,
  global: falseGlobal,
  process: falseProcess,
}
const realm = SES.makeSESRootRealm()
const safeDoInpageInjection = realm.evaluate(`(${doInpageInjection})`, endowments)

global.safeDoInpageInjection = safeDoInpageInjection
safeDoInpageInjection()
