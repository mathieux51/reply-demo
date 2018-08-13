const v4 = require('uuid/v4')
const { insertItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const demand = { id: v4(), ...req.payload }
    const db = await req.db
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