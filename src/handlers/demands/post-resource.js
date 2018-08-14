const v4 = require('uuid/v4')
const { postResource } = require('../../queries/demands')
const { insertItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    if (db.users.find(postResource(req)))
      throw {
        statusCode: 400,
        message: 'This user does not exist'
      }
    const demand = { id: v4(), ...req.payload }
    const demands = insertItem(db.demands, {
      index: db.demands.length,
      item: demand
    })
    db.demands = demands
    return h.response({ data: demand }).code(201)
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
