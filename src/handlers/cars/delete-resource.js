const { deleteResource } = require('../../queries/cars')
const { removeItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    const index = db.users.findIndex(deleteResource(req))
    if (index === -1) throw { statusCode: 404, message: 'Not Found' }
    const users = removeItem(db.users, { index })
    db.users = users
    return h.response().code(204)
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
