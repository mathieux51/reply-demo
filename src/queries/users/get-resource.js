const SQL = require('sql-template-strings')

module.exports = req =>
  SQL`select * from "user" where id=${req.params.id}`
