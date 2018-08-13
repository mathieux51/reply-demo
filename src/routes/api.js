const users = require('./users')
const cars = require('./cars')

const register = function registerRoutes(server, opts) {
  server.route(users)
  server.route(cars)
}

exports.plugin = {
  name: 'api',
  register
}
