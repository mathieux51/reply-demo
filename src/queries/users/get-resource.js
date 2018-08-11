module.exports = req => x => x.id === parseInt(req.params.id, 10)
// module.exports = req =>
//   SQL`select * from "user" where id=${req.params.id}`
