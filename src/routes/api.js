const users = require('./users')
const cars = require('./cars')
const demands = require('./demands')

const register = function registerRoutes(server, opts) {
  server.route(users)
  server.route(cars)
  server.route(demands)
}

exports.plugin = {
  name: 'api',
  register
}
