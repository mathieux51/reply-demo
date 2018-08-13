const { deleteResource } = require('../../queries/cars')
const { removeItem } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    const index = db.cars.findIndex(deleteResource(req))
    if (index === -1) throw { statusCode: 404, message: 'Not Found' }
    const cars = removeItem(db.cars, { index })
    db.cars = cars
    return h.response().code(204)
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
