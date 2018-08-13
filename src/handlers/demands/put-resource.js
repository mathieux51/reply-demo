const { putResource } = require('../../queries/demands')
const { updateObjectInArray } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    const res = (await req.db).demands.reduce(putResource(req), {})
    if (!res.hasOwnProperty('index'))
      throw { statusCode: 404, message: 'Not Found' }
    const demand = { ...res.cur, ...req.payload, id: res.cur.id }
    const demands = updateObjectInArray(db.demands, {
      index: res.index,
      item: demand
    })
    db.demands = demands
    return { data: demand }
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
