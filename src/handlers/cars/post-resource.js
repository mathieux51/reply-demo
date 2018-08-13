const v4 = require('uuid/v4')
const { insertItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const car = { id: v4(), ...req.payload }
    const db = await req.db
    const cars = insertItem(db.cars, { index: db.cars.length, item: car })
    db.cars = cars
    return h.response({ data: car }).code(201)
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
