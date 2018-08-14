const Hapi = require('hapi')

const config = require('./config')
const api = require('./routes/api')
const db = require('./db')
let server

async function main() {
  try {
    server = new Hapi.Server(config.hapi)
    server.decorate('request', 'db', db)

    await server.register(api)
    console.log('Endoints mounted') // eslint-disable-line

    await server.start()
    console.log(`Server running at: ${server.info.uri}`) // eslint-disable-line
  } catch (err) {
    console.log(err) // eslint-disable-line
  }
}
main()

module.exports = server
