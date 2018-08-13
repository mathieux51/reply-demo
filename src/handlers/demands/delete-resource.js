const { deleteResource } = require('../../queries/demands')
const { removeItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    const index = db.demands.findIndex(deleteResource(req))
    if (index === -1) throw { statusCode: 404, message: 'Not Found' }
    const demands = removeItem(db.demands, { index })
    db.demands = demands
    return h.response().code(204)
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
