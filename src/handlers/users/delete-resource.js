const { deleteResource } = require('../../queries/users')
const { removeItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    const index = db.users.findIndex(deleteResource(req))
    if (index === -1) throw { statusCode: 404, message: 'Not Found' }
    if (db.demands.find(demand => demand.userId === index))
      throw {
        statusCode: 400,
        message:
          'Cannot remove a user for which at one least one booking exists'
      }
    const users = removeItem(db.users, { index })
    db.users = users
    return h.response().code(204)
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
