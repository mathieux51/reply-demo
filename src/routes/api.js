const users = require("./users")
// const articles = require('./articles')

const register = function registerRoutes(server, opts) {
  server.route(users)
  // server.route(articles)
}

exports.plugin = {
  name: "api",
  register
}
