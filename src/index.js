const Hapi = require('hapi')
const inert = require('inert')
const vision = require('vision')
const hapiSwagger = require('hapi-swagger')

const package = require('../package')
const config = require('./config')
const api = require('./routes/api')
const db = require('./db')
let server

const swaggerOptions = {
  info: {
    title: 'Reply-demo API Documentation',
    version: package.version
  }
}
;(async function() {
  try {
    server = new Hapi.Server(config.hapi)
    server.decorate('request', 'db', db)

    await server.register(api)
    console.log('Endoints mounted') // eslint-disable-line

    await server.register([
      inert,
      vision,
      {
        plugin: hapiSwagger,
        options: swaggerOptions
      }
    ])
    // eslint-disable-next-line
    console.log(
      `Swagger: http://${config.hapi.host}:${config.hapi.port}/documentation`
    )

    await server.start()
    console.log(`Server running at: ${server.info.uri}`) // eslint-disable-line
  } catch (err) {
    console.log(err) // eslint-disable-line
  }
})()

module.exports = server
