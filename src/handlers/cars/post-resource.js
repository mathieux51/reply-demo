const v4 = require('uuid/v4')
const { insertItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const user = { id: v4(), ...req.payload }
    const db = await req.db
    const users = insertItem(db.users, { index: db.users.length, item: user })
    db.users = users
    return h.response({ data: user }).code(201)
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
