const { putResource, postResource } = require('../../queries/demands')
const { updateObjectInArray } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    if (!db.users.find(postResource(req)))
      throw {
        statusCode: 400,
        message: 'This user does not exist'
      }
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
