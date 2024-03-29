const core = require('@actions/core')
const github = require('@actions/github')

try {
  const nameToGreet = core.getInput('who')
  console.log(`really hello ${nameToGreet}`)
  const time = (new Date()).toTimeString()
  core.setOutput('time', time)
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`payload: ${payload}`)
} catch(err) {
  core.setFailed(err.message)
}
