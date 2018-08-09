const SQL = require('sql-template-strings')

module.exports = req =>
  SQL`select * from "articles" where id=${req.params.id}`
