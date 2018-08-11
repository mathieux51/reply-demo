const { putResource } = require('../../queries/users')
const { updateObjectInArray } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    const res = (await req.db).users.reduce(putResource(req), {})
    if (!res.hasOwnProperty('index'))
      throw { statusCode: 404, message: 'Not Found' }
    const user = { ...res.cur, ...req.payload, id: res.cur.id }
    const users = updateObjectInArray(db.users, {
      index: res.index,
      item: user
    })
    db.users = users
    return { data: user }
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
